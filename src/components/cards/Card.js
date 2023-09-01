import Receipt from "../../logos/bill.png";

const Card = ({ title, value }) => {
    return (
        <div className="flex-1 h-32 bg-gray-100 rounded-xl flex">
            <div className="w-1/4 flex justify-center items-center">
                <img src={Receipt} alt="Bill sign" className="w-12" />
            </div>
            <div className="w-3/4 flex flex-col justify-center pr-20">
                <div className="text-blue-900 text-base font-semibold mb-1">
                    {title}
                </div>
                <div className="flex items-end">
                    <h2 className="text-blue-900 text-2xl font-bold ">
                        {value}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
