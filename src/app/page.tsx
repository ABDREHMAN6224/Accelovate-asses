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
  const dummyTodos: Todo[] = [
    {
      id: "1",
      title: "First Todo",
      content: "This is the first todo",
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: "1",
    },
    {
      id: "2",
      title: "Second Todo",
      content: "This is the second todo",
      done: false,
      userId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Todo List */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyTodos.map((todo) => (
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
                <Button
                  variant="destructive"
                  size="sm"
                  // onClick={() => handleDelete(todo.id)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
