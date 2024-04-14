import Image from "next/image";

const NextImage = ({ imgSrc }) => {
  return (
    <Image
      src={imgSrc}
      width={500}
      height={500}
      alt="Tables"
      loading="lazy"
      className="absolute box-border p-0 m-auto block w-0 h-0 min-w-full max-w-full 
                  min-h-full max-h-full object-contain product-img ssm:rounded-xl"
    />
  );
};

export default NextImage;
