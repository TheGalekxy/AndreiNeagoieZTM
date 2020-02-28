import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { people } from './people';
import Scroll from '../Components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            people: [], // basic state is an empty array
            searchfield: '' // basic state is empty
        }
    }

    componentDidMount() {       
        
        const urls = [
            'https://swapi.co/api/people/',
            'https://swapi.co/api/people/?page=2',
            'https://swapi.co/api/people/?page=3',
            'https://swapi.co/api/people/?page=4',
            'https://swapi.co/api/people/?page=5',
            'https://swapi.co/api/people/?page=6',
            'https://swapi.co/api/people/?page=7',
            'https://swapi.co/api/people/?page=8',
            'https://swapi.co/api/people/?page=9'
          ]

          const getData = async () => {
              try {
                const [ page1, page2, page3, page4, page5, page6, page7, page8, page9 ] = await Promise.all(urls.map(async function(url) {
                    const response = await fetch(url);
                    const json = await response.json();
                    return json
                }));
                // const peopleResults = Object.assign(page1.results, page2.results, page3.results);  // This didn't work because page3 would overide the previous pages because they had the same keys as previous pages
                // const peopleResults = page1.results.concat(page2.results, page3.results) // HELLLLLL YEAH! Got it working!! In order to get all them working I needed to concatenate all of the arrays together that are accessed through the page.results
                const peopleResults = [...page1.results, ...page2.results, ...page3.results, ...page4.results, ...page5.results, ...page6.results, ...page7.results, ...page8.results, ...page9.results,]    // updated to spread syntax to be more up-to-date
                this.setState({ people: peopleResults}); // Had to remove the "set state to outside the second async function"
                console.log('page1', page1.results);
                console.log('page2', page2.results);
                console.log('page3', page3.results);
              } catch (error) {
                  console.log(error);
              }
            }

            getData()
          



        // fetch('https://swapi.co/api/people')
        //     .then(response => response.json())
        //     .then((data) => {
        //         this.setState({ people: data.results })
        //     })
    }
    


    

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
    }

    render() {
        const { people, searchfield } = this.state; // destructuring this.state which allows us to just use people/searchfield instead of this.state.searchfield/people
        const filteredPeople = people.filter(person => {
            return person.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !people.length ?  // if people.length is equal to 0
            <h1> Loading.... </h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Star Wars Api Project</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList people={filteredPeople} />
                    </Scroll>
                     
                </div>


                // This ^^^ is the same as this below

        //    if (!people.length) { // if people.length is equal to 0
        //     return <h1> Loading.... </h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>Star Wars Api Project</h1>
        //             <SearchBox searchChange={this.onSearchChange} />
        //             <Scroll>
        //                 <CardList people={filteredPeople} />
        //             </Scroll>
                     
        //         </div>
            );
        }
    }


export default App