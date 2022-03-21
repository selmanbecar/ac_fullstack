import React, { useState} from "react"
import AddOrder from "../../components/AddOrder";
import OrderService from "../../Services/OrderService";
import OrderList from "../../components/OrderList";

const CustomerPage = () => {
    const [order, setOrder] = useState([]);

    const fetchOrder = async () => {

        let orderData = await OrderService.getAllOrder();
        setOrder(orderData);

    };

    return (
        <>

            <div style={{display: "flex", flexDirection: "row"}}>

                <div style={{width: "50%"}}>
                    <OrderList fetchOrder={fetchOrder} order={order}/>
                </div>
                <div style={{width: "50%"}}>
                        <AddOrder fetchOrder={fetchOrder}/>
                </div>
            </div>
        </>
    )
}

export default CustomerPage