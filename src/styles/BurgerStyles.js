import styled from "styled-components"

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Styledburger=styled.div`
    ${mq[0,1]}{
    width:1rem;
    height:2rem;
    position:absolute;
    top:20px;
    left:85%;
    display:flex;
    justify-content:space-around;
    flex-flow:column nowrap;  
    z-index:20;
    }`
export const Bugers=styled.div`
${mq[0,1]}{
    width:2rem;
    height:0.25rem;
    border-radius:10px;
    background-color:white;
    font-size:16px;
    transform-origin:1px;
    transition:all 0.3s linear;
    z-index:20;
    &:nth-child(1){
        transform:${({open})=>open ? 'rotate(45deg)':'rotate(0)' };
    }
    
    &:nth-child(2){
        transform:${({open})=>open ? 'translateX(100%)':'translateX(0)'};
        opacity:${({open})=>open ? 0 : 1};
    }

    &:nth-child(3){
        transform:${({open})=>open ? 'rotate(-45deg)':'rotate(0)'};
    }

}
`
