import { useSelector } from "react-redux";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { transactionSliceActions } from "../store/slices/transactions";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const data = useSelector((state) => state.transactions);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const date = searchParams.get("date");
    const invoice = searchParams.get("invoice");

    const transaction = data.find(
        (item) => item.transactionDate === date && item.invoiceNo === invoice
    );

    const [editedTransaction, setEditedTransaction] = useState({
        payer: transaction.payer || "",
        payee: transaction.payee || "",
        amount: transaction.amount || "",
        status: transaction.status || "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction({
            ...editedTransaction,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTransaction = { ...transaction, ...editedTransaction };
        dispatch(transactionSliceActions.editTransaction(newTransaction));
        navigate("/");
    };

    return (
        <div className="flex p-4 space-x-4 max-w-4xl mx-auto my-10">
            <div className="flex-1 p-4 bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-2">
                    Transaction Details
                </h2>
                <p className="mb-2">
                    Transaction Date: {transaction.transactionDate}
                </p>
                <p className="mb-4">Invoice No: {transaction.invoiceNo}</p>
            </div>

            <div className="flex-1 p-4 bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-2">Edit Transaction</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1">
                            Payer:
                        </label>
                        <input
                            type="text"
                            name="payer"
                            value={editedTransaction.payer}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">
                            Payee:
                        </label>
                        <input
                            type="text"
                            name="payee"
                            value={editedTransaction.payee}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">
                            Amount: ₹
                        </label>
                        <input
                            type="number"
                            name="amount"
                            value={editedTransaction.amount}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">
                            Status:
                        </label>
                        <select
                            name="status"
                            value={editedTransaction.status}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full"
                        >
                            Save Changes
                        </button>
                        <button
                            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition w-full"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Details;
