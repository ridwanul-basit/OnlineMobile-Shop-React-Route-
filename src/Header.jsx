import React from 'react';
import logo from "./assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div >
            <div className='flex flex-col justify-center place-items-center gap-3'>
                <img className='w-[400px]' src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p className='text-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM , yyyy ")}</p>
            </div>
        </div>
    );
};

export default Header;