import React from 'react';
import { Bell, ChevronLeft} from 'lucide-react';
import avatarImg from '../images/avatar.png';
import { Image } from '../utils/Image';

export default function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="flex items-center">
                <ChevronLeft className="mr-2" size={20} />
                <div className='flex flex-col'>
                    <span className="text-lg font-bold">HDFC</span>
                    <span className="text-xs text-gray-500 font-semibold">Sites / HDFC</span>
                </div>
            </div>
            <div className="flex items-center">
                <Bell className="mr-4" size={20} />
                <Image src={avatarImg} alt="User Avatar" width={32} height={32} className="rounded-full" />
            </div>
        </header>
    )
} 