'use client'
import {useState} from "react"
export default function EmailInput(){
  const [email, setEmail]=useState('')

  async function handleAddSubscriber(){
    email.includes('@')
    try{
      //for LATER:
      //write post fetch function to send off the email
      //to a newsletter or this ecom site updates 
    } catch (err){
        console.log('Failed to add subscriber: ', err.message)
    }
  }
    return (
       <div className="sign-up">
            <input value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} placeholder="Email addresss..." />
            <button onClick={handleAddSubscriber} className="button-card">Sign Up</button>
        </div>
    )
}