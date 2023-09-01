import Head from "./Head";
import Transaction from "./Transaction";

const Table = ({ transactions, rate, isLoading }) => {
    return (
        <div className="p-0.5 bg-gray-100 rounded-md">
            <Head transactions={transactions} />
            <div>
                {transactions.map((item) => {
                    return (
                        <Transaction
                            transaction={item}
                            rate={rate}
                            isLoading={isLoading}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
