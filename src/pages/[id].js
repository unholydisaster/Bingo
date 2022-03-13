import fetch from "isomorphic-unfetch"
import CodeBlock from "../components/Highlighter"
import Link from "next/link"
import { withApiUrl } from "next-api-url";
import Head from "next/head"
import Navbar from "../components/Navbar";
import { Div1, Divbig, Reactmarkdown1 } from "../styles/Blogpost";



const Note=({note})=>{

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
           <Navbar/>
        </div>
        <Divbig>
        <Div1>
        <Reactmarkdown1 components={CodeBlock}>{note.markdown}</Reactmarkdown1>
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
