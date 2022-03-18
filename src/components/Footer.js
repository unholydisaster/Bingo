import React from "react";
import { FooterDiv, FooterLeftContent, FooterRightContent } from "../styles/Footer";


export function Footer(){

    return(
        <FooterDiv>
            <FooterLeftContent>
                <h1>Product</h1>
                <h1>Support</h1>
                <h1>Status</h1>
                <h1>Contact</h1>
            </FooterLeftContent>
            <FooterRightContent>
                <h1>About</h1>
                <h1>Company</h1>
                <h1>Docs</h1>
               
            </FooterRightContent>
        </FooterDiv>
    )
}
