import React from "react";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../../layouts/userLayout";

// export const SignInPage : React.FC = () => {

//     const match = useMatch('/');

//     return <h1>登录页面</h1>;
// }

function SignInPage() {
    const nativate = useNavigate()
    const login = () => {
        nativate('/')
    }
    return (
        <UserLayout>
            <h1>登录页面</h1>
        </UserLayout>
    );
}

export default SignInPage;