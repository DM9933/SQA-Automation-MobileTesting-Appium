import AttendanceReportPage from '../pageObjects/AttendanceReportPage.js';
import path from 'path';
import { ensureDirectoryExists } from '../../utils/fileUtils.js';

describe('Attendance Report Search', () => {
    it('should search attendance reports', async () => {
        // Login
        await AttendanceReportPage.login('azmin@excelbd.com', 'D!m77(2SJ,5j');
        await AttendanceReportPage.waitForLoading();

        // Pause a bit to allow UI to settle
        await driver.pause(5000);

        // Handle permission if appears
        await AttendanceReportPage.allowLocationIfPrompted();

        // Go to My Attendance
        await AttendanceReportPage.myAttendanceBtn.waitForDisplayed({ timeout: 20000 });
        await AttendanceReportPage.myAttendanceBtn.click();

        // Select date range
        await AttendanceReportPage.selectDateRange('20 June 2025', '30 June 2025');

        // Select status
        await AttendanceReportPage.statusDropdown.waitForDisplayed({ timeout: 15000 });
        await AttendanceReportPage.statusDropdown.click();

        const statusOption = await $(`~On Leave`);
        await statusOption.waitForDisplayed({ timeout: 15000 });
        await statusOption.click();

        // Wait for results to appear
        await AttendanceReportPage.resultsContainer.waitForDisplayed({ timeout: 30000 });

        // Save screenshot
        const reportsDir = path.resolve('./screenshots');
        ensureDirectoryExists(reportsDir);
        await driver.saveScreenshot(path.join(reportsDir, 'attendance-search.png'));

        // Open & close record detail
        await AttendanceReportPage.openSpecificRecord();
        await AttendanceReportPage.closeRecordDetail();

        await driver.terminateApp('com.your.app.package');

    });
});
