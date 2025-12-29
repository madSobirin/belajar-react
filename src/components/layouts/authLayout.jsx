import Link from "../ui/auth/Link";
import Button from "../ui/auth/Button";
const AuthLayout = (p) => {
  const { title, children, buttonTitle, titleLink, to, child } = p;
  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            {title}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {children}
            <Button title={buttonTitle} />
          </form>
          <Link titleLink={titleLink} to={to}>
            {child}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
