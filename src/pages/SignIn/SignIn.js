import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/UserAuthContext";
import toast from "react-hot-toast";
import SocialLinkButton from "../Shared_components/SocialLinkButton";
import useSetTitle from "../../hook/useSetTitle";
import useScrollTop from "../../hook/useScrollTop";

const SignIn = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useSetTitle("Sign In");
  useScrollTop();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmail(email, password)
    .then(res => {
        toast.success(`Welcome ${res.user.displayName}`);
        verify({ email: res.user.email })
        form.reset();
        navigate(from, {replace:true});
    })
    .catch(err => toast.error(err.code))
  };

  const verify = (data) => {
    fetch('https://mr-chef-server-ahmed-kaiser.vercel.app/verify', {
      method: 'post',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("userToken", data.token)
    })
  };

  return (
    <section className="px-4">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 mx-auto mt-16 bg-gray-50">
        <h2 className="mb-3 text-2xl font-serif font-semibold text-center">
          Sign in to your account
        </h2>
        <p className="text-sm text-center text-gray-600">
          Don't have account?{" "}
          <Link to="/signUp" className="focus:underline hover:underline">
            Sign up here
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
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 rounded-md border-slate-200 tracking-wide focus:border-sky-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link className="text-xs hover:underline text-gray-400">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
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
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
