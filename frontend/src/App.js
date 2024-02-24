import { useRef, useState } from "react";
import "./App.css";
import { ImageGrallery } from "./components/ImageGrallery";
import { ENDPOINT } from "./config/pixabay";
import axios from "axios";

function App() {
    const [imageData, setImageData] = useState([]);
    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // APIをたたく
        const result = await axios.get(`${ENDPOINT}&q=${ref.current.value}&image_type=photo`);
        setImageData(result.data.hits);
    };

    return (
        <div className="container">
            <h2>My Pixabay</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="画像を探す" ref={ref} />
            </form>
            <ImageGrallery imageData={imageData} />
        </div>
    );
}

export default App;
