import NetflixImage from "../assets/images/netflix-bg-image1.jpg";
import NetflixLogo from "../assets/images/Logonetflix.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen text-white">
      <div className="fixed inset-0 w-full h-full">
        <img className="w-full h-full object-cover" src={NetflixImage} alt="" />
      </div>

      <div className="bg-black/65 absolute inset-0 z-20">
        <img
          className="absolute top-2 left-2 w-[35%] md:w-3xs"
          src={NetflixLogo}
          alt="logo"
        />

        <div className="absolute top-0 right-2 flex items-center">
          <button className="py-2 px-4 m-4 rounded bg-white/30 hover:bg-white/20">
            English
          </button>
          <button
            onClick={() => navigate("/in")}
            className="py-2 px-4 m-4 rounded bg-[#E50914] hover:bg-[#be0912]"
          >
            Sign In
          </button>
        </div>

        <div className="absolute top-28 w-full text-center px-4">
          <h1 className="font-extrabold md:text-5xl text-4xl">
            Unlimited movies, shows, and more
          </h1>
          <p className="text-lg font-semibold py-3">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="text-md pb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center">
            <input
              className="border w-[60%] p-3 rounded bg-white/20"
              type="text"
              placeholder="Enter Email"
            />
            <button className="py-3 px-6 rounded bg-[#E50914] hover:bg-[#be0912] font-bold text-xl">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
