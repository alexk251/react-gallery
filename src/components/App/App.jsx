import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';


function App() {

  const [gallery, setGallery] = useState([]);

useEffect(() => {
  getGallery()
}, [])

const getGallery = () => {
    console.log('inside getGallery')
    axios.get('/gallery').then(response => {
        setGallery(response.data)
    }).catch(err => {
      console.error(err)
    })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
