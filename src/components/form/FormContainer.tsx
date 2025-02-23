"use client";
import { ActionFunction } from '@/lib/types'
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom';
import { toast } from 'sonner';

type Props = {
    action?:ActionFunction;
    children:React.ReactNode;
}

const initialState = {
    message:""
}

function FormContainer({
    action= async ()=> {
        return initialState    
    },
    children
}: Props) {
    const [state,formAction] = useFormState(action,initialState);
    const ref = React.useRef<HTMLFormElement>(null);

    useEffect(()=>{
        if(state.message){
            toast(state.message)
            if(state.message === "updated"){
                redirect('/')
            }
            ref.current?.reset()
        }
    },[state])
  return (
    <form ref={ref} action={formAction}>{children}</form>
)
}

export default FormContainer