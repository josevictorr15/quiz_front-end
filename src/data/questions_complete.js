const data = [
    {
      category: "HTML",
      questions: [
        {
          question: "Qual tag cria um parágrafo?",
          options: ["<p>", "<h1>", "<text>", "<ul>"],
          answer: "<p>",
          tip: "É uma tag de uma letra apenas",
        },
        {
          question: "Qual atributo adiciona um link para a tag a?",
          options: ["alt", "href", "src", "link"],
          answer: "href",
          tip: "Hyperlink Reference",
        },
        {
          question: "As listas não ordenadas tem a tag de:",
          options: ["<ol>", "<ul>", "<li>", "<list>"],
          answer: "<ul>",
        },
        {
          question: "Qual atributo deixa o input obrigatório?",
          options: ["placeholder", "value", "required", "maxlength"],
          answer: "required",
        },
        {
          question: "A tag semântica indicada para rodapés é a:",
          options: ["div", "main", "section", "footer"],
          answer: "footer",
        },
      ],
    },
    {
      category: "CSS",
      questions: [
        {
          question: "Qual regra altera a cor de um elemento?",
          options: ["color", "background-color", "font-size", "transition"],
          answer: "color",
          tip: "Cor em inglês",
        },
        {
          question: "Para aumentar a fonte de um elemento utilizamos:",
          options: ["font", "text-transform", "font-size", "hover"],
          answer: "font-size",
        },
        {
          question: "A posição que deixa um elemento fixo é a:",
          options: ["static", "absolute", "fixed", "relative"],
          answer: "fixed",
        },
      ],
    },
    {
      category: "JavaScript",
      questions: [
        {
          question: "O que é Vanilla JavaScript?",
          options: [
            "JavaScript puro",
            "Uma biblioteca JavaScript",
            "Um framework JavaScript",
            "Um compilador de JavaScript",
          ],
          answer: "JavaScript puro",
        },
        {
          question: "Com qual instrução declaramos uma constante em JavaScript?",
          options: ["const", "let", "var", "define"],
          answer: "const",
        },
        {
          question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
          options: ["string", "number", "boolean", "float"],
          answer: "float",
        },
        {
          question: "Qual dos métodos a seguir seleciona um elemento?",
          options: ["querySelector", "parseInt", "sort", "reduce"],
          answer: "querySelector",
        },
        {
          question:
            "Qual destas propriedades da a quantidade de elementos de um array?",
          options: ["qty", "length", "items", "index"],
          answer: "length",
        },
      ],
    },
    {
      category: "React",
      questions: [
        {
          question: "O que é JSX?",
          options: [
            "JavaScript puro",
            "É a extensão de sintaxe para JavaScript no React.",
            "Pacote de instalação do React",
            "Um compilador de JavaScript",
          ],
          answer: "É a extensão de sintaxe para JavaScript no React.",
        },
        {
          question: "Em qual ano o React foi lançado?",
          options: ["2010", "2016", "2020", "2013"],
          answer: "2013",
        },
        {
          question: "HTML é usado em React?",
          options: ["Não", "Sim"],
          justify: "Não, ele usa uma sintaxe chamada JSX (JavaScript e XML) que converte as tags HTML em elementos React. Ela permite que o desenvolvedor escreva estruturas semelhantes ao HTML dentro do código JavaScript.",
          answer: "Não",
        },
        {
          question: "O que é React?",
          options: ["É uma biblioteca em JavaScript", "Ferramenta para desenvolvimento", "É uma linguagem de programção", "É uma estrutura CSS de código aberto"],
          answer: "É uma biblioteca em JavaScript",
        },
        {
          question:
            "Para que serve o React?",
          options: ["É uma biblioteca de JavaScript utilizada para construir interfaces de usuário interativas e responsivas", "É usado para estilizar elementos", " É uma linguagem de script open source de uso geral", "Usado para organizer pastas HTML"],
          answer: "É uma biblioteca de JavaScript utilizada para construir interfaces de usuário interativas e responsivas",
        },
      ],
    },
  ];
  
  export default data;