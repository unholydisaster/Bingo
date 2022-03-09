import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from "styled-components"


const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

const Divcode=styled(SyntaxHighlighter)`
${mq[0,1]}{
width:100%;
position:relative;
left:0;
}
width:98%;
position:relative;
left:10px;
`
const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
    <Divcode 
      style={dracula} 
      language={match[1]} 
      PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </Divcode>

    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

export default CodeBlock