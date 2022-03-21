class ProgramService {
    static BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    static async getAllProgram() {
        return fetch(`${this.BACKEND_URL}/api/program`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Error fetching program data!");
            })
            .then((res) => {
                return res
            });
    }

    static async addProgram(data) {
        return fetch(`${this.BACKEND_URL}/api/program`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {

                    return res.json();
                }

                throw new Error("Error adding program record in!");
            })
            .then((res) => {
                return res;
            });
    }


}

export default ProgramService;