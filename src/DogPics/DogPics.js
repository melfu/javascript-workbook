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
// //   componentDidMount() {
// //     const { isLoading, url, error } = this.state;
//     // fetch(dogurl)
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     //   .then(data => { let dogPics = data.response.map((pic) => { return (<div key={pic.result}> <img src = {dogPics} alt='random dog' /></div>
//     //   )}
//     //   )})
//     //   .then(result => this.setState({url: result, 
//     //                                  isFetching: false}))  
//     //   // const dogPics = () => <img src = {this.state.url} alt='random dog' />;

//     //   .catch(e => console.log(e))

//     //   const fetchDog = () => {
//     //     this.setState({...this.state, isFetching: true})
//     //   }


// render() {

//     const image = this.props.message;
//     return (
// <div>
//     <button onClick = {getRandomDoggo}>Show me a doggo!</button>
//
//         </div>
//     )
// }
// }

export default DogPics