
import ImageBanner from "@components/ImageBanner";
import Products from "@components/Products";

export async function getProducts(){
  //fetching data on the server side
  const baseURL=process.env.NEXT_PUBLIC_BASE_URL
  const response=await fetch(baseURL+'/api/products')
  const products=await response.json()
  return products
}


export default async function Home() {

  const products=await getProducts()
  let bag=null
  let shoes=[]

  for(let product of products){
    if(product.name=== 'Mini LE 5 À 7 In Patent Leather'){
     bag=product
    continue} 
    shoes.push(product)
  }



  return (
    <> 
    <ImageBanner/>
    <section>
      <Products bag={bag} shoes={shoes}/>
    </section>
    </>
  );
}
