import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const plans = [
  {
    name: "Basic",
    price: "$9.99/month",
    features: ["5 Projects", "10GB Storage", "Community Support"],
    stripePriceId: "price_123_basic",
    buttonColor: "bg-gray-700 hover:bg-gray-900",
    cardStyle: "bg-white shadow-lg border border-gray-200",
    textColor: "text-gray-800",
  },
  {
    name: "Pro",
    price: "$19.99/month",
    features: ["15 Projects", "50GB Storage", "Priority Support"],
    stripePriceId: "price_123_pro",
    buttonColor: "bg-blue-500 hover:bg-blue-700",
    cardStyle:
      "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl",
    textColor: "text-white",
  },
  {
    name: "Enterprise",
    price: "$49.99/month",
    features: ["Unlimited Projects", "1TB Storage", "24/7 Premium Support"],
    stripePriceId: "price_123_enterprise",
    buttonColor: "bg-gray-700 hover:bg-gray-900",
    cardStyle: "bg-white shadow-lg border border-gray-200",
    textColor: "text-gray-800",
  },
];

const PricingCard = () => {
  const handleSubscribe = async () => {
    // console.log("Redirecting to Stripe with Price ID:", priceId);
    let response = await axios.post("/api/payments");
    if (response && response.status === 200) {
      console.log(response.data);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-80 p-8 rounded-2xl text-center transform transition duration-300 hover:scale-105 ${plan.cardStyle}`}
        >
          <h3 className={`text-3xl font-bold ${plan.textColor}`}>
            {plan.name}
          </h3>
          <p className={`text-2xl font-semibold mt-2 ${plan.textColor}`}>
            {plan.price}
          </p>
          <ul className="mt-4 space-y-4">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className={`flex items-center justify-center text-lg ${plan.textColor}`}
              >
                <FaCheckCircle className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleSubscribe(plan.stripePriceId)}
            className={`mt-6 text-white py-3 px-6 rounded-full transition duration-300 shadow-lg ${plan.buttonColor}`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
