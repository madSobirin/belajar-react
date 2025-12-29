const Label = (p) => {
  const { htmlFor, children } = p;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm/6 font-medium text-gray-100 mt-5"
      >
        {children}
      </label>
    </div>
  );
};

export default Label;
