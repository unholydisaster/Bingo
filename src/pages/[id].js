import fetch from "isomorphic-unfetch"
import CodeBlock from "../Components/Highlighter"
import Link from "next/link"
import { Div1, Divbig,Footer,Reacticonuser, Nextbutton,Fcontent,Reactmarkdown1,Reacticon1,Reacticon2,Reacticon3,Reacticon4} from "../Styles/Navbar"
import { Logo } from "../Styles/Dropdown"
import { withApiUrl } from "next-api-url";
import Head from "next/head"
import { Links, Logotemplate, Routertemplate, Socials, Template,Linked, Routertemplate1 } from "../Styles/Routers"
import {useState} from 'react';
import { Bugers, Styledburger } from "../Styles/BurgerStyles"

const Note=({note})=>{
  const [open,setOpen]=useState(false)
    return(
        <>
        <Head>
              <title>{ note.title }</title>
              <meta name="description" content={`${note.title}`} />
              <meta property="og:title" content={`${ note.title }`} />
              <meta property="og:description" content={` ${note.title}`} />
              <meta property="og:type" content="website" />
              <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Template>
         < Logotemplate>BBlog</Logotemplate>
         <Styledburger open={open} onClick={()=>setOpen(!open)}>
            <Bugers open={open}  className="path1"/>
            <Bugers open={open}  className="path2"/>
            <Bugers open={open}  className="path3"/>
        </Styledburger>
        </Template> 
        <Routertemplate1 open={open}>
        <Routertemplate  open={open} >
        <Link href="/" passHref>
                <Links>Home</Links>
          </Link>
          <Link href="/new" passHref>
                <Links>Create</Links>
          </Link>
            <Links >Sign In</Links>
            <Links>Sign Out</Links>        
        </Routertemplate>
        </Routertemplate1>
        <Socials open={open}>
           <Link href={'/'} passHref>
             <Reacticonuser/>
           </Link>                       
        </Socials>
            </div>
        <Divbig open={open}>
        <Div1 open={open}>
        <Reactmarkdown1  open={open} components={CodeBlock}>{note.markdown}</Reactmarkdown1>
        </Div1>
        </Divbig>
        </>
    )
}

export const getServerSideProps = withApiUrl(async ({query:{id}}, url) =>{
    // get the current environment
    const {data}= await (await fetch(`${url}/notes/${id}`)).json();
     // extract the data
  
    return {
        props: {
            note:data
        },
    };
  
})
export default Note;
