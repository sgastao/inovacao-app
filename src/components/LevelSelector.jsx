import { niveisCarreira } from '../data/scenarios'

export default function LevelSelector({ onSelect }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
      <div>
        <h3 className="text-xl font-bold text-indigo-900">Qual o seu patamar atual de carreira?</h3>
        <p className="text-sm text-slate-500">Isto definirá a complexidade do segundo desafio tático.</p>
      </div>
      <div className="grid gap-3">
        {niveisCarreira.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => onSelect(lvl)}
            className="p-5 border border-slate-200 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-left group"
          >
            <h4 className="font-bold text-lg mb-1">{lvl.title}</h4>
            <p className="text-sm text-slate-500 group-hover:text-indigo-100">{lvl.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
