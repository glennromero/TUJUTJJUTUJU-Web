import { useEffect, useRef } from 'react'
import herovid from '../../assets/coffe-roast-bg.mp4'
import './Hero.css'
import { TweenMax, Power3 } from "gsap"


const Hero = () => {

   let h1 = useRef(null);
   let paragraph = useRef(null)
   let button = useRef(null);

   useEffect(() => {
    console.log(h1);
    TweenMax.to(
        h1,
        .8,
        {
           opacity:1,
           y: -20,
           ease: Power3.easeOut, 
           delay: .8
        }
    )
    TweenMax.to(
        paragraph,
        1,
        {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
            delay: .5
        }
       )

       TweenMax.to(
        button,
        1,
        {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
            delay: .3
        }
       )
   }, [])

   const handleClick = () => {
        const targetElement = document.querySelector("#catalog");

        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            })
        }
   }

    return (
        <>
           <div className="heroContainer" id='home'>
                <video className='bg-video' src={herovid} autoPlay loop muted preload playsInline/>
                <div className="overlay"></div>
                <div className='content-container'>
                    <h1 className='heading' ref={el => {h1 = el}} >When Farming Takes a Creative Turn.</h1>
                    <p className='subHeading' ref={el => {paragraph = el}}>Bringing a new level of high quality product with a traditional ways.</p>
                    <button className='callOutAction' ref={el => {button = el}} onClick={handleClick}>Our Beans</button>
                </div>
           </div>
        </>
    )
}

export default Hero;