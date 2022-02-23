import Navbar from "../components/Navbar"
import { Gridlist, Listcontainer } from "../styles/Bloglist"
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch"
import apiUrl from "next-api-url"



export default function Home( {notes}){
  return (
    <>
      <Head>
        <title>
          Home
        </title>
      </Head>
     <Navbar/>
         <div>
               {notes.map(article=> {
                 return(
                 <ul>
                   
                <Listcontainer  key={article._id}>
                      <Link href={`/${article._id}`} passHref>
                       <h2>{article.title}</h2>
                      </Link>
                        
                      <h1>{article.topic}</h1>
                      <p>{article.description}</p> 
                      <h3>{article.author}</h3>                   
                </Listcontainer>
              
              </ul>
                 )
              })}
     </div>
  
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
