import styled from "styled-components"

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Div=styled.div`
padding-bottom:9rem;
${mq[0,1]}{
padding-bottom:6rem;
}

`

export const Listcontainer=styled.li`
position:relative;
width: 50%;
text-align:center;
margin-top: 20px;


min-height: 259px;
left: 25%;
top: 150px;
list-style-type:none;
background: #FFFFFF;
border-radius: 10px;

h1{
    position:absolute;
    left:20px;
    font-size:16px;
    top:10px;
    color:#C362A7;
}
a{
    position:absolute;
    left:30px;
    font-size:22px;
    top:70px;
    color:#24292F;
}
p{
    color:#5E6771;
    position:absolute;
    left:20px;
    margin-bottom:10px;
    font-size:18px;
    top:110px;
}
h3{
    position:absolute;
    left:20px;
    top:200px;
    font-size:16px;
    color:24292F;                                                                                                                                                                                                                                                                               
}
${mq[0,1]}{
    width: 90vw;
    min-height: 300px;
    position:relative;
    left:-20px;
    font-size:20px;
    top: 100px;
    

    h1{
        position:absolute;
        left:20px;
        font-size:16px;
        top:10px;
        color:#C362A7;
    }
    a{
        position:absolute;
        left:10px;
        font-size:22px;
        top:70px;
        weight:1000;
        color:#24292F;
    }
    p{
        color:#5E6771;
        position:absolute;
        left:10px;
        margin-bottom:10px;
        font-size:18px;
        top:120px;
    }
    h3{
        position:absolute;
        left:20px;
        top:230px;
        font-size:16px;
        color:24292F;                                                                                                                                                                                                                                                                               
    }
    }
`