import './PersonPreview.styles.css' 
import { useRef } from 'react';

const PersonPreview = (props) => {
    const descriptionRef = useRef();
    return(
        <>
            <div className='person' style={{ backgroundImage: `url(${props.bg})` }} onClick={(e) => descriptionRef.current.classList.toggle("preview-clicked")}>
                <div className='mask'>
                    <div className='preview-description' ref={descriptionRef}>
                        <p className='description-name'>{props.name}</p>
                    </div>
                </div>
                
            </div>
        </>
        
    )
}

export default PersonPreview;