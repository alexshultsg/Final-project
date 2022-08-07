const Checkout = () => {
    return(
        <div className = "wrapper">
          <div className = "payment">
            <h2>Payment</h2>
            <div className = "form">
                <div className = "card space icon-relative">
                    <label className = "label">Card holder:</label>
                    <input type = "text" className = "input" name = "card_holder"></input>
                    <i className="fa-solid fa-user"></i>
                </div>

                <div className = "card space icon-relative">
                    <label className = "label">Card number:</label>
                    <input type = "text" className = "input" name = "card_number" placeholder = "Card number"></input>
                    <i className="fa-solid fa-credit-card"></i>
            </div>

            <div className = "card-info space">
                <div className = "card-item icon-relative">
                    <label className = "label">Expire date:</label>
                    <input type = "text" className = "input" name = "expire_date"
                     placeholder = "00 / 00"></input>
                        <i className="fa-solid fa-calendar-days"></i>
                     </div>

                     <div className = "card-item icon-relative">
                    <label className = "label">CVC:</label>
                    <input type = "text" className = "input" name = "cvc"
                     placeholder = "000"></input>
                     <i className="fa-solid fa-lock"></i>
                     </div>
                </div>
                <div className = "btnCheckout">
                    Pay
                </div>
            </div>
          </div>
        </div>
    )
}
export default Checkout;