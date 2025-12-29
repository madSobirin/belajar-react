// import React from "react";
import AuthLayout from "../../components/layouts/authLayout";
import Input from "../../components/ui/auth/Input";
import Label from "../../components/ui/auth/Label";
const register = () => {
  return (
    <div>
      <AuthLayout
        title="Sign up to your account"
        buttonTitle="Sign up"
        to="/login"
        titleLink="Already have an account?"
        child="Sign in"
      >
        <div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="username"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <div className="text-sm mt-5">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default register;
