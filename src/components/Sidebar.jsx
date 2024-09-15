import React, { useState } from 'react'
import { HiOutlineHome, HiOutlineUser, HiOutlineCreditCard, HiOutlineOfficeBuilding, HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi'
import { FiSettings, FiHelpCircle } from 'react-icons/fi'
import logoImg from '../images/logo.png';
import avatarImg from '../images/avatar.png'
import { Image } from '../utils/Image';

const OuterSidebar = ({ activeIcon, setActiveIcon }) => {
    return (
        <aside className="w-16 h-screen bg-blue-50 flex flex-col items-center p-4">
            <div className="flex-1 space-y-4">
                <Image src={logoImg} alt="Logo" width={40} height={40} />
                <button
                    onClick={() => setActiveIcon('home')}
                    className={"text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white"}
                >
                    <HiOutlineHome className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setActiveIcon('profile')}
                    className={"text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white"}
                >
                    <HiOutlineUser className="w-6 h-6" />
                </button>
                <button
                    onClick={() => setActiveIcon('billing')}
                    className={"text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white"}
                >
                    <HiOutlineCreditCard className="w-6 h-6" />
                </button>
            </div>
            <div className="space-y-4">
                <button className="text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                    <FiSettings className="w-6 h-6" />
                </button>
                <button className="text-gray-600 p-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                    <FiHelpCircle className="w-6 h-6" />
                </button>
                <button className="p-2">
                    <Image src={avatarImg} alt="User Avatar" width={32} height={32} className="rounded-full" />
                </button>
            </div>
        </aside>
    )
}

const InnerSidebar = ({ activeItem, setActiveItem }) => {
    return (
        <aside className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4">
                <h1 className="text-xl font-semibold">Punctualiti</h1>
            </div>

            <div className="px-4 py-2">
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stakeholders</h2>
            </div>
            <nav className="flex-1 overflow-y-auto p-2">
                <button
                    onClick={() => setActiveItem('sites')}
                    className={"flex items-center w-full px-6 py-2 text-sm font-medium hover:bg-blue-400 hover:text-white rounded-xl "}
                >
                    Sites
                </button>
                <button
                    onClick={() => setActiveItem('users')}
                    className={"flex items-center w-full px-6 py-2 text-sm font-medium hover:bg-blue-400 hover:text-white rounded-xl "}
                >
                    Users
                </button>
                <button
                    onClick={() => setActiveItem('external-users')}
                    className={"flex items-center w-full px-6 py-2 text-sm font-medium hover:bg-blue-400 hover:text-white rounded-xl "}
                >
                    External Users
                </button>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-sm font-medium">Nayanish Damania</p>
                        <p className="text-xs text-gray-500">nayanish@vouch.digital</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState('profile')
    const [activeItem, setActiveItem] = useState('sites')

    return (
        <div className="flex">
            <OuterSidebar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
            <InnerSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
    )
}

export default Sidebar