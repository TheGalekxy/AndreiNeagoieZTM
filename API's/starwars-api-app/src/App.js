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
        
        // const urls = [
        //     'https://swapi.co/api/people/',
        //     'https://swapi.co/api/people/?page=2',
        //     'https://swapi.co/api/people/?page=3'
        //   ]

        //   const getData = async () => {
        //       try {
        //         const [ page1, page2, page3 ] = await Promise.all(urls.map(async function(url) {
        //             const response = await fetch(url);
        //             const json = await response.json();
        //             this.setState({ people: json.results});
        //         }));
        //         console.log('page1', page1.results);
        //         console.log('page2', page2.results);
        //         console.log('page3', page3.results);
        //       } catch (error) {
        //           console.log(error);
        //       }
        //     }

        //     getData()
          



        fetch('https://swapi.co/api/people')
            .then(response => response.json())
            .then((data) => {
                this.setState({ people: data.results })
            })
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