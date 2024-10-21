  import "./App.css";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignUp from "./pages/SignUp";
  import Login from "./pages/Login";
  import Home from "./pages/Home";
  import Error from "./pages/Error";
  import Dashboard from "./pages/Dashboard";
  import AccountProvider from "./context/AccountContext";
import { RecoilRoot } from "recoil";

  function App() {
    return (
      <div className="App">
        <AccountProvider>
          <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
          </RecoilRoot>
        </AccountProvider>
      </div>
    );
  }

  export default App;
