import { useState } from "react"
import { Link } from "react-router"
import { CreateAcc } from "./CreatAccBtn"

export const Login = () => {
    const [useremail, setEmail] = useState("")
    const [userpassword, setPassword] = useState("")
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            useremail,
            userpassword
        }
        console.log(loginData);

    }

    return (
        <>
            <form  className="main-form flex flex-col " >
                <div onSubmit={handleFormSubmit} className="flex flex-col">
                    <h1>Log in</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email">
                            <b> Email</b>
                        </label>
                        <input type="email"
                            name="email"
                            value={useremail}
                            placeholder="xyz@email.com"
                            required
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input type="text"
                            name="password"
                            placeholder="Enter Your Passsowrd"
                            required
                            autoComplete="off"
                            value={userpassword}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-grad">Log In</button>
                </div>
                <Link to="./SignUp"><CreateAcc/></Link>
            </form>
        </>
    )
}