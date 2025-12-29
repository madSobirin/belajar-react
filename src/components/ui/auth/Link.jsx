import { Link as RouterLink } from "react-router-dom";
const Link = (p) => {
  const { children, titleLink, to } = p;
  return (
    <div>
      <p className="mt-6 text-center text-sm/6 text-gray-400">
        {titleLink}{" "}
        <RouterLink
          to={to}
          className="font-semibold text-indigo-400 hover:text-indigo-300"
        >
          {children}
        </RouterLink>
      </p>
    </div>
  );
};

export default Link;
