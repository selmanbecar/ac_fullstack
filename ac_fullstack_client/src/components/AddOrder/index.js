import React, {useEffect, useState} from "react"
import OrderService from "../../Services/OrderService";
import CustomerService from "../../Services/CustomerService";
import ProgramService from "../../Services/ProgramService";
import steps from "../../constants/program_steps"



const AddOrder = ({fetchOrder}) => {

    //states
    const [customer, setCustomer] = useState([]);
    const [user, setUser] = useState(-1);

    const [program, setProgram] = useState([]);
    const[selectProgram, setSelectProgram] = useState(-1)
    const [programSteps, setProgramSteps] = useState([]);
    const [selectProgramSteps, setSelectProgramSteps] = useState(-1)

    const program_steps = steps.PROGRAM_STEPS

    useEffect(() => {
        (async () => {
            // Get customer, program , program_steps data for order dropdowns
            let customerData = await CustomerService.getAllCustomer()
            setCustomer(customerData);

            let programData = await ProgramService.getAllProgram()
            setProgram(programData);

            setProgramSteps(program_steps)
        })()


    },[])


    //handle changes
    const handleCustomerChange = (event) => {
        setUser(event.target.value);
    };
    const handleProgramChange = (event) => {
        setSelectProgram(event.target.value);
    };
    const handleProgramStepsChange = (event) => {
        setSelectProgramSteps(event.target.value);
    };

    //add function for adding new order record
    const addOrder= async (event) => {
        event.preventDefault();

        const data = {
            customer:user,
            program: selectProgram,
            program_steps:selectProgramSteps
        }
       const newOrder = await OrderService.addOrder(data);
        alert("Customer need to pay " + newOrder[0].program.price + " $. Discount?: " + newOrder[0].final_price )
        await fetchOrder()

    };


    return (
        <div>
            <form>
                <div>
                    <div/>
                    <div>
                        <p>Select Customer</p>
                        <select
                                id="customer"
                                name="customer"
                                value={user}
                                onChange={handleCustomerChange}
                                >
                            {customer && customer.map((item) => {
                                return(
                                    <option value={item.id && item.id}>{item.id && item.id}, {item.first_name && item.first_name}</option>
                                )

                            })}
                        </select>


                    </div>
                    <div>
                        <p>Select Program</p>
                        <select
                            id="program"
                            name="program"
                            value={selectProgram}
                            onChange={handleProgramChange}
                        >
                            {program && program.map((item) => {
                                return(
                                    <option value={item.id && item.id}>{item.name && item.name}, {item.price && item.price}$</option>
                                )

                            })}
                        </select>


                    </div>
                    <div>
                        <p>Select Program Steps</p>
                        <select
                            id="programSteps"
                            name="programSteps"
                            value={selectProgramSteps}
                            onChange={handleProgramStepsChange}
                        >
                            {programSteps && programSteps.map((item) => {
                                return(
                                    <option value={item.value}>{item.label}</option>
                                )

                            })}
                        </select>
                    </div>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={addOrder}

                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddOrder