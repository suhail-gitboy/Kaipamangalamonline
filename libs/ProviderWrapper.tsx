"use client"
import React, { useState } from 'react'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider, useSession } from "next-auth/react"

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {

    const [queryClient] = useState(() => new QueryClient())


    return (
        <>
            <QueryClientProvider client={queryClient}>


                <SessionProvider>


                    {
                        children
                    }

                </SessionProvider>
            </QueryClientProvider>
        </>
    )
}

export default ProviderWrapper
