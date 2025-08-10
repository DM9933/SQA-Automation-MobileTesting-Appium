# Attendance Automation – Appium (WebdriverIO + Mocha)

This project contains automation scripts for the **ABC Company Mobile App** using **Appium**, **WebdriverIO**, and **Mocha** framework.  
It covers two main automation flows inside the HR module:  

1. **Attendance Report Search**  
2. **Check-IN & Leave Application Creation**

---

## Automation Tasks

### **Task 1 – Attendance Report Search**
**Objective:** Automate searching attendance reports within the HR module.

**Test Flow:**
1. Launch the ABC Company mobile app.
2. Navigate to `HR -> My Attendance`.
3. Select **From Date** and **To Date** (max gap 1 month).
4. Filter by **Status: On Leave**.
5. Validate that the search results appear.
6. Take a screenshot of the search results.
7. Close the app.

*** Test Execution ***  
![Attendance Report Search Execution](Task1.gif)
---

### **Task 2 – Check-IN & Leave Application Creation**
**Objective:** Automate employee Check-IN and Leave Application workflows.

**Test Flow:**
1. Launch the ABC Company mobile app.
2. Navigate to `HR -> Check-IN`.
3. Complete the check-in process.
4. Navigate to `HR -> Leave Application`.
5. Create a new leave application by filling all required fields.
6. Take a screenshot of the confirmation/listing.
7. Close the app.

** Test Execution GIF:**  
![Check In & Leave Application](path/to/your-gif.gif)
---
## Project Structure
```
attendance-automation/
│
├── test/
│ ├── specs/
│ │ ├── task1_attendanceReportSearch.js # Test script for Attendance Report Search
│ │ ├── task2_checkInLeaveApplication.js # Test script for Check-IN & Leave Application
│ │
│ ├── pageObjects/
│ │ ├── AttendanceReportPage.js # Page Object for Attendance Report
│ │ ├── CheckInLeaveApplicationPage.js # Page Object for Check-IN & Leave Application
│
├── utils/
│ ├── fileUtils.js # Utility function for directory creation
│
├── wdio.conf.js # WebdriverIO + Appium config
├── package.json # Project dependencies & scripts
├── README.md # Project documentation
└── screenshots/ # Saved screenshots
```

##  Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Appium Server](https://appium.io/) (v2+)
- [Android SDK](https://developer.android.com/studio)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Android Emulator or Real Device with USB debugging enabled

---

##  Dependencies

This project uses the following NPM packages:

```json
"dependencies": {
  "@wdio/allure-reporter": "^8.x",
  "@wdio/appium-service": "^8.x",
  "@wdio/cli": "^8.x",
  "@wdio/local-runner": "^8.x",
  "@wdio/mocha-framework": "^8.x",
  "@wdio/spec-reporter": "^8.x",
  "appium": "^2.x",
  "chai": "^4.x"
},
"devDependencies": {
  "allure-commandline": "^2.x"
}
```
### You Can Install dependencies
```bash 
npm install
```


## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/attendance-automation.git
cd attendance-automation
```

### 2️. Install dependencies
```bash
npm install
```
### 3️. Start Appium server
```bash
appium
```
### 4️. Connect device or start emulator
Verify device is detected:
```bash
adb devices
```
### 5️. Update wdio.conf.js

1. Set your device name
2. Set platform version
3. Set app path (APK file location)

### RUN WDIO/APPIUM SPECIFIC TEST
```bash
npx wdio run wdio.conf.js --spec ./test/specs/task1_attendanceReportSearch.js
```
### Running the Tests
Run all tests:
```bash
npm run wdio
```
### Run with Allure report generation:

```bash
npm run test:allure
```
### Viewing Test Reports (Allure)
Generate Allure report:
```bash
npm run allure:generate
```
### Open Allure report in browser:

```bash
npm run allure:open
```
###  Screenshots
1. Screenshots are automatically saved in the ./screenshots folder.
2. Failures also attach screenshots to Allure reports.

### Test Execution Video

```markdown
[![Watch the demo](https://img.youtube.com/vi/your-video-id/0.jpg)](https://youtu.be/your-video-id)
```





