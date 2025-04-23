
import { PricingCard } from "./pricingcard";

export const Pricing = ({ pricingSection }: { pricingSection: [{ plan: string, price: string, bestFor: string, features: string[]}]}) => {
    const features = [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics"
    ]
    const pricingPlans = [{
        id: 1,
        title: "Basic",
        amount: "19",
        features,
        bestfor: "Perfect for individuals and small projects"
    }, {
        id: 2,
        title: "Pro",
        amount: "49",
        features,
        bestfor: "Ideal for growing businesses and teams"
    }, {
        id: 3,
        title: "Enterprise",
        amount: "99",
        features,
        bestfor: "For large-scale operations and high-volume users"
    }]
  return (
    <div className="flex justify-center">
      <div>
        <div className="text-center my-4">PRICING</div>
        <div className="text-center text-2xl lg:text-6xl font-medium text-green-500 mb-10">
          Choose the plan that's right for you
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
           {pricingSection.map((plan) => <PricingCard bestfor={plan.bestFor} title={plan.plan} amount={plan.price} features={plan.features} key={plan.plan}/>)}
        </div>
      </div>
    </div>
  );
};
