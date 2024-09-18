"use client";
import { useState, type FormEvent } from "react";
interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
  conditionsAccepted: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
export default function Page() {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
    conditionsAccepted: false,
  });
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    conditionsAccepted: false,
  });

  const handleSignInForm = function (event: FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      email: target.email.value,
      password: target.password.value,
      conditionsAccepted: target.conditionsAccepted.checked,
    };
    console.log(formData);
  };
  const handleSignUpForm = function (event: FormEvent<CustomForm>) {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const formData = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value,
      conditionsAccepted: target.conditionsAccepted.checked,
    };
    console.log(formData);
  };
  const handleSignIn = function () {
    //alert(signIn);
  };
  const handleSignUp = function () {
    //alert(signUp);
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16">
        <h1 className="max-w-7xl text-3xl font-extrabold tracking-tight lg:text-[5rem]">
          Authentification
          <span className="ml-3 text-[hsl(280,100%,70%)]">Page</span>
        </h1>
        <div className="mt-5 flex max-w-7xl flex-col items-center justify-center gap-5 lg:flex lg:flex-row lg:items-start lg:gap-5">
          <div className="flex items-center justify-center">
            <div
              id="signin"
              className="h-[500px] w-[300px] rounded border-2 border-slate-600 p-5"
            >
              <div className="flex items-center justify-center">
                <h1 className="m-2 text-[hsl(280,100%,70%)]">Sign In</h1>
              </div>

              <form
                className="mt-5 flex w-full max-w-sm flex-col justify-center"
                onSubmit={handleSignInForm}
              >
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) =>
                        setSignIn({ ...signIn, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="******************"
                      onChange={(e) =>
                        setSignIn({ ...signIn, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <label className="block font-bold text-gray-500 md:w-2/3">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="conditionsAccepted"
                      onChange={(e) =>
                        setSignIn({
                          ...signIn,
                          conditionsAccepted: !signIn.conditionsAccepted,
                        })
                      }
                    />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <div className="md:flex md:items-center">
                  {/* <div className="md:w-1/3"></div> */}
                  <div className="w-full">
                    <button
                      className="focus:shadow-outline w-full rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                      type="submit"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              id="signup"
              className="h-[500px] w-[300px] rounded border-2 border-slate-600 p-5"
            >
              <div className="flex items-center justify-center">
                <h1 className="m-2 text-[hsl(280,100%,70%)]">Sign Up</h1>
              </div>

              <form
                className="mt-5 w-full max-w-sm"
                onSubmit={handleSignUpForm}
              >
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="email"
                    >
                      Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="name"
                      name="name"
                      type="name"
                      onChange={(e) =>
                        setSignUp({ ...signUp, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) =>
                        setSignUp({ ...signUp, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="******************"
                      onChange={(e) =>
                        setSignUp({ ...signUp, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3">
                    <label
                      className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                      htmlFor="password"
                    >
                      Confirm password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="******************"
                      onChange={(e) =>
                        setSignUp({
                          ...signUp,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <label className="block font-bold text-gray-500 md:w-2/3">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      name="conditionsAccepted"
                      checked={signUp.conditionsAccepted}
                      onChange={(e) =>
                        setSignUp({
                          ...signUp,
                          conditionsAccepted: !signUp.conditionsAccepted,
                        })
                      }
                    />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <div className="md:flex md:items-center">
                  <div className="w-full">
                    <button
                      className="focus:shadow-outline w-full rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                      type="submit"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
