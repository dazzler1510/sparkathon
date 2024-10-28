import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming App.css handles all the styling from the old code
import IconUser from '../assets/user.svg';
import IconUserFill from '../assets/user-fill.svg';
import IconLockFill from '../assets/lock-fill.svg';
import useLocalStorage from '../hooks/useLocalStorage';

function LoginPage() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [hidden, setHidden] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData, clear] = useLocalStorage("SAVED");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setMail(data.mail);
      setPass(data.pass);
      setChecked(true);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail === "" || pass === "") {
      setHidden(true);
      return;
    } else {
      setHidden(false);
    }

    if (checked) {
      setData(() => ({
        mail: mail,
        pass: pass,
      }));
    } else {
      clear();
    }
    
    // Navigate to the dashboard page after login
    navigate("/dashboard");
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="bg-abstract bg-center bg-cover w-full h-screen flex flex-col items-center justify-center">
      <div className="content relative w-80 bg-gray-50/70 rounded-3xl flex flex-col items-center px-8 shadow-md">
        <div className="avatar absolute bg-blue-950 p-3 rounded-full -top-[18%]">
          <img className="w-16 invert" src={IconUser} alt="Avatar" />
        </div>

        <div className="my-2 mt-[25%] flex w-full">
          <div className="bg-blue-950 aspect-square">
            <img className="w-10 p-2.5 invert" src={IconUserFill} alt="User" />
          </div>
          <input
            className="text-base text-white p-1.5 flex-1 font-mono outline-0 bg-slate-600"
            size="15"
            type="email"
            name="mail"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Username"
          />
        </div>

        <div className="m-2 flex w-full">
          <div className="bg-blue-950">
            <img className="w-10 p-2.5 invert" src={IconLockFill} alt="Lock" />
          </div>
          <input
            className="text-base text-white p-1.5 flex-1 font-mono outline-0 bg-slate-600"
            size="15"
            type="password"
            name="pass"
            id="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
          />
        </div>

        {hidden && <p className="text-sm text-red-700 self-start m-0 p-0">Username and Password are required</p>}

        <div className="flex w-full justify-between text-xs font-medium font-sans my-7">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="save"
              id="save"
              onChange={handleCheck}
              checked={checked ? true : false}
            />
            <span className="m-0.5">Remember me</span>
          </div>
          <div className="italic">Forgot Password?</div>
        </div>
      </div>

      <button
        className="w-56 p-2 rounded-b-3xl font-extrabold bg-gradient-to-b from-transparent from-0% to-20% to-gray-50/70 shadow-md"
        type="submit"
        onClick={handleSubmit}
        value={checked}
      >
        LOGIN
      </button>

      <div className="fixed bg-slate-900 w-full p-3 bottom-0 text-center text-gray-100">
        <p>Developed By <a className="text-violet-500" href="https://rameesjahan.me">Ramees Jahan</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
