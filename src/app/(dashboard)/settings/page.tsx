import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewForm from '@/components/forms/OverviewForm'
import SocialMedia from '@/components/forms/SocialMediaForm'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { overviewFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import TeamForm from '@/components/forms/TeamForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '../../../../lib/prisma'


type SettingsProps = {}


async function getDetailCOmpany(){
    const session = await getServerSession(authOptions);

    const company = await prisma.company.findFirst({
		where: { id: session?.user?.id },
		include: {
			Companyoverview: true,
			CompanySocialMedia: true,
			CompanyTeam: true,
		},
	});

	return company;
}

export default async function Settings({}: SettingsProps) {
    const company = await getDetailCOmpany()

    console.log(company);
    
  return (
    <div>
        <div className='font-semibold text-3xl mb-5 '>Settings</div>
        <Tabs defaultValue="overview">
                <TabsList className='mb-8'>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
                    <TabsTrigger value="teams">Teams</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <OverviewForm detail={company?.Companyoverview[0]}/>
                </TabsContent>
                <TabsContent value="socialLinks">
                    <SocialMedia detail={company?.CompanySocialMedia[0]}/>
                </TabsContent>
                <TabsContent value="teams">
                    <TeamForm teams={company?.CompanyTeam}/>
                </TabsContent>
        </Tabs>
        
    </div>
  )
}