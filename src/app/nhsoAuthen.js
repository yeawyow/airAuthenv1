// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { smartcardAgent } from "../../Constants";

// Define a service using a base URL and expected endpoints
export const nhsoApi = createApi({
  reducerPath: "nhsoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: smartcardAgent,
  }),
  endpoints: (builder) => ({
    getAllAttractions: builder.query({
      query: (cid) => `getpatient/${cid}`,
    }),
    getPerson: builder.query({
      query: () => `/api/smartcard/read?readImageFlag=false`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAttractionsQuery, useGetPersonQuery } = nhsoApi;
