import styled from 'styled-components'


const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Navinformer=styled.div`
position: absolute;
width: 100%;
height:0px;
left: 0px;
top: 0px;
color:white;
background: #1D59B4;
${mq[0,1]}{
width:100vw;
position:relative;
margin-top:-22px;
height:0px;
}
`
export const Navcontainer=styled.div`
position: absolute;
width: 100%;
height: 80px;
left: 0px;
top: 0px;

background: #0F1010;

h1{
    position:absolute;
    color:white;
    font-size:30px;
    left:20px;
    font-family:Maryleen FY;
}
${mq[0,1]}{
    position:fixed;
    width:100vw;
    height:${({open})=>open ? '70%':'69px'};
    transition:transform 0.3s ease-in-out;
    z-index:20;
    top:0px;
    background:${({open})=>open ? '#0F1010':'#0F1010'}
    }
`
export const Linkcontainer=styled.div`
position:absolute;
display:grid;
grid-template-columns:repeat( 4, minmax(100px, 1fr) );
width:40vw;
grid-gap:0px;
left:25%;
${mq[0,1]}{
    left:0;
    top:60px;
    display:grid;
    grid-template-columns:repeat( 1, minmax(20px, 1fr) );
    transform:${({open})=>open ? 'translateX(0)':'translateX(-100%)'};
    transition:transform 0.3s ease-in-out;
    
    }
`
export const Links=styled.a`
font-family: arial;
font-size:16px;
color:white;
padding:30px 0px;
position:relative;
text-align:center;
cursor: pointer;
${mq[0,1]}{
color:24292F;
display:grid;
grid-template-columns:repeat( 1, minmax(50px, 1fr) );
}
`