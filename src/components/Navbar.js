import Link from 'next/link'
import React from 'react'
import {useState} from 'react';
import { Bugers, Styledburger } from '../styles/BurgerStyles';
import { Linkcontainer, Links, Navcontainer, Navinformer } from '../styles/Navbar'

export default function Navbar (){
  const [open,setOpen]=useState(false)
        return(
            <div>
              <Navinformer>
                  <h1>
                    
                  </h1>
              </Navinformer>
              <Navcontainer open={open}>
                <h1>Eli's blog</h1>
                  <Linkcontainer open={open}>
                     <Link href="/" passHref>
                        <Links>Home</Links>
                      </Link>
                      <Link href="/postarticle" passHref>
                        <Links>create</Links>
                      </Link>
                      <Link href="/" passHref>
                        <Links>categories</Links>
                      </Link>
                      <Link href="/login" passHref>
                        <Links>signup</Links>
                      </Link>
                  </Linkcontainer>
                  <Styledburger open={open} onClick={()=>setOpen(!open)}>
                     <Bugers open={open}  className="path1"/>
                     <Bugers open={open}  className="path2"/>
                     <Bugers open={open}  className="path3"/>
                   </Styledburger>
              </Navcontainer>
            </div>
        )
    }
