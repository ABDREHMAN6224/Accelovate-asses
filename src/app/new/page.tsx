"use client";
import FormContainer from '@/components/form/FormContainer'
import SubmitButton from '@/components/form/SubmitButton'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createTodo } from '@/lib/actions'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <FormContainer action={createTodo}>
    <div className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <Input
          type="text"
          id="title"
          name="title"
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <Textarea
          id="content"
          name="content"
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <SubmitButton />
      </div>
    </div>
  </FormContainer>  )
}

export default page