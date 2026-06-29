import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-red-600">
          Payment Failed ❌
        </h1>

        <p className="mt-4 text-gray-600">
          Your payment was not completed.
        </p>

        <Link
          to="/courses"
          className="mt-6 inline-block bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Try Again
        </Link>

      </div>
    </div>
  );
};

export default PaymentFailed;