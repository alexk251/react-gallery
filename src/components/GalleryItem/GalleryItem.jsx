import './GalleryItem.css'
import {useState} from 'react';
import axios from 'axios';

function GalleryItem({ item, getGallery }) {
    // sets state of showImage to conditionally render below in return
    const [showImage, setShowImage] = useState(true);

    const handleLike = () => {
        //increase likes and sets as data
        const data = {
            likes: (item.likes += 1)
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
                        <img src={item.path}></img>
                    </div>
                ) : (
                    <div>
                        {item.description}
                    </div>
                )}
            </div>
            <div>
                {/* add likes button */}
                <p>{item.likes} like this</p>
                <button onClick={handleLike}>Like</button>
            </div>
        </div>
    )
}

export default GalleryItem;