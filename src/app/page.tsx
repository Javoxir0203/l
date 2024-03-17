"use client";

import Header from "@/components/Header";
import { DataType } from "@/components/Modal";
import Search from "@/components/Search";
import ShortCut from "@/components/ShortCut";

export default function Home() {
  return (
    <>
      <main className="main min-h-screen min-w-screen" id="main">
        <Header />
        <Search/>
        <ShortCut />
      </main>
    </>
  );
}
