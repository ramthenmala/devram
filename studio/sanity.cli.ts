import { defineCliConfig } from 'sanity/cli'
import { table } from '@sanity/table';

export default defineCliConfig({
  api: {
    projectId: '41ix8b1y',
    dataset: 'production'
  },
  autoUpdates: true,
})