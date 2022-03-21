import React, {useEffect} from "react"

const OrderList = ({fetchOrder,order}) => {


    useEffect(() => {
        (async () => {
            await fetchOrder()
        })()

    },[])

    return (
        <div>
            {order && order.map((item) => {
                return (
                    <div style={{border: "1px solid black", margin: "5px", padding: "1px", lineHeight: "0.5"}}>
                        <h4>Customer id: {item.customer.id && item.customer.id}</h4>
                        <h4>Customer name: {item.customer.first_name && item.customer.first_name}</h4>
                        <h4>Program name: {item.program.name && item.program.name}</h4>
                        <h4>Program price: {item.program.price && item.program.price}$</h4>
                        <h4>Program steps: {item.program_steps && item.program_steps}</h4>
                        <h4>Price Discount: {item.final_price && item.final_price}</h4>


                    </div>
                )
            })}

        </div>
    )
}

export default OrderList