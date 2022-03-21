import React, {useState} from "react"
import ProgramService from "../../Services/ProgramService";

const AddProgram= ({fetchProgram}) => {

    //states
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");



    //handle changes
    const handeNameChange = (event) => {

        setName(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    //add function for adding new program record
    const addProgram= async (event) => {
        event.preventDefault();

        const data = {
            name,
            price
        }
        await ProgramService.addProgram(data);
        await fetchProgram()

    };


    return (
        <div>
            <form>
                <div>
                    <div/>
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            required
                            id="name"
                            name="name"
                            value={name}
                            onChange={handeNameChange}
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <p>Price</p>
                        <input
                            type="number"
                            min="0"
                            required
                            id="price"
                            name="price"
                            value={price}
                            onChange={handlePriceChange}
                            autoComplete="price"
                        />
                    </div>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={addProgram}

                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProgram