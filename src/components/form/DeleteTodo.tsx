import React from 'react'
import FormContainer from './FormContainer';
import { deleteTodo } from '@/lib/actions';
import SubmitButton from './SubmitButton';

type Props = {
    id:string;
}

function DeleteTodo({id}: Props) {
  return (
    <FormContainer action={deleteTodo}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton text="Delete" loadingText="Deleting..." />
    </FormContainer>
  )
}

export default DeleteTodo