// import { XCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FailurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        {/* <XCircleIcon className="w-20 h-20 text-red-500 mx-auto" /> */}
        <h2 className="text-2xl font-semibold mt-4">Payment Failed!</h2>
        <p className="text-gray-600 mt-2">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-all"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default FailurePage;
