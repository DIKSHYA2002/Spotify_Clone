import React,{useState} from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import axios from "axios";
import "./Login.css"
const Login = () => {
  const [auth,setAuth]=useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //form function

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
      if(res && res.data.success)
      {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
      });
      localStorage.setItem('auth',JSON.stringify(res.data));
        navigate("/");
      }
      else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('something went wrong');
    }
  };
  return (
    <>
    <div className="logo">
      <img src="https://th.bing.com/th/id/R.5caffed066a31aebbde3508d2be778a7?rik=noIH9ykO9%2b81Ag&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f5%2fc%2fa%2ff%2f141490005811489798026274.spotify-logo-horizontal-white-rgb.png&ehk=K1YBRIzKhYr1u3XwtUUR9%2bZ54Hq93fzy0Rup098WCU0%3d&risl=&pid=ImgRaw&r=0" alt="" className='logo-spotify'/>
    </div>
      <div className="container">
       
          <form className="registration-form" onSubmit={handleSubmit}>
          <h1 className="text-center">Log in to Spotify</h1>
            <label className="password">
              <span className="label-text">Email</span>
              <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label className="password">
              <span className="label-text">Password</span>
              <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>

            <div className="text-center">
            <input className="submit-button" type='submit' value='login'/>
            </div>
            <label className="col-one-half">
              <Link to='/forgot-password' className="label-text">Forgot-password?</Link>
            </label>
          </form>
</div>
</>
  )
}

export default Login