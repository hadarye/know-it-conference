import "./slider.styles.css"
import image1 from '../../media/images_slider/img1.jpg';
import image2 from '../../media/images_slider/img2.jpg';
import image3 from '../../media/images_slider/img3.jpg';
import image4 from '../../media/images_slider/img4.jpg';
import image5 from '../../media/images_slider/img5.jpg';
import image6 from '../../media/images_slider/img6.jpg';
import image7 from '../../media/images_slider/img7.jpg';
import image8 from '../../media/images_slider/img8.jpg';
import image9 from '../../media/images_slider/img9.jpg';
import image10 from '../../media/images_slider/img10.jpg';
import image11 from '../../media/images_slider/img11.jpg';
import image12 from '../../media/images_slider/img12.jpg';
import image13 from '../../media/images_slider/img13.jpg';
import image14 from '../../media/images_slider/img14.jpg';
import image15 from '../../media/images_slider/img15.jpg';
import image16 from '../../media/images_slider/img16.jpg';
import image17 from '../../media/images_slider/img17.jpg';
import image18 from '../../media/images_slider/img18.jpg';
import image19 from '../../media/images_slider/img19.jpg';
import image20 from '../../media/images_slider/img20.jpg';
import image21 from '../../media/images_slider/img21.jpg';
import image22 from '../../media/images_slider/img22.jpg';
import image23 from '../../media/images_slider/img23.jpg';
import React from "react";
import ImageGallery from 'react-image-gallery';
const Slider = (props) => {
    const images = [
        {
            original: image1,
            thumbnail: image1,
        },
        {
            original: image2,
            thumbnail: image2,
        },
        {
            original: image3,
            thumbnail: image3,
        },
        {
            original: image4,
            thumbnail: image4,
        },
        {
            original: image5,
            thumbnail: image5,
        },
        {
            original: image6,
            thumbnail: image6,
        },
        {
            original: image7,
            thumbnail: image7,
        },
        {
            original: image8,
            thumbnail: image8,
        },
        {
            original: image9,
            thumbnail: image9,
        },
        {
            original: image10,
            thumbnail: image10,
        },
        {
            original: image11,
            thumbnail: image11,
        },
        {
            original: image12,
            thumbnail: image12,
        },
        {
            original: image13,
            thumbnail: image13,
        },
        {
            original: image14,
            thumbnail: image14,
        },
        {
            original: image15,
            thumbnail: image15,
        },
        {
            original: image16,
            thumbnail: image16,
        },
        {
            original: image17,
            thumbnail: image17,
        },
        {
            original: image18,
            thumbnail: image18,
        },
        {
            original: image19,
            thumbnail: image19,
        },
        {
            original: image20,
            thumbnail: image20,
        },
        {
            original: image21,
            thumbnail: image21,
        },
        {
            original: image22,
            thumbnail: image22,
        },
        {
            original: image23,
            thumbnail: image23,
        }
        ];

            return (
                <ImageGallery items={images} autoPlay={true} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showBullets={true} />
            )
        }
export default Slider;




