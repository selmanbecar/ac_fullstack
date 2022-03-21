class CustomerService {
    static BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    static async getAllCustomer() {
        return fetch(`${this.BACKEND_URL}/api/customer`, {
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
                throw new Error("Error fetching customer data!");
            })
            .then((res) => {
                return res
            });
    }


    static async addCustomer(data) {
        return fetch(`${this.BACKEND_URL}/api/customer`, {
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

                throw new Error("Error adding customer record in!");
            })
            .then((res) => {
                return res;
            });
    }


}

export default CustomerService;