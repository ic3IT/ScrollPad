'use client'
import React from 'react';
import { Image } from '@nextui-org/react';

function Community() {
  const stats = {
    usdValueStaked: '6,156,389',
    slimStakers: '13,386',
    slimStaked: '38,369,902',
    totalSupplyStaked: '38.37%'
  };

  return (
    <div id='community'>
      <div className='spaceunder pt-12'>
        {/* If you use spaceunder for spacing, ensure it has the same styling in both components */}
      </div>
      <div className="flex flex-wrap mt-32 mb-32 justify-center pl-44">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <h2 className="mb-5 text-6xl font-bold text-white">For the community, by the community</h2>
          <p className="text-gray-300">Solanium is a multichain launchpad. We bring you the most innovative web3 projects. Stake your tokens and get a guaranteed allocation in every sale!</p>
        </div>
        <div className="grid grid-cols-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 justify-between gap-2 pl-32">
          <div className="stat">
            <p className="stat-title">USD value staked</p>
            <p className="stat-value">${stats.usdValueStaked}</p>
          </div>
          <div className="stat">
            <p className="stat-title">SLIM stakers</p>
            <p className="stat-value">{stats.slimStakers}</p>
          </div>
          <div className="stat">
            <p className="stat-title">SLIM staked</p>
            <p className="stat-value">{stats.slimStaked}</p>
          </div>
          <div className="stat">
            <p className="stat-title">% total supply staked</p>
            <p className="stat-value">{stats.totalSupplyStaked}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
