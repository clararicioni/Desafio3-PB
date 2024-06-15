import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CarouselSection from "../components/CarouselSection";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="font-poppins select-none">
        <div
          className="flex items-center justify-center min-h-screen relative"
          style={{
            backgroundImage: `url('home-bg1.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="w-full h-full flex items-center justify-end mr-40 mt-24">
            <div className="bg-yellowBackground rounded-lg p-8 flex-col">
              <div className="font-semibold text-1xl tracking-widest text-darkBlack mt-5">
                New Arrival
              </div>
              <div className="text-52px font-bold max-w-400px text-yellowPrimary leading-tight mt-2">
                Discover Our New Collection
              </div>
              <div className="font-medium text-18px max-w-546px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </div>
              <Link to="/shop" target="_blank">
                <button
                  className="font-bold text-1xl text-white p-5 bg-yellowPrimary hover:opacity-75 mt-10"
                  style={{ width: "222px", height: "74px" }}
                >
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <section className="text-darkBlack text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12 flex justify-center">
            Browse The Range
          </section>
          <section className="text-darkGrayText2 text-base sm:text-lg lg:text-xl font-normal flex justify-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </section>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-8 sm:mt-10 lg:mt-14">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
            <img src="dining.png" alt="Dining" className="w-full h-auto" />
            <section className="text-darkBlack text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-5 lg:mt-7 font-semibold">
              Dining
            </section>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
            <img src="living.png" alt="Living" className="w-full h-auto" />
            <section className="text-darkBlack text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-5 lg:mt-7 font-semibold">
              Living
            </section>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
            <img src="bedroom.png" alt="Bedroom" className="w-full h-auto" />
            <section className="text-darkBlack text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-5 lg:mt-7 font-semibold">
              Bedroom
            </section>
          </div>
        </div>

        <section className="text-40px font-bold flex justify-center mt-20 text-darkGrayText">
          Our Products
        </section>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <ProductCard
            id={1}
            name="Syltherine"
            price={"2.500.000"}
            description="Stylish cafe chair"
            imageUrl="syltherine.png"
            oldPrice={"3.500.000"}
          />
          <ProductCard
            id={2}
            name="Leviosa"
            price={"2.500.000"}
            description="Slytherin house merchandise."
            imageUrl="leviosa.png"
            oldPrice={null}
          />
          <ProductCard
            id={3}
            name="Slytherin"
            price={"7.000.000"}
            description="Slytherin house merchandise."
            imageUrl="lolito.png"
            oldPrice={"14.000.000"}
          />
          <ProductCard
            id={4}
            name="Slytherin"
            price={"500.000"}
            description="Slytherin house merchandise."
            imageUrl="respira.png"
            oldPrice={null}
          />
          <ProductCard
            id={5}
            name="Grifo"
            price={"1.500.000"}
            description="Slytherin house merchandise."
            imageUrl="grifo.png"
            oldPrice={null}
          />
          <ProductCard
            id={6}
            name="Muggo"
            price={"150.000"}
            description="Slytherin house merchandise."
            imageUrl="muggo.png"
            oldPrice={null}
          />
          <ProductCard
            id={7}
            name="Pingky"
            price={"7.000.000"}
            description="Slytherin house merchandise."
            imageUrl="pingky.png"
            oldPrice={"14.000.000"}
          />
          <ProductCard
            id={7}
            name="Potty"
            price={"500.000"}
            description="Slytherin house merchandise."
            imageUrl="potty.png"
            oldPrice={null}
          />
        </div>
        <div className="flex justify-center">
          <Link to="/shop" target="_blank">
            <button
              className="flex justify-center items-center font-bold text-1xl text-yellowPrimary p-5 outline-1 outline hover:opacity-75 mt-10"
              style={{ width: "245px", height: "48px" }}
            >
              Show More
            </button>
          </Link>
        </div>
        <CarouselSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
