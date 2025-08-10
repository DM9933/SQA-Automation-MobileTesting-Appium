// pages/AttendanceReportPage.js
class AttendanceReportPage {
    // ---------- Locators ----------
    get emailInput() { return $('android=new UiSelector().text("Enter Email")'); }
    get passwordInput() { return $('android=new UiSelector().text("Enter Password")'); }
    get loginBtn() { return $('~Login'); }
    get loadingBtn() { return $('~Loading...'); }
    get permissionDialog() { return $('id=com.android.permissioncontroller:id/grant_dialog'); }
    get allowLocationBtn() { return $('id=com.android.permissioncontroller:id/permission_allow_foreground_only_button'); }
    get myAttendanceBtn() { return $('~My Attendance'); }
    get fromDatePicker() { return $('~, From'); }
    get toDatePicker() { return $('~, To'); }
    get prevMonthBtn() { return $('id=android:id/prev'); }
    get okBtn() { return $('id=android:id/button1'); }
    get statusDropdown() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(12)'); }
    get onLeaveOption() { return $('~On Leave'); }
    get resultsContainer() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(18)'); }
    get specificRecord() { return $('~1., Shaid Azmin, On Leave, 26-Jun-2025, --, --, HQ, Baridhara'); }
    get closeRecordBtn() { return $('android=new UiSelector().text("")'); }

    // ---------- Actions ----------
    async login(email, password) {
        await this.emailInput.waitForDisplayed({ timeout: 15000 });
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.waitForDisplayed({ timeout: 10000 });
        await this.loginBtn.click();
    }

    async waitForLoading() {
        await this.loadingBtn.waitForDisplayed({ timeout: 5000 });
        await this.loadingBtn.waitForDisplayed({ reverse: true, timeout: 30000 });
    }

    async allowLocationIfPrompted() {
        if (await this.permissionDialog.isDisplayed()) {
            await this.allowLocationBtn.click();
            await driver.pause(1000);
        }
    }

    async selectDateRange(fromDateLabel, toDateLabel) {
        // From Date
        await this.fromDatePicker.click();
        await this.prevMonthBtn.click();
        await this.prevMonthBtn.click();
        const fromDate = await $(`~${fromDateLabel}`);
        await fromDate.click();
        await this.okBtn.click();

        // To Date
        await this.toDatePicker.click();
        await this.prevMonthBtn.click();
        await this.prevMonthBtn.click();
        const toDate = await $(`~${toDateLabel}`);
        await toDate.click();
        await this.okBtn.click();
    }

    async selectStatus(statusName) {
        await this.statusDropdown.click();
        const statusOption = await $(`~${statusName}`);
        await statusOption.click();
    }

    async openSpecificRecord() {
        await this.specificRecord.waitForDisplayed({ timeout: 10000 });
        await this.specificRecord.click();
    }

    async closeRecordDetail() {
        await this.closeRecordBtn.waitForDisplayed({ timeout: 10000 });
        await this.closeRecordBtn.click();
    }
}

export default new AttendanceReportPage();
