import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "../validation/ValidationSchema";

const LoginForm = () => {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: yupResolver(LoginValidationSchema) });

    const loginHandler = (data) => {
        const getUser = localStorage.getItem("users");
        if (getUser && getUser.length) {
            const userData = JSON.parse(getUser);
            const userLoginData = userData.filter((ele, i) => {
                return ele.email === data.email && ele.password === data.password;
            });
            console.log(userLoginData);
            if (userLoginData.length === 0) {
                alert("invalid data");
            } else {
                localStorage.setItem("loggedIn-Data", JSON.stringify(getUser));
                history("/home");
            }
        }
        reset();
    };

    return (
        <>
            <div class="container mx-auto p-2">
                <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
                    <div class="text-center mb-8">
                        <h1 class="font-bold text-2xl font-bold">Login</h1>
                        <form onSubmit={handleSubmit(loginHandler)}>
                            <div className="form-control w-full">
                                <label htmlFor="email" className="label font-semibold">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="input input-sm input-bordered w-full"
                                    id="email"
                                    {...register("email")}
                                />
                                <span className="text-error">{errors.email?.message}</span>
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="password" className="label font-semibold">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    className="input input-sm input-bordered w-full"
                                    id="password"
                                    {...register("password")}
                                />
                                <span className="text-error">{errors.password?.message}</span>
                            </div>
                            <button type="submit" className="btn btn-sm w-full mt-8">
                                Login
                            </button>
                        </form>
                        <p className="mt-8">
                            Don't have an account{" "}
                            <Link to="/register">
                                <b>Sign Up</b>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
