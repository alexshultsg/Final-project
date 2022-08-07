import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom"

const BikeProduct = ({bike}) => {
    const [showMore,setShowMore] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (bike) => {
        dispatch(addToCart(bike));
        navigate("/cart");
        
        
    }

    const showTextClick = (bike) => {
        bike.showMore = ! bike.showMore
        setShowMore(!showMore)
    }
    return (
        <div className="container-product">
         <img src = { `${bike.image}.webp`} alt="bike"/>
         <p className="name">{bike.name}</p>
         <p className="price">$ {bike.price}</p>
         <p className="text">{showMore ? bike.description : bike.description.substring(0,80)}
         <button className="btn" onClick = { () => showTextClick(bike)}>{showMore ? "showLess" : "showMore"}</button></p>
         <button onClick = { () => handleAddToCart(bike)} className="btnCart">Add To Cart</button>
        </div>
    )
}
export default BikeProduct;