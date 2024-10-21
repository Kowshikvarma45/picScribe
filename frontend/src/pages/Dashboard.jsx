import React, { useEffect } from "react";
import Slider from "../components/dashboard/Slider";
import ImageInput from "../components/dashboard/ImageInput";
import { useAccountContext } from "../context/AccountContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { useRecoilState } from "recoil";
import { alertState } from "../store/atoms/alertAtom";
import { Alert } from "flowbite-react";

const Dashboard = () => {
  const { id } = useAccountContext();
  const navigate = useNavigate();
  const [alertatom,setalertatom] = useRecoilState(alertState)

  useEffect(() => {
    if (id === null) {
      setalertatom({
        message:"sorry your are not logged in redirecting to signup page",
        statusCode:0,
        showAlert:true
      })
      navigate("/");
    }
    else {
      setalertatom({
        message:"successfully logged in",
        statusCode:200,
        showAlert:true
      })

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <Header />
      <Alert alertatom ={alertatom} setalertatom={setalertatom}/>
      <div className="mt-16 h-screen flex gap-4 md:flex-row flex-col items-center justify-center gap-10 md:gap-[150px]">
        <ImageInput />
        <Slider />
      </div>
    </>
  );
};

export default Dashboard;
