import React from 'react';
import { AiOutlineCar} from "react-icons/ai";
import Search from "@/app/nav/Search";
import Logo from "@/app/nav/Logo";
import LoginButton from "@/app/nav/LoginButton";
import {getCurrentUser} from "@/app/actions/authActions";
import UserActions from "@/app/nav/UserActions";
export default async function Navbar() {
    const user = await getCurrentUser();
    return (
        <header className={
            'sticky top-o z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md'
        }>
            <Logo/>
            <div><Search/></div>
            {user ?(<UserActions user ={user} />)
            : <LoginButton />}

            
        </header>
    )
}
