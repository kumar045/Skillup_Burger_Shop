// Write all the code here
import "../../styles/menu.scss"
import MenuCard from "./MenuCard"
import menuData from "../../menuData"

function Menu() {
  return (
    <>
        <div id="menu">
            <h3>Menu</h3>
            <div>
                {menuData.map(item => (
                    <MenuCard 
                    key={item.itemNum}
                    itemNum={item.itemNum}
                    burgerSrc={item.burgerSrc}
                    price={item.price}
                    title={item.title}
                    />
                )) }
            </div>
        </div>
    </>
  )
}

export default Menu