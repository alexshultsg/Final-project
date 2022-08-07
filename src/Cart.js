import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotal } from "./redux/cartSlice";
import { useEffect } from "react";

const Cart = () => {
    const cart = useSelector((state ) => state.cart);
    const dispatch = useDispatch();

    useEffect( () => {
       dispatch(getTotal())
    },[cart,dispatch]);



    const handleRemoveCartFromCart = (bike) => {
        dispatch(removeFromCart(bike))
    }
    const handleDecreaseCart = (bike) => {
        dispatch(decreaseCart(bike))
    }
    const handleIncreaseCart = (bike) => {
        dispatch(addToCart(bike))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return(
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                     <Link to = "/home">
                     <svg xmlns="http://www.w3.org/2000/svg"
                      width="20" 
                      height="20"
                       fill="currentColor" 
                       className="bi bi-arrow-left" 
                       viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 
                      .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                        <span>Start Shopping</span>
                     </Link>
                    </div>
                </div>
            ) : (<div>
                <div className="titles">
                    <h3 className = "product-title">Product</h3>
                    <h3 className= "price">Price</h3>
                    <h3 className= "quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    { cart.cartItems?.map(bike => (
                      <div className = "cart-item"  key = {bike.id}>
                        <div className = "cart-product">
                            <img className="cartImg" src = {`${bike.image}.webp`} alt = {bike.name}/>
                            <div>
                                <h3>{bike.name}</h3>
                                <button onClick = { () => handleRemoveCartFromCart(bike)}>Remove</button>
                            </div>
                        </div>
                        <div className = "product-price">$ { bike.price}</div>
                        <div className = "product-quantity">
                            <button onClick = { () => handleDecreaseCart(bike)}>-</button>
                            <div className = "count">{bike.cartQuantity}</div>
                            <button onClick = { () => handleIncreaseCart(bike)}>+</button>
                        </div>
                        <div className = "cart-totalPrice">
                            $ { bike.price * bike.cartQuantity}
                        </div>
                      </div>
                    ))}
                </div>
                <div className = "cart-summary">
                    <button onClick = { () => handleClearCart()} className="clear">Clear Cart</button>
                    <div className="checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">$ {cart.cartTotalAmount}</span>
                        </div>
                        <p className="taxes">Taxes and shipping calculated at checkout</p>
                        <Link to = "/checkout">
                        <button>Checkout</button>
                        </Link>
                        <div className="continue-shopping">
                     <Link to = "/home">
                     <svg xmlns="http://www.w3.org/2000/svg"
                      width="20" 
                      height="20"
                       fill="currentColor" 
                       className="bi bi-arrow-left" 
                       viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 
                      .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                        <span>Continue Shopping</span>
                     </Link>
                    </div>
                    </div>
                </div>

            </div>)}
        </div>
    )
}
export default Cart