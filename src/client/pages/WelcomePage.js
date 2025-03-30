import react from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="w-full p-6">
            <h1 className="text-3xl font-semibold text-center">
                Welcome to the Record Management System
            </h1>
            <Link to="/invoice">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Invoice
                </button>
            </Link>
        <div>
            <Link to="/orderForm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Order
                </button>
            </Link>
        </div>   
        </div>
    );
    }
export default WelcomePage;