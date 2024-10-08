import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveCheckoutInfo } from "../redux/user/actions";
import { CheckoutFormData } from "../redux/user/types";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Quality from "../components/Quality";
import InitialSection from "../components/InitialSection";
import { useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { clearCart } from "../redux/cart/actions";

const Checkout: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const checkoutInfo = useSelector(
    (state: RootState) => state.userReducer.checkoutInfo
  );

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubtotal(total);
  }, [products]);

  const [savedMessageVisible, setSavedMessageVisible] = useState(false);

  const fetchAddress = async (zipCode: string) => {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    const data = await response.json();
    return data;
  };

  const onSubmit = (data: CheckoutFormData) => {
    dispatch(saveCheckoutInfo(data));
    setSavedMessageVisible(true);
    dispatch(clearCart());
  };

  const formatZipCode = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 5) {
      return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`;
    } else {
      return cleaned;
    }
  };

  const handleZipCodeChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const zipCode = formatZipCode(event.target.value);
    event.target.value = zipCode;
    register("zipCode").onChange(event);

    if (zipCode.length === 9) {
      const addressData = await fetchAddress(zipCode);
      if (!addressData.erro) {
        setValue("streetAddress", addressData.logradouro);
        setValue("townCity", addressData.localidade);
        setValue("province", addressData.uf);
        setValue("countryRegion", "Brasil");
      }
    }
  };

  const validateName = (value: string) => {
    return !/\d/.test(value);
  };

  return (
    <div>
      <Navbar />
      <InitialSection pageName="Checkout" />

      <div className="flex flex-col md:flex-row font-poppins select-none justify-center items-start">
        <form
          className="flex flex-col mt-20 md:mr-20 w-full md:w-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className="font-semibold text-4xl text-black mb-10">
            Billing details
          </section>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mr-2">
              <label className="font-medium text-1xl">First Name</label>
              <input
                {...register("firstName", {
                  required: true,
                  validate: validateName,
                })}
                type="text"
                className={`border-grayText border-1px outline-none rounded-md max-h-12 p-4 w-full md:max-w-56 
              ${errors.firstName ? "border-red-500" : ""}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && errors.firstName.type === "validate" && (
                <span className="text-red-500 max-w-56">
                  First name cannot contain numbers.
                </span>
              )}
              {errors.firstName && errors.firstName.type === "required" && (
                <span className="text-red-500">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="flex flex-col mb-10">
              <label className="font-medium text-1xl">Last Name</label>
              <input
                {...register("lastName", {
                  required: true,
                  validate: validateName,
                })}
                type="text"
                className={`border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-56 border-1px ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && errors.lastName.type === "validate" && (
                <span className="text-red-500 max-w-56">
                  Last name cannot contain numbers.
                </span>
              )}
              {errors.lastName && errors.lastName.type === "required" && (
                <span className="text-red-500">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>
          <label className="font-medium text-1xl">
            Company Name (Optional)
          </label>
          <input
            {...register("companyName")}
            type="text"
            className="border-grayText border-1px outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-5"
            placeholder="Enter your company name"
          />
          <label className="font-medium text-1xl">ZIP Code</label>
          <input
            {...register("zipCode", { required: true })}
            onChange={handleZipCodeChange}
            type="text"
            className={`border-grayText border-1px outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2 ${
              errors.zipCode ? "border-red-500" : ""
            }`}
            placeholder="Enter your ZIP code"
          />
          {errors.zipCode && (
            <span className="text-red-500 mb-2">
              Please enter a valid ZIP code.
            </span>
          )}
          <label className="font-medium text-1xl">Country / Region</label>
          <input
            {...register("countryRegion", { required: true })}
            type="text"
            disabled
            className={
              "border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2 border-1px"
            }
            placeholder="Enter your country/region"
          />
          <label className="font-medium text-1xl">Street address</label>
          <input
            {...register("streetAddress", { required: true })}
            type="text"
            disabled
            className="border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2 border-1px"
            placeholder="Enter your street address"
          />
          <label className="font-medium text-1xl">Town / City</label>
          <input
            {...register("townCity", { required: true })}
            type="text"
            disabled
            className="border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2 border-1px"
            placeholder="Enter your town/city"
          />
          <label className="font-medium text-1xl">Province</label>
          <input
            {...register("province", { required: true })}
            type="text"
            disabled
            className="border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2 border-1px"
            placeholder="Enter your province"
          />
          <label className="font-medium text-1xl">Add-on address</label>
          <input
            {...register("addOnAddress")}
            type="text"
            className="border-grayText border-1px outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-2"
            placeholder="Enter your add-on address"
          />
          <label className="font-medium text-1xl">Email address</label>
          <input
            {...register("email", {
              required: true,
              validate: (value) =>
                value.endsWith(".com") || value.endsWith(".com.br"),
            })}
            type="email"
            className={`border-grayText border-1px outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px
           ${errors.email ? "border-red-500 mb-0" : ""}`}
            placeholder="Enter your email address"
          />
          {errors.email && errors.email.type === "validate" && (
            <span className="text-red-500 mb-2">
              Your email needs to end with ".com" or ".com.br"
            </span>
          )}
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500 mb-2">Please enter your email.</span>
          )}
          <input
            type="text"
            className="border-grayText outline-none rounded-md max-h-12 p-4 w-full md:max-w-453px mb-10 border-1px mt-5"
            placeholder="Additional information"
          />
          <button
            type="submit"
            className="border-2 rounded-lg bg-white border-black text-black p-5 max-w-80 hover:bg-black hover:text-white mb-10"
          >
            Place order
          </button>
        </form>
        <div className="flex flex-col mt-20">
          <div className="flex flex-row mb-6 justify-between">
            <div className="flex flex-col">
              <section className="text-2xl font-medium text-black">
                Product
              </section>
              {products.map((product) => (
                <div key={product.id} className="flex flex-row mb-2">
                  <section className="text-1xl font-medium text-grayText mr-5">
                    {product.name}
                  </section>
                  <section className="text-1xl font-medium text-black mr-2">
                    {product.quantity}x
                  </section>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <section className="text-2xl font-medium text-black">
                Subtotal
              </section>
              {products.map((product) => (
                <div key={product.id} className="flex flex-row mb-2">
                  <section className="text-1xl font-normal text-black">
                    Rs. {product.price * product.quantity}
                  </section>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex flex-row items-center justify-between">
              <section className="text-1xl font-normal text-black">
                Subtotal
              </section>
              <section className="text-1xl font-normal text-black">
                Rs. {subtotal}
              </section>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <section className="text-1xl font-normal text-black">
                Total
              </section>
              <section className="text-yellowPrimary text-2xl font-bold">
                Rs. {subtotal}
              </section>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-300 pt-5 max-w-lg">
            <div className="mb-5">
              <label className="text-1xl font-medium text-black">
                Payment Method
              </label>
              <section className="text-sm text-gray-500 mt-2">
                Choose your preferred payment method.
              </section>
            </div>
            <div className="mb-5 flex flex-col max-w-80">
              <div className="flex flex-row items-center">
                <input
                  type="radio"
                  id="directBankTransfer"
                  name="paymentMethod"
                  value="directBankTransfer"
                  className="mr-2"
                />
                <label
                  htmlFor="directBankTransfer"
                  className="text-1xl font-medium text-gray-500"
                >
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex flex-row items-center mt-2">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  className="mr-2"
                />
                <label
                  htmlFor="cashOnDelivery"
                  className="text-1xl font-medium text-gray-500"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
            <section className="text-sm text-gray-500 mt-5">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </section>
            {savedMessageVisible && (
              <div className="mt-4 mb-4">
                <p className="font-medium text-black">Informações salvas:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>{`First Name: ${checkoutInfo.firstName}`}</li>
                  <li>{`Last Name: ${checkoutInfo.lastName}`}</li>
                  <li>{`Company Name: ${checkoutInfo.companyName || "-"}`}</li>
                  <li>{`ZIP Code: ${checkoutInfo.zipCode}`}</li>
                  <li>{`Country / Region: ${checkoutInfo.countryRegion}`}</li>
                  <li>{`Street Address: ${checkoutInfo.streetAddress}`}</li>
                  <li>{`Town / City: ${checkoutInfo.townCity}`}</li>
                  <li>{`Province: ${checkoutInfo.province}`}</li>
                  <li>{`Add-on Address: ${
                    checkoutInfo.addOnAddress || "-"
                  }`}</li>
                  <li>{`Email Address: ${checkoutInfo.email}`}</li>
                  <li className="text-green-700 text-2xl font-semibold mt-5">
                  Your order has been received and will be prepared for shipping. 
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Quality />
      <Footer />
    </div>
  );
};
export default Checkout;
