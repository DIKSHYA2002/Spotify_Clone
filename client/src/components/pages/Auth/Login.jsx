import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await axios.post("http://localhost:1000/user/login", {
        email,
        password,
      });
      console.log(res);
      if (res.data.token) {
        alert(res.data.message);
        console.log(res.data);
        localStorage.setItem("id", res.data.user._id);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="logo">
        <img
          src="https://th.bing.com/th/id/R.5caffed066a31aebbde3508d2be778a7?rik=noIH9ykO9%2b81Ag&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f5%2fc%2fa%2ff%2f141490005811489798026274.spotify-logo-horizontal-white-rgb.png&ehk=K1YBRIzKhYr1u3XwtUUR9%2bZ54Hq93fzy0Rup098WCU0%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="logo-spotify"
        />
      </div>
      <div className="container" style={{width:"50%"}}>
        <form className="registration-form" onSubmit={handleSubmit}>
          <h1 className="text-center">Log in to Spotify</h1>
          <label className="password">
            <span className="label-text">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="password">
            <span className="label-text">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="text-center">
            <input className="submit-button" type="submit" value="login" />
          </div>
          <label className="col-one-half" style={{color:"white"}}>
            <Link to="/register" className="label-text" >
              Don't have an account? Register
            </Link>
          </label>
        </form>
      </div>
    </>
  );
};

export default Login;
