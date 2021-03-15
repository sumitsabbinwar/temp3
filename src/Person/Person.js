// JavaScript source code
import React from 'react';
//import './Person.css';
import styled from 'styled-components'

const StyledDiv= styled.div`

       
        width: 90%;
        margin:auto;
        border: 100 px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 100px){
            with:50px;
        }
        `;

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    }
    return (
        //<div className="Person" style={style}>
       <StyledDiv>
  
            <p onClick={props.click}> I'm  {props.name}!!  And I'm {props.age} years old.</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            </StyledDiv>)
};
export default person;