"use client";

import FieldInput from '@/components/oragnism/FieldInput';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { socialMediaFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type SocialMediaProps = {
  // detail: CompanySocialMedia | undefined;
}

const onSubmit = (val: z.infer<typeof socialMediaFormSchema>) => {
  console.log(val);
}

export default function SocialMedia({}: SocialMediaProps) {
  const form = useForm<z.infer<typeof socialMediaFormSchema>>({
		resolver: zodResolver(socialMediaFormSchema),
		
	});
  return (
    <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FieldInput title='Basic Information' subtitle='Add elsewhere links to your company profile. You can add only username without full https links.'>
        <div className="space-y-5">
						<FormField
							control={form.control}
							name="facebook"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Facebook</FormLabel>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="https://facebook.com/twitter"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
            <FormField
							control={form.control}
							name="twitter"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Twitter</FormLabel>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="https://facebook.com/twitter"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
             <FormField
							control={form.control}
							name="instagram"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Instagram</FormLabel>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="https://facebook.com/twitter"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
             <FormField
							control={form.control}
							name="linkedin"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Linkedin</FormLabel>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="https://facebook.com/twitter"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
             <FormField
							control={form.control}
							name="youtube"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Youtube</FormLabel>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="https://facebook.com/twitter"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
            
            </div>
        </FieldInput>
        <div className="flex justify-end">
					<Button size="lg">Save Changes</Button>
				</div>
      </form>
    </Form>
  )
}