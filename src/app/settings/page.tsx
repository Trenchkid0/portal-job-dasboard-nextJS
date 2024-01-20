import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewForm from '@/components/forms/OverviewForm'
import SocialMedia from '@/components/forms/SocialMediaForm'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { overviewFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'


type SettingsProps = {}

export default function Settings({}: SettingsProps) {
    
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
                    <OverviewForm/>
                </TabsContent>
                <TabsContent value="socialLinks">
                    <SocialMedia/>
                </TabsContent>
                <TabsContent value="teams">
                    <div>Teams</div>
                </TabsContent>
        </Tabs>
        
    </div>
  )
}