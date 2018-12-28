import React, { Component } from 'react';
import '../App.css';

const dogurl = 'https://dog.ceo/api/breeds/image/random'; 

export class DogPics extends Component {
    constructor(props) {
    super(props);

    this.state = {
        loaded: false,
        dogPic: ''
  };
}
    componentDidMount() {
        fetch(dogurl)
        .then(response => response.json())
        .then(json => {
            this.setState({
                loaded: true,
                dogPic: json.message
            })
        })
    }
        
    render() {
        if (this.state.loaded === false) return <p>Loading...</p>;
        const buttonClicked = () => {
            fetch(dogurl)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    loaded: true,
                    dogPic: json.message
                })
            })
        }
        return (
            <div>
                <h1>It's dog time</h1>
                <div>
                <button height='100px' width='200px' onClick = {buttonClicked}>Show me another doggo! 
                </button>
                </div>
                <div>
                <img
              width="300"
              height="300"
              src = {this.state.dogPic} 
              alt = 'random dog'>
                </img>
                </div>
                <h5>*I'm totally gonna work on this more later, but I ran out of time to make it any better before I go on vacay*</h5>
            </div>
        )
    }
}

export default DogPics