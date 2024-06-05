import React, { useState, useRef } from "react";

//Form component handles login form entry data and UI display
const Form = () => {
    const [bulletError, setBulletError] = useState(false); // track the state of the pwassword notification bullets
    const [loading, setLoading] = useState(false); // track the state of page loading
    const [fieldActive, SetFieldActive] = useState(false); // track to ascertain if password text field is active or not

    const inputEmailEl = useRef(null);
    const inputPwdEl = useRef(null);

    //check whether password field has a value
    let toggleClassCheck = fieldActive ? null : "hidden";

    let passwordMinimumError = null;
    let passwordUpperCaseError = null;
    let passwordNumberSymbolsError = null;
    let showPasswordErrorMsg = "hidden";

    //handles password error notifications and validates password entry
    function checkPassword(input) {
        //show password error message bullet points if any value in password text box
        showPasswordErrorMsg = input.current.value ? null : "hidden";
        const passwordMinimumCharatersPattern =
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //regex pattern to test for password having minimum characters
        const passwordUpperCasePattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //regex pattern to test for password having uppercase characters
        const passwordNumberSymbolsPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //regex pattern to test for password having numbers and symbols
        if (input.curent.value) {
            SetFieldActive(true);
        }

        //test returns true if it find a match for 8 minimum characters otherwise false
        passwordMinimumError = passwordMinimumCharatersPattern.test(
            input.current.value.trim()
        )
            ? null
            : "bg-pink-700";

        //test returns true if it find a match for uppercase characters otherwise false
        passwordUpperCaseError = passwordUpperCasePattern.test(
            input.current.value.trim()
        )
            ? null
            : "bg-pink-700";

        //test returns true if it find a match for numbers and special characters otherwise false
        passwordNumberSymbolsError = passwordNumberSymbolsPattern.test(
            input.current.value.trim()
        )
            ? null
            : "bg-pink-700";
        // if (bulletError) {
        // }
    }

    //validate the email field
    function checkEmail(input) {
        const emailPattern =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (emailPattern.test(input.current.value.trim())) {
            //return true;
        } else {
            //return false;
        }
    }

    return (
        <div className="bg-white px-28 py-20 w-815 text-center relative  max-h-screen">
            <div className="flex gap-2 absolute top-10 right-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3M21 12H3M12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12M12 21C13.657 21 15 16.97 15 12C15 7.03 13.657 3 12 3M12 21C10.343 21 9 16.97 9 12C9 7.03 10.343 3 12 3M12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12"
                        stroke="#3F3F46"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <span>English</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
            <div className="mt-24">
                <h1 className="font-sans text-5xl font-semibold">
                    Welcome back
                </h1>
                <p className="font-sans text-base text-gray-500 mt-4 text-center">
                    Log in with
                </p>
                <div className="flex justify-center gap-10 my-10">
                    <a href="">
                        <img
                            src="/assets/images/icons/facebook.png"
                            className=""
                            alt="facebook-icon"
                        />
                    </a>

                    <a href="">
                        <img
                            src="/assets/images/icons/apple.png"
                            className=""
                            alt="apple-icon"
                        />
                    </a>

                    <a href="">
                        <img
                            className=""
                            src="/assets/images/icons/google.png"
                            alt="google-icon"
                        />
                    </a>
                </div>
                <div>
                    <div className="border-solid border inline-block border-gray-400 w-2/5" />
                    <span className="mx-12 font-sans">or</span>
                    <div className="border-solid border inline-block border-gray-400 w-2/5 " />
                </div>
                <div className="mt-8">
                    <div>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 my-4 bg-transparent focus:border-pink-500 hover:shadow-md active:border-pink-500 focus:outline-none"
                            placeholder="Email"
                            type="text"
                            ref={inputEmailEl}
                        />
                    </div>
                    <div className="relative">
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 my-4 bg-transparent focus:border-pink-500 hover:shadow-md active:border-pink-500 focus:outline-none"
                            placeholder="Password"
                            type="password"
                            ref={inputPwdEl}
                            // onChange={() => checkPassword(inputPwdEl)}
                        />
                        <div
                            class="absolute inset-y-0 right-0 pr-3  
                    flex items-center  
                    pointer-events-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 text-gray-700"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={`flex flex-wrap gap-4 my-2 ${showPasswordErrorMsg}`}
                    >
                        <div className="flex gap-2 items-center">
                            <div
                                className={`w-3 h-3 bg-gray-300 rounded-full ${passwordMinimumError}`}
                            />
                            <span className="text-base text-gray-900">
                                Minimum 8 characters
                            </span>
                        </div>
                        <div className="flex gap-2 items-center ml-8">
                            <div
                                className={`w-3 h-3 bg-gray-300 rounded-full ${passwordUpperCaseError}`}
                            />
                            <span className="text-base text-gray-900">
                                At least one upper case letter
                            </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div
                                className={`w-3 h-3 bg-gray-300 rounded-full ${passwordNumberSymbolsError}`}
                            />
                            <span className="text-base text-gray-900">
                                One number/symbol #$&*
                            </span>
                        </div>
                    </div>

                    <a className="text-base text-blue-700 underline" href="">
                        Forgot password?
                    </a>

                    <div className="mt-8 flex flex-col gap-y-4">
                        <button
                            onClick={() => checkEmail(inputEmailEl)}
                            className="active:bg-pink-700  active:duration-75  hover:bg-pink-800 ease-in-out transition-all py-3 rounded-xl bg-pink-200 text-white text-base font-bold"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="mt-8 flex justify-center items-center mb-138">
                        <p className="font-medium text-base">
                            Don't have an account?
                        </p>
                        <a
                            href=""
                            className="text-pink-600 text-base font-medium ml-2 no-underline active:text-pink-800"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
                <p className={`font-medium text-base ${toggleClassCheck}`}>
                    By signing up to our{" "}
                    <a
                        href=""
                        className="text-pink-600 text-base font-medium no-underline active:text-pink-800"
                    >
                        terms of use{" "}
                    </a>
                    and{" "}
                    <a
                        href=""
                        className="text-pink-600 text-base font-medium no-underline active:text-pink-800"
                    >
                        privacy policy
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Form;
