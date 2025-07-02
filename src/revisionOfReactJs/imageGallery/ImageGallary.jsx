import { useState } from "react";

const ImageGallary = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const image = [
        { id: 1, src: 'https://cdn.pixabay.com/photo/2022/07/17/13/41/sunflower-7327456_1280.jpg' },
        { id: 2, src: 'https://cdn.pixabay.com/photo/2025/06/15/04/46/duckling-9660597_1280.jpg' },
        { id: 3, src: 'https://cdn.pixabay.com/photo/2024/09/02/20/49/goat-9017896_1280.jpg' },
        { id: 4, src: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' },
        { id: 5, src: 'https://cdn.pixabay.com/photo/2025/04/30/17/59/prairie-dog-9569847_1280.jpg' }
    ]

    return (
        <div>
            <img src={image[currentIndex].src} width='500px' />
        </div>
    )
}

export default ImageGallary;