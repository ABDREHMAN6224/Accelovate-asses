"use server";
import { redirect } from "next/navigation";
import { authOptions } from "./auth"
import { getServerSession } from "next-auth";
import { prisma } from "./db";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
    const data = await getServerSession(authOptions);
    const user = data?.user;
    if(!user) {
        redirect("/signin")
    }
    const todos = await prisma.user.findUnique({
        where:{
            email:user.email!
        }
    }).Todos()
    return todos
}



export async function updateTodo(prevState:any,formData: FormData) {
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
  
    try {
      await prisma.todo.update({
        where: { id },
        data: { title, content },
      });
      revalidatePath("/")
      return { message: 'updated' };
    } catch (error) {
      return { message: 'Failed to update todo' };
    }
  }

  export async function deleteTodo(prevState:any,formData: FormData) {
    const id = formData.get('id') as string;
  
    try {
      await prisma.todo.delete({
        where: { id },
      });
        revalidatePath("/")
      return { message: 'Todo deleted successfully' };
    } catch (error) {
      return { message: 'Failed to delete todo' };
    }
  }

    export async function createTodo(_:any,formData: FormData) {
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const data = await getServerSession(authOptions);
        // @ts-ignore
        const user = data?.user?.id;
    
        try {
        await prisma.todo.create({
            data:{
                title,
                content,
                userId:user
            }
        });
        revalidatePath("/new")
    
        return { message: 'Todo created successfully' };
        } catch (error) {
        return { message: 'Failed to create todo' };
        }
    }