import React from 'react';
import { Bell, ChevronLeft, Edit, Home, Users, Mail, Phone, MapPin } from 'lucide-react';

// Import all images
import logoImg from '../images/logo.png';
import avatarImg from '../images/avatar.png';
import building1Img from '../images/building1.png';
import building2Img from '../images/building2.png';
import building3Img from '../images/building3.png';
import building4Img from '../images/building4.png';
import hdfcLogoImg from '../images/hdfc-logo.png';
import contactAvatarImg from '../images/contact-avatar.png';
import maleEngineer from '../images/male-engineer.png';
import infraIllustration from '../images/infra-illustration.png';

// Updated Image component
const Image = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
};

const Sidebar = () => (
    <aside className="w-60 bg-white border-r border-gray-200 h-screen p-4">
        <div className="flex items-center mb-8">
            <Image src={logoImg} alt="Logo" width={32} height={32} />
            <span className="ml-2 text-xl font-semibold">Punctualiti</span>
        </div>
        <nav>
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-blue-50 rounded">
                        <Home className="mr-2" size={20} />
                        STAKEHOLDERS
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-white bg-blue-600 rounded">
                        <Users className="mr-2" size={20} />
                        Sites
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
);

const Header = () => (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
            <ChevronLeft className="mr-2" size={20} />
            <span className="text-sm text-gray-500">Sites / HDFC</span>
        </div>
        <div className="flex items-center">
            <Bell className="mr-4" size={20} />
            <Image src={avatarImg} alt="User Avatar" width={32} height={32} className="rounded-full" />
        </div>
    </header>
);

const ImageGallery = () => {
    const buildingImages = [building1Img, building2Img, building3Img, building4Img];
    return (
        <div className="flex space-x-4 mb-6">
            {buildingImages.map((img, i) => (
                <div key={i} className="relative w-1/4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <Image src={img} alt={`Building ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            ))}
        </div>
    );
};

const StatCard = ({ icon, title, value, unit }) => (
    <div className="bg-white p-4 rounded-lg shadow">
        <Image src={icon} alt={icon} size={24} />
        <h3 className="text-sm text-gray-500 mt-2">{title}</h3>
        <p className="text-2xl font-bold">
            {value} <span className="text-sm font-normal">{unit}</span>
        </p>
    </div>
);

const ContactCard = () => (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md">
        <h3 className="font-semibold text-lg mb-6">Point Of Contact</h3>
        <div className="flex items-center mb-6">
            <Image src={contactAvatarImg} alt="Contact Avatar" width={48} height={48} className="rounded-full mr-4" />
            <div>
                <p className="font-semibold text-lg">Prakash Raj</p>
                <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded">Site Admin</span>
            </div>
        </div>
        <div className="space-y-4">
            <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <p className="text-sm">Prakashraj@fmx.com</p>
            </div>
            <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <p className="text-sm">+91-9000900091</p>
            </div>
            <div className="flex">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-500">
                    11th & 12th Floor, Raheja Towers, above Yautcha restaurant, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                </p>
            </div>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 overflow-auto">
                <Header />
                <main className="p-6">
                    <ImageGallery />
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <Image src={hdfcLogoImg} alt="HDFC Logo" width={48} height={48} className="mr-4" />
                            <div>
                                <h1 className="text-2xl font-bold">HDFC</h1>
                                <p className="text-sm text-gray-500">Housing Development Finance Corporation</p>
                                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Client</span>
                            </div>
                        </div>
                        <button className="flex items-center text-blue-600">
                            <Edit size={16} className="mr-1" />
                            Edit Profile
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        {/* Stats Section */}
                        <div className="col-span-4 grid grid-cols-4 gap-6 bg-cyan-300">
                            <StatCard icon={infraIllustration} title="Total Area" value="1200" unit="Sq. Ft" />
                            <StatCard icon={infraIllustration} title="Total Buildings" value="10" unit="" />
                            <StatCard icon={infraIllustration} title="Total Users" value="5000" unit="+" />
                            <StatCard icon={infraIllustration} title="Total Vendors" value="55" unit="" />
                        </div>

                        {/* Contact Card */}
                        <div className="row-span-2 bg-red-400 col-span-2">
                            <ContactCard />
                        </div>

                        {/* Setup Site Infrastructure */}
                        <div className="col-span-4 bg-blue-200 p-6 rounded-lg flex justify-between items-center ">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Setup Site Infrastructure</h3>
                                <p className="text-sm text-gray-600 mb-4">Setup Site Infrastructure</p>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                                    Setup Infra
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <Image src={maleEngineer} alt="male-engineer" width={200} height={150} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}