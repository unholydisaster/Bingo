import styled from "styled-components"

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Background=styled.div`   
position: absolute;
width: 100%;
height: 100vh;
left: 0px;
top:0px;
background-color: white;
`
export const Imagecontainer=styled.div`
position: absolute;
width: 398px;
height: 254px;
left: 500px;
top: 180px;
background-color: #1D59B4;
border: 2px solid slategrey;
box-sizing: border-box;
`
export const Images=styled.h1`
position: absolute;
width:auto;
height: 21px;
left:30%;
top:80px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
`
export const Createaccount=styled.h1`
position: absolute;
width:auto;
height: 21px;
left:10px;
top:205px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
`
export const Logindetails=styled.div`
position: absolute;
width: 398px;
height: 335px;
left: 500px;
top: 434px;
background: #FFFFFF;
text-align:center;
border:2px solid #1D59B4;
`
export const Userlogin=styled.h1`
position: absolute;
width:auto;
height: 30px;
top: 15px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;
left:27%;
color: #123985;
`
export const Enteremail=styled.h1`
position: absolute;
width: auto;
height: 19px;
left:75px;
top: 80px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
/* identical to box height */
color: #293CA0;
`
export const Emailinput=styled.input`
position: absolute;
width: 299px;
height: 38px;
left: 13%;
top: 110px;

background: #1D59B4;
border-radius: 20px;
`
export const Enterpassword=styled.h1`
position: absolute;
width: auto;
height: 19px;
left:75px;
top: 155px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
/* identical to box height */
color: #293CA0;
`
export const Passwordinput=styled.input`
position: absolute;
width: 299px;
height: 38px;
left: 13%;
top: 185px;

background: #1D59B4;
border-radius: 20px;
`
export const Forgotpassword=styled.h1`
position: absolute;
width: auto;
height: 19px;
left:55%;
top: 220px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
/* identical to box height */
color: #293CA0;
`
export const Loginbutton=styled.button`
position: absolute;
width: 146px;
height: 38px;
left: 32%;
top: 260px;
color: #FFFFFF;
background: #293CA0;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
`