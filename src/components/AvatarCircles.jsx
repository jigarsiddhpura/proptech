import React from 'react';
import coupon1 from '../images/coupon1.png'
import coupon2 from '../images/coupon2.png'
import Helpdesk from '../images/Helpdesk.png'
import GatePass from '../images/GatePass.png'

const AvatarCircles = ({ numCoupons, coupons }) => {
    const maxVisibleCoupons = 4;
    const visibleCoupons = coupons.slice(0, maxVisibleCoupons);
    const remainingCount = Math.max(0, numCoupons - maxVisibleCoupons);

    return (
        <div className="flex items-center -space-x-2 overflow-hidden">
            {visibleCoupons.map((url, index) => (
                <div
                    key={index}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                >
                    <img src={url} alt="Coupon" className="h-full w-full object-cover"/>
                </div>
            ))}
            {remainingCount > 0 && (
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-sm font-medium text-gray-600 ring-2 ring-white ">
                    +{remainingCount}
                </div>
            )}
        </div>
    );
};

const AvatarCirclesDemo = () => {
    const coupons = [coupon1, coupon2, Helpdesk, GatePass];

    return <AvatarCircles numCoupons={9} coupons={coupons} />;
};

export default AvatarCirclesDemo;