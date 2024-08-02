import './product.css';
import Product from './product';
function ProductGrid()
{
    return (<div className="product-grid">
            <Product name="PC" price="90 euro" urlImage="./img/pc.png"/> 
            <Product name="Bici" price="900 euro" urlImage="./img/bici.png"/>
        </div>);
}

export default ProductGrid;