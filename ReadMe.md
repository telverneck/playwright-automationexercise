
# 🎭 Playwright Automation Project – automationexercise.com

Automated test project using **Playwright** on the website [automationexercise.com](https://www.automationexercise.com), including CI/CD integration, Allure Reports, browser/device matrix, and email notifications.

---

## 📁 Project Structure

```bash
.
├── tests/                  # Test specs (organized by feature)
├── pages/                  # Page Object Model (POM) for screens
├── utils/                  # Helpers (email, assertions, config, etc.)
├── test-results/           # Playwright traces
├── allure-results/         # Raw Allure result files
├── allure-report/          # Generated Allure report (HTML)
├── playwright.config.ts    # Global Playwright settings
├── .github/workflows/      # GitHub Actions CI config
└── README.md
```

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🧪 Run tests

```bash
npx playwright test
```

### 🌐 Run tests with environment (optional)

```bash
# Run in staging
ENV=staging npx playwright test
```

### 🏷️ Run with tag

```bash
npx playwright test --grep "@Regression"
```

> Tags are defined with `test.describe('@TagName', () => { ... })`

---

## 📊 Allure Report

### Generate locally:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

> Or serve it locally:
```bash
npx serve -s allure-report
```

### GitHub Pages deployment

Allure is deployed automatically at:
```
https://telverneck.github.io/playwright-automationexercise/
```

---

## 📧 Email Integration

When tests run on CI, a summary email with the report link and results is sent using **Nodemailer**.

> Requires SMTP credentials set as GitHub Secrets:
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO`

---

## 📦 Upload Artifacts

Playwright traces are uploaded on failure:

```yaml
path: test-results/**/trace.zip
```

Ensure trace collection is enabled:

```ts
use: {
  trace: 'on',
}
```

---

## 🔁 Run cross-browser tests

Update `projects` section in `playwright.config.ts`:

```ts
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] }},
  { name: 'firefox', use: { ...devices['Desktop Firefox'] }},
  { name: 'webkit', use: { ...devices['Desktop Safari'] }},
  { name: 'iPhone', use: { ...devices['iPhone 12'] }},
]
```

Then run:

```bash
npx playwright test
```

---

## 🤖 GitHub Actions (CI/CD)

CI workflow runs on:
- Push to `main`
- Pull Requests

Includes:
- Install + test
- Generate Allure report
- Upload trace on failure
- Deploy to GitHub Pages
- Send email notification

---

## ✅ To Do (Next Steps)

- Integrate with Slack
- Visual regression with Playwright snapshots
- Dockerized execution (optional)
