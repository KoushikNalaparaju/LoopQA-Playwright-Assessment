# AI-Powered Testing Framework

![Playwright Tests](https://github.com/KoushikNalaparaju/ai-powered-testing-framework/actions/workflows/playwright-tests.yml/badge.svg)

A portfolio project demonstrating how AI tools can be leveraged throughout
the software testing lifecycle — from test case generation to automated 
bug reporting.

---

## What This Project Demonstrates

- Using **Claude AI API** to automatically generate test cases from feature descriptions
- Using **GitHub Copilot** to assist writing automation code faster
- Using **AI** to convert raw failed test logs into professional bug reports
- **End-to-end UI automation** with Playwright (JavaScript)
- **CI/CD pipeline** with GitHub Actions running tests on every push

---

## AI Tools Used

| Tool | Purpose |
|------|---------|
| Claude API (Anthropic) | Test case generation, bug report writing |
| GitHub Copilot | Test code autocomplete assistance |
| Playwright | UI test automation framework |
| GitHub Actions | CI/CD pipeline automation |

---

## Project Structure

ai-powered-testing-framework/
├── tests/
│   ├── ui/
│   │   ├── login.spec.js        # Login feature tests (6 tests)
│   │   └── checkout.spec.js     # Cart and checkout tests (5 tests)
│   ├── api/                     # API tests (coming soon)
│   └── visual/                  # Visual regression tests (coming soon)
├── ai-helpers/
│   ├── test-generator/
│   │   └── generateTests.js     # AI test case generator script
│   └── bug-report-generator/
│       └── generateBugReport.js # AI bug report generator script
├── docs/
│   └── ai-generated-test-cases.md  # AI generated test cases output
├── reports/                     # Auto-generated test reports
├── .github/
│   └── workflows/
│       └── playwright-tests.yml # CI/CD pipeline config
└── playwright.config.js

---

## How to Run Locally

### Prerequisites
- Node.js v20 or higher
- A Claude API key from console.anthropic.com

### Setup
```bash
# Clone the repo
git clone https://github.com/KoushikNalaparaju/ai-powered-testing-framework.git
cd ai-powered-testing-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium

# Create .env file and add your Claude API key
echo "ANTHROPIC_API_KEY=your-key-here" > .env
```

### Run the tests
```bash
# Run all tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# View HTML report
npx playwright show-report reports/html-report
```

### Run AI features
```bash
# Generate test cases using Claude AI
npm run generate:tests

# Generate AI bug report from failed test log
npm run generate:bugreport
```

---

## Key Features Showcased

### 1. AI Test Case Generation
The `generateTests.js` script sends a plain English feature description
to the Claude API and receives back 15 structured test cases covering
positive, negative, and edge cases — in seconds.

**Input:** Feature description in plain text  
**Output:** 15 formatted test cases saved to `docs/ai-generated-test-cases.md`

### 2. Automated UI Tests (13 tests)
Full Playwright test suite covering:
- Login with valid and invalid credentials
- Locked out user handling
- Empty field validation
- Add to cart and remove from cart
- Complete end-to-end purchase flow
- Checkout validation errors
- Logout functionality

### 3. AI Bug Report Generator
The `generateBugReport.js` script takes a raw failed test log and uses
Claude AI to produce a professional, developer-ready bug report with
severity, priority, root cause analysis, and suggested fixes.

**Input:** Raw test failure log  
**Output:** Structured bug report saved to `reports/bug-report-[date].md`

### 4. CI/CD Pipeline
Every push to main branch automatically:
- Installs dependencies
- Runs the full Playwright test suite
- Uploads the HTML test report as a downloadable artifact

---

## Test Results

| Test Suite | Tests | Status |
|-----------|-------|--------|
| Login Feature | 6 | ✅ Passing |
| Cart and Checkout | 5 | ✅ Passing |
| Example Tests | 2 | ✅ Passing |
| **Total** | **13** | **✅ All Passing** |

---

## Author

**Koushik Nalaparaju**  
QA Engineer / SDET  
[GitHub](https://github.com/KoushikNalaparaju)

---

## License
MIT