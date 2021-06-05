import './GalleryItem.css'
import {useState} from 'react';
import axios from 'axios';

function GalleryItem({ item, getGallery }) {
    // sets state of showImage to conditionally render below in return
    const [showImage, setShowImage] = useState(true);

    const handleLike = () => {
        //increase likes and sets as data
        const data = {
            likes: (item.likes)
        }
        //axios put call to server path with id and data
        axios.put(`/gallery/like/${item.id}`, data).then(response => {
            console.log(response);
            //trigger get gallery which renders again from server
            getGallery();
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="listItem">
            <div>
                {/* conditionally renders either image or description if you click on button */}
                { showImage ? (
                    <div>
                        <img onClick={() => setShowImage(!showImage)} src={item.path}></img>
                    </div>
                ) : (
                    <div>
                        <p onClick={() => setShowImage(!showImage)} className="padCenter">{item.description}</p>
                    </div>
                )}
            </div>
            <div>
                {/* add show description button */}
                <button className="btn" onClick={() => setShowImage(!showImage)}>
                    {showImage ? 'Show Guitar Name' : 'Show Guitar Image'}
                </button>
                {/* add likes button */}
                <p>{item.likes} like this</p>
                <button className="btn" onClick={handleLike}>Like</button>
            </div>
        </div>
    )
}

export default GalleryItem;