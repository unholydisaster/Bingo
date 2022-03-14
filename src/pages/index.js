import Navbar from "../components/Navbar"
import { Gridlist, Listcontainer ,Div} from "../styles/Bloglist"
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch"
import apiUrl from "next-api-url"
import { Footer } from "../components/Footer";



export default function Home( {notes}){
  return (
    <>
      <Head>
        <title>
          Home
        </title>
      </Head>
     <Navbar/>
         <Div>
               {notes.map(article=> {
                 return(
                 <ul key={article._id}> 
                <Listcontainer  key={article._id}>
                      <Link href={`/${article._id}`}>
                       <a>{article.title}</a>
                      </Link>
                        
                      <h1>{article.topic}</h1>
                      <p>{article.description}</p> 
                      <h3>{article.author}</h3>                   
                </Listcontainer>
              </ul>
                 )
              })}
          
        </Div>
        <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {

  // extract the data
  const {data} = await (await fetch(`${apiUrl(context)}/notes`)).json();
  
  return {
      props: {
          notes:data
      },
  };
}
