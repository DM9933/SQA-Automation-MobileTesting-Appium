class CheckInLeavePage {
    // Selectors

    // Check-IN
    get checkInBtn() { return $('~Check-IN'); }
    get oneTimePermissionBtn() { return $('id=com.android.permissioncontroller:id/permission_allow_one_time_button'); }
    get shutterBtn() { return $('id=com.android.camera2:id/shutter_button'); }
    get doneBtn() { return $('id=com.android.camera2:id/done_button'); }

    get okConfirmationBtn() { return $('~OK'); }

    // Leave Application
    get leaveAppBtn() { return $('~Leave Application'); }
    get specialIconBtn() { return $('~'); }
    get plusAppBtn() { return $('~+, Application'); }
    get leaveTypeDropdown() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(14)'); }
    get specialLeaveOption() { return $('~Special Leave'); }

    get fromDatePicker() { return $('~, From Date*'); }
    get toDatePicker() { return $('~, To Date*'); }
    get nextMonthBtn() { return $('id=android:id/next'); }
    get okBtn() { return $('id=android:id/button1'); }

    get reasonInput() { return $('android=new UiSelector().className("android.widget.EditText").instance(2)'); }
    get applyBtn() { return $('~Apply'); }
    get confirmationMsg() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(41)'); }
    get okConfirmationBtn() { return $('~OK'); }

    // Dates by text selectors (dynamic getter)
    dateByText(day) {
        // day is string, e.g. "1" or "3"
        return $(`android=new UiSelector().text("${day}")`);
    }

    // Methods

    async doCheckIn() {
        await this.checkInBtn.waitForDisplayed({ timeout: 20000 });
        await this.checkInBtn.click();

        if (await this.oneTimePermissionBtn.isDisplayed()) {
            await this.oneTimePermissionBtn.click();
        }

        await this.shutterBtn.waitForDisplayed({ timeout: 15000 });
        await this.shutterBtn.click();

        await this.doneBtn.waitForDisplayed({ timeout: 15000 });
        await this.doneBtn.click();
    }

    async checkIn() {
        await this.checkInBtn.waitForDisplayed({ timeout: 15000 });
        await this.checkInBtn.click();

        // Wait for the confirmation OK button to appear after Check-IN and click it
        await this.okConfirmationBtn.waitForDisplayed({ timeout: 15000 });
        await this.okConfirmationBtn.click();
    }

    async createLeaveApplication(fromDay, toDay, reason = 'Family function leave') {
        await this.leaveAppBtn.waitForDisplayed({ timeout: 15000 });
        await this.leaveAppBtn.click();

        await this.specialIconBtn.waitForDisplayed({ timeout: 15000 });
        await this.specialIconBtn.click();

        await this.plusAppBtn.waitForDisplayed({ timeout: 15000 });
        await this.plusAppBtn.click();

        await this.leaveTypeDropdown.waitForDisplayed({ timeout: 15000 });
        await this.leaveTypeDropdown.click();

        await this.specialLeaveOption.waitForDisplayed({ timeout: 15000 });
        await this.specialLeaveOption.click();

        // From Date
        await this.fromDatePicker.waitForDisplayed({ timeout: 15000 });
        await this.fromDatePicker.click();

        // if (await this.nextMonthBtn.isDisplayed()) {
        //     await this.nextMonthBtn.click();
        // }

        const fromDateElem = this.dateByText(fromDay);
        await fromDateElem.waitForDisplayed({ timeout: 15000 });
        await fromDateElem.click();

        await this.okBtn.waitForDisplayed({ timeout: 15000 });
        await this.okBtn.click();

        // To Date
        await this.toDatePicker.waitForDisplayed({ timeout: 15000 });
        await this.toDatePicker.click();

        const toDateElem = this.dateByText(toDay);
        await toDateElem.waitForDisplayed({ timeout: 15000 });
        await toDateElem.click();

        await this.okBtn.waitForDisplayed({ timeout: 15000 });
        await this.okBtn.click();

        // Enter reason
        await this.reasonInput.waitForDisplayed({ timeout: 15000 });
        await this.reasonInput.setValue(reason);

        // Apply
        await this.applyBtn.waitForDisplayed({ timeout: 15000 });
        await this.applyBtn.click();

        // Wait confirmation
        await this.confirmationMsg.waitForDisplayed({ timeout: 15000 });

        await this.okConfirmationBtn.waitForDisplayed({ timeout: 15000 });
        await this.okConfirmationBtn.click();
    }
}

export default new CheckInLeavePage();
