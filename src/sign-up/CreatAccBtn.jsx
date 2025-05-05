import { useNavigate } from "react-router";
import './sign-up.css'

export const CreateAcc = () => {
    const navigate = useNavigate()

    return(
        <>
        <button className="btn-grad" onClick={() => navigate(-1)}>Create Account</button>
    </>
    )
}