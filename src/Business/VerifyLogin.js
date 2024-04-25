import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin(){
    let [cookie, setCookie, removeCookie] = useCookies(['connectify']);
    let navigate = useNavigate();
    let SendToLogin = function () {
        useEffect(() => {
            navigate("/business-login");
        });
    }
    if(cookie['id'] === undefined){
        SendToLogin();
    }
}