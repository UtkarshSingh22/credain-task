const Status = ({ activeBar }) => {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col items-center">
                <div
                    className={`px-2 py-0.5 w-12 rounded-md ${
                        activeBar === 1 || activeBar === 2 || activeBar === 3
                            ? "bg-blue-900"
                            : "border-gray-200"
                    }`}
                ></div>
                <div
                    className={`text-xs ${
                        activeBar === 1 || activeBar === 2 || activeBar === 3
                            ? "text-blue-900 font-semibold"
                            : "text-white font-semibold"
                    }`}
                >
                    First
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div
                    className={`px-2 py-0.5 w-12 rounded-md ${
                        activeBar === 2 || activeBar === 3
                            ? "bg-blue-900"
                            : "bg-gray-300"
                    }`}
                ></div>
                <div
                    className={`text-xs ${
                        activeBar === 2 || activeBar === 3
                            ? "text-blue-900 font-semibold"
                            : "text-white font-semibold"
                    }`}
                >
                    Second
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div
                    className={`px-2 py-0.5 w-12 rounded-md ${
                        activeBar === 3 ? "bg-blue-900" : "bg-gray-300"
                    }`}
                ></div>
                <div
                    className={`text-xs ${
                        activeBar === 3
                            ? "text-blue-900 font-semibold"
                            : "text-white font-semibold"
                    }`}
                >
                    Third
                </div>
            </div>
        </div>
    );
};

export default Status;
