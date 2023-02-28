const {I} = inject ();

class commonFunctions {
    
    commonFunctions_dropDown = '//label[text()="name"]/..|//*[text()="name"]/../../..';
    commonFunctions_dropDownOption = '//li[@role="option"]//div[text()="value"]|//li[@role="option" and text()="value"]|//div[@role="option"]//span[text()="value"]|//div[@role="option"]//span[contains(text(),"value")]|//li[contains(text(),"value")]|//li[@role="option"]//div[contains(text(),"value")]';
    commonFunctions_inputbox = '//mat-label[text()="inputvalue"]/../../preceding-sibling::input|//mat-label[text()="inputvalue"]/../../..//input|//label/span[contains(text(),"inputvalue")]/../preceding-sibling::input|//label[contains(text(),"inputvalue")]/preceding-sibling::input|//mat-label[contains(text(),"inputvalue")]/../../..//input|//mat-label[text()="inputvalue"]/../../../following-sibling::div//input';

    selectDropDownOption(label,option) {
      I.waitForElement(this.commonFunctions_dropDown.replaceAll('name',label),15);
      I.click(this.commonFunctions_dropDown.replaceAll('name',label));
      I.wait(1);
      I.click(this.commonFunctions_dropDownOption.replaceAll('value',option));
    }

    enterDataInInputBox(label, value){
      I.fillField(this.commonFunctions_inputbox.replaceAll('inputvalue',label),value);
    }

    verifyTextInInputBox(label, value){
      I.wait(1);
      I.seeInField(this.commonFunctions_inputbox.replaceAll('inputvalue',label),value);
    }

}