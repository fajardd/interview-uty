import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormSignIn = ({ onSubmit, value, handleChange }) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border shadow rounded-lg py-6 px-10 text-center w-1/3 bg-white ">
        <p className="text-[32px] font-semibold">Welcome back</p>
        <p className="text-slate-500 ">Sign in with your email and password</p>
        <div>
          <form action={onSubmit}>
            <div className="gap-y-6">
              <div>
                <Input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div>
                <Input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </div>

            <Link to="/product">
              <Button type="submit">Sign In</Button>
            </Link>
          </form>
          <div className="py-6">
            <p className=" text-slate-500  ">Or</p>
            <p className="mt-8 text-slate-500  ">
              Dont have an account?{" "}
              <Link to="/sign-up">
                <span className="text-blue-500 ">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
