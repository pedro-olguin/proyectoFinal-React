import Brand from "./Brand";
import NavBar from "./NavBar";
import '../styles/Header.css'


const Header = ()=>{
    return(
    <div className='header--style'>
      <Brand/>
      <NavBar/>
    </div>
    )}

export default Header;