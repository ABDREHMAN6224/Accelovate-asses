"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
    text?:string;
    loadingText?:string;
}

function SubmitButton({
    text="Submit",
    loadingText="Submitting"
}: Props) {
    const {pending} = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="bg-my-primary">
    {pending && <Loader2 size={20} className="w-5 h-5 mr-2 animate-spin" />}
    {pending ? loadingText: text}
  </Button>  )
}

export default SubmitButton