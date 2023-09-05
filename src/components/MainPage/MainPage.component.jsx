import './MainPage.styles.css';
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import SquareDetails from '../SquareDetails/SquareDetails.component';
import CountdownTimer from '../countdown/CountdownTimer.component';
import Slider from '../slider/slider.component';
import ParticipantsPreview from '../ParticipantsPreview/ParticipantsPreview.component';
import FrontAnimation from '../FrontAnimation/FrontAnimation.component';

const MainPage = (props) => {
    const control = useAnimation();
    const motionRef1 = useRef(null);
    const motionRef2 = useRef(null);
    const motionRefTimer = useRef(null);
    const motionRefBlack = useRef(null);
    const isInViewBlack = useInView(motionRefBlack);
    const isInViewTimer = useInView(motionRefTimer);
    const isInView1 = useInView(motionRef1);
    const isInView2 = useInView(motionRef2);

    const DATA = [
        'כנס חדשנות בלמידה הצה״לי, החמישי במספר מיועד למגוון קהלים בתחום החינוך והלמידה. בכנס זה יתקיימו הרצאות מרתקות ומגוון פאנלים בנושא החדשנות בלמידה, המיועדים למפתחי הדרכה בכירים, מנהלי הדרכה בארגון, אנשי חינוך, הוראה ולמידה בצה"ל, כוחות הבטחון השונים, אקדמיה וגופי חינוך ולמידה בארגונים השונים.',
        'מדור טי״ל של ענף הדרכה בקריית ההדרכה בנגב מתמחה ביצירת תוצרים דיגיטליים וחדשניים להדרכה. תוצריו מגיעים להדרכות השונות ולקורסים בקריית ההדרכה ובצה״ל ככלל. גם השנה אנו גאים לארח אתכם בכנס חדשני ומיוחד במינו.'
    ]

    useEffect(() => {
        props.handleDate(isInViewBlack);
    }, [isInViewBlack]);

    return (
        <div className="main-page">
            <span className='section1 section'>
                <div className='white-section1'>

                    <h1 className='main-header'>למידה מעולם לא הייתה חדשנית יותר.</h1>
                    <p className='small-text'>כנס חדשנות בלמידה 2023</p>
                    <button className='sign-btn pointer'>להרשמה</button>
                </div>
                <div className='black-section1' ref={motionRefBlack}>
                    <FrontAnimation></FrontAnimation>
                    {/* <div className='throw-object'></div> */}
                    {/* <div className='blue-half-circle'></div>
                    <div className='blue-circle'></div> */}
                    {/* <div className='try'>...</div> */}
                </div>
            </span>

            <span className='section2 section'>
                <div className='white-section2'>

                    <div className='text-pic-section text-pic-section1'>

                        <div className='text-section text-section1'>
                            <motion.div ref={motionRef1} style={{ transform: isInView1 ? "none" : "translateX(300px)", opacity: isInView1 ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                                <h1 className='header'>KNOW IT?</h1>
                                <p className="main-page-text">{DATA[0]}</p>
                            </motion.div>
                        </div>
                        <Slider className='slider'></Slider>

                    </div>

                    <div className='text-pic-section text-pic-section2'>
                        <div className='logo-till'></div>
                        <div className='text-section text-section2'>
                            <motion.div ref={motionRef2} style={{ transform: isInView2 ? "none" : "translateX(-300px)", opacity: isInView2 ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                                <h1 className='header'>מדור טי״ל</h1>
                                <p className="main-page-text">{DATA[1]}</p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={motionRefTimer} style={{ opacity: isInViewTimer ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                        <CountdownTimer targetDate={props.targetDate} />
                    </motion.div>
                </div>
            </span>
            <span className='section3 section'>
                <div className='black-section2'>
                    <ParticipantsPreview></ParticipantsPreview>
                </div>
                <SquareDetails></SquareDetails>
            </span>

        </div>
    );
}

export default MainPage;