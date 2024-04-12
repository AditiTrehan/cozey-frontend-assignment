import productsData from "../constants/productsData";

const NavBar = () => {
  return (
    <div className="flex flex-row h-12 bg-darkBeige gap-2.5 w-fit rounded-3xl overflow-hidden p-2">
      {productsData.map((products) => {
        return (
          <a
            className="h-full flex justify-center items-center overflow-hidden ursor-pointer 
                    cwhitespace-nowrap bg-transparent text-black text-15 py-1.5 px-4"
          >
            {products.category}
          </a>
        );
      })}
    </div>
  );
};

export default NavBar;
