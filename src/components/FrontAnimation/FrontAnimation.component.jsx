import { useRef } from 'react'
import './FrontAnimation.styles.css'
import headphones from '../../media/images/headphones.svg'
import vr from '../../media/images/vr.svg'
import laptop from '../../media/images/laptop.svg'
import hologram from '../../media/images/hologram.svg'

const FrontAnimation = () => {
    const itemRef1 = useRef();
    const itemRef2 = useRef();
    const itemRef3 = useRef();
    const itemRef4 = useRef();
    const itemRef5 = useRef();
    const ITEMS = [
        {
            "link": headphones,
            "ref": itemRef1
        },
        {
            "link": laptop,
            "ref": itemRef2
        },
        {
            "link": hologram,
            "ref": itemRef3
        },
        {
            "link": vr,
            "ref": itemRef4
        }
    ]


    // const startFloatAnimation = (element) => {
    //     console.log("end");
    //     element.ref.current.style.animation = "floating infinite";
    // }

    return (
      <div className="front-animation">
        {/* element.ref.current.classList.add("floatingAnimation"); element.ref.current.classList.remove(`item${index + 1}`); */}
        
        {ITEMS.map((element, index) => (
            <img src={element.link} key={index} ref={element.ref} onAnimationEnd={() => {element.ref.current.style.animation += `floating${index + 1} 6s ease-in-out infinite`;}} className={`item${index + 1} item`}/>
        ))}
      </div>
    );
}
  
export default FrontAnimation;