
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'

const StyledButton = styled.button`
backgroundColor: green;
            color: white;
            font: inherit;
            border: 5px solid blue;
            padding: 8px;
            cursor:pointer;
            &:hover: {
                backgroundColor:lightgreen;
                color: black;
            }`;

class App extends Component {
    state = {
        persons: [
            { id:'1', name: 'maxm', age: 28 },
            { id:'2', name: 'manu', age: 82 },
            { id:'3', name: 'sam', age: 77 },
            { id:'4', name: 'samzz', age:63 },
            { id:'5', name: 'max3', age: 99 }
            
        ],
        showPersons: false 
    }

 

    nameChangehandler = (event, id) => {
        
        const personIndex= this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons =[...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    deletePersonHandler= (personIndex) => {
        const persons= this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({person:persons});
    }


    togglePersonHandler= () => {
        const doesShow= this.state.showPersons;
        this.setState({showPersons:!doesShow});
    }



    render() {


        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '5px solid blue',
            padding: '8px',
            cursor:'pointer',
            ':hover': {
                backgroundColor:'lightgreen',
                color: 'black'
            }
        };
        let persons=null;

        if(this.state.showPersons){
            persons= (
                
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age} 
                        key={person.id} 
                        changed={(event) =>this.nameChangehandler(event, person.id)}/>
                    })}
               
             </div>
            )
            style.backgroundColor='red';
            style[':hover']= {
                backgroundColor:'salmon',
                color: 'black'
            }
        }

        let classes = [];
        if(this.state.persons.length<= 2){
            classes.push('red');
        }
        if(this.state.persons.length<= 1){
            classes.push('bold');
        }
        
        return (
           
            <div className="App">
                <h1> Hello. </h1>
                <p className={classes.join(' ')}> hhh </p>
                <StyledButton  onClick= { this.togglePersonHandler}> Switch Name</StyledButton>
                 {persons}
            </div>
            
            );
    }
}
export default App;
