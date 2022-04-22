import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a
        className="fixed bottom-24 right-5 cursor-pointer rounded-full bg-orange-400 
        p-4 text-white shadow-xl transition-colors hover:bg-orange-500"
      >
        {children}
      </a>
    </Link>
  );
}
