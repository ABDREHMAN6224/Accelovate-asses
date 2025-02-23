import { PrismaClient } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateTodo } from "@/lib/actions";
import FormContainer from "@/components/form/FormContainer";
import SubmitButton from "@/components/form/SubmitButton";
import UpdateForm from "@/components/form/UpdateForm";

const prisma = new PrismaClient();

type Params = {
  params: {
    id: string;
  };
};

export default async function EditTodoPage({ params }: Params) {
  const { id } = params;

  // Fetch the todo data using the ID
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return <UpdateForm todo={todo} />;
}
