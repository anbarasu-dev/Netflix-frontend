import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NetflixImage from "../assets/images/netflix-bg-image1.jpg";
import NetflixLogo from "../assets/images/Logonetflix.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!email || !pass) {
      setMsg("Enter Email & Password");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email,
        password: pass,
      });

      if (data.success) {
        navigate("/welcomepage");
      } else {
        setMsg(data.message);
      }
    } catch (error) {
      setMsg("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0">
        <img className="w-full h-full object-cover" src={NetflixImage} alt="" />
        <img
          className="absolute top-2 left-2 w-[35%]"
          src={NetflixLogo}
          alt=""
        />
      </div>

      <div className="bg-black/75 rounded-md md:w-[30%] w-[80%] p-5 mx-auto mt-60 text-white z-20 absolute left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-3xl pb-4">Sign In</h1>

        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="border w-full p-3 rounded mb-3 bg-gray-700"
          />

          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            className="border w-full p-3 rounded bg-gray-700"
          />

          {msg && <p className="mt-2 text-red-400">{msg}</p>}

          <button
            type="submit"
            className="mt-4 bg-[#E50914] hover:bg-[#be0912] w-full p-3 rounded font-semibold"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
