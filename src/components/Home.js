import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FirstCard from "./cards/FirstCard";
import Card from "./cards/Card";
import Table from "./table/Table";
import formatAmount from "../utils/convertAmount";

const Home = () => {
    const [rate, setRate] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const data = useSelector((state) => state.transactions);

    const totalAmount = formatAmount(
        data.reduce((accumulator, transaction) => {
            return accumulator + transaction.amount;
        }, 0)
    );

    const finalStageTransactions = data.reduce((accumulator, transaction) => {
        return accumulator + (transaction.status === 3 ? 1 : 0);
    }, 0);

    const apiUrl = "https://open.er-api.com/v6/latest/USD";

    useEffect(() => {
        setIsLoading(true);
        try {
            const fetchCurrencyRate = async () => {
                const response = await fetch(apiUrl);
                const currRate = await response.json();

                setRate(currRate.rates.INR);
            };
            fetchCurrencyRate();
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    }, []);

    return (
        <div className="flex flex-col max-w-6xl mx-auto mt-12 gap-6">
            <div className="flex gap-16 relative">
                <FirstCard amount={totalAmount} />
                <Card title="Number of transactions" value={data.length} />
                <Card
                    title="Number of transactions in the final state"
                    value={finalStageTransactions}
                />
            </div>
            <Table transactions={data} rate={rate} isLoading={isLoading} />
        </div>
    );
};

export default Home;
