import ColorButton from "./ColorButton";
import NextImage from "./NextImage";
import ProductDetails from "./ProductDetails";
import TextButton from "./TextButton";

const ProductCard = ({ products }) => {
  return products.map((product, key) => {
    return (
      <div
        key={key}
        className="relative flex flex-col items-start justify-evenly gap-3 w-100 h-full 
                      xss:items-center xss:min-w-full xss:pl-0 xss:pr-0 md:w-full md:h-full md:gap-1.5
                      lg:w-full lg:h-full lg:max-w-fit
                      "
      >
        <div className="relative w-100 h-76 aspect-auto ssm:w-full ssm:h-62 xlg:w-full xlg:h-78 xsm:w-full xsm:h-68">
          <span
            className="box-border block overflow-hidden opacity-100 m-0 p-0 absolute img-container"
            style={{
              width: "initial",
              height: "initial",
              background: "none",
              border: "0px",
              inset: "0px",
            }}
          >
            {/* Product Image  */}
            <NextImage imgSrc={product.imgSrc} />
          </span>
          {/* Text Button */}
          {product.outdoor ? <TextButton text="Outdoor" /> : null}
          <div className="absolute top-4 left-4"></div>
          <div>
            {/* Color button  */}
            <ColorButton color={product.color} colorCode={product.colorCode} />
          </div>
          <div
            className="hidden absolute right-3 bottom-3 w-fit py-1.5 
                      pr-1.5 pl-2.5 rounded-2xl z-9999999 bg-white  
                      border-0.5 border-solid border-lightGrey gap-1.5"
          ></div>
        </div>
        {/* Product Details  */}
        <ProductDetails
          productName={product.productName}
          productPrice={product.price}
          discount={product.discount}
        />
      </div>
    );
  });
};

export default ProductCard;
