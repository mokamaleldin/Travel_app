"use client"
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import IntroBoard from '../components/IntroBoard';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    {showIntro && <IntroBoard onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
        </>
      )}
    </>
  )
}
