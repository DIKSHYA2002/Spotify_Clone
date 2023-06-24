import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();
  //form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != cpassword) {
      alert("Passwords do not match");
    } else {
      try {
        const res = await axios.post("http://localhost:1000/user/add", {
          name,
          email,
          password,
          gender,
        });
        if (res.data.user) {
          alert("Registered Successfully");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
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

      <div className="container">
        <h1 className="text-center">Register Form</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label className="col-one-half">
            <span className="label-text"> Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="col-one-half">
            <span className="label-text">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className="label-text">Gender</span>
            <input
              type="tel"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
          <label className="password">
            <span className="label-text">Confirm Password</span>
            <input
              type="password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </label>
          <div className="text-center">
            <input className="submit-button" type="submit" />
          </div>
        </form>
        <br></br>
        <br />
        <br />
      </div>
    </>
  );
};

export default Register;
