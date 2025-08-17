import "./globals.css";
import Head from "./head"
import Link from "next/link"
import Cart from "@/components/Cart"
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext"


export const metadata = {
  title: "Crimsons-store",
  description: " Elevate every step with fierce red-bottomed stilts that turn heads and own the spotlight.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <Head />
      <body>
        <ProductsProvider>
        <div id="portal" />
        <div id="app">
         <header>
          <div className="header-content">
          <Link href={"/"}>
          <h1>Crimsons</h1>
          </Link>
          <h5 className="mid-text">Elegance meets edge.</h5>
          <Cart /> </div>
         </header>
         <main>
        {children}
        </main>
        <div className="hr" />
        <footer>
          <div className="email-container">
            <h5>
              Get a sneak peak at new additions to the store, special offers and so much more.
            </h5>
            <EmailInput />
          </div>
          <div className="links-container">
            <div>
              <h3>Vanshika Choudhary</h3>
              <Link href={'https://vanshikacy.github.io/web-portfolio/'}>Portfolio</Link>
              <Link href={'https://github.com/vanshikacy'}>GitHub</Link>
            </div>
             <div>
              <h3>Store</h3>
              <Link href={'/'}>Home</Link>
              <Link href={'/cart'}>Cart</Link>
            </div>
             <div>
              <h3>Support</h3>
              <Link target="_blank" href={'/contact'}>Contact</Link>
              <Link target="_blank" href={'/faq'}>FAQs</Link>
            </div>
          </div>
          <div className="socials">
            <p>© <a href="https://vanshikacy.github.io/web-portfolio/" target="_blank">
            Vanshika Choudhary 🐾</a> 2025 
            <br/> Built with NextJS</p>
            <div className="social-links">
              <Link href={'/'} target="_blank"><i className="fa-brands fa-github"></i></Link>
              <Link href={'/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
              
            </div>
          </div>
        </footer>
        </div>
        </ProductsProvider>
      </body>
    </html>
    
  );
}
