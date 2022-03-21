import React, { useState} from "react"
import AddHealth from "../../components/AddCustomer";
import CustomerService from "../../Services/CustomerService";
import CustomerList from "../../components/CustomerList";

const CustomerPage = () => {
    const [customer, setCustomer] = useState([]);

    const fetchCustomer = async () => {

        let customerData = await CustomerService.getAllCustomer()
        setCustomer(customerData);

    };



    return (
        <>

            <div style={{display: "flex", flexDirection: "row"}}>

                <div style={{width: "50%"}}>
                    <CustomerList fetchCustomer={fetchCustomer} customer={customer}/>
                </div>
                <div style={{width: "50%"}}>
                        <AddHealth fetchCustomer={fetchCustomer}/>
                </div>
            </div>
        </>
    )
}

export default CustomerPage