import { useNavigate } from "react-router";
import './sign-up.css';
// import { Login } from "./Login";


export const LoginBtn = () => {
    const navigate = useNavigate()


    return (
        <>
            <button className="btn-grad" onClick={() => navigate("./Login")}>Log in</button>
        </>
    )
}