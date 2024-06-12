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
        <Footer />
      </div>
    </div>
  );
}

export default Home;
