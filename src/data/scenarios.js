import { Building2, Dumbbell, Trophy } from 'lucide-react'

export const niveisCarreira = [
  { id: 'aspiring', title: 'Aspirante', desc: 'Sem experiência de gestão. Foco em literacia e potencial.', focus: 'Literacia base de IA e compreensão do impacto tecnológico no desporto.' },
  { id: 'entry', title: 'Gestor Operacional', desc: 'Gestor de 1ª linha, coordenador de equipas.', focus: 'Aplicação prática de IA na eficiência de tarefas e serviço ao cliente.' },
  { id: 'general', title: 'Gestor Intermédio', desc: 'Gestor de centro ou de departamento.', focus: 'Estratégia, integração de processos digitais e gestão de equipas na transição.' },
  { id: 'senior', title: 'Gestor de Topo', desc: 'CEO, Diretor Executivo ou Nacional.', focus: 'Governação, ética, proteção de dados e visão de longo prazo para a organização.' }
]

export const contextos = [
  {
    id: 'municipal',
    name: 'Desporto Municipal & Saúde Pública',
    icon: Building2,
    challenge: 'A autarquia pretende reduzir o sedentarismo em 20%. Existe financiamento para implementar uma solução baseada em IA e dados de saúde locais.',
    options: [
      { text: 'Comprar uma aplicação standard de IA que gera planos de treino e enviá-la para todos os munícipes por e-mail.', score: 2, dimension: 'implementation', feedback: 'Falta visão sistémica. A tecnologia é vista como fim e não como meio, ignorando a adoção real pelo público.' },
      { text: 'Usar IA para cruzar dados demográficos com as taxas de uso das instalações, identificando zonas de exclusão para alocar técnicos humanos.', score: 5, dimension: 'evaluative', feedback: 'Excelente cruzamento de dados (IA) com a resposta social humana, refletindo alta competência Avaliativa.' },
      { text: 'Contratar uma consultora externa para fazer tudo, focando a gestão autárquica apenas na aprovação orçamental.', score: 3, dimension: 'selfReflection', feedback: 'Delega demasiado o conhecimento técnico, criando dependência externa prejudicial a longo prazo.' }
    ]
  },
  {
    id: 'fitness',
    name: 'Setor do Fitness & Wellness',
    icon: Dumbbell,
    challenge: 'A taxa de retenção do clube caiu. Um novo modelo preditivo de IA sinaliza 300 clientes com 90% de probabilidade de desistência este mês.',
    options: [
      { text: 'Deixar o algoritmo de IA enviar automaticamente e-mails com descontos para tentar reter esses clientes.', score: 2, dimension: 'relational', feedback: 'Desumanização do serviço. Ignora a competência Relacional e a empatia, fundamentais na retenção de clientes.' },
      { text: 'Ignorar os dados da IA, pois os instrutores conhecem os clientes e sabem intuitivamente quem vai desistir.', score: 1, dimension: 'evaluative', feedback: 'Resistência à mudança. A rejeição de evidências empíricas prejudica gravemente a vantagem competitiva.' },
      { text: 'Fornecer a lista da IA aos instrutores, orientando-os a fazerem abordagens pessoais e empáticas no ginásio.', score: 5, dimension: 'relational', feedback: 'Simbiose perfeita: a IA identifica o risco (Avaliativa), o humano aplica a solução (Relacional).' }
    ]
  },
  {
    id: 'elite',
    name: 'Desporto Profissional / Alto Rendimento',
    icon: Trophy,
    challenge: 'O departamento de Performance exige a compra de um software de IA avançado que capta biometria sensível (Digital Twins) dos atletas.',
    options: [
      { text: 'Aprovar imediatamente a compra para garantir que o clube tem a tecnologia mais recente e mediática do mercado.', score: 2, dimension: 'conceptual', feedback: 'Decisão impulsiva e focada no mediatismo. Faltou uma análise rigorosa de risco sobre a posse dos dados biográficos.' },
      { text: 'Aprovar a compra apenas após criar um protocolo claro de governação de dados e garantir o consentimento ético dos atletas.', score: 5, dimension: 'evaluative', feedback: 'Liderança responsável. Exige governação, ética e pensamento estratégico antes da implementação tecnológica.' },
      { text: 'Rejeitar a compra, argumentando que a intuição do treinador principal não deve nunca ser desafiada por algoritmos.', score: 1, dimension: 'selfReflection', feedback: 'Mentalidade obsoleta. Protege o status quo em vez de preparar a organização para a evolução do desporto.' }
    ]
  }
]

export const cenariosNivel = {
  'aspiring': {
    challenge: 'Foi-lhe pedido que fizesse um resumo de um longo relatório técnico sobre novas tendências tecnológicas no desporto.',
    options: [
      { text: 'Insiro o PDF no ChatGPT, peço um resumo e envio o resultado diretamente para a chefia.', score: 2, dimension: 'implementation', feedback: 'Uso acrítico da ferramenta. Faltou verificação de factos e adaptação ao contexto específico da vossa organização.' },
      { text: 'Leio tudo manualmente e ignoro as ferramentas de IA, pois não confio nos resultados gerados.', score: 1, dimension: 'evaluative', feedback: 'Perda drástica de eficiência operacional por recusa em utilizar ferramentas de otimização de tempo.' },
      { text: 'Uso a IA para extrair os pontos-chave, valido a informação e acrescento os meus próprios comentários e perspetivas críticas.', score: 5, dimension: 'conceptual', feedback: 'Excelente literacia digital. A IA atuou como assistente de produtividade, mas o julgamento crítico final foi humano.' }
    ]
  },
  'entry': {
    challenge: 'A sua equipa perde 2 horas por dia a responder a dúvidas básicas de clientes/utentes por mensagem e e-mail.',
    options: [
      { text: 'Implemento um Chatbot de IA para responder a tudo e dispenso os elementos da receção que faziam esse trabalho.', score: 2, dimension: 'relational', feedback: 'Visão redutora da tecnologia. Cortou custos no imediato, mas destruiu a relação humana com os utentes.' },
      { text: 'Implemento o Chatbot para as dúvidas frequentes, libertando a equipa para interagir presencialmente com os clientes nas instalações.', score: 5, dimension: 'implementation', feedback: 'Visão otimizada. Usou a IA para ganhar eficiência e realocou o capital humano para onde ele gera mais valor (relacionamento).' },
      { text: 'Proíbo o uso de respostas automáticas porque "os clientes exigem falar com humanos", obrigando a equipa a continuar a teclar.', score: 1, dimension: 'conceptual', feedback: 'Gestão ineficiente e desgaste da equipa em tarefas de baixo valor acrescentado.' }
    ]
  },
  'general': {
    challenge: 'Tem de definir o orçamento anual do seu departamento para ferramentas e transformação digital.',
    options: [
      { text: 'Compro exatamente as mesmas ferramentas de software que o nosso principal clube/concorrente comprou.', score: 2, dimension: 'conceptual', feedback: 'Mimetismo sem estratégia. Adotar tecnologia apenas por pressão dos pares não resolve os problemas reais da vossa operação.' },
      { text: 'Audito os nossos processos, identifico gargalos operacionais e proponho ferramentas de IA que resolvem essas dores específicas com ROI claro.', score: 5, dimension: 'conceptual', feedback: 'Planeamento estratégico de excelência. A tecnologia foi escolhida para servir a estratégia e não o inverso.' },
      { text: 'Corto o orçamento digital quase a zero para investir tudo em eventos de marketing tradicionais de curto prazo.', score: 1, dimension: 'evaluative', feedback: 'Visão de curto prazo. Desinvestir na infraestrutura digital hoje é garantir a obsolescência da organização amanhã.' }
    ]
  },
  'senior': {
    challenge: 'Uma empresa tecnológica oferece um sistema que prevê talento jovem com 95% de eficácia, mas é uma "caixa negra" (não explica como toma a decisão).',
    options: [
      { text: 'Assino o contrato imediatamente. Se tem 95% de eficácia, vai dar-nos uma enorme vantagem sobre a concorrência.', score: 2, dimension: 'evaluative', feedback: 'Risco de governação elevado. Implementar sistemas de decisão que não compreende expõe a instituição a riscos de enviesamento (bias).' },
      { text: 'Rejeito por completo o sistema. No desporto, se não conseguimos explicar a decisão a um jovem atleta, não a tomamos.', score: 3, dimension: 'implementation', feedback: 'Decisão segura e ética, mas que pode deitar fora uma ferramenta revolucionária de apoio ao talento.' },
      { text: 'Aprovo um projeto-piloto cruzando as decisões da IA com os nossos olheiros humanos, criando um comité para auditar possíveis enviesamentos do algoritmo.', score: 5, dimension: 'selfReflection', feedback: 'Liderança de topo. Equilibrou a disrupção tecnológica com a governação e a salvaguarda ética dos atletas.' }
    ]
  }
}
