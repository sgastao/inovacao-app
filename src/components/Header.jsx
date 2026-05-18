import { Zap } from 'lucide-react'

export default function Header() {
  return (
    <div className="bg-indigo-700 p-6 flex justify-between items-center text-white">
      <div>
        <h1 className="text-2xl font-black italic tracking-tighter">
          <span className="text-yellow-400">I</span>nov<span className="text-yellow-400">A</span>ção
        </h1>
        <p className="text-indigo-200 text-xs mt-1 uppercase tracking-widest">enzyme | consulting</p>
      </div>
      <Zap className="w-8 h-8 text-yellow-400 opacity-80" />
    </div>
  )
}
