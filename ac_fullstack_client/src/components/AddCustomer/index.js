import React, {useState} from "react"
import CustomerService from "../../Services/CustomerService";

const AddCustomer = ({fetchCustomer}) => {

    //states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");



    //handle changes
    const handleFirstNameChange = (event) => {

        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    //add function for adding new customer record
    const addCustomer= async (event) => {
        event.preventDefault();

        const data = {
            first_name:firstName,
            last_name:lastName
        }
        await CustomerService.addCustomer(data);
        await fetchCustomer()

    };


    return (
        <div>
            <form>
                <div>
                    <div/>
                    <div>
                        <p>First Name</p>
                        <input
                            type="text"
                            required
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            autoComplete="firstName"
                        />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input
                            type="text"
                            required
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            autoComplete="lastName"
                        />
                    </div>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={addCustomer}

                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddCustomer