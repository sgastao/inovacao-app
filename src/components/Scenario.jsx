import { ShieldCheck, Lightbulb } from 'lucide-react'

const badges = {
  1: { text: 'Desafio 1 de 2: Ecossistema', icon: ShieldCheck },
  2: { text: 'Desafio 2 de 2: Tomada de Decisão', icon: Lightbulb },
}

export default function Scenario({ number, challenge, options, onAnswer, levelTitle }) {
  const badge = badges[number]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{badge.text}</span>
      </div>
      <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
        <badge.icon className="absolute -right-4 -top-4 w-24 h-24 text-slate-800 opacity-50" />
        <p className="text-lg leading-relaxed relative z-10">{challenge}</p>
      </div>
      <p className="font-bold text-slate-700">
        {number === 1 ? 'Na sua função atual, qual seria a sua abordagem?' : `Como gestor ${levelTitle.toLowerCase()}, qual a sua decisão?`}
      </p>
      <div className="space-y-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(opt)}
            className="w-full text-left p-4 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-colors text-sm font-medium text-slate-700"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  )
}
