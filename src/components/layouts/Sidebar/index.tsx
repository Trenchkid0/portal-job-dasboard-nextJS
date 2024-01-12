import { Button } from '@/components/ui/button'
import React from 'react'
import { AiOutlineHome,AiOutlineMessage,AiOutlineUserAdd,AiOutlineCalendar,AiOutlineSetting,AiOutlineLogout } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

type SideBarProps = {}

export default function SideBar({}: SideBarProps) {
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2' >
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div className='space-y-3'>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <AiOutlineHome className='mr-2 text-lg' />
                        Home
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <AiOutlineMessage className='mr-2 text-lg' />
                        Messages
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <BsBuilding className='mr-2 text-lg' />
                        Company Profile
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <AiOutlineUserAdd className='mr-2 text-lg' />
                        All Applicants
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <HiOutlineDocumentText className='mr-2 text-lg' />
                        Job Listing
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <AiOutlineCalendar className='mr-2 text-lg' />
                        My Schedule
                    </Button>
                </div>
            </div>
        </div>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2' >
            <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Setting
                </h2>
                <div className='space-y-3'>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary' >
                        <AiOutlineSetting className='mr-2 text-lg' />
                        Settings
                    </Button>
                    <Button variant={'ghost'} className='w-full text-red-500 hover:text-red-500 hover:bg-red-100 justify-start rounded-none ' >
                        <AiOutlineLogout className='mr-2 text-lg' />
                        Logout
                    </Button>
                </div>
                
            </div>

        </div>
    </div>
  )
}