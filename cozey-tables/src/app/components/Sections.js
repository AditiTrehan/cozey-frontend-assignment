import { toSmallCase } from "../helper";
import ProductCard from "./ProductCard";

const Sections = ({ data }) => {
  const { products, category } = data;
  return (
    <div id={toSmallCase(category)} className="position-relative mt-20">
      <div className="my-0 mx-auto max-w-screen-lg pt-8 px-20 pb-0">
        <div className="text-5xl text-blue">{category}</div>
      </div>
      <div
        className="grid grid-cols-onefr relative flex-wrap justify-center
                     gap-10 my-0 mx-auto max-w-screen-lg py-4 px-20"
      >
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default Sections;
