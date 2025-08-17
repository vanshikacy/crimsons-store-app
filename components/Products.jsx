'use client'

import {useState} from "react"
import Portal from "./Portal"
import {useProducts} from "@/context/ProductContext"

export default function Products(props){
  const { bag, shoes} = props


  const [portalImage, setPortalImage] =useState(null)

  const {handleIncrementProduct, cart} =useProducts()
  console.log(cart)


    if(!shoes.length || !bag) {return null}

    return(
        <>

        {portalImage && (
        <Portal handleClosePortal={()=>{setPortalImage(null)}} >
          <div className="portal-content">
            <img className="img-display"  src={`med_res/${portalImage}.jpg`}
            alt={`${portalImage}-high-res`}/>
          </div>
        </Portal>)
        }

          <div className="section-container">
            <div className="section-header">
                <h2>Shop Our Selection</h2>
                <p>Elevate Your Every Step.</p>
            </div>

            <div className="bag-container">
                <div>
                    <button onClick={()=>{
                      setPortalImage('bag')
                    }}
                     className="img-button">
                    <img src="low_res/bag.jpg" alt="high-res-bag" />
                    </button>
                </div>

                <div className="bag-info">
                    <p className="text-large bag-header">
                        MINI LE 5 À 7 IN PATENT LEATHER
                    </p>
                    <h3><span>$</span>1,635</h3>
                    <p>The mini version of the LE 5 À 7, featuring a leather tab closure decorated with the CASSANDRE, lined in tonal suede.
This compact bag is designed to be carried by hand.</p>
                    <ul>
                        <li>SUEDE LINING</li>
                        <li>BRONZE-TONED HARDWARE</li>
                        <li>ONE CARD SLOT</li>
                        <li>DIMENSIONS: 19 x 11.5 x 4.5 cm / 7.5" x 4.5" x 1.8"</li>
                        <li>HANDLE DROP: 15 cm / 5.9"</li>
                        <li>LAMBSKIN</li>
                        <li>MADE IN ITALY</li>
                    </ul>

                    <div className="purchase-btns">
                        <button
                        onClick={()=>{
                          const bagPriceId=bag.default_price
                          handleIncrementProduct(bagPriceId,1, bag)
                        }}
                        >Add to cart</button>
                    </div>

                </div>
            </div>
          </div>
           
           <div className="section-container">
            <div className="section-header">
                <h2>Or Collect Your Favorite Heels</h2>
                <p>Choose from our highly curated collection</p>
            </div>
            <div className="shoe-container">
                {shoes.map((shoe, shoeIndex)=>{
                  const shoeName=shoe.name
    
                  return(
                    <div key={shoeIndex} className="shoe-card">
                        <button onClick={()=>{
                      setPortalImage(shoeName)
                    }}
                         className="img-button">
                            <img src={`low_res/${shoeName}.jpg`}
                            alt={`${shoeName}-low-res`} />
                        </button>

                    <div className="shoe-info">
                    <p className="text-medium">
                        {shoeName}</p>
                        <p>{shoe.description}</p>
                        <h4><span>$</span>{shoe.prices[0].unit_amount/100}</h4>
                        <button
                        onClick={()=>{
                          const shoePriceId=shoe.default_price
                          handleIncrementProduct(shoePriceId,1, shoe)
                        }}
                        >Add to cart</button>

                        </div></div>
                  )
                })}
            </div>
           </div>

        </>
    )
}
