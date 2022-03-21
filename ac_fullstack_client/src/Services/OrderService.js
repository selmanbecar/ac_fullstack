class OrderService {
    static BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    static async getAllOrder() {
        return fetch(`${this.BACKEND_URL}/api/program_steps`, {
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
                throw new Error("Error fetching order data!");
            })
            .then((res) => {
                return res
            });
    }

    static async addOrder(data) {
        return fetch(`${this.BACKEND_URL}/api/program_steps`, {
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

                throw new Error("Error adding order record in!");
            })
            .then((res) => {
                return res;
            });
    }


}

export default OrderService;