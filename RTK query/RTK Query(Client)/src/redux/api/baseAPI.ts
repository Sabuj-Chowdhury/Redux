import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (build) => ({
    getTask: build.query({
      query: () => "/tasks",
    }),
    createTask: build.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
    }),
  }),
});

export const { useGetTaskQuery, useCreateTaskMutation } = baseAPI;
