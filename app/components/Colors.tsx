import React from "react";

export default function Colors() {
  return (
    <div>
      <div className="h-96 flex flex-col items-center justify-center bg-slate-200 border-b-2 border-slate-400">
        <h1 className="text-xl font-bold text-zinc-800 font-[family-name:var(--font-geist-sans)]">
          bg-slate-200
        </h1>
        <div className="flex flex-row justify-center items-center space-x-3 mt-5">
          <button className="px-6 py-2 bg-slate-400 text-white font-semibold rounded-sm hover:bg-slate-500 transition-colors border font-[family-name:var(--font-geist-mono)]">
            Button 1
          </button>
          {/* Button 2 */}
          <button className="px-6 py-2 bg-transparent text-zinc-800 font-semibold rounded-sm   hover:text-zinc-600 transition-colors border border-zinc-500 font-[family-name:var(--font-geist-mono)]">
            Button 2
          </button>
        </div>
      </div>
      <div className="h-96 flex flex-col items-center justify-center bg-gray-200 border-b-2 border-gray-400">
        <h1 className="text-xl font-bold text-gray-800 font-[family-name:var(--font-geist-sans)]">
          bg-gray-200
        </h1>
        <div className="flex flex-row justify-center items-center space-x-3 mt-5">
          <button className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-sm hover:bg-gray-500 transition-colors border font-[family-name:var(--font-geist-mono)]">
            Button 1
          </button>
          {/* Button 2 */}
          <button className="px-6 py-2 bg-transparent text-gray-800 font-semibold rounded-sm   hover:text-gray-600 transition-colors border border-zinc-500 font-[family-name:var(--font-geist-mono)]">
            Button 2
          </button>
        </div>
      </div>
      <div className="h-96 flex flex-col items-center justify-center bg-zinc-200 border-b-2 border-zinc-400">
        <h1 className="text-xl font-bold text-zinc-800 font-[family-name:var(--font-geist-sans)]">
          bg-zinc-200
        </h1>
        <div className="flex flex-row justify-center items-center space-x-3 mt-5">
          <button className="px-6 py-2 bg-zinc-500 text-white font-semibold rounded-sm hover:bg-zinc-600 transition-colors border font-[family-name:var(--font-geist-mono)]">
            Button 1
          </button>
          {/* Button 2 */}
          <button className="px-6 py-2 bg-transparent text-zinc-800 font-semibold rounded-sm   hover:text-zinc-600 transition-colors border border-zinc-500 font-[family-name:var(--font-geist-mono)]">
            Button 2
          </button>
        </div>
      </div>
      <div className="h-96 flex flex-col items-center justify-center bg-neutral-200 border-b-2 border-neutral-400">
        <h1 className="text-xl font-bold text-neutral-800">bg-neutral-200</h1>
        <div className="flex flex-row justify-center items-center space-x-3 mt-5">
          <button className="px-6 py-2 bg-neutral-500 text-white font-semibold rounded-sm hover:bg-neutral-600 transition-colors border font-[family-name:var(--font-geist-mono)]">
            Button 1
          </button>
          {/* Button 2 */}
          <button className="px-6 py-2 bg-transparent text-neutral-800 font-semibold rounded-sm   hover:text-neutral-600 transition-colors border border-neutral-500 font-[family-name:var(--font-geist-mono)]">
            Button 2
          </button>
          s
        </div>
      </div>
    </div>
  );
}
