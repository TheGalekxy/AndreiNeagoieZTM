import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { people } from './people';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            people: [], // basic state is the whole list of people
            searchfield: '' // basic state is empty
        }
    }

    componentDidMount() {       
        
        // async function fetchCharacters() {
        //     const response = await fetch('https://swapi.co/api/people/')
        //     const data = await response.json();
        //     console.log(data.results);
        //     .then((data.results) => {
        //         this.setState({ people: data.results})
        //         console.log(this.state.people)
        //     })
        //   }
        
        // fetchCharacters()


        fetch('https://swapi.co/api/people')
            .then(response => response.json())
            .then((data) => {
                this.setState({ people: data.results })
            })
        
        
        // fetch('https://swapi.co/api/people/')
        // .then(response => {
        //     return response.json();
        // })
        // .then(characters => {
        //     this.setState({people: characters})
        // })
        
    }

    

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
    }

    render() {
        const filteredPeople = this.state.people.filter(person => {
            return person.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>Star Wars Api Project</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList people={filteredPeople} /> 
            </div>
        );
    }
}

export default App