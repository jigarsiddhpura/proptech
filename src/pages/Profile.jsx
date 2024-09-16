import React from 'react';
import { Edit, MapPin } from 'lucide-react';

// Import all images
import building1Img from '../images/building1.png';
import building2Img from '../images/building2.png';
import building3Img from '../images/building3.png';
import building4Img from '../images/building4.png';
import hdfcLogoImg from '../images/hdfc-logo.png';
import AvatarCirclesDemo from '../components/AvatarCircles';
import ModuleSelector from '../components/ModuleSelector';
import { Image } from '../utils/Image'

const ImageGallery = () => {
    const buildingImages = [building1Img, building2Img, building3Img, building4Img];
    return (
        <div className="flex space-x-2 mb-6">
            {buildingImages.map((img, i) => (
                <div key={i} className="relative w-1/4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <Image src={img} alt={`Building ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            ))}
        </div>
    );
};


export const Profile = () => {
    return (
        <main className="px-6">
            <div className='p-6 gap-6 rounded-lg bg-white mb-2'>
                <ImageGallery />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={hdfcLogoImg} alt="HDFC Logo" width={80} height={80} className="mr-4" />
                        <div>
                            <h1 className="text-2xl font-bold">HDFC</h1>
                            <p className="text-sm text-gray-500 py-1">Housing Development Finance Corporation</p>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Client</span>
                            <div className="flex items-center text-xs text-gray-500 py-2">
                                <MapPin size={12} className="mr-1" />
                                India, U.S.A, South Africa, Canada, Australia
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <button className="flex justify-center items-center text-blue-600 rounded-3xl p-3    bg-slate-200 mb-6">
                            <Edit size={16} className="mr-1" />
                            Edit Profile
                        </button>
                        <AvatarCirclesDemo />
                    </div>
                </div>
            </div>

            <ModuleSelector />
        </main>
    );
}