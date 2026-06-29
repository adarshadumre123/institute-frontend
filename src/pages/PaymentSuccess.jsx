import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-600">
          Congratulations!
        </p>

        <p className="text-gray-500">
          You are now enrolled in this course.
        </p>

        <Link
          to="/courses-student"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Go to Courses
        </Link>

      </div>
    </div>
  );
};

export default PaymentSuccess;