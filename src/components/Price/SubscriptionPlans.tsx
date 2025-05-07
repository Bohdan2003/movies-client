import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { PricingList } from "@/components/Price/PricingList";
import { getData } from "@/components/Price/helper";

export const SubscriptionPlans: React.FC = async () => {
  const prices = await getData();

  return (<section className="mt-[150]">
    <div className="container">
      <SectionHeader
        title="Choose the plan that's right for you"
        subTitle="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      />
      <PricingList
        className="mt-[80px]"
        prices={prices}
      />
    </div>
  </section>);
};