import { useSelector, useDispatch } from "react-redux";
import { sortOrderSliceActions } from "../../store/slices/sortOrder";
import { transactionSliceActions } from "../../store/slices/transactions";
import Sort from "../../logos/sort.png";

const Head = ({ transactions }) => {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state) => state.sortOrder);

    const sortItems = (sortBy) => {
        const currSortOrder = sortOrder[sortBy];
        const order =
            currSortOrder === 0 ? true : currSortOrder === 1 ? false : true;

        dispatch(transactionSliceActions.updateTransactions({ sortBy, order }));
        dispatch(sortOrderSliceActions.updateOrder(sortBy));
    };

    return (
        <div className="flex h-14 gap-4 bg-gray-100 rounded-xl px-6 items-center text-sm font-semibold">
            <div
                className="w-28 flex gap-1 items-center"
                onClick={() => sortItems("transactionDate")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Transaction Date
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-28 flex gap-1 items-center"
                onClick={() => sortItems("invoiceNo")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Invoice No.
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-48 flex gap-1 items-center"
                onClick={() => sortItems("payer")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Payer
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-48 flex gap-1 items-center"
                onClick={() => sortItems("payee")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Payee
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-24 flex gap-1 items-center"
                onClick={() => sortItems("amount")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Amount
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-24 flex gap-1 items-center"
                onClick={() => sortItems("amount")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    USD Equivalent
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div
                className="w-48 flex gap-1 items-center"
                onClick={() => sortItems("status")}
            >
                <div className="hover:text-blue-600 cursor-pointer transition-all">
                    Status
                </div>
                <img src={Sort} alt="sort" className="w-5 h-5" />
            </div>
            <div className="w-24 flex items-center pl-6">
                <div>Action</div>
            </div>
        </div>
    );
};

export default Head;
