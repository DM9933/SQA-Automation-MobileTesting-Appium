import AttendanceReportPage from '../pageObjects/AttendanceReportPage.js';
import CheckInLeaveApplicationPage from '../pageObjects/CheckInLeaveApplicationPage.js';
import path from 'path';
import { ensureDirectoryExists } from '../../utils/fileUtils.js';

describe('Check-IN & Leave Application Workflow', () => {
    it('should complete check-in and submit a leave application', async () => {
        // Login
        await AttendanceReportPage.login('azmin@excelbd.com', 'D!m77(2SJ,5j');
        await AttendanceReportPage.allowLocationIfPrompted();

        // Perform Check-In
        await CheckInLeaveApplicationPage.doCheckIn();
        await CheckInLeaveApplicationPage.checkIn();

        // Create Leave Application
        await CheckInLeaveApplicationPage.createLeaveApplication('19', '20', 'Travel / Out of Town');


        // Save Confirmation Screenshot
        const reportsDir = path.resolve('./screenshots');
        ensureDirectoryExists(reportsDir);
        await driver.saveScreenshot(path.join(reportsDir, 'final_listing.png'));

        // Close App
        await driver.terminateApp('com.your.app.package');
    });
});
