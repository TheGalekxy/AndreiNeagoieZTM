import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { people } from './people';

ReactDOM.render(
                <div>
                    <Card name={people[0].name} gender={people[0].gender} weight={people[0].mass} />
                    <Card name={people[1].name} gender={people[1].gender} weight={people[1].mass} />
                    <Card name={people[2].name} gender={people[2].gender} weight={people[2].mass} />
                    <Card name={people[3].name} gender={people[3].gender} weight={people[3].mass} />
                    <Card name={people[4].name} gender={people[4].gender} weight={people[4].mass} />
                    <Card name={people[5].name} gender={people[5].gender} weight={people[5].mass} />
                    <Card name={people[6].name} gender={people[6].gender} weight={people[6].mass} />
                    <Card name={people[7].name} gender={people[7].gender} weight={people[7].mass} />

                </div>
                
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
