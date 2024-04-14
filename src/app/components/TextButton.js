const TextButton = ({ text }) => {
  return (
    <div className="absolute top-4 left-4 ssm:top-2.5 ssm:left-2.5">
      <div className="inline-flex py-2 px-3 bg-lightBrown rounded-2xl max-w-fit xmd:rounded-xl">
        <div
          className="text-white text-xxs leading-3 flex items-center text-center 
                     uppercase whitespace-nowrap xmd:text-8 xmd:leading-1.5"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TextButton;
