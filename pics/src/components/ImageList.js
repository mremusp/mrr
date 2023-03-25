import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ imgArr }) => {
    const allImg = imgArr.map(img => {
        return <ImageShow img={img} key={img.id} />
    });

    return (
        <div className="image-list">
            {allImg}
        </div>
    )
}

export default ImageList;