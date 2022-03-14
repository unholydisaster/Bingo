import styled from 'styled-components'
import { mq } from './BurgerStyles'

export const FooterDiv=styled.div`
${mq[0,1]}{
    
    position:absolute;
    width: 100%;
    height: 30%;
    left: 0px;
    top:100;
    background: #0F1010;
    display:grid;
    grid-template-columns:repeat( 2, minmax(100px, 1fr) );
}
`
export const FooterLeftContent=styled.div`
${mq[0,1]}{
    position:relative;
    width:50%;
    height: 50%;
    left: 20px;
    background:#0F1010;
    top:30px;
    h1{
        font-size:14px;
        color:white;
        padding-bottom:5px;
    }
}
`
export const FooterRightContent=styled.div`
${mq[0,1]}{
    position:relative;
    width:50%;
    height: 50%;
    background:#0F1010;
    top:30px;
    h1{
        font-size:14px;
        color:white;
        padding-bottom:5px;
    }
}

`
export const FooterBottom=styled.div`

`