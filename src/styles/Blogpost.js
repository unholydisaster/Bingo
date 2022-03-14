import styled from "styled-components"
import ReactMarkdown from "react-markdown"



const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Div1=styled.div`
border:none;
position:relative;
left:10%;
width:80%;
top:0;
background:white;
${mq[0,1]}{
    left:2%;
    width:96%;
    background:white;
    border:none;
    display:block;
    transition:display 5s ease-in-out;

    
}
`
export const Divbig=styled.div`
border-radius:10px;
position:absolute;
left:24%;
width:52%;
top:90px;
background:white;

${mq[0,1]}{
    border-radius:10px;
    top:100px;
    left:0px;
    width:100%;
    background:white;
    display:'block'};
    transition:display 5s ease-in-out; 

}
`




export const Reactmarkdown1=styled(ReactMarkdown)`
font-family: 'Open Sans', sans-serif;

  & p {
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding-bottom: 2px;
    color: #444444;
    
  }
  ${mq[0,1]}{
    & p {
        font-size: 20px;
      }    
      display:block;
      transition:display 5s ease-in-out;    
  }
  
`
