import { useState } from 'react'
import { Button, Checkbox, Tabs, Tab } from "@nextui-org/react"
import { InfoIcon } from 'lucide-react'
import { Image } from '../utils/Image'
import contactAvatarImg from '../images/contact-avatar.png';
import maleEngineer from '../images/male-engineer.png';
import infraIllustration from '../images/infra-illustration.png';
import { Mail, Phone, MapPin } from 'lucide-react';
import Helpdesk from "../images/Helpdesk.png";
import Visitor from "../images/Visitor.png";
import WorkPermit from "../images/WorkPermit.png";
import DailyTask from "../images/DailyTask.png";
import PFM from "../images/PFM.png";
import Asset from "../images/Asset.png";
import GatePass from "../images/GatePass.png";
import Training from "../images/Training.png";
import SOS from "../images/SOS.png";
import Incident from "../images/Incident.png";

// Reusable components
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
        <hr />
        <div className="space-y-4 py-4">
            <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <p className="text-sm">Prakashraj@fmx.com</p>
            </div>
            <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <p className="text-sm">+91-9000900091</p>
            </div>
        </div>
        <hr/>
        <div className="space-y-4 py-4">
            <div className="flex">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-500">
                    11th & 12th Floor, Raheja Towers, above Yautcha restaurant, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                </p>
            </div>
        </div>
    </div>
);

const ModuleCard = ({ icon, title, isSelected, onToggle }) => (
    <div className={`bg-white p-4 h-28 rounded-lg shadow flex flex-col justify-between ${isSelected ? 'ring-2 ring-blue-500 bg-blue-200/20' : ''}`}>
        <div className="flex justify-between w-full">
            <img src={icon} alt={title} className="w-8 h-8 mr-2" />
            <Checkbox color="primary" isSelected={isSelected} onChange={onToggle} className={`rounded-2xl size-10 border-2 ${isSelected ? "border-blue-500" : ""}`} />
        </div>
        <div className="flex justify-between w-full">
            <span className={`font-semibold text-sm mr-2 ${isSelected ? "text-blue-500" : ""}`}>{title}</span>
            <InfoIcon className="w-5 h-5 text-gray-400" />
        </div>
    </div>
);



export default function ModuleSelector() {
    const [activeTab, setActiveTab] = useState("overview")
    const [selectedModules, setSelectedModules] = useState({})

    const modules = [
        { id: 'Helpdesk', title: 'Helpdesk', icon: Helpdesk },
        { id: 'visitor', title: 'Visitor Management', icon: Visitor },
        { id: 'workpermit', title: 'Work Permit', icon: WorkPermit },
        { id: 'dailytask', title: 'Daily Task', icon: DailyTask },
        { id: 'ppm', title: 'PFM', icon: PFM },
        { id: 'asset', title: 'Asset Management', icon: Asset },
        { id: 'Gate Pass', title: 'Gate Pass', icon: GatePass },
        { id: 'training', title: 'Training', icon: Training },
        { id: 'sos', title: 'SOS', icon: SOS },
        { id: 'incident', title: 'Incident', icon: Incident },
    ];

    const toggleModule = (id) => {
        setSelectedModules(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const handleSubmit = () => {
        const selectedModuleNames = Object.entries(selectedModules)
            .filter(([_, isSelected]) => isSelected)
            .map(([id, _]) => modules.find(module => module.id === id).title)

        if (selectedModuleNames.length > 0) {
            alert(`Selected modules: ${selectedModuleNames.join(', ')}`)
        } else {
            alert('No modules selected')
        }
    }

    return (
        <div className="p-6 ">
            <Tabs variant='underlined' selectedKey={activeTab} onSelectionChange={setActiveTab} className="w-full"
                classNames={{
                    tabList: "gap-6",
                    tab: "px-4 py-2 relative transition-colors hover:text-blue-500",
                    tabContent: "group-data-[selected=true]:text-blue-500",
                    cursor: "hidden",
                    panel: "pt-4",
                }}>
                <Tab key="overview" title={
                    <div className="relative">
                        Overview
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                }>
                    <div className="grid grid-cols-6 gap-6">
                        {/* Stats Section */}
                        <div className="col-span-4 grid grid-cols-4 gap-6">
                            <StatCard icon={infraIllustration} title="Total Area" value="1200" unit="Sq. Ft" />
                            <StatCard icon={infraIllustration} title="Total Buildings" value="10" unit="" />
                            <StatCard icon={infraIllustration} title="Total Users" value="5000" unit="+" />
                            <StatCard icon={infraIllustration} title="Total Vendors" value="55" unit="" />
                        </div>
                        {/* Contact Card */}
                        <div className="row-span-2 col-span-2">
                            <ContactCard />
                        </div>
                        {/* Setup Site Infrastructure */}
                        <div className="col-span-4 bg-blue-100 p-8 rounded-lg flex justify-between items-center h-[70%]">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Setup Site Infrastructure</h3>
                                <p className="text-sm text-gray-600 mb-4">Setup Site Infrastructure</p>
                                <Button className='bg-blue-700 rounded text-white text-sm'>
                                    {/* <span className='text-sm'>Setup Infra</span> */}
                                    Setup Infra
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Button>
                            </div>
                            <Image src={maleEngineer} alt="male-engineer" width={200} height={150} />
                        </div>
                    </div>
                </Tab>
                <Tab key="modules" title={
                    <div className="relative">
                        Modules
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                }>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {modules.map(module => (
                            <ModuleCard
                                key={module.id}
                                icon={module.icon}
                                title={module.title}
                                isSelected={selectedModules[module.id]}
                                onToggle={() => toggleModule(module.id)}
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-end ">
                        <Button onClick={handleSubmit} className='rounded-3xl bg-blue-300'>Submit</Button>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}