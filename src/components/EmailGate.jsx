import { useState } from 'react'
import { Brain, ArrowRight, Mail } from 'lucide-react'
import { submitEmail } from '../utils/submitEmail'

export default function EmailGate({ onComplete }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isValid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValid(email)) {
      setError('Insere um email válido.')
      return
    }
    setError('')
    setSubmitting(true)
    await submitEmail(email)
    onComplete(email)
  }

  return (
    <div className="text-center space-y-8 py-8 animate-in fade-in duration-500">
      <Brain className="w-20 h-20 text-indigo-600 mx-auto" />
      <div>
        <h2 className="text-3xl font-bold mb-4">Evite a Obsolescência.</h2>
        <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
          A Inteligência Artificial redefiniu a gestão do desporto. Este diagnóstico avalia o seu perfil
          perante cenários reais e gera um roteiro estratégico de renovação profissional.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="email"
            placeholder="O teu melhor email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none text-sm"
            autoFocus
          />
        </div>
        {error && <p className="text-red-500 text-sm text-left">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {submitting ? 'A enviar...' : 'Iniciar Diagnóstico'} <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
