const Button = (p) => {
  const { title, type = "submit" } = p;
  return (
    <div>
      <div>
        <button
          type={type}
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
