import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/ProductList";
function Home() {
    return ( 
        <div>
           <NavBar>
           <ProductList/>
           </NavBar>
        </div>
     );
}

export default Home;