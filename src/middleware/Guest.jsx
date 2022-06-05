import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

function Guest({ children }) {
  const auth = useRecoilValue(authenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.check) {
      navigate("dashboard");
    }
  }, []);
  return <Outlet />;
}

export default Guest;
