import * as Yup from "yup";

export const LoginSchema=Yup.object({
    email:Yup.string().email("Email Invalid").required('Please Enter Email'),
    username:Yup.string().min(4,'username must be min of 4 letters').max(16," username must be max of 16 letters").required(" Please Enter username"),
    password:Yup.string().min(8,"Password must be min of 8 digits").required("Please Enter Password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Special character and Number is Must"),
})


