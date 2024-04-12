const TextButton = ({ text }) => {
  return (
    <div className="absolute top-4 left-4">
      <div className="inline-flex py-2 px-3 bg-lightBrown rounded-2xl max-w-fit">
        <div className="text-white text-xxs leading-3 flex items-center text-center uppercase whitespace-nowrap">
          {text}
        </div>
      </div>
    </div>
  );
};

export default TextButton;
