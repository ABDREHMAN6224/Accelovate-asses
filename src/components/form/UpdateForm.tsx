"use client";
import React from 'react'
import { Textarea } from '../ui/textarea'
import SubmitButton from './SubmitButton'
import { Input } from '../ui/input'
import FormContainer from './FormContainer'
import { updateTodo } from '@/lib/actions'
import { Todo } from '@prisma/client'

type Props = {
    todo:Todo
}

function UpdateForm({todo}: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-6">Edit Todo</h1>
    <FormContainer action={updateTodo}>
      <input type="hidden" name="id" value={todo.id} />
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            defaultValue={todo.title}
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
            defaultValue={todo.content || ''}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <SubmitButton text="Update Todo" loadingText="Updating..." />
        </div>
      </div>
    </FormContainer>
  </div>  )
}

export default UpdateForm