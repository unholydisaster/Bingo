import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Cardborder=styled.div`   
position: absolute;
width: 881px;
height: 600px;
left: 226px;
top: 150px;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;

${mq[0,1]}{
    left:8px;
    width:95vw;
    top:100px;
    height:600px;
}
`
export const Author=styled.input`   
position: absolute;
width: 300px;
height: 34px;
left: 12px;
top: 20px;
font-size:18px;
color:black;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 10px;
${mq[0,1]}{
    width:80%;
    height:30px;
    top:20px;
}

`
export const Description=styled.input`   
position: absolute;
width: 792px;
height: 34px;
left: 12px;
top: 140px;
font-size:18px;
color:black;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 10px;
${mq[0,1]}{
    width:80%;
    height:30px;
    top:140px;
}


`
export const Topic=styled.input`   
position: absolute;
width: 300px;
height: 34px;
left: 12px;
top: 200px;
font-size:18px;
color:black;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 10px;
${mq[0,1]}{
    width:80%;
    height:30px;
    top:200px;
}

`

export const Cardtitle=styled.input`   
position: absolute;
width: 792px;
height: 34px;
left: 10px;
top: 80px;
font-size:18px;
color:black;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 10px;
${mq[0,1]}{
    width:80%;
    height:30px;
    top:80px;
}
`
export const Cardinerborder=styled.div`   
position: absolute;
width: 100%;
height: 1px;
left: 0px;
top: 256px;

background: #C4C4C4;
${mq[0,1]}{
    top:255px;
}
`
export const Cardtopborder=styled.div` 
position: absolute;
width: 100%;
height: 0px;
left:0;
top: 220px;
display:none;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
transform: matrix(1, 0, 0, -1, 0, 0);  
${mq[0,1]}{
display:none;

}
`
export const Cardwrite=styled.button`   
position: relative;
width: 78px;
height: 40px;
left: 50px;
top: 255px;
font-size:18px;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
${mq[0,1]}{
    width:50px;
    height:35px;
    left:20px;
    top:255px;

}
`
export const Cardpreview=styled.button`   
position: relative;
width: 78px;
height: 43px;
left: 50px;
top: 255px;
font-size:18px;

background: #FFFFFF;
border:${({write})=>write  ? '1px solid #C4C4C4':'none'};
border:${({preview})=>preview ? '1px solid #C4C4C4':'none'};
box-sizing: border-box;
${mq[0,1]}{
    width:67px;
    height:35px;
    left:20px;
    top:255px;

}
`
export const Writearea=styled.textarea`
position: relative;
width: 880px;
height:300px;
left:0px;
top: 253px;
font-size:18px;

background: white;
border: 1px solid #C4C4C4;
box-sizing: border-box;
display:${({write})=>write ? 'none':'block'};
transition:display 5s ease-in-out; 
${mq[0,1]}{
    width:100%;
    height:308px;
    top:253px;
  
}
`
export const Reviewarea=styled(ReactMarkdown)`
position: absolute;
width: 880px;
height:300px;
left:0px;
top: 297px;
font-size:18px;

background: white;
border: 1px solid #C4C4C4;
box-sizing: border-box;
display:${({preview})=>preview ? 'block':'none'};
transition:display 5s ease-in-out; 
${mq[0,1]}{
    width:100%;
    top:288px;
    height:306px;
}
`
export const Cardsubmitcontainer=styled.div`
position: absolute;
width: 100%;
height: 45px;
left: 0;
top: 100%;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
${mq[0,1]}{
    width:100%;
    height:50px;

}

`
export const Cardsubmit=styled.button`   
position: absolute;
width: 161px;
height: 33px;
left: 80%;
top: 5px;
color:white;

background: rgba(35, 222, 35, 0.7);
border-radius: 10px;
 ${mq[0,1]}{
     left:30%;
     width:120;
     height:30px;
 }
`
export const Cardfooter=styled.div`   
margin-top: 150px;
background: #FFFFFF;
box-sizing: border-box;
${mq[0,1]}{
    margin-top:200px;
}
`