import { useState } from "react";

const LoginSignup = () => {
  const [SignIn, setSignIn] = useState(true);
  const [TermsStatus, setTermsStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    console.log(formData);

    let endPoint = SignIn ? `${URL}/signIn` : `${URL}/signUp`;
    console.log("endpoint is: " + endPoint);

    let result = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    let responseData = await result.json();

    console.log(responseData);
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      alert("Submission Successful");

      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className="bg-[#fce3fe]">
      <div className="container pt-16 min-h-dvh flex justify-center items-center">
        <div className="bg-white shadow-md p-6">
          <form className="flex flex-col gap-4" onSubmit={handleForm}>
            <h4 className="font-semibold text-2xl">
              {SignIn ? "Login" : "Sign Up"}
            </h4>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              className={`border-[0.5px] border-solid border-slate-500 px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-customRed ${
                SignIn ? "hidden" : "block"
              }`}
              required={!SignIn}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              className="border-[0.5px] border-solid border-slate-500 px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-customRed"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              minLength="8"
              className="border-[0.5px] border-solid border-slate-500 px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-customRed"
              required
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Continue"
              className={`w-full text-white py-3 text-xs sm:text-sm ${
                TermsStatus
                  ? "bg-customRed active:bg-customDarkRed"
                  : "bg-[#b02e2e]"
              }`}
              disabled={TermsStatus ? false : true}
            />
          </form>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 text-xs">
              <span>
                {SignIn ? "Don't have an Account?" : "Already have an Account?"}
              </span>
              <button
                className="text-customRed font-semibold"
                onClick={() => setSignIn(!SignIn)}
              >
                {SignIn ? "Click Here" : "Login Here"}
              </button>
            </div>
            <div className="flex gap-2 text-xs">
              <input
                type="checkbox"
                name=""
                id=""
                className="accent-customRed cursor"
                onChange={(e) => setTermsStatus(e.target.checked)}
              />
              By continuing, I agree to the terms of use & privacy policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
