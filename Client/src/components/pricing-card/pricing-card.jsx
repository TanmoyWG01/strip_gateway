import PricingCard from "./pricing-card-data";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-5xl font-extrabold mb-10 text-gray-800">
        Choose Your Plan
      </h2>
      <PricingCard />
    </div>
  );
};

export default Pricing;
