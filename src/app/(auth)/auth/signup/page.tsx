"use client";
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

import { Input } from '@/components/ui/input';
import { signUpFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
type SignUpPageProps = {}


export default function SignUpPage({}: SignUpPageProps) {
  const form = useForm<z.infer<typeof signUpFormSchema>> ({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = (val: z.infer<typeof signUpFormSchema>) => {
    console.log(val);

  }
  return (
    <div className='relative w-full h-screen'>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='border border-border p-5'>
        <div className='font-semibold text-center text-2xl mb-2'>
          Login your account
        </div>
        <div className='text-sm text-gray-500'>
          Enter your email to access dashboard
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-5'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="Ichigo" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="whoknow@gmail.com" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												type="password"
												placeholder="Enter your password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
            <Button className='w-full mt-5'>Sign In</Button>

            <div className="text-sm">
              Have an account{" "}
              <Link
                href="/auth/signin"
                className="text-primary"
              >
                Sign In
              </Link>
            </div>

          </form>
        </Form>
      </div>
    </div>
  </div>
  )
}