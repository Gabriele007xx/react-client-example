function Product({name, urlImage, price})
{
    return (
        <div className="product">
            <div>
                <img src={urlImage}/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
            <h3>{price}</h3>
            </div>
        </div>
    );
}

export default Product;