const ColorButton = ({ color, colorCode }) => {
  return (
    <div
      className="absolute bottom-3 z-999 right-3 flex flex-row 
                      justify-end items-center py-1.5 pl-2.5 pr-1.5 gap-2 bg-white 
                      border-0.5 border-solid border-mediumBeige rounded-5xl cursor-pointer 
                      ssm:gap-1 ssm:justify-evenly ssm:h-5 ssm:bottom-1 ssm:right-1"
    >
      <div className="text-xs flex justify-end items-center text-right text-grey ssm:text-8 ssm:leading-3.7">
        {color}
      </div>
      <div
        className="rounded-full w-5 h-5 ssm:w-3 ssm:h-3"
        style={{ backgroundColor: colorCode }}
      ></div>
    </div>
  );
};

export default ColorButton;
