import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Applicants from '@/components/oragnism/Applicants'
import JobDetail from '@/components/oragnism/JobDetail'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '../../../../../lib/prisma'


type paramsType = {
    id:string
}

type JobDetailPageProps = {
    params:paramsType
}


async function getDetailJob(id: string) {
	const job = await prisma.job.findFirst({
		where: {
			id: id,
		},
		include: {
			applicant: {
				include: {
					user: true,
				},
			},
			CategoryJob: true,
		},
	});

	return job;
}


export default async function JobDetailPage({params}: JobDetailPageProps) {
    const job = await getDetailJob(params.id)
  return (
    <div>
        <div className='inline-flex items-center gap-5 mb-5'>
            <div>
                <Link href='/job-listings'>
                    <ArrowLeftIcon className='w-9 h-9'/>
                </Link>
            </div>
            <div>

                <div className='text-2xl font font-semibold mb-1'>
                    {job?.roles}
                </div>
                <div className=''>
                    {job?.CategoryJob?.name} . {job?.jobType} .{" "}
					{job?.applicants}/{job?.needs} Hired
                </div>

            </div>

            
        </div>
            <Tabs defaultValue="applicants">
                <TabsList className='mb-8'>
                    <TabsTrigger value="applicants">Applicants</TabsTrigger>
                    <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
                </TabsList>
                <TabsContent value="applicants">
                    <Applicants applicants={job?.applicant}/>
                </TabsContent>
                <TabsContent value="jobDetails">
                    <JobDetail detail={job}/>
                </TabsContent>
            </Tabs>
    </div>
  )
}