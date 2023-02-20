import React from "react";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../../layouts/userLayout";
import { RegisterForm } from "./RegisterForm";

// export const RegisterPage : React.FC = () => {
//     return <h1>注册页面</h1>
// }

function RegisterPage() {
    const nativate = useNavigate()
    const login = () => {
        nativate('/')
    }
    return (
        <UserLayout>
        <RegisterForm />
        </UserLayout>
    )
}

export default RegisterPage;