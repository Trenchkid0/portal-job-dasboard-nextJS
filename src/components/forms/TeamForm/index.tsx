import FieldInput from '@/components/oragnism/FieldInput'
import { InstagramIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import DialogAddTeam from './DialogAddTeam'
import { CompanyTeam } from '@prisma/client'

type TeamFormProps = {
  teams:CompanyTeam[] | undefined,
}

export default function TeamForm({teams}: TeamFormProps) {

  
  return (
    <FieldInput
			title="Basic Information"
			subtitle="Add team members of your company"
		>
      <div className='w-[65%] mb-5'>
        <div className='flex flex-row justify-between items-center' > 
          <div className='text-lg font-semibold'>{teams?.length} Members</div>
          <DialogAddTeam/>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-6 '>
          {teams?.map((item:CompanyTeam)=> (
            <div key={item.id} className='p-3 shadow text-center'>
              <div className='w-14 h-14 rounded-full bg-gray-300 mx-auto'/>
              <div className='font-semibold mt-4'>{item.name} </div>
              <div className='text-sm text-gray-500'>{item.position} </div>

              <div className='mt-5 inline-flex mx-auto gap-3 text-gray-500'>
              <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                <BsInstagram className='w-4 h-4' />
              </a>
              <a href={item.linkedin} target="_blank" rel="noopener noreferrer">

                <LinkedinIcon className='w-4 h-4'  />
              </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    
    </FieldInput>
  )
}