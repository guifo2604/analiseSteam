export interface AnaliseIso {
  id: number;
  titulo: string;
  descricao: string;
  conclusao: string;
  exemplosPraticos: string[];
}

export const dadosAnalise: AnaliseIso[] = [
  {
    id: 1,
    titulo: "Adequação Funcional",
    descricao: "A Steam vincula automaticamente o jogo comprado à biblioteca após confirmação do pagamento e gerencia a instalação de forma autônoma.",
    conclusao: "Alto grau de adequação funcional.",
    exemplosPraticos: ["Steam Cloud para sincronização de saves.", "Sistema de Conquistas (Achievements) integrado.", "Steam Workshop para mods."]
  },
  {
    id: 2,
    titulo: "Eficiência de Desempenho",
    descricao: "O jogo aparece quase imediatamente após confirmação do pagamento. O download utiliza rotas otimizadas, mas o cliente base (Chromium) pode consumir bastante RAM.",
    conclusao: "Boa eficiência, com margem de otimização em máquinas antigas.",
    exemplosPraticos: ["Alocação prévia de espaço em disco antes do download.", "Compressão de pacotes para acelerar downloads.", "Modo 'Baixo Desempenho' disponível nas configurações."]
  },
  {
    id: 3,
    titulo: "Compatibilidade",
    descricao: "Integração impecável com múltiplos sistemas de pagamento e ecossistema flexível para os desenvolvedores através da Steamworks API.",
    conclusao: "Alta interoperabilidade.",
    exemplosPraticos: ["Suporte nativo a controles de Xbox, PlayStation e Nintendo.", "Pagamentos localizados (Pix, Boleto, Cartões Nacionais).", "Steam Input traduzindo comandos de controles genéricos."]
  },
  {
    id: 4,
    titulo: "Usabilidade",
    descricao: "Indicador claro de itens no carrinho, filtros avançados de busca e biblioteca personalizável. A interface principal pode ser densa para iniciantes devido à quantidade de recursos.",
    conclusao: "Boa usabilidade, focada no usuário 'Power User'.",
    exemplosPraticos: ["Coleções dinâmicas na biblioteca de jogos.", "Modo 'Big Picture' focado em navegação por controle na TV.", "Sistema de recomendação baseado no tempo de jogo."]
  },
  {
    id: 5,
    titulo: "Segurança",
    descricao: "Implementa múltiplas camadas de proteção para evitar roubo de contas e fraudes em transações no mercado da comunidade.",
    conclusao: "Alto nível de segurança.",
    exemplosPraticos: ["Steam Guard (2FA via E-mail ou App Mobile).", "Bloqueio temporário de mercado ao logar em novo dispositivo.", "Histórico detalhado de acessos e logins na conta."]
  },
  {
    id: 6,
    titulo: "Confiabilidade",
    descricao: "Infraestrutura global com raras instabilidades prolongadas, exceto em grandes eventos previsíveis (como grandes promoções de fim de ano).",
    conclusao: "Alta confiabilidade e tolerância a falhas.",
    exemplosPraticos: ["Redundância de servidores de download por região geográfica.", "Suporte robusto a Modo Offline para jogar sem internet.", "Recuperação automática de downloads interrompidos."]
  },
  {
    id: 7,
    titulo: "Manutenibilidade",
    descricao: "Atualizações frequentes e transparentes do cliente sem impacto crítico nas funcionalidades de jogar ou comprar.",
    conclusao: "Boa capacidade evolutiva.",
    exemplosPraticos: ["Programa de atualizações Beta opcional para usuários.", "Documentação extensa (Steamworks) para desenvolvedores parceiros.", "Isolamento do cliente web em relação aos jogos executados."]
  },
  {
    id: 8,
    titulo: "Portabilidade",
    descricao: "O software transcende sua origem no Windows e hoje abrange uma vasta gama de sistemas operacionais e formatos de hardware.",
    conclusao: "Elevada portabilidade na indústria de jogos.",
    exemplosPraticos: ["Camada de compatibilidade 'Proton' para rodar jogos Windows no Linux.", "Integração nativa de hardware no Steam Deck.", "Aplicativos complementares para iOS e Android (Steam Link e Steam Chat)."]
  }
];