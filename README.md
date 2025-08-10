# 📱 SQA Mobile Testing Automation (Appium + WebdriverIO)

This repository contains **Appium automation scripts** for testing a mobile application using **WebdriverIO**.

---

## 🚀 Setup Instructions

### 1️⃣ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) (v8+)
- [Android Studio](https://developer.android.com/studio)
- [Appium](https://appium.io/) (v2+)
- [WebdriverIO](https://webdriver.io/)
- [Allure Report](https://docs.qameta.io/allure/)

---

### 2️⃣ Install Dependencies
Clone the repository and install the required packages:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
📦 Dependencies
Main packages used:

@wdio/cli – WebdriverIO test runner

@wdio/appium-service – Appium integration

@wdio/mocha-framework – Mocha testing framework

@wdio/allure-reporter – Allure reporting

appium – Mobile automation server

▶️ How to Run the Tests
Start Emulator
bash
Copy
Edit
emulator -avd Pixel_6a
Start ADB Server
bash
Copy
Edit
adb kill-server
adb start-server
adb devices
Start Appium Server
bash
Copy
Edit
appium
Run All WDIO/Appium Tests
bash
Copy
Edit
npx wdio run wdio.conf.js
Run Specific Test
bash
Copy
Edit
npx wdio run wdio.conf.js --spec ./test/specs/task1_attendanceReportSearch.js
Using NPM Scripts
bash
Copy
Edit
npm run wdio             # Run all tests
npm run allure:generate  # Generate Allure report
npm run allure:open      # Open Allure report
📊 Test Reports
We use Allure Reports for detailed results.

Run your tests.

Generate the report:

bash
Copy
Edit
npm run allure:generate
Open the report in your browser:

bash
Copy
Edit
npm run allure:open
📂 Project Structure
bash
Copy
Edit
attendance-automation/
│
├── test/
│   ├── specs/                  # Test case files
│   └── pageobjects/            # Page Object Model files
│
├── utils/                      # Utility functions
├── wdio.conf.js                # WebdriverIO config
├── package.json
├── README.md
