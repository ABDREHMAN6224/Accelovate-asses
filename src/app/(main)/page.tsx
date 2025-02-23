import DeleteTodo from "@/components/form/DeleteTodo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTodos } from "@/lib/actions";
import { Todo } from "@prisma/client";
import {  Edit, Trash2 } from "lucide-react";

import Link from "next/link";
import React from "react";

type Props = {};

async function Home({}: Props) {

  const todos = (await getTodos()) ?? [];
 
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Todo List */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <Card key={todo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{todo.title}</CardTitle>
                <CardDescription>{todo.content}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Created: {new Date(todo.createdAt).toLocaleDateString()}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Link href={`/edit/${todo.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </Link>
               <DeleteTodo id={todo.id} />
              </CardFooter>
            </Card>
          ))}
          {todos.length === 0 && (
            <div className="col-span-3 flex-col gap-3 flex justify-center items-center">
              <p className="text-gray-500">No todos found</p>
              <Button asChild variant="outline" className="ml-2">
                <Link href="/new">Create New</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
