import react, {useState} from 'react';

const InvoiceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the InvoiceModel
        const invoiceModel = {
            invoiceNumber: Math.floor(Math.random() * 1000000), // Random invoice number for demonstration
            customerName: formData.name,
            amount: formData.amount
        };

        try {
            // Post the data to your backend
            const response = await fetch('/api/invoices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(invoiceModel)
            });

            if (response.ok) {
                console.log('Invoice submitted successfully');
                // Optionally reset the form
                setFormData({ name: '', email: '' });
            } else {
                console.error('Failed to submit invoice');
            }
        } catch (error) {
            console.error('Error submitting invoice:', error);
        }
    };

    return (
        <div className="w-full p-6">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="text"
                        placeholder="Amount"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default InvoiceForm;