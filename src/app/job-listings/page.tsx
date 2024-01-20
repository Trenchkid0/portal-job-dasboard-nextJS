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
import { MoreVerticalIcon } from 'lucide-react'
  

type JobListingPageProps = {}

export default function JobListingPage({}: JobListingPageProps) {
  return (
    <div>
        <div className='font-semibold text-3xl'>Job Listing</div>
        <div className='mt-10'>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {JOB_LISTING_COLUMNS.map((item:string,index:number)=>(
                            <TableHead key={index+1} >{item}</TableHead>
                        ))}
                       
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {JOB_LISTING_DATA.map((item:any,index:number)=> (
                        <TableRow key={item.roles + index}>
                            <TableCell>
                                {item.roles}
                            </TableCell>
                            <TableCell>
                                <Badge>Live</Badge>
                            </TableCell>
                            <TableCell>
                                {item.datePosted}
                            </TableCell>
                            <TableCell>
                                {item.dueDate}
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
								<MoreVerticalIcon className='w-4 h-4'/>
							</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    </div>
  )
}