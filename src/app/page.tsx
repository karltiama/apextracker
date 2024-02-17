'use client'

import React, { useState } from 'react';
import Link from 'next/link';


import PlayerStats from './components/PlayerStats';
import Header from './components/Header';
import RedBlock from './components/RedBlock';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
        <Header />
        <Link href="/blog/my-first-post"></Link>
    </main>
  );
}
