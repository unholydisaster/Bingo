import React from "react"
import Navbar from "../components/Navbar"
import {Background,Createaccount,Emailinput,Enteremail,Enterpassword,Forgotpassword,Images,Imagecontainer,Loginbutton,Logindetails, Passwordinput, Userlogin} from "../styles/Login"
import { Cardfooter } from "../styles/Postcard"

export default function Login() {
  return (
    <div>

        <Background>
            <Navbar/>
         <Imagecontainer>
           <Images>
             Image
           </Images>
           <Createaccount>
            create account  
           </Createaccount>  
         </Imagecontainer> 
         <Logindetails>  
           <Userlogin>
            USER LOGIN   
          </Userlogin> 
          <Enteremail>
            Enter Email
          </Enteremail>
          <Emailinput/>
          <Enterpassword>
            Enter password
          </Enterpassword>
          <Passwordinput/>
          <Forgotpassword>
            Forgot Password
          </Forgotpassword>
          <Loginbutton>
            LOGIN
          </Loginbutton>
         </Logindetails> 
        </Background> 
        <Cardfooter>
          </Cardfooter>     
    </div>
  )
}
