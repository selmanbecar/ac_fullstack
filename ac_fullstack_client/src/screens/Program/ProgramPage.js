import React, { useState} from "react"
import AddProgram from "../../components/AddProgram";
import ProgramService from "../../Services/ProgramService";
import ProgramList from "../../components/ProgramList";

const ProgramPage = () => {
    const [program, setProgram] = useState([]);

    const fetchProgram= async () => {

        let programData = await ProgramService.getAllProgram();
        setProgram(programData);

    };

    return (
        <>

            <div style={{display: "flex", flexDirection: "row"}}>

                <div style={{width: "50%"}}>
                    <ProgramList fetchProgram={fetchProgram} program={program}/>
                </div>
                <div style={{width: "50%"}}>
                    <AddProgram fetchProgram={fetchProgram}/>
                </div>
            </div>
        </>
    )
}

export default ProgramPage