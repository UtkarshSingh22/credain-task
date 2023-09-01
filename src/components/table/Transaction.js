import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Status from "./Status";
import MenuIcon from "../../logos/dots.png";
import IndiaFlag from "../../logos/india.png";
import CanadaFlag from "../../logos/canada.png";
import USAFlag from "../../logos/united-states.png";

const getFlag = (country) => {
    return country === "India"
        ? IndiaFlag
        : country === "Canada"
        ? CanadaFlag
        : USAFlag;
};

const Transaction = ({ transaction, rate, isLoading }) => {
    const navigate = useNavigate();
    const usdEquivalent = (transaction.amount / rate).toFixed(2);
    const { payerCountry, payeeCountry } = transaction;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div
            key={`${transaction.transactionDate}-${transaction.invoiceNo}`}
            className="flex h-10 px-6 gap-4 items-center bg-white mb-0.5 text-sm text-gray-500 hover:bg-slate-100 cursor-pointer"
            onClick={() =>
                navigate(
                    `/details?date=${transaction.transactionDate}&invoice=${transaction.invoiceNo}`
                )
            }
        >
            <div className="w-28">{transaction.transactionDate}</div>
            <div className="w-28 text-blue-600 underline font-semibold">
                {transaction.invoiceNo}
            </div>
            <div className="w-48 flex gap-1">
                <img alt="flag" src={getFlag(payerCountry)} className="w-5" />
                <div>{transaction.payer}</div>
            </div>
            <div className="w-48 flex gap-1">
                <img alt="flag" src={getFlag(payeeCountry)} className="w-5" />
                <div>{transaction.payee}</div>
            </div>
            <div className="w-24">₹{transaction.amount}</div>
            <div className="w-24">{isLoading ? "-" : `$${usdEquivalent}`}</div>
            <div className="w-48">
                <Status activeBar={transaction.status} />
            </div>
            <div className="w-24 flex justify-center relative">
                <div
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <img src={MenuIcon} alt="Menu" className="w-5 h-5" />
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-0 left-16 mt-2 bg-white shadow-md rounded-md cursor-pointer">
                        <div
                            className="px-4 py-2 hover:bg-slate-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Delete
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Transaction;
