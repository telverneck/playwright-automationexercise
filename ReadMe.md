# 🧪 Playwright Automation - Automation Exercise

Automação de testes de interface usando [Playwright](https://playwright.dev/) com TypeScript, CI/CD no GitHub Actions, Page Object Model, execução multi-navegador e testes mobile.

> Site automatizado: [https://www.automationexercise.com](https://www.automationexercise.com)

---

## 📁 Estrutura do Projeto

```bash
.
├── tests/
│   ├── pages/          # Page Objects
│   ├── fixtures/       # Dados dinâmicos
│   ├── utils/          # Helpers e testes com tags
│   └── *.spec.ts       # Casos de teste
├── .github/
│   └── workflows/      # GitHub Actions CI
├── playwright.config.ts
├── package.json
├── README.md
└── .env, .env.staging  # Arquivos de ambiente
```

🚀 Instalação

# Clonar o repositório

git clone https://github.com/telverneck/playwright-automationexercise.git
cd playwright-automationexercise

# Instalar dependências

npm install

🧪 Comandos de Teste
▶️ Executar todos os testes

```bash
npx playwright test
```
