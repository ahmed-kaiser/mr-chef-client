import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserAuthContext";
import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";
import SocialLinkButton from "../Shared_components/SocialLinkButton";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  useSetTitle("Sign Up");
  useScrollTop();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success(`Welcome ${res.user.displayName}`);
      })
      .catch((err) => toast.error(err.code));
  };

  return (
    <section className="px-4">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 mx-auto mt-16 bg-gray-50">
        <h2 className="mb-3 text-2xl font-serif font-semibold text-center">
          Create your account
        </h2>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signIn" className="focus:underline hover:underline">
            Sign in here
          </Link>
        </p>
        <SocialLinkButton />
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="john doe"
                className="w-full px-3 py-2 rounded-md border-slate-200 tracking-wide focus:border-sky-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 rounded-md border-slate-200 tracking-wide focus:border-sky-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md border-slate-200 tracking-wide focus:border-sky-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md border-slate-200 tracking-wide focus:border-sky-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-sky-600 hover:bg-sky-700 text-gray-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
