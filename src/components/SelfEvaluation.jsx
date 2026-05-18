import { Target, Brain, TrendingUp } from 'lucide-react'

const labels = {
  conceptual: 'Conceptuais',
  evaluative: 'Avaliativas',
  implementation: 'Implementação',
  relational: 'Relacionais',
  selfReflection: 'Auto-Reflexão',
}

export default function SelfEvaluation({ skills, setSkills, taskResult1, taskResult2, onGenerate }) {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-8">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Análise do Comportamento Tático</h3>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex gap-4 items-start">
          <Target className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 text-sm">Feedback do Cenário de Ecossistema:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">{taskResult1.feedback}</p>
          </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex gap-4 items-start">
          <Brain className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 text-sm">Feedback do Cenário de Liderança:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">{taskResult2.feedback}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ajuste o seu Perfil de Inovação</h3>
        <p className="text-sm text-slate-500 mb-6">As suas respostas pré-calibraram o perfil abaixo. Afine (de 1 a 5) cada competência face à sua realidade atual.</p>

        <div className="space-y-5">
          {Object.keys(skills).map((key) => (
            <div key={key}>
              <div className="flex justify-between text-xs font-bold uppercase text-slate-500 mb-2">
                <span>{labels[key]}</span>
                <span className="bg-slate-200 px-2 py-1 rounded text-slate-700 font-bold">{skills[key]}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={skills[key]}
                onChange={(e) => setSkills({ ...skills, [key]: parseInt(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onGenerate}
        className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
      >
        Gerar Roteiro de Desenvolvimento <TrendingUp className="w-5 h-5" />
      </button>
    </div>
  )
}
