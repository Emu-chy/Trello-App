import * as yup from "yup";

export const RegisterValidationSchema = yup.object().shape({
    name: yup.string().min(3, "name must be 3 character long").required("name is required"),
    email: yup.string().min(3, "email must be 3 character long").required("name is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

export const LoginValidationSchema = yup.object().shape({
    email: yup.string().min(3, "name must be 3 character long").required("name is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});
