import "./ImageGrallery.css";

export const ImageGrallery = ({ imageData }) => {
    return (
        <div>
            <div className="images-wrapper">
                {imageData.map((img) => (
                    <div className="image" key={img.id}>
                        <a href={img.pageURL} target="noreferrer">
                            <img src={img.largeImageURL} alt="image" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
