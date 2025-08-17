import Stripe from "stripe";
import '../../../envConfig.js';

export const dynamic = "force-dynamic"; 

export async function GET() {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY; 
    const stripe = new Stripe(API_KEY, { apiVersion: '2023-10-16' });

    const products = await stripe.products.list({ active: true });
    const prices = await stripe.prices.list({ active: true });

    const combineData = products.data.map((product) => {
      const productPrices = prices.data.filter(price => price.product === product.id);
      return {
        ...product,
        prices: productPrices.map((price) => ({
          id: price.id,
          unit_amount: price.unit_amount,
          currency: price.currency,
          recurring: price.recurring
        }))
      };
    });

    return Response.json(combineData);

  } catch (err) {
    console.error('Error fetching data from stripe:', err.message);
    return Response.json({ error: 'Failed to fetch data from stripe' });
  }
}
