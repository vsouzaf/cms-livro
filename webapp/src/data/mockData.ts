export interface Artifact {
  id: string;
  title: string;
  type: string;
  chapter: string;
  description: string;
  imageUrl: string;
  content?: string;
}

export const mockArtifacts: Artifact[] = [
  {
    id: "1",
    title: "Diagrama de Arquitetura de Software",
    type: "Diagrama",
    chapter: "Capítulo 1",
    description: "Visão geral da arquitetura do sistema proposto",
    imageUrl: "/images/artifacts/architecture-diagram.jpg",
    content: "Este diagrama apresenta a estrutura fundamental da arquitetura de software, mostrando os componentes principais e suas interações."
  },
  {
    id: "2", 
    title: "Fluxograma de Processo",
    type: "Fluxograma",
    chapter: "Capítulo 2",
    description: "Representação visual do fluxo de trabalho principal",
    imageUrl: "/images/artifacts/flowchart-process.jpg",
    content: "Fluxograma detalhado que demonstra o processo passo a passo, desde a entrada até a saída do sistema."
  },
  {
    id: "3",
    title: "Gráfico de Performance",
    type: "Gráfico",
    chapter: "Capítulo 3", 
    description: "Análise comparativa de performance entre diferentes abordagens",
    imageUrl: "/images/artifacts/performance-chart.jpg",
    content: "Gráfico que compara métricas de performance, demonstrando melhorias significativas na nova abordagem."
  },
  {
    id: "4",
    title: "Interface do Usuário",
    type: "Mockup",
    chapter: "Capítulo 4",
    description: "Protótipo da interface principal do sistema",
    imageUrl: "/images/artifacts/ui-mockup.jpg",
    content: "Mockup da interface principal, mostrando a disposição dos elementos e navegação intuitiva."
  },
  {
    id: "5",
    title: "Modelo de Dados",
    type: "Diagrama",
    chapter: "Capítulo 2",
    description: "Estrutura de dados e relacionamentos",
    imageUrl: "/images/artifacts/data-model.jpg",
    content: "Diagrama ER que mostra as entidades, atributos e relacionamentos do modelo de dados."
  },
  {
    id: "6",
    title: "Timeline do Projeto",
    type: "Infográfico",
    chapter: "Capítulo 5",
    description: "Cronograma visual das fases do projeto",
    imageUrl: "/images/artifacts/project-timeline.jpg",
    content: "Timeline visual que apresenta as diferentes fases do projeto e marcos importantes."
  }
];

export const testimonials = [
  {
    name: "Ana Silva",
    role: "Desenvolvedora Senior",
    content: "Este livro revolucionou minha forma de pensar sobre arquitetura de software. Os artefatos visuais facilitam muito a compreensão."
  },
  {
    name: "Carlos Santos",
    role: "Tech Lead",
    content: "Material excepcional! Os diagramas e fluxogramas são extremamente didáticos e bem elaborados."
  },
  {
    name: "Marina Costa",
    role: "Arquiteta de Software",
    content: "Recomendo para toda equipe de desenvolvimento. A organização dos conceitos é impecável."
  }
];

export const benefits = [
  {
    title: "Conteúdo Visual Rico",
    description: "Mais de 50 diagramas, gráficos e ilustrações para facilitar o aprendizado",
    icon: "📊"
  },
  {
    title: "Organização por Capítulos",
    description: "Artefatos organizados logicamente seguindo a progressão do livro",
    icon: "📚"
  },
  {
    title: "Acesso Completo",
    description: "Visualize e baixe todos os recursos visuais em alta qualidade",
    icon: "🔓"
  },
  {
    title: "Sempre Atualizado",
    description: "Novos artefatos e atualizações são constantemente adicionados",
    icon: "🔄"
  }
];

export const faqs = [
  {
    question: "Como posso acessar os artefatos?",
    answer: "Todos os artefatos estão disponíveis gratuitamente na seção 'Artefatos' do site. Você pode navegar por capítulos ou filtrar por tipo."
  },
  {
    question: "Posso usar os artefatos em meus projetos?",
    answer: "Sim! Os artefatos são liberados sob licença Creative Commons, permitindo uso educacional e profissional com atribuição."
  },
  {
    question: "Com que frequência novos artefatos são adicionados?",
    answer: "Atualizamos a coleção mensalmente com novos diagramas e ilustrações baseados no feedback dos leitores."
  },
  {
    question: "Onde posso comprar o livro?",
    answer: "O livro está disponível nas principais livrarias online e físicas. Links diretos estão disponíveis na página inicial."
  }
];