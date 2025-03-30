import react from "react";
import InvoiceForm from "./components/InvoiceForm.js";
import { Link } from 'react-router-dom';

//Creates the overarching InoivceFormPage which contains the InvoiceForm component.
const InvoiceFormPage = () => {
    return (
        <div className="w-full p-6">
            <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Back
                </button>
            </Link>
            <h1 className="text-3xl font-semibold text-center">
                Invoice Form
            </h1>
            <InvoiceForm/>
        </div>
    );
}
export default InvoiceFormPage;