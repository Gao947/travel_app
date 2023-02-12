import React from "react";
import { useNavigate } from "react-router-dom";

// export const RegisterPage : React.FC = () => {
//     return <h1>注册页面</h1>
// }

function RegisterPage() {
    const nativate = useNavigate()
    const login = () => {
        nativate('/')
    }
    return (
        <h1>注册页面</h1>
    )
}

export default RegisterPage;