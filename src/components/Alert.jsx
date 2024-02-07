const Alert = ({ type, text }) =>  {
    return (
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div
                className={`p-2 &{
                    type === "danger" ? "bg-red-500" : "bg-blue-800"
                } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flrx`}
                role="alert"
            >
                <p
                    className={`flex roounded-full &{
                        type === "danger" ? "bg-red-500" : "bg-blue-500"
                    }  font-semibold text-xs mr-3 py-1 px-2 uppercase `}
                >
                    {type === "danger" ? "Failed" : "Success"}
                </p>
                <p className="mr-2 text-left">{text}</p>
            </div>
        </div>
    );
};

export default Alert