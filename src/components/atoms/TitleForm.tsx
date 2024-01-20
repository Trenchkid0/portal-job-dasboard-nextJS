import React from 'react'

type TitleFormProps = {
    title: string;
	subtitle: string;
}

export default function TitleForm({subtitle, title}: TitleFormProps) {
  return (
    <>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-400">{subtitle}</div>
    </>
  )
}