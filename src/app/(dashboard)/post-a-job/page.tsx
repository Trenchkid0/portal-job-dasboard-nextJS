"use client";
import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobFormSchema } from "@/lib/form-schema";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link, { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import FieldInput from "@/components/oragnism/FieldInput";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constants";
import InputSkills from "@/components/oragnism/InputSkills";
import CKEditor from "@/components/oragnism/CKEditor";
import InputBenefits from "@/components/oragnism/InputBenefits";
import { Button } from "@/components/ui/button";
import useSWR from 'swr'
import { fetcher } from "@/lib/utils";
import { CategoryJob } from "@prisma/client";
import { useSession } from "next-auth/react";
import moment from "moment";
import { useToast } from "@/components/ui/use-toast";

type PostJobPageProps = {};

export default function PostJobPage({}: PostJobPageProps) {
  const { data, error, isLoading } = useSWR<CategoryJob[]>("/api/job/categories", fetcher)

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = async(val: z.infer<typeof jobFormSchema>) => {
    try {
      const body: any = {
        applicants:0,
        benefits:val.benefits,
        categoryId: val.categoryId,
				companyId: session?.user.id!!,
        datePosted: moment().toDate(),
        description: val.jobDescription,
				dueDate: moment().add(1, "M").toDate(),
        jobType: val.jobType,
				needs: 20,
				niceToHaves: val.niceToHave,
				requiredSkills: val.requiredSkills,
				responsibility: val.responsibility,
				roles: val.roles,
				salaryFrom: val.salaryFrom,
				salaryTo: val.salaryTo,
				whoYouAre: val.whoYouAre,
      }

      await fetch("/api/job", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

      await router.push("/job-listings");
    } catch (error) {

      toast({
				title: "Error",
				description: "Please try again",
			});
			console.log(error);
      
    }
  };


  useEffect(() => {
    setEditorLoaded(true);
  },[]);
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-500">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6 pt-6">
          <FieldInput
            title="Job Title"
            subtitle="Job Titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-[450px]" placeholder="e.e Software Engineer" {...field} />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple choices"
          >
            <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {JOBTYPES.map((items:string, index:number) =>(
                    <>
                    <FormItem key={items + index} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={items} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {items}
                    </FormLabel>
                  </FormItem>
                    </>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </FieldInput>
          <FieldInput title="Salary" subtitle="Please specify the estimated">
                <div className="w-[450px] flex flex-row justify-between items-center">
                <FormField
                  control={form.control}
                  name="salaryFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" placeholder="$50" {...field} />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span className="text-center">To</span>
                <FormField
                  control={form.control}
                  name="salaryTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-full" placeholder="$1050" {...field} />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
          </FieldInput>
          <FieldInput title="Categories" subtitle="You can select a job categories"  >
          <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select job categories</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[450px]">
                    <SelectValue placeholder="Select job categories" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.map((item: CategoryJob) => (
												<SelectItem
													key={item.id}
													value={item.id}
												>
													{item.name}
												</SelectItem>
									))}
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />

          
          </FieldInput>
          <FieldInput title="Required Skills" subtitle="Add required skills for the job">
            <InputSkills form={form} name="requiredSkills" label="Add Skills" />
          </FieldInput>
          <FieldInput title="Job Description"  subtitle="Job titles must be describe one position">
            <CKEditor form={form} name="jobDescription" editorLoaded={editorLoaded}/>
          </FieldInput>
          <FieldInput title="Responsibility"  subtitle="Outline the core responsibilies of the position">
            <CKEditor form={form} name="responsibility" editorLoaded={editorLoaded}/>
          </FieldInput>
          <FieldInput title="Who You Are"  subtitle="Add your preferrred candidates qualifications">
            <CKEditor form={form} name="whoYouAre" editorLoaded={editorLoaded}/>
          </FieldInput>
          <FieldInput title="Nice-To-Have"  subtitle="Add noce-to-have and qualification for the role to encourage a more diverse set of candidates to apply">
            <CKEditor form={form} name="niceToHave" editorLoaded={editorLoaded}/>
          </FieldInput>
          <FieldInput
						title="Perks and Benefits"
						subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
					>
						<InputBenefits form={form} />
					</FieldInput>
          <div className="flex justify-end">
						<Button size="lg">Do a Review</Button>
					</div>
        </form>
      </Form>
    </div>
  );
}
