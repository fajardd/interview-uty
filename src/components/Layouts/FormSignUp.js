import Input from "../Elements/Input";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const FormSignUp = ({ onSubmit, value, handleChange }) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border shadow rounded-lg py-6 px-10 text-center w-1/3 bg-white ">
        <p className="text-[32px] font-semibold">Create Account</p>
        <p className="text-slate-400 ">Complete the form below to sign up</p>
        <div>
          <form action={onSubmit}>
            <div className="gap-y-6">
              <div>
                <Input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
              </div>
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

            <Button type="submit">Sign In</Button>
          </form>
          <div className="py-6">
            <p className=" text-slate-500  ">Or</p>
            <p className="mt-8">
              Already have an account?{" "}
              <Link to="/">
                <span className="text-blue-500">Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
