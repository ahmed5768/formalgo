import { useState } from "react"
import './sign-up.css';
import { LoginBtn } from "./Loginbtn";
import { Link } from "react-router";


export const Signup = () => {

    let [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "", 
        phoneNumber: ""

    })

    let handleInputChange = (e) => {
        let {name, value} = e.target

        setUser((prev) => ({...prev, [name]: value}))
    }

    const handleSubmitButton = (event) => {
        event.preventDefault()
        console.log(user);
        
        
    }

    return(
        <>
        <form  className="main-form flex flex-col" >
            <div onSubmit={handleSubmitButton} className="flex flex-col">
                <h1>Sign up</h1>
                <p>Please fill in this form to create account</p>

                <div className="flex flex-col">
                <label htmlFor="firstName">
                    <b>First Name</b>
                </label>
                <input type="text"
                name="firstName"
                placeholder="Enter First Name"
                required
                value={user.firstName}
                onChange={handleInputChange}
                />

                <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>
                <input type="text"
                name="lastName"
                placeholder="Enter Last Name"
                required
                value={user.lastName}
                onChange={handleInputChange}
                />

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="email"
                name="email"
                placeholder="xyz@email.com"
                required
                value={user.email}
                onChange={handleInputChange}
                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password"
                name="password"
                placeholder="Enter Your Passsowrd"
                required
                value={user.password}
                onChange={handleInputChange}
                />

                <label htmlFor="phone">
                    <b>Phone Number</b>
                </label>
                <input type="phone"
                name="phoneNumber"
                placeholder="+92 **********"
                required
                value={user.phoneNumber}
                onChange={handleInputChange}
                />
                </div>
                <button className="btn-grad" onClick={handleSubmitButton}>Sign-in</button>
                </div>
             <Link to="/Login"/><LoginBtn/><Link/>
        </form>
        </>      
    )
}