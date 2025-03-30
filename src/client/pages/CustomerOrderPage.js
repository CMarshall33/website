import react from "react";
import { Link } from 'react-router-dom';
import CustomerOrderForm from "../components/CustomerOrderForm.js";


const CustomerOrderPage = () => {
    return(
    <div>
        <div>
        <Link to ="/">
            <button>
                Back
            </button>
        </Link>
        </div>
        <div>
            <h1>
                Customer Order Page
            </h1>
        </div>
        <div>
            <CustomerOrderForm/>
        </div>

    </div>

);
}
export default CustomerOrderPage;