import DollarSign from "../../logos/dollar.png";
import TrendUpIcon from "../../logos/trend.png";

const FirstCard = ({ amount }) => {
    return (
        <div className="flex-1 h-32 bg-blue-100 rounded-xl flex relative overflow-hidden">
            <div className="w-1/4 flex justify-center items-center">
                <img src={DollarSign} alt="Dollar sign" className="w-12" />
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <div className="flex items-end">
                    <h2 className="text-blue-600 text-3xl font-bold">
                        {amount}
                    </h2>
                    <h2 className="font-bold">&nbsp;USD</h2>
                </div>
                <div className="text-green-600 text-base font-semibold flex items-center gap-1">
                    <div>1.25%</div>
                    <img
                        src={TrendUpIcon}
                        alt="Trend sign"
                        className="w-4 h-4"
                    />
                </div>
            </div>
            <div className="absolute top-0 right-12 transform translate-x-16 -translate-y-1/2">
                <div
                    className="w-32 h-32 border border-blue-300 rounded-full"
                    style={{ borderWidth: "20px" }}
                ></div>
            </div>
        </div>
    );
};

export default FirstCard;
