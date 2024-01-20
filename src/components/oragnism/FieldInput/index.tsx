import { Separator } from '@/components/ui/separator'
import React, { ReactNode } from 'react'

type FieldInputProps = {
    children:ReactNode,
    title:string,
    subtitle:string,
}

export default function FieldInput({children,title,subtitle}: FieldInputProps) {
  return (
    <>
    <div className='flex flex-row items-start'>
        <div className='w-[35%]'>
            <div className='font-semibold'>{title}</div>
            <div className='text-gray-500 w-80'>{subtitle}</div>
        </div>
        {children}
    </div>
    <Separator/>
    
    </>
  )
}