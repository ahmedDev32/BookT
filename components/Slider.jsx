import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GrCatalogOption } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoInbox } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { TbClockBitcoin } from "react-icons/tb";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { TbFileAnalytics } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";






const Slider = () => {
  return (
    <div className='flex flex-col sticky top-0 bg-gray-50 w-80 h-screen'>
  
       <div id="logo" className='flex gap-2 mt-4 justify-between items-center px-3  text-blue-500'>
          <div className='flex gap-2 justify-between items-center'>
            <IoBookOutline className='text-xl'/>
           <span className='text-2xl font-bold'>Bookt</span>
          </div>
          <div className="text-gray-900 border flex justify-center items-centerss  border-gray-300 w-5 h-5  rounded-full">
            <MdKeyboardDoubleArrowLeft className='text-xl'/>
          </div>
       </div>


       <div className="mt-6">
        <span className="text-xl  font-thin px-2">
            WorkSpace
            <ul className="flex  flex-col mt-3">
                <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <SlCalender className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Calender</span>
                </li>

                 <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <GrCatalogOption className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Catalog</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>
                

                <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <GoInbox className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Inbox</span>
                </li>

                <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <BsPeople className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Customers</span>
                </li>

                <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <TbClockBitcoin className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Reminders</span>
                </li>

            </ul>
        </span>

       </div>

       <span className="text-xl -mt font-thin px-2">
            Finance
            <ul className="flex  flex-col mt-3 -mx-2">
                

                 <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <HiOutlineCash className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Cashback</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>

                  <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <MdOutlinePayment className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Payments</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>
                

                

            </ul>
        </span>

        <span className="text-xl mt-5 font-thin px-2">
            Company
            <ul className="flex  flex-col mt-3 -mx-2">
                

                 <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <TbFileAnalytics className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Analytics</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>

                  <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <CiUser className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Staff</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>

                 <li className='flex group  hover:bg-blue-100 hover:cursor-pointer  px-3 py-2 transition-all hover:rounded-lg text-md gap-2 items-center text-lg'>
                    <CiSettings className='group-hover:text-blue-500' />
                    <span className='px-4 group-hover:text-blue-500'>Settings</span>
                    <MdKeyboardArrowDown className='group-hover:text-blue-500 absolute left-56' />
                </li>
                

                

            </ul>
        </span>

    </div>
  )
}

export default Slider