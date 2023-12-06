// Write all the code here
import { Link } from "react-router-dom";
import Header from "../layout/Header"
import Footer from "../layout/Footer"


function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div >
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </div>
        
          <Link to="/menu" className="explore">
            Explore Menu
          </Link>
          
        
      </section>
      <Footer />
    </>
  )
}

export default Home



