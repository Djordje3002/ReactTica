import { useState } from 'react';
import logo from '../assets/Gigachad.webp';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavbarComponent() {

  const [toggle, setToggle] = useState(false);

  function handleToogle(){
      setToggle(!toggle);
  }

  return (
    <div className='h-[100px] w-full flex items-center justify-between px-[40px] bg-green-600'>
      <img src={logo} alt="logo" className='w-[80px] h-[80px] rounded-full' />

      {/*Desktopview*/}
      <ul className='items-center gap-[20px] hidden lg:flex'>
        <li>Home</li>
        <li>Phones</li>
        <li>Contact</li>
      </ul>

      <div className='flex lg:hidden'>
        <GiHamburgerMenu size={40} onClick={handleToogle} className='cursor-pointer' />

        {/*MOBILE VIEW*/}
        {toggle && <div className='z-10 absolute w-[80%] h-[50%] bg-green-400 top-0 bottom-0 right-0'>
        <ul className='mt-[3rem] ml-[3rem] items-center gap-[20px]flex justify-center'>
        <IoMdClose  onClick={handleToogle} className='cursor pointer absolute top-[1rem] right-[1rem]' size={40}/>
          <li>Home</li>
          <li>Phones</li>
          <li>Contact</li>
        </ul>
        </div>}
      </div>
    </div>
  )
}

export default NavbarComponent
