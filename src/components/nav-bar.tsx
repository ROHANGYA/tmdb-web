"use client"

import { Children } from "react";
import NavItem from "./nav-item";

export default function NavBar() {
    return <div
        className=" w-4/5 h-screen rounded-lg bg-white bg-clip-border p-4 text-gray-700 shadow-xl 
    shadow-blue-gray-900/5">
        <div className="p-4 mb-2">
            <h5 className="block  text-2xl antialiased font-bold 
      leading-snug tracking-normal text-blue-gray-900">
                T M D B
            </h5>
        </div>
        <nav className="flex flex-col h-5/6">
            <NavItem navItemLabel={"Home"} navItemIcon={"/house.svg"} navLink={"/main/home"} />
            <NavItem navItemLabel={"Search"} navItemIcon={"/search.svg"} navLink={"/main/search"} />
            <NavItem navItemLabel={"Settings"} navItemIcon={"/settings.svg"} navLink={"/main/settings"} />
            <div className="grow"></div>
            <NavItem navItemLabel={"Log Out"} navItemIcon={"/log-out.svg"} navLink={"/login"} />
        </nav>
    </div>
}