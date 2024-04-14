import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../../public/fonts/Larsseit/Larsseit-Medium.otf",
});

const ProductDetails = ({ productName, productPrice, discount }) => {
  return (
    <div className="relative flex flex-col items-start p-0 gap-1 w-100 ssm:gap-0.5 ssm:w-full ssm:max-h-11.5">
      <div
        className={`${headingFont.className} block w-100 text-base md:text-xs md:leading-4 leading-5 text-black cursor-pointer xxs:w-full`}
      >
        {productName}
      </div>
      <div className="h-4.5 flex flex-row items-center gap-2 xs:gap-0.5 ssm:w-25 ssm:h-5.5 ssm:gap-1">
        <span className="text-sm leading-4.5 text-lightBlue whitespace-nowrap ssm:text-11 ssm:leading-3.5 ssm:relative">
          {productPrice} {!discount ? "or financing" : ""}
        </span>
        <span className="text-sm leading-4.5 text-lightBlue ssm:text-11 ssm:leading-3.5">
          |
        </span>
        {discount ? (
          <span
            className={`${headingFont.className} text-brown offer-text ssm:text-11`}
          >
            Save 10%
          </span>
        ) : (
          <span
            className={`${headingFont.className} text-skyBlue offer-text customize-text`}
          >
            Customize -&gt;
          </span>
        )}
      </div>
      {discount ? (
        <span
          className={`${headingFont.className} offer-text text-skyBlue customize-text`}
        >
          Customize -&gt;
        </span>
      ) : null}
    </div>
  );
};

export default ProductDetails;
