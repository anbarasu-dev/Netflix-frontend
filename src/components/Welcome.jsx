import NetflixImage from "../assets/images/netflix-bg-image1.jpg";
import NetflixLogo from "../assets/images/Logonetflix.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen text-white">
      <div className="fixed inset-0">
        <img className="w-full h-full object-cover" src={NetflixImage} alt="" />
      </div>

      <div className="bg-black/55 absolute inset-0 z-20">
        <img
          className="absolute top-2 left-2 w-[35%]"
          src={NetflixLogo}
          alt=""
        />

        <div className="absolute top-0 right-2 flex items-center">
          <button className="py-2 px-4 bg-white/30 m-4 rounded">English</button>
          <button
            onClick={() => navigate("/")}
            className="py-2 px-4 bg-[#E50914] hover:bg-[#be0912] m-4 rounded"
          >
            Sign Out
          </button>
        </div>

        <div className="absolute top-28 text-center w-full">
          <h1 className="font-extrabold md:text-5xl text-4xl p-2">
            Welcome to Netflix!
          </h1>
          <p className="text-lg p-3">Enjoy unlimited streaming 🎬🔥</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
