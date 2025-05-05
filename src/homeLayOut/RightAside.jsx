import React from 'react';
import SocialLogIn from '../pages/SocialLogIn';
import FindUs from '../pages/FindUs';
import Qzone from '../pages/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
           <SocialLogIn></SocialLogIn>
         <FindUs></FindUs>
         <Qzone></Qzone>
        </div>
    );
};

export default RightAside;