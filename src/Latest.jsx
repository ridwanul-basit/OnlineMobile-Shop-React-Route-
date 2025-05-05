import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base  bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut aliquam aliquid, nostrum est exercitationem at, molestias architecto optio fuga facere nemo corrupti voluptatum officia quidem quaerat. Optio, eos rerum.</p>
            </Marquee>
            
        </div>
    );
};

export default Latest;