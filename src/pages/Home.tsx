import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="font-poppins">
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
        <Footer />
      </div>
    </div>
  );
}

export default Home;
