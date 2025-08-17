import Stripe from "stripe"
import '../../../envConfig.js'

//initialising stripe to a new instance of class Stripe
//that we just imported
const API_KEY=process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripe=new Stripe(API_KEY)

export async function POST(request){
    try{
        const {lineItems} = await request.json()
        console.log(lineItems)
        const session=await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            success_url: process.env.NEXT_PUBLIC_BASE_URL + '/success',
            cancel_url:process.env.NEXT_PUBLIC_BASE_URL+ '/'
        })
        return Response.json(session)

    } catch (err) {
     //end points need to respond even if there is an error
        console.error('Error creating cart checkout:', err.message)
        return Response.json({error: 'Failed to create stripe checkout page'})
    }
}