// client.ts
import { createClient } from '@sanity/client'

export default createClient({
    projectId: `${process.env.SANITY_API_PROJECT_ID}`,
    dataset: `${process.env.production}`,
    apiVersion: '2023-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
})