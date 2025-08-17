import Stripe from "stripe"
import '../../../envConfig.js'

//initialising stripe to a new instance of class Stripe
//that we just imported
const API_KEY=process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripe=new Stripe(API_KEY, {
    apiVersion: '2023-10-16'
})

//now we define endpoints so that our front end/app
//can communicate with the api and send network requests
//to this api endpoint to get the products because it's 
//in communication with stripe

export async function GET(){
    try{
       //fetch all the active products from stripe
       const products=await stripe.products.list({active: true})

       //fetch all the prices that are active
       const prices=await stripe.prices.list({active: true})

       //combine the products and their associated prices
       const combineData=products.data.map((product)=>{
        const productPrices=prices.data.filter((price)=>{
           return price.product===product.id
        })
          return {
            ...product,
            prices: productPrices.map((price)=>{
                return{
                    id: price.id,
                    unit_amount: price.unit_amount,
                    currency: price.currency,
                    recurring: price.recurring
                }
            })
          }
       })
       //send the combined data as json
       return Response.json(combineData)

    } catch(err){
        //end points need to respond even if there is an error
        console.error('Error fetching data from stripe:', err.message)
        return Response.json({error: 'Failed to fetch data from stripe'})
    }   
}


//this was the server side stuff
//to actually get this stuff into our app 
//we're gonna write logic in page.js