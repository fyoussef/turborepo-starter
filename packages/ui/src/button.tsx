import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="px-4 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center">
      {children}
    </button>
  );
}
