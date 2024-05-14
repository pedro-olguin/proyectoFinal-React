import '../styles/Layout.css'
import Footer from "./Footer";
import Header from "./Header";


export default function Layout({children}){
    return(
    <>
    <Header/>
    <main className="mainStyle">
        {children}
    </main>
    <Footer/>
    </>
    )
}
