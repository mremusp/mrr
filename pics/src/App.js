import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from './api';


function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        // console.log(result);
        // setTimeout(() => {
        //     console.log(result.length);
        //     setImages([...result]);
        //     console.log('images', images);
        //     setImgL(result.length);
        //     console.log('images length', imgL);
        // }, 1000);

        setImages(result);

    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList imgArr={images} />
        </div>
    );
}

export default App;
