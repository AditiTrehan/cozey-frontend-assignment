const ProductDetails = ({ productName, productPrice }) => {
  return (
    <div className="relative flex flex-col items-start p-0 gap-1 w-100">
      <div className="block w-100 text-base leading-5 text-black cursor-pointer">
        {productName}
      </div>
      <div className="h-4.5 flex flex-row items-center gap-2">
        <span className="text-sm leading-4.5 text-lightBlue whitespace-nowrap">
          {productPrice} or financing
        </span>
        <span className="text-sm leading-4.5 text-lightBlue">|</span>
        <span className="relative text-sm leading-4.6 flex items-center top-0 cursor-pointer text-skyBlue">
          Customize
          <div className="pl-1"></div>
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;