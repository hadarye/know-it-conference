import './Exhibition.styles.css';
import image1 from '../../media/images/logos/image1.png';
import image2 from '../../media/images/logos/image2.png';
import image3 from '../../media/images/logos/image3.png';
import image4 from '../../media/images/logos/image4.png';
import image5 from '../../media/images/logos/image5.png';
import image6 from '../../media/images/logos/image6.png';
import image7 from '../../media/images/logos/image7.png';
import image8 from '../../media/images/logos/image8.png';
import image9 from '../../media/images/logos/image9.png';
import image10 from '../../media/images/logos/image10.png';
import image11 from '../../media/images/logos/image11.png';
import image12 from '../../media/images/logos/image12.png';
import image13 from '../../media/images/logos/image13.png';
import image14 from '../../media/images/logos/image14.png';
import image15 from '../../media/images/logos/image15.png';
import image16 from '../../media/images/logos/image16.png';
import image17 from '../../media/images/logos/image17.png';
import image18 from '../../media/images/logos/image1.png';
import image19 from '../../media/images/logos/image18.png';
import image20 from '../../media/images/logos/image19.png';
import image21 from '../../media/images/logos/image20.png';
import image22 from '../../media/images/logos/image21.png';
import image23 from '../../media/images/logos/image22.png';
import image24 from '../../media/images/logos/image23.png';
import image25 from '../../media/images/logos/image24.png';
import image26 from '../../media/images/logos/image25.png';
import image27 from '../../media/images/logos/image26.png';


const Exhibition = () => {
    const LOGOS =[
        image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27
    ]
    return(
        <>
            {LOGOS.map((image) => (
            <img className='exhibition-logo' src={image}/>
        ))}
        </>
    )
}

export default Exhibition;