import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { JOB_APPLICANT_DATA, JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from '@/constants'
import { Badge } from '@/components/ui/badge'
import { MoreVerticalIcon, icons } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import ButtonActionTable from '@/components/oragnism/ButtonActionTable'
import prisma from '../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Job } from '@prisma/client'
import { dateFormat } from '@/lib/utils'
import moment from 'moment'
  

type JobListingPageProps = {}

async function getDataJob(){
    const session = await getServerSession(authOptions);
    const jobs = prisma.job.findMany({
        where: {
            companyId: session?.user.id,
        }
    })
    return jobs;
}

export default async function JobListingPage({}: JobListingPageProps) {

    const jobs = await getDataJob()

    console.log(jobs);
    
  return (
    <div>
        <div className='font-semibold text-3xl'>Job Listing</div>
        <div className='mt-10'>
            <Table>
                <TableHeader>
                    <TableRow>
                        {JOB_LISTING_COLUMNS.map((item:string,index:number)=>(
                            <TableHead key={index+1} >{item}</TableHead>
                        ))}
                       
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.map((item:Job,index:number)=> (
                        <TableRow key={item.roles + index}>
                            <TableCell>
                                {item.roles}
                            </TableCell>
                            <TableCell>
                                {moment(item.datePosted).isBefore(item.dueDate) ? <Badge>Live</Badge> : <Badge variant='destructive'>Abis</Badge>}
                            </TableCell>
                            <TableCell>
                                {dateFormat(item.datePosted)}
                            </TableCell>
                            <TableCell>
                                {dateFormat(item.dueDate)}
                            </TableCell>
                            <TableCell>
									<Badge variant="outline">
										{item.jobType}
									</Badge>
							</TableCell>
                            <TableCell>{item.applicants}</TableCell>
							<TableCell>
								{item.applicants} / {item.needs}
							</TableCell>
							<TableCell>
								<ButtonActionTable
									url={`/job-detail/${item.id}`}
								/>
							</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    </div>
  )
}