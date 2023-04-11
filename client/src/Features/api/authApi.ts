import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({

        loginUser : builder.mutation({
            query: (data) => ({
                url:'/login',
                method: 'POST',
                body : data
            })
            
            
        }),
        signupUser : builder.mutation({
            query : (data) => ({
                url:'/signup',
                method: 'POST',
                body : data
            }),
        })
     
      }),
    })

    export const {useLoginUserMutation,useSignupUserMutation} = authApi
