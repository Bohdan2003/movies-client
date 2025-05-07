import { getData } from "@/app/components/Categories/helper";
import { CategoriesSlider } from "@/app/components/Categories/CategoriesSlider";

export const Categories: React.FC = async () => {
  const categories = await getData();

  return (<section className="mt-[200px]">
    <div className="container">
      <CategoriesSlider items={categories} />
    </div>
  </section>);
};