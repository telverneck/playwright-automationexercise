# 🧪 Playwright Automation - Automation Exercise

End-to-end UI testing automation using [Playwright](https://playwright.dev/) with TypeScript, GitHub Actions CI/CD, Page Object Model, cross-browser execution and mobile testing.

> Target site: [https://www.automationexercise.com](https://www.automationexercise.com)

---

## 📁 Project Structure

```bash
.
├── tests/
│   ├── pages/          # Page Objects
│   ├── fixtures/       # Dynamic test data
│   ├── utils/          # Helpers and tagging utilities
│   └── *.spec.ts       # Test cases
├── .github/
│   └── workflows/      # GitHub Actions CI config
├── playwright.config.ts
├── package.json
├── README.md
└── .env, .env.staging  # Environment config files
```

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/telverneck/playwright-automationexercise.git
cd playwright-automationexercise

# Install dependencies
npm install
```

---

## 🧪 Test Commands

### ▶️ Run all tests
```bash
npx playwright test
```

### 🔬 Run tests with custom tag
```bash
npx playwright test --grep @regression
```

### 📱 Run on a specific project (browser/device)
```bash
npx playwright test --project="Mobile Safari"
```

### 🧪 Run specific test file
```bash
npx playwright test tests/signup.spec.ts
```

### 🔍 Run tests matching a name
```bash
npx playwright test -g "login"
```

---

## 🌐 Environments

Create `.env`, `.env.staging`, etc. with the `BASE_URL` variable.

Example `.env`:
```env
BASE_URL=https://www.automationexercise.com
```

### 🏁 Run with specific environment:

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

## 🧪 Cross-browser and Device Testing

`playwright.config.ts` includes:

- Chrome (Desktop)
- Firefox
- Safari (WebKit)
- iPhone 12
- Pixel 5

### Run on all:
```bash
npx playwright test
```

---

## 🧠 Dynamic Data & Helpers

Use `generateUserData()` to create unique data for each test run:

```ts
import { generateUserData } from './fixtures/user';

const user = generateUserData();
await login.fillSignupForm(user.name, user.email);
```

---

## 🏷️ Tag-based Execution (via `grep`)

Add tags to test titles:

```ts
test('Should register new user @regression', async () => {
  // ...
});
```

Then run with:

```bash
npx playwright test --grep @regression
```

---

## ✅ GitHub Actions CI/CD

Includes `.github/workflows/playwright.yml`

- Runs tests on push/pull_request
- Generates HTML reports
- Saves screenshots and videos

You can download reports under **Actions > Artifacts**.

---

## 📸 Reports and Evidence

### Open report locally:
```bash
npx playwright show-report
```

### CI-generated report:
Go to **Actions > Latest run > Artifacts > playwright-report.zip**

---

## 🔧 Scripts in `package.json` (optional)

```json
"scripts": {
  "test": "npx playwright test",
  "test:staging": "cross-env ENV=staging npx playwright test",
  "test:regression": "npx playwright test --grep @regression"
}
```

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions
- Page Object Model
- Dotenv
- HTML Reports
- Mobile/Desktop Testing

---

## 📌 Suggested Next Steps

- ✅ Additional flows (login, logout, delete account)
- ✅ Slack/Telegram integration
- ✅ Allure or HTML5 interactive reports
- ✅ Parallel tests by functionality
- ✅ Database or API integration

---

Made with 💻 by [@telverneck](https://github.com/telverneck)