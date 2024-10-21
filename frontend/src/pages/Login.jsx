import { Alert, Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAccountContext } from "../context/AccountContext";
import { useRecoilState} from "recoil";
import { alertState } from "../store/atoms/alertAtom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id, setId } = useAccountContext();
  const navigate = useNavigate();
  const [alertAtom,setalertatom] = useRecoilState(alertState)


  useEffect(() => {
    if (id !== null) {
      setalertatom({
        message:"successfully logged in!",
        statusCode:200,
        showAlert:true
      })
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}user/login`, {
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        setId(res.data.id);
        setalertatom({
          message:"successfully logged in!",
          statusCode:200,
          showAlert:true
        })
        navigate("/dashboard");
      })
      .catch((err) => {
        setalertatom({
          message:"sorry an error occured while logging in!",
          statusCode:404,
          showAlert:true
        })
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-4 h-full w-full items-center justify-center mt-50">
      <div className="bg-black">
      <Alert alertatom ={alertAtom} setalertatom={setalertatom}/>
    </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-[300px] flex-col gap-4 bg-gray-600 p-4 rounded-lg"
      >
        <div>
          <div className="mb-2 block">
            <FloatingLabel
              variant="standard"
              label="Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <FloatingLabel
              variant="standard"
              label="Your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="text-white" type="submit">
          Submit
        </Button>
      </form>
      <Link to="/signup" className="text-white text-sm font-semibold">
        Don't have an account? Sign up
      </Link>
    </div>
    
  );
};

export default Login;
