# Playwright UI Automation Framework

This repository contains a UI automation testing framework built using **Playwright with JavaScript**, designed following the **Page Object Model (POM)** design pattern. The framework automates multiple functional scenarios on the demonstration website **the-internet.herokuapp.com**.

This project showcases real-world test automation skills including test design, locator strategy, framework structuring, debugging, and test execution.

---

## 🚀 Tech Stack

- **Automation Framework:** Playwright  
- **Programming Language:** JavaScript  
- **Design Pattern:** Page Object Model (POM)  
- **Test Runner:** Playwright Test  
- **Version Control:** Git  

---

## 🌐 Website Under Test

**the-internet.herokuapp.com**

A public demo website used to practice and demonstrate UI automation testing.

---

## 🐄 Pages Covered

The following pages were automated and validated:

- ✅ Add/Remove Elements Page  
- ✅ Broken Image Page  
- ✅ Challenging DOM Page  
- ✅ Checkbox Page  
- ✅ Context Menu Page  

Each page has:
- Its own **dedicated Page Object Model (POM)**
- At least one **functional test scenario**
- Proper assertions and validations

---

## 👜 Project Structure

```
project-root/
│
├── tests/                # Test scripts
│   ├── addRemove.spec.js
│   ├── brokenImage.spec.js
│   ├── challengingDom.spec.js
│   ├── checkbox.spec.js
│   └── contextMenu.spec.js
│
├── pages/                # Page Object Models (POM)
│   ├── AddRemovePage.js
│   ├── BrokenImagePage.js
│   ├── ChallengingDomPage.js
│   ├── CheckboxPage.js
│   └── ContextMenuPage.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ✅ Key Features

- Page Object Model (POM) implementation  
- Functional UI automation coverage  
- Reusable locators and actions  
- Reliable assertions and validations  
- Debugged and stabilized test flows  
- Clean and scalable framework structure  

---

## ▶️ How to Run the Tests

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run all tests
```bash
npx playwright test
```

### 3️⃣ Run tests with browser UI (headed mode)
```bash
npx playwright test --headed
```

### 4️⃣ View HTML Report
```bash
npx playwright show-report
```

---

## 🧠 Skills Demonstrated

- UI Automation Testing  
- Page Object Model (POM) Framework Design  
- Playwright Test Runner  
- Locator Strategy  
- Debugging Failing Tests  
- Functional Test Validation  
- Git Version Control  

---

## 🔍 Purpose of This Project

This project was created to:
- Practice professional UI automation framework design
- Apply Playwright automation concepts in real-world scenarios
- Demonstrate job-ready automation skills for QA / Test Engineer roles

---

## 👨‍💻 Author

**Alenn Glenn Apurado**  
Aspiring QA / Automation Test Engineer  

---

✅ This project is actively maintained and continuously improved for learning and professional development.

