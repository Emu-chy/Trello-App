import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { RegisterValidationSchema } from "../validation/ValidationSchema";

const RegistrationForm = () => {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(RegisterValidationSchema),
    });

    const registerHandler = (data) => {
        const profile = {
            id: uuidv4(),
            name: data.name,
            email: data.email,
            password: data.password,
            role: ["admin"],
            pic: "",
            team: [],
        };
        const existingData = JSON.parse(localStorage.getItem("users")) || [];
        existingData.push(profile);

        localStorage.setItem("users", JSON.stringify(existingData));
        if (profile) {
            alert("successfully Sign up");
            history("/");
        }

        reset();
    };

    useEffect(() => {
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([]));
        }
    }, []);

    return (
        <>
            <div class="container mx-auto p-2">
                <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
                    <div class="text-center mb-8">
                        <h1 class="font-bold text-2xl font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(registerHandler)}>
                            <div className="form-control w-full">
                                <label htmlFor="name" className="label font-semibold">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="input input-sm input-bordered w-full"
                                    id="name"
                                    {...register("name")}
                                />
                                <span className="text-error">{errors.name?.message}</span>
                            </div>
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
                                    password:
                                </label>
                                <input
                                    type="password"
                                    className="input input-sm input-bordered w-full"
                                    id="password"
                                    {...register("password")}
                                />
                                <span className="text-error">{errors.password?.message}</span>
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="confirmPassword" className="label font-semibold">
                                    Confirm Password:
                                </label>
                                <input
                                    type="password"
                                    className="input input-sm input-bordered w-full"
                                    id="confirmPassword"
                                    {...register("confirmPassword")}
                                />
                                <span className="text-error">
                                    {errors.confirmPassword?.message}
                                </span>
                            </div>

                            <button type="submit" className="btn btn-sm w-full mt-8">
                                Submit
                            </button>
                        </form>
                        <p className="mt-8">
                            Already have an account{" "}
                            <Link to="/">
                                <b>Login</b>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
