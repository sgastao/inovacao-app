import { ChevronRight } from 'lucide-react'
import { contextos } from '../data/scenarios'

export default function ContextSelector({ onSelect }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
      <div>
        <h3 className="text-xl font-bold text-indigo-900">Em que ecossistema atua?</h3>
        <p className="text-sm text-slate-500">O impacto da tecnologia varia consoante a natureza da organização.</p>
      </div>
      <div className="grid gap-4">
        {contextos.map((ctx) => {
          const Icon = ctx.icon
          return (
            <button
              key={ctx.id}
              onClick={() => onSelect(ctx)}
              className="flex items-center gap-4 p-4 border-2 border-slate-100 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50 transition-all text-left group"
            >
              <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-white transition-colors">
                <Icon className="w-6 h-6 text-indigo-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{ctx.name}</h4>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-indigo-600" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
