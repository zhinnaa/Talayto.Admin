import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css';
import{AiOutlineLeft} from  "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 background-color: #161d31;
   /* --black: #283046; */
  /* --background:#161d31; */
}
`;
export const Headers=styled.div`
display: flex;
direction: rtl;
margin-top: 1em;
width: 77%;
`
export const HeaderText=styled.div`
color: var(--yellow);
font-size: 1.3rem;
margin-right: .5em;
`

export const HeaderIcon=styled(AiOutlineAppstoreAdd)`
font-size: 2rem;
color: var(--yellow);

`

export const Container=styled.div`
background: -webkit-linear-gradient(to top,#696969,#7D7D7D,yellow);
margin-top: 2em;
`;

export const Wrapper=styled.div`
width: 70%;
background-color: #283046;
height: 550px;
margin-left: 6em;
border-radius: 1em;
`
export const StepperHeader=styled.div`
display: flex;
justify-content: space-around;
width: 100%;
padding: 1.5rem 1.5rem;
margin-top: 2em;
direction: rtl;
`

export const ButtonStep=styled.button`
display: flex;
flex-direction: row;
background-color: #283046;
border: none;
padding: 1em 2em;
`

export const StepNum=styled.span`
width: 50px;
background-color: ${props => props.active ?  "#7267e3" : 'gray'};
display: flex;
justify-content: center;
align-items: center;
height: 42px;
margin: .25em 6.5em;
border-radius: .35rem;

color:#DCDCDC;
&.active{
    background-color:  #c7990a;
}
`

export const StepSpan=styled.span`
display: flex;
color: white;
flex-direction: column;
margin-top: .1em;
`

export const StepTitle=styled.span`
color:  var(--text);
font-size: 1rem;
padding-right: 1em;
`

export const StepSubtitle=styled.span`
font-size: .9rem;
margin-right: .5em;
`

export const FillLeft=styled(AiOutlineLeft)`
color: white;
margin-top: 1.15em;
margin-right: 2em;

`
export const ContentHeader=styled.span`
display: flex;
color: white;
flex-direction: column;
margin-top: 1em;
margin-left: 53em;
`

export const ContentTitle=styled.span`
color:  var(--text);
font-size: 1.1rem;
margin-right: 1em;
`

export const ContentSubtitle=styled.span`
font-size:.95rem;

`

export const Novalidate=styled.div`
direction: rtl;
margin-top: 1em;
${props=>props.$isFirst &&`
display:flex;
flex-direction: row;
` }

`

export const RowForm=styled.div`
display: flex;


${props=>props.$isA &&`
margin-right: 3em;
width:30%;
margin-top:1em;
flex-direction: column;

` }


`

export const FormGroup=styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-right: 1.5em;
margin-bottom: 1em;


${props=>props.$isPic &&`
width:50%
` }
${props=>props.$isDiv &&`
margin-top:2.5em;
` }
`

export const FormLabel=styled.label`
color:#DCDCDC;
font-size: 1.2rem;

`

export const FormInput=styled.input`
margin-top: .5em;
width: 90%;
height: 2.4em;
border: none;
background-color: #283046;
border: 1px solid #DCDCDC;
border-color: #404656;
border-radius: .4em;
padding-right: .8em;
color: white;

&:focus{
    outline: none;
  border-color: #7367F0;


 } 

`

export const Footer=styled.div`
display: flex;
justify-content: space-between;
margin-top: 2em;

`

export const PreButton=styled.button`
width: 100px;
height: 3em;
background-color:#7267e3 ;
border: 1px solid ;
border-radius: .4em;
margin-right: 2em;
margin-top: 5em;
`

export const PreIcon=styled(AiOutlineArrowRight)`
color: white;
margin-left: 1em;

`
export const PreSpan=styled.span`
color: #DCDC;
font-size: .9rem;
`

export const NextButton=styled.button`
width: 100px;
height: 3em;
border: 1px solid ;
border-radius: .4em;
margin-left: 2em;
margin-top: 5em;
z-index: 200;

`

export const NextIcon=styled(AiOutlineArrowLeft)`
color: white;
margin-right: .5em;
`
export const NextSpan=styled.span`
color: #DCDC;
`
export const FormSelect=styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

