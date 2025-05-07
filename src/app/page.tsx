import { Introducing } from "@/app/components/Introducing/Introducing";
import { Categories } from "@/app/components/Categories/Сategories";
import { SubscriptionPlans } from "@/components/Price/SubscriptionPlans";

export default function Home() {
  return (
    <>
      <Introducing/>
      <Categories/>
      <SubscriptionPlans/>
    </>
  );
}
