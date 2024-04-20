import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchImages } from "../images-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const handleSearch = async (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(page + 1);}
    
    
    useEffect(() => {
        if (query === '') { return; }
        async function getImage() {
            try {
               setError(false);
               setIsLading(true);
               const img = await fetchImages(query, page);
                setImages((prevImage) => {
                    return [...prevImage, ...img];
               }); 
            } catch (error) {
                setError(true);
            } finally { setIsLading(false); }
        }
        getImage();
    }, [page, query]);
    
    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {error && <ErrorMessage/>}
            {images.length > 0 && <ImageGallery images={images} />}
            {isLoading && < Loader />}
            {images.length > 0 && !isLoading && <LoadMoreBtn loadMore={handleLoadMore} />}
          
        </>
    );
};