import { pricingData } from "../assets/data"
import PricingTier from "../components/PricingTier"

const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-6xl mb-6 clash-display">
          Choose Your <span className="grad-1 clash-display">Trading Plan</span>
        </h2>
        <p className="text-lg text-zinc-300/80">
          Select the perfect trading plan that suits you with advanced features
          and competitive fees
        </p>
      </div>

      {/* Subscription cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map(
          ({ _id, isPopular, name, description, features, price }) => (
            <PricingTier
              key={_id}
              isPopular={isPopular}
              name={name}
              price={price}
              description={description}
              features={features}
            />
          )
        )}
      </div>
    </section>
  )
}
export default PricingSection