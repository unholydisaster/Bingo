import fetch from "isomorphic-unfetch"
import CodeBlock from "../components/Highlighter"
import { withApiUrl } from "next-api-url";
import Head from "next/head"
import Navbar from "../components/Navbar"
import { Div1, Divbig, Reactmarkdown1 } from "../styles/Blogpost";
import { Footer } from "../components/Footer";
import { Divcontent } from "../styles/Footer";



export default function Note({note}){

    return(
        <>
        <Divcontent>
        <Head>
              <title>{ note.title }</title>
              <meta name="description" content={`${note.title}`} />
              <meta property="og:title" content={`${ note.title }`} />
              <meta property="og:description" content={` ${note.title}`} />
              <meta property="og:type" content="website" />
              <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <Divbig>
        <Div1>
        <Reactmarkdown1 components={CodeBlock}>{note.markdown}</Reactmarkdown1>
        </Div1>
        </Divbig>
        </Divcontent>

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

