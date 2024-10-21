import React from "react";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context/AccountContext";
import { Alert, Button } from "flowbite-react";
import { useSetRecoilState } from "recoil";
import { alertState } from "../../store/atoms/alertAtom";

const Header = () => {
  const { setId } = useAccountContext();
  const navigate = useNavigate();
  const setalertatom = useSetRecoilState(alertState)

  const handleLogout = () => {
    setId(null);
    setalertatom({
      message:"logged out",
      statusCode:200,
      showAlert:true
    })
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://github.com/leocodeio"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./favicon.ico" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </nav>
    <div className="flex flex-col justify-items-end">
      <Alert/>
    </div>
    </div>
  );
};

export default Header;
