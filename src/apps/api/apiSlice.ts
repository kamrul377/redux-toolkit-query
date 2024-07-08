


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = { 
    userId: number; 
    id : number;
    title: string;
    completed: boolean;
}

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getAllTodos: builder.query<Todo[], void>({
            query: () => "/todo",
        }),
        getSingleTodo: builder.query<Todo[],void>({
            query: (id) => `todos/${id}`,
        }),
    }),
});

// Export the auto-generated hooks for the endpoints
export const { useGetAllTodosQuery, useGetSingleTodoQuery } = apiSlice;
