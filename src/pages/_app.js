import { GlobalStyle} from "../styles/Global";
import React from "react"


export default function App({Component,pageProps}){
  return (
    <>
      <GlobalStyle />
        <Component {...pageProps} />   
      </>
  )
}
