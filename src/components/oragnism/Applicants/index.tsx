import React from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";
import { Applicant } from '@prisma/client';

type ApplicantsProps = {
	applicants: Applicant[] | undefined,
}

export default function Applicants({applicants}: ApplicantsProps) {
  return (
    <Table>
			<TableHeader>
				<TableRow>
					{JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
						<TableHead key={item + i}>{item}</TableHead>
					))}
					<TableHead>Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{applicants && (
					<>
						{applicants.map((item: any, i: number) => (
							<TableRow key={item.id + i}>
								<TableCell>{item.user.name}</TableCell>
								<TableCell>
									<ButtonActionTable url="" />
								</TableCell>
							</TableRow>
						))}
					</>
				)}
			</TableBody>
		</Table>
  )
}