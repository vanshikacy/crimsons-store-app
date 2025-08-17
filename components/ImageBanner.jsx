'use client'

import {useState, useRef, useEffect} from "react"

export default function ImageBanner(){
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef=useRef()

    useEffect(()=>{
        if(imgRef.current.complete){
            setIsLoaded(true);
        }
    }, [])

    return (
        <div className="banner-images">
            <img className="low-res-img" src="/med_res/banner.jpg" alt="banner-low-res" />
            <img ref={imgRef} className="high-res-img" src="/med-res/banner.jpg" alt="banner-high-res" 
              style={{opacity: isLoaded ? 1: 0}} onLoad={()=>{
               //this will make the image from invisible to transparent
               setIsLoaded(true);
              }}
            />
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>The Crimsons Store</h1>
                    </div>
                    <div>
                        <button onClick={() => document.querySelector(".shoe-container").scrollIntoView({ behavior: "smooth" })}>Shop shoes</button>
                        <button onClick={() => document.querySelector(".bag-container").scrollIntoView({ behavior: "smooth" })}>Shop bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}