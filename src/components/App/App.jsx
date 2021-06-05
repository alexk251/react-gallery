import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AddForm from '../GalleryForm/GalleryForm'


function App() {
//establish variable and set variable for gallery state
const [gallery, setGallery] = useState([]);

//trigger getGallery function on page load
useEffect(() => {
  getGallery()
}, [])

//axios /gallery server request returns data
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
          <h1 className="App-title">Guitar Gallery</h1>
        </header>
        <AddForm  getGallery={getGallery}/>
        <GalleryList gallery={gallery} getGallery={getGallery} />
      </div>
    );
}

export default App;
