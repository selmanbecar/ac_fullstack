import React, {useEffect} from "react"

const CustomerList = ({fetchCustomer,customer}) => {

    useEffect(() => {
        (async () => {
           await fetchCustomer()
        })()

    },[])


    return (
        <div>
            {customer && customer.map((item) => {
                return (
                    <div style={{border: "1px solid black", margin: "5px", padding: "1px", lineHeight: "0.5"}}>
                        <h4>First Name: {item.first_name && item.first_name}</h4>
                        <h4>Last Name: {item.last_name && item.last_name}</h4>
                    </div>
                )
            })}

        </div>
    )
}

export default CustomerList