// client.ts
import { createClient } from '@sanity/client'

export default createClient({
    projectId: '41ix8b1y',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: false,
})