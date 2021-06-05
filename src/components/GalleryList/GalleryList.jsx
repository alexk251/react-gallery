import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'

function GalleryList ({gallery, getGallery}) {
    // renders and loops gallery in a list of components
    return (
    <div className="flex">
        {gallery.map(item => {
            //each item gets sent to GalleryItem
            return (
                <GalleryItem getGallery={getGallery} key={item.id} item={item} />
            )
        })}
    </div>
    )
}

export default GalleryList