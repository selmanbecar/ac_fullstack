import React, {useEffect} from "react"

const ProgramList = ({fetchProgram,program}) => {

    useEffect(() => {
        (async () => {
            await fetchProgram()
        })()

    },[])


    return (
        <div>
            {program && program.map((item) => {
                return (
                    <div style={{border: "1px solid black", margin: "5px", padding: "1px", lineHeight: "0.5"}}>
                        <h4>Name: {item.name && item.name}</h4>
                        <h4>Price: {item.price && item.price} $</h4>
                    </div>
                )
            })}

        </div>
    )
}

export default ProgramList