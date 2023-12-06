// Write all the code here
import youTube from "../../assets/svg/youtube-svgrepo-com.svg"
import instagram from "../../assets/svg/instagram-svgrepo-com.svg"
import github from "../../assets/svg/github-svgrepo-com.svg"

function Footer() {
  return (
    <>
        <div>
            <footer>
                <div>
                    <h2>Burger Shop</h2>
                    <p>We are trying to give you the best taste possible</p>
                    <p>We give attention to genuine feedback. <span>All tights reserved @burgershop</span></p>
                </div>
                <aside className="footer-icons">
                    <h4>Follow Us</h4>
                    <a href="#" className="icons tube">
                        <img src={youTube} alt="youTube icon" width={"35px"}/>
                    </a>
                    <a href="#" className="icons tube">
                        <img src={instagram} alt="instagram icon" width={"35px"} />
                    </a>
                    <a href="#" className="icons tube">
                        <img src={github} alt="github icon" width={"40px"} />
                    </a>
                </aside>
            </footer>
        </div>
    </>
  )
}

export default Footer
