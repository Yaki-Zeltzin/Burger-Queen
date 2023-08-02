import product from "../../../images/Group 8(1).png"
const Meal = () => {




    return (
        <section className="container">
            <div className="product">
                <img className="img-products" src={product} alt="meals" />
                <p className="item-product">Café americano
                    <span> $19</span></p>
            </div>
            <div className="product">
                <img className="img-products" src={product} alt="meals" />
                <p className="item-product">Café americano
                    <span> $19</span></p>
            </div>
            <div className="product">
                <img className="img-products" src={product} alt="meals" />
                <p className="item-product">Café americano
                    <span> $19</span></p>
            </div>
            <div className="product">
                <img className="img-products" src={product} alt="meals" />
                <p className="item-product">Café americano
                    <span> $19</span></p>
            </div>
        </section>
    )
}

export default Meal