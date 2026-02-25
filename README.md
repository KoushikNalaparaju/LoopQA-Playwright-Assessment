# LoopQA Playwright Assessment
### Author: Koushik Nalaparaju

A data-driven Playwright test suite built in JavaScript that validates task cards on a Kanban project board application.

---

## Project Structure

```
tests/
├── data/
│   └── testData.js         # All test scenarios defined as JSON
├── pages/
│   └── LoginPage.js        # Page Object Model for login
└── projectBoard.test.js    # Data-driven test logic
playwright.config.js
package.json
```

---

## Tech Stack

- [Playwright](https://playwright.dev/) - End-to-end testing framework
- JavaScript - No TypeScript
- Page Object Model - For reusable page interactions
- Data-driven approach - All test cases defined in a central JSON object

---

## Setup & Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Running the Tests

```bash
# Run all tests headless
npx playwright test projectBoard.test.js

# Run with browser visible
npx playwright test projectBoard.test.js --headed

# View HTML report after run
npx playwright show-report
```

---

## Test Cases

| ID    | Project            | Task                              | Column      | Tags                      |
|-------|--------------------|-----------------------------------|-------------|---------------------------|
| TC001 | Web Application    | Implement user authentication     | To Do       | Feature, High Priority    |
| TC002 | Web Application    | Fix navigation bug                | To Do       | Bug                       |
| TC003 | Web Application    | Design system updates             | In Progress | Design                    |
| TC004 | Mobile Application | Push notification system          | To Do       | Feature                   |
| TC005 | Mobile Application | Offline mode                      | In Progress | Feature, High Priority    |
| TC006 | Mobile Application | App icon design                   | Done        | Design                    |

---

## How to Add a New Test Case

Simply add a new object to the `projectBoardTestCases` array in `tests/data/testData.js`:

```js
{
  id: 'TC007',
  description: 'Your description here',
  project: 'Web Application',
  taskName: 'Your task name',
  expectedColumn: 'To Do',
  expectedTags: ['Feature'],
}
```

No changes needed to any other file — the test loop picks it up automatically.