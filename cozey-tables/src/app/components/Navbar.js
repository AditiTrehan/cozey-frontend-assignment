const navBarContent = [
  "Coffe Tables",
  "Side Tables",
  "Media Units",
  "Table Bundles",
];

const NavBar = () => {
  return (
    <div className="flex flex-row h-12 bg-darkBeige gap-2.5 w-fit rounded-3xl overflow-hidden p-2">
      {navBarContent.map((content) => (
        <a
          className="h-full flex justify-center items-center overflow-hidden 
                        cursor-pointer whitespace-nowrap bg-transparent text-black text-15 py-1.5 px-4"
        >
          {content}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
