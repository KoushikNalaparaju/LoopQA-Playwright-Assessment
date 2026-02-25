const BASE_URL = 'https://animated-gingersnap-8cf7f2.netlify.app/';
const CREDENTIALS = { username: 'admin', password: 'password123' };

const projectBoardTestCases = [
  {
    id: 'TC001',
    description: 'Web Application - Verify "Implement user authentication" card is in To Do column with Feature and High Priority tags',
    project: 'Web Application',
    taskName: 'Implement user authentication',
    expectedColumn: 'To Do',
    expectedTags: ['Feature', 'High Priority'],
  },

  {
    id: 'TC002',
    description: 'Web Application - Verify "Fix navigation bug" card is in To Do column with Bug tag',
    project: 'Web Application',
    taskName: 'Fix navigation bug',
    expectedColumn: 'To Do',
    expectedTags: ['Bug'],
  },

  {
    id: 'TC003',
    description: 'Web Application - Verify "Design system updates" card is in In Progress column with Design tag',
    project: 'Web Application',
    taskName: 'Design system updates',
    expectedColumn: 'In Progress',
    expectedTags: ['Design'],
  },

  {
    id: 'TC004',
    description: 'Mobile Application - Verify "Push notification system" card is in To Do column with Feature tag',
    project: 'Mobile Application',
    taskName: 'Push notification system',
    expectedColumn: 'To Do',
    expectedTags: ['Feature'],
  },

  {
    id: 'TC005',
    description: 'Mobile Application - Verify "Offline mode" card is in In Progress column with Feature and High Priority tags',
    project: 'Mobile Application',
    taskName: 'Offline mode',
    expectedColumn: 'In Progress',
    expectedTags: ['Feature', 'High Priority'],
  },

  {
    id: 'TC006',
    description: 'Mobile Application - Verify "App icon design" card is in Done column with Design tag',
    project: 'Mobile Application',
    taskName: 'App icon design',
    expectedColumn: 'Done',
    expectedTags: ['Design'],
  },
];

module.exports = { BASE_URL, CREDENTIALS, projectBoardTestCases };