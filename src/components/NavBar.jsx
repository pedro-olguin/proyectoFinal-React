import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import '../styles/NavBar.css'

function NavBar(){
    return(
        <div className='navegador'>
            <CategoryList />
            <CartWidget />
            
        </div>
    )
}

export default NavBar;