import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function VerifyLogin(){
    let [cookie, setCookie, removeCookie] = useCookies(['connectify']);
    let navigate = useNavigate();
    let SendToLogin = function () {
        useEffect(() => {
            navigate("/");
        });
    }
    console.log(cookie['id']);
    if(cookie['id'] === undefined){
        SendToLogin();
    }
}