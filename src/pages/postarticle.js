import React from 'react'
import Navbar from '../components/Navbar'
import { Author, Cardborder, Cardfooter, Cardinerborder, Cardpreview, Cardsubmit, Cardsubmitcontainer, Cardtitle, Cardtopborder, Cardwrite, Description, Reviewarea, Topic, Writearea } from '../styles/Postcard'
import {useState,useEffect} from 'react';
import fetch from 'isomorphic-fetch'
import {useRouter} from "next/router"


export default function Postarticle (){
    const [form,setForm]=useState({author:'', title:'', description:'', topic:'', markdown:''});
    const [write,setWrite]=useState(false)
    const [preview,setPreview]=useState(false)
    const router=useRouter();
    

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const postArticle=async event=>{
        event.preventDefault();
        const res=await fetch('/api/notes',{
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST'

        })
        const result=await res.json()
        router.push("/");
    }
    

    return(
        <div>
          <Navbar/>

          <Cardtopborder/>

          <Cardborder >
              <form onSubmit={postArticle}>
                 <Author name="author" type="text" placeholder='author'  onChange={handleChange} >
   
                 </Author>
                  <Cardtitle name="title" type="text" placeholder='title'  onChange={handleChange}>
   
                  </Cardtitle>
                  <Description name="description" type="text" placeholder='description'  onChange={handleChange}>

                  </Description>
                  <Topic name="topic" type="text" placeholder='topic'  onChange={handleChange}>

                  </Topic>
                  <Cardwrite write={write} onClick={()=>setWrite(write) || setPreview(!preview)} passHref>
                     write
                  </Cardwrite >
                  <Cardpreview  preview={preview} onClick={()=>setPreview(!preview)} passHref>
                     Preview
                  </Cardpreview>
                  <Writearea name="markdown" type="text"  write={write}  onChange={handleChange}/>
                  <Reviewarea preview={preview}>
                      {form.markdown}
                  </Reviewarea>
                  <Cardinerborder/>
                  <Cardsubmitcontainer>
                  <Cardsubmit type="submit">
                      submit new article
                  </Cardsubmit>
                  </Cardsubmitcontainer>
              </form>
          </Cardborder>
          <Cardfooter>

          </Cardfooter>
        </div>
    )
}
