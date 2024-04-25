import { useCookies } from 'react-cookie'; 
export default function AdminLogOut()
{
    const [cookies, setCookie, removeCookie] = useCookies(['connectify']);
    removeCookie("id");
    alert("Logout Successfull");
    window.location = "/";
}