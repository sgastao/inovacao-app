import { useState } from 'react'
import Header from './components/Header'
import EmailGate from './components/EmailGate'
import ContextSelector from './components/ContextSelector'
import LevelSelector from './components/LevelSelector'
import Scenario from './components/Scenario'
import SelfEvaluation from './components/SelfEvaluation'
import Results from './components/Results'
import { cenariosNivel } from './data/scenarios'

export default function App() {
  const [step, setStep] = useState('email')
  const [email, setEmail] = useState('')
  const [userProfile, setUserProfile] = useState({ context: null, level: null })
  const [taskResult1, setTaskResult1] = useState(null)
  const [taskResult2, setTaskResult2] = useState(null)
  const [skills, setSkills] = useState({
    conceptual: 3,
    evaluative: 3,
    implementation: 3,
    relational: 3,
    selfReflection: 3,
  })

  const handleEmail = (e) => {
    setEmail(e)
    setStep('context')
  }

  const selectContext = (ctx) => {
    setUserProfile({ ...userProfile, context: ctx })
    setStep('level')
  }

  const selectLevel = (lvl) => {
    setUserProfile({ ...userProfile, level: lvl })
    setStep('scenario1')
  }

  const handleScenario1Answer = (opt) => {
    setTaskResult1(opt)
    setSkills((prev) => ({ ...prev, [opt.dimension]: opt.score }))
    setStep('scenario2')
  }

  const handleScenario2Answer = (opt) => {
    setTaskResult2(opt)
    setSkills((prev) => ({ ...prev, [opt.dimension]: opt.score }))
    setStep('selfEval')
  }

  const handleGenerate = () => {
    setStep('results')
  }

  const handleReset = () => {
    setStep('email')
    setEmail('')
    setUserProfile({ context: null, level: null })
    setTaskResult1(null)
    setTaskResult2(null)
    setSkills({ conceptual: 3, evaluative: 3, implementation: 3, relational: 3, selfReflection: 3 })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans md:p-8 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <Header />
        <div className="p-6 md:p-10">
          {step === 'email' && <EmailGate onComplete={handleEmail} />}

          {step === 'context' && <ContextSelector onSelect={selectContext} />}

          {step === 'level' && <LevelSelector onSelect={selectLevel} />}

          {step === 'scenario1' && userProfile.context && (
            <Scenario
              number={1}
              challenge={userProfile.context.challenge}
              options={userProfile.context.options}
              onAnswer={handleScenario1Answer}
            />
          )}

          {step === 'scenario2' && userProfile.level && (
            <Scenario
              number={2}
              challenge={cenariosNivel[userProfile.level.id].challenge}
              options={cenariosNivel[userProfile.level.id].options}
              onAnswer={handleScenario2Answer}
              levelTitle={userProfile.level.title}
            />
          )}

          {step === 'selfEval' && (
            <SelfEvaluation
              skills={skills}
              setSkills={setSkills}
              taskResult1={taskResult1}
              taskResult2={taskResult2}
              onGenerate={handleGenerate}
            />
          )}

          {step === 'results' && (
            <Results skills={skills} userProfile={userProfile} onReset={handleReset} />
          )}
        </div>
      </div>
    </div>
  )
}
