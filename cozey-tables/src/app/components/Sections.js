import { toSmallCase } from "../helper";
import ProductCard from "./ProductCard";

const Sections = ({ data }) => {
  const { products, category } = data;
  return (
    <div
      id={toSmallCase(category)}
      className="position-relative category-section"
    >
      <div className="my-0 mx-auto max-w-screen-lg pt-8 px-20 pb-0">
        <div className="text-5xl text-blue xl:text-xxxl xl:text-center">
          {category}
        </div>
      </div>
      <div
        className="grid grid-cols-onefr relative flex-wrap my-0 mx-auto 
                   justify-center gap-10 max-w-screen-lg py-4 px-20 max-w-8xl
                   xs:flex xs:p-3.7 xs:gap-x-4
                   md:gap-y-10 md:gap-x-4
                   lg:justify-items-center lg:gap-10 lg:py-4 lg:px-6"
      >
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default Sections;
