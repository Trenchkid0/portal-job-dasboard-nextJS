import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { PartyPopperIcon } from 'lucide-react'
import React from 'react'

type JobDetailProps = {}

export default function JobDetail({}: JobDetailProps) {
  return (
    <div>
        <div className='grid grid-cols-3 w-full gap-5'>
            <div className='col-span-2 space-y-10'>
                <div className=' text-3xl font-semibold'>
                    Description
                </div>
                <div className='text-gray-500 mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare risus sed molestie iaculis. Maecenas aliquet, nunc vel posuere aliquam, velit augue pretium ipsum, eget fringilla metus sapien nec urna. Vivamus ornare sapien augue, eu condimentum tortor facilisis nec. Nunc ligula magna, hendrerit quis pretium non, venenatis id nisi. Nam ac ullamcorper ante, et convallis orci. Vestibulum faucibus tellus eget eros mattis, a faucibus tortor semper. Duis id malesuada risus, quis cursus neque. Nam at justo finibus, tincidunt tortor at, accumsan eros. Mauris et consectetur quam.
                </div>
                <div className=' text-3xl font-semibold'>
                    Responsibility
                </div>
                <div className='text-gray-500 mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare risus sed molestie iaculis. Maecenas aliquet, nunc vel posuere aliquam, velit augue pretium ipsum, eget fringilla metus sapien nec urna. Vivamus ornare sapien augue, eu condimentum tortor facilisis nec. Nunc ligula magna, hendrerit quis pretium non, venenatis id nisi. Nam ac ullamcorper ante, et convallis orci. Vestibulum faucibus tellus eget eros mattis, a faucibus tortor semper. Duis id malesuada risus, quis cursus neque. Nam at justo finibus, tincidunt tortor at, accumsan eros. Mauris et consectetur quam.
                </div>
                <div className=' text-3xl font-semibold'>
                    Who You Are
                </div>
                <div className='text-gray-500 mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare risus sed molestie iaculis. Maecenas aliquet, nunc vel posuere aliquam, velit augue pretium ipsum, eget fringilla metus sapien nec urna. Vivamus ornare sapien augue, eu condimentum tortor facilisis nec. Nunc ligula magna, hendrerit quis pretium non, venenatis id nisi. Nam ac ullamcorper ante, et convallis orci. Vestibulum faucibus tellus eget eros mattis, a faucibus tortor semper. Duis id malesuada risus, quis cursus neque. Nam at justo finibus, tincidunt tortor at, accumsan eros. Mauris et consectetur quam.
                </div>
                <div className=' text-3xl font-semibold'>
                    Nice-To-Have
                </div>
                <div className='text-gray-500 mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare risus sed molestie iaculis. Maecenas aliquet, nunc vel posuere aliquam, velit augue pretium ipsum, eget fringilla metus sapien nec urna. Vivamus ornare sapien augue, eu condimentum tortor facilisis nec. Nunc ligula magna, hendrerit quis pretium non, venenatis id nisi. Nam ac ullamcorper ante, et convallis orci. Vestibulum faucibus tellus eget eros mattis, a faucibus tortor semper. Duis id malesuada risus, quis cursus neque. Nam at justo finibus, tincidunt tortor at, accumsan eros. Mauris et consectetur quam.
                </div>
            </div>
            <div>
                <div className='text-3xl font-semibold'>
                    About this role
                </div>
                <div className='shadow p-3 text-center my-6'>
                    1 <span className='text-gray-500'>of 10 capacity</span>
                    <Progress className='mt-10' value={10}/>
                </div>
                <div className='mb-10 space-y-5'>
                    <div className='flex justify-between'>
                        <div className='text-gray-500'>Apply Before</div>
                        <div className='font-semibold'>23 Nov 2024</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-500'>Job Posted On</div>
                        <div className='font-semibold'>23 Nov 2024</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-500'>Job Type</div>
                        <div className='font-semibold'>Full Time</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-500'>Salary</div>
                        <div className='font-semibold'>$100-$1080 USD</div>
                    </div>
                </div>
                <Separator/>

                <div className='my-10'>
                    <div className='text-3xl font-semibold mb-4'>
                        Categorey
                    </div>
                    <div className='space-x-5 '>
                        <Badge>Leader</Badge>
                    </div>
                </div>

                <Separator/>

                <div className='my-10'>
                    <div className='text-3xl font-semibold mb-4'>
                        Required Skills
                    </div>
                    <div className='space-x-5 '>
                        {["HTML","Javascript"].map((item:string,index:number) =>(
                            <Badge variant='outline' key={index}>{item}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Separator className='my-8' />
        <div>
				<div className="text-3xl font-semibold">Perks & Benefits</div>
				<div className="text-gray-500">
					This job comes with several perks and benefits
				</div>

				<div className="grid grid-cols-4 gap-5 mt-9">
					{[0,1,2].map((item:number)=>(
                       <div key={item}>
                            <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

                            <div className="text-lg font-semibold mb-3">
                                Full Healthcare
                            </div>
                            <div className="text-gray-500">
                                We believe in thriving communities
                            </div>
                        </div>
                    ))}
				</div>
			</div>

    </div>
  )
}