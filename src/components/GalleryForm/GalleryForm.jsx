import {useState} from 'react';
import axios from 'axios';
import './GalleryForm.css'

function AddForm ({getGallery}) {

    const [pathInput, setPathInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    //handles submit call to /gallery on server via axios
    const handleSubmit = (event) => {
        event.preventDefault();

        const newGuitar = {
            description : descriptionInput,
            path: pathInput,
        }

        axios.post('/gallery', newGuitar).then(response => {
            getGallery()
            setPathInput('')
            setDescriptionInput('')
        }).catch(err=> {
            console.error(err)
        })
    }
    //renders form
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    className='input'
                    value={descriptionInput} 
                    onChange={(event) => setDescriptionInput(event.target.value)}
                    placeholder="name"
                    />
                <input
                    className='input' 
                    value={pathInput} 
                    onChange={(event) => setPathInput(event.target.value)}
                    placeholder="URL PATH"
                    />
                <button className='btn' type='submit'>Add Guitar</button>
            </form>
        </>
    )
}

export default AddForm;