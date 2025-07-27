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

---

## 🚀 Instalação

```bash
# Clonar o repositório
git clone https://github.com/telverneck/playwright-automationexercise.git
cd playwright-automationexercise

# Instalar dependências
npm install
```

---

## 🧪 Comandos de Teste

### ▶️ Executar todos os testes

```bash
npx playwright test
```

### 🔬 Executar testes com tag personalizada

```bash
npx playwright test --grep @regression
```

### 📱 Executar em um projeto (browser/dispositivo) específico

```bash
npx playwright test --project="Mobile Safari"
```

### 🧪 Executar testes de um arquivo específico

```bash
npx playwright test tests/signup.spec.ts
```

### 🔍 Executar testes com nome correspondente

```bash
npx playwright test -g "login"
```

---

## 🌐 Ambientes

Crie arquivos `.env`, `.env.staging`, etc. com a variável `BASE_URL`.

Exemplo `.env`:

```env
BASE_URL=https://www.automationexercise.com
```

### 🏁 Rodar testes em um ambiente específico:

#### PowerShell (Windows):

```powershell
$env:ENV="staging"; npx playwright test
```

#### CMD (Windows):

```cmd
set ENV=staging
npx playwright test
```

#### Unix/Linux/macOS:

```bash
ENV=staging npx playwright test
```

---

## 🧪 Execução com múltiplos navegadores/dispositivos

O `playwright.config.ts` já está configurado para:

- Chrome (Desktop)
- Firefox
- Safari (WebKit)
- iPhone 12
- Pixel 5

### Para executar em todos:

```bash
npx playwright test
```

---

## 🧠 Dados Dinâmicos e Helpers

Use `generateUserData()` para gerar dados únicos a cada execução:

```ts
import { generateUserData } from "./fixtures/user";

const user = generateUserData();
await login.fillSignupForm(user.name, user.email);
```

---

## 🏷️ Rodar testes por TAG (simulado via `grep`)

Adicione tags no nome do teste:

```ts
test("Deve cadastrar novo usuário @regression", async () => {
  // ...
});
```

E execute com:

```bash
npx playwright test --grep @regression
```

---

## ✅ CI/CD com GitHub Actions

Já incluso: `.github/workflows/playwright.yml`

- Executa testes em push/pull_request
- Gera relatórios HTML
- Salva vídeos e screenshots

Você pode ver os relatórios em **Actions > Artifacts**.

---

## 📸 Relatórios e Evidências

### Abrir relatório localmente:

```bash
npx playwright show-report
```

### Gerado automaticamente em CI:

Acesse **Actions > Última execução > Artefatos > playwright-report.zip**

---

## 🔧 Scripts no package.json (opcional)

```json
"scripts": {
  "test": "npx playwright test",
  "test:staging": "cross-env ENV=staging npx playwright test",
  "test:regression": "npx playwright test --grep @regression"
}
```

---

## 🛠 Tecnologias

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions
- Page Object Model
- Dotenv
- Relatórios HTML
- Testes Mobile/Desktop

---

## 📌 Próximos passos sugeridos

- ✅ Fluxos adicionais (login, logout, exclusão de conta)
- ✅ Integração com Slack/Telegram
- ✅ Relatórios Allure ou HTML5 interativo
- ✅ Testes paralelos por funcionalidade
- ✅ Integração com Banco de Dados ou API

---

Feito com 💻 por [@telverneck](https://github.com/telverneck)
