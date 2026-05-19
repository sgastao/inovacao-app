import { useState } from 'react'
import { CheckCircle2, Map, RefreshCw, ExternalLink, BookOpen, Clipboard, ClipboardCheck } from 'lucide-react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const NOTEBOOK_LM = 'https://notebooklm.google.com/notebook/8c14d19d-7b79-44ee-af09-36ce2c1d4ec5/'

export default function Results({ skills, userProfile, onReset }) {
  const [copied, setCopied] = useState(false)

  const radarData = [
    { subject: 'Conceptuais', A: skills.conceptual, fullMark: 5 },
    { subject: 'Avaliativas', A: skills.evaluative, fullMark: 5 },
    { subject: 'Implementação', A: skills.implementation, fullMark: 5 },
    { subject: 'Relacionais', A: skills.relational, fullMark: 5 },
    { subject: 'Auto-Reflexão', A: skills.selfReflection, fullMark: 5 },
  ]

  const promptText = `## O TEU PERFIL

**Área de Atuação**: ${userProfile.context.name}
**Nível de Carreira**: ${userProfile.level.title}

### Diagnóstico de Competências IA (escala 1-5)
- Competências Conceptuais: ${skills.conceptual}/5
- Competências Avaliativas: ${skills.evaluative}/5
- Implementação: ${skills.implementation}/5
- Competências Relacionais: ${skills.relational}/5
- Auto-Reflexão: ${skills.selfReflection}/5

---

## INSTRUÇÕES PARA O NOTEBOOKLM

Age como um mentor pessoal de desenvolvimento profissional em IA para gestão do desporto.

Tens acesso aos documentos e fontes carregados neste bloco de notas. Com base no meu perfil acima:

1. **Analisa o meu perfil** — Identifica os meus pontos fortes e as minhas maiores lacunas de competência.

2. **Prioridades de desenvolvimento** — Com base na minha área (${userProfile.context.name}) e nível (${userProfile.level.title}), quais são as 3 competências que devo desenvolver primeiro e porquê?

3. **Plano de ação semanal** — Sugere-me atividades concretas, práticas e realistas para as próximas 2 a 4 semanas, usando os recursos disponíveis nos documentos do bloco de notas.

4. **Cenário prático** — Cria um mini-desafio ou exercício adaptado ao meu contexto real (${userProfile.context.name}) e grau de responsabilidade (${userProfile.level.title}) que me force a aplicar as competências que mais preciso de treinar.

5. **Métrica de progresso** — Como posso medir objetivamente se estou a evoluir em cada competência?

Sê específico, prático e evita generalizações. Usa exemplos concretos do desporto. Sempre que possível, refere fontes específicas dos documentos disponíveis neste bloco de notas.`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-slate-900">Roteiro de Renovação Profissional</h2>
        <p className="text-slate-500 font-medium">Perfil: {userProfile.level.title} | {userProfile.context.name}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
              <PolarGrid stroke="#cbd5e1" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11, fontWeight: 'bold' }} />
              <PolarRadiusAxis domain={[0, 5]} tick={false} axisLine={false} />
              <Radar name="Competências" dataKey="A" stroke="#4f46e5" strokeWidth={2} fill="#6366f1" fillOpacity={0.5} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Foco Estratégico</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Com o nível de <strong>{userProfile.level.title}</strong>, o seu desenvolvimento imediato deve centrar-se em: <br />
            <span className="text-indigo-700 font-bold bg-indigo-50 px-2 py-1 rounded inline-block mt-2">
              {userProfile.level.focus}
            </span>
          </p>
          <p className="text-xs text-slate-400">
            O radar ilustra que o domínio da tecnologia (Implementação) sem um forte alicerce ético (Avaliativas) e humano (Relacionais) gera atrito organizacional e rejeição por parte dos utilizadores.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-xl flex items-center gap-2 mb-6">
          <Map className="w-6 h-6 text-indigo-600" /> Plano de Ação a 24 Meses
        </h3>
        <div className="relative border-l-2 border-indigo-200 ml-3 space-y-8 pb-4">
          <div className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white" />
            <h4 className="font-bold text-slate-800">Fase 1 (Mês 1 a 6): Consolidação e Literacia</h4>
            <p className="text-sm text-slate-600 mt-1">
              {userProfile.level.id === 'aspiring' || userProfile.level.id === 'entry'
                ? 'Dominar a interação básica com modelos de IA (Prompt Engineering). Automatizar tarefas burocráticas diárias para canalizar tempo para a relação presencial.'
                : 'Mapear o fluxo de dados na organização. Integrar equipas de trabalho multidisciplinares para identificar vulnerabilidades operacionais e éticas que a IA possa potenciar ou resolver.'}
            </p>
          </div>
          <div className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-yellow-400 rounded-full ring-4 ring-white" />
            <h4 className="font-bold text-slate-800">Fase 2 (Mês 7 a 12): Experimentação Tática</h4>
            <p className="text-sm text-slate-600 mt-1">
              Implementar projetos-piloto de IA restritos à realidade do <strong>{userProfile.context.name}</strong>. Validar métricas de sucesso garantindo que a tecnologia respeita a inclusão e a identidade desportiva.
            </p>
          </div>
          <div className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-500 rounded-full ring-4 ring-white" />
            <h4 className="font-bold text-slate-800">Fase 3 (Mês 13 a 24): Liderança da Transição</h4>
            <p className="text-sm text-slate-600 mt-1">
              {userProfile.level.id === 'senior' || userProfile.level.id === 'general'
                ? 'Promover a transformação cultural. Os algoritmos analisam tendências; o gestor estabelece o rumo ético e motiva a equipa a entregar valor diferenciado no terreno.'
                : 'Sugerir inovações de processo à administração. Usar as ferramentas de dados para antecipar necessidades dos praticantes, garantindo um serviço proativo e altamente personalizado.'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 border border-slate-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl shrink-0">
            {copied ? <ClipboardCheck className="w-6 h-6 text-green-600" /> : <Clipboard className="w-6 h-6 text-indigo-700" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-slate-900">Prompt Personalizado para o NotebookLM</h3>
            <p className="text-sm text-slate-500 mt-1 mb-4">
              Copia este prompt e cola no chat do NotebookLM para obteres um plano de desenvolvimento adaptado ao teu perfil.
            </p>
            <pre className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto mb-4">
              {promptText}
            </pre>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all"
            >
              {copied ? <><ClipboardCheck className="w-4 h-4" /> Copiado!</> : <><Clipboard className="w-4 h-4" /> Copiar Prompt</>}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl shrink-0">
            <BookOpen className="w-6 h-6 text-indigo-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-indigo-900">Bloco de Notas - Guia de Competências IA</h3>
            <p className="text-sm text-slate-600 mt-1 mb-4">
              Acede ao bloco de notas partilhado com guias, auxiliares e materiais de apoio para desenvolveres as tuas competências em IA na gestão do desporto.
            </p>
            <a
              href={NOTEBOOK_LM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Abrir Bloco de Notas <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex gap-4">
        <button
          onClick={onReset}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Refazer Diagnóstico
        </button>
      </div>
    </div>
  )
}
