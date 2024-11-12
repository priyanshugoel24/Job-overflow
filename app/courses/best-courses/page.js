import React from 'react';

import JavaScriptCourseCatalog from '@/components/JavaScriptCourseCatalog';
import PythonCatalog from '@/components/PythonCatalog';
import AICatalog from '@/components/AICatalog';
import AppDevCatalog from '@/components/AppDevCatalog';
import GameDevCatalog from '@/components/GameDevCatalog';
import BlockChainCatalog from '@/components/BlockChainCatalog';
import NetSecurity from '@/components/NetSecurity';
import DBDesignCatalog from '@/components/DBDesignCatalog';

const HomePage = () => (
  <div className = "bg-whitesmoke">
    <div className="mb-10 mt-10 text-center text-5xl"><h1>Our Top Curated Courses <br /> <span className='text-6xl'>Across Different Platforms</span></h1></div>
    <div className='mx-6 mb-8'><JavaScriptCourseCatalog/></div>
    <div className='mx-6 mb-8'><PythonCatalog/></div>
    <div className="mx-6 mb-8"><AICatalog/></div>
    <div className="mx-6 mb-8"><AppDevCatalog/></div>
    <div className="mx-6 mb-8"><GameDevCatalog/></div>
    <div className="mx-6 mb-8"><BlockChainCatalog/></div>
    <div className="mx-6 mb-8"><NetSecurity/></div>
    <div className="mx-6 mb-8"><DBDesignCatalog/></div>
    
  </div>
);

export default HomePage;