// Write all the code here
import homeImg from "../../assets/bg.jpg";
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="home">
          <h1>BURGER SHOP</h1>
          <p>Give yourself a tasty burger.</p>
        </div>
        <div>
          <Link to='/menu' className="btn">
            Explore Menu
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home



