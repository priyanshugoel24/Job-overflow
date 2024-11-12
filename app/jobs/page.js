import React from 'react'
import WebDeveloperJobs from '@/components/WebDeveloperJobs'
import AppDeveloperJobs from '@/components/AppDeveloperJobs'
import BlockChainDevJobs from '@/components/BlockChainDevJobs'

const Jobs = () => {
   
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Web Developer Jobs</h1>
      <WebDeveloperJobs />
      <h1 className="text-3xl font-bold text-center my-4">App Developer Jobs</h1>
      <AppDeveloperJobs />
      <h1 className="text-3xl font-bold text-center my-4">BlockChain Developer Jobs</h1>
      <BlockChainDevJobs />

      
    </div>
  )
}

export default Jobs
