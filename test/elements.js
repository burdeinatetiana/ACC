const selectorGen = require ('../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const selectorCnt = require ('../data/selectors.json').counter;
const expectedCnt = require ('./../data/expected.json').counter;

describe('COMPLEX COUNTER APP', function () {

    describe('GETTING TO THE PAGE', function () {

        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })

    });

    describe('ELEMENTS EXIST', function () {

        it('TC-002 Header', function () {
            const actual = $(selectorGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const actual = $(selectorGen.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Add Name Field', function () {
            const actual = $(selectorGen.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(selectorGen.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Value Field', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].isDisplayed();
            //$$('label')[$$('label').length-1]
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', function () {
            const actual = $(selectorGen.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('ELEMENTS VALUE', function () {

        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGen.header).getText();
            expect(actual).toEqual(expectedGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorGen.totalResult).getText();
            expect(actual).toEqual(expectedGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(expectedGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $(selectorGen.addNameField).getValue();
            expect(actual).toEqual(expectedGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].getText();
            expect(actual).toEqual(expectedGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            const actual = $(selectorGen.defaultValueField).getValue();
            expect(actual).toEqual(expectedGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorGen.addCounterBtn).getText();
            expect(actual).toEqual(expectedGen.addCounterBtn);
        })
    });

    describe('DEFAULT COUNTER ELEMENTS EXIST', function () {

        it('TC-016 Counter Name', function () {
            const actual = $$(selectorCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-017 Count Value', function () {
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 LLF', function () {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF', function () {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021 Default Sub and Add Buttons', function () {
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedCnt.defaultNumberBlackBtn);
        })

        it('TC-022 Delete button', function () {
            const actual = $(selectorCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-023 Reset button', function () {
            const actual = $(selectorCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024 Edit Name Field', function () {
            const actual = $(selectorCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-025 Label for Edit Name Field', function () {
            const actual = $(selectorCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-026 Input for LLF', function () {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-027 Input for ULF', function () {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe ('DEFAULT COUNTER ELEMENTS VALUE', () => {

        it ('TC-028 Counter Name = 1. Default Counter', function () {
            const actual = $$(selectorCnt.counterName)[1].getText();
            expect(actual).toEqual(expectedCnt.counterName);
        })

        it ('TC-029 Count Value = 0', function () {
            const actual = $(selectorCnt.countValue).getText();
            expect(actual).toEqual(expectedCnt.countValue);
        })

        it ('TC-030 LLF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorCnt.lowerLimitField).getText();
            expect(actual).toEqual(expectedCnt.lowerLimitField);
        })

        it ('TC-031, TC-033 Default Buttons = -1, -2, -3, 1, 2, 3', function () {
            const actual = $$(selectorCnt.blackBtn).map(el => el.getText());
            expect(actual).toEqual(expectedCnt.blackBtn);
        })

        it ('TC-032 ULF = CHANGE STEP OPTIONS?', function () {
            const actual = $(selectorCnt.upperLimitField).getText();
            expect(actual).toEqual(expectedCnt.upperLimitField);
        })

        it ('TC-034 Delete Button = Delete', function () {
            const actual = $(selectorCnt.deleteBtn).getText();
            expect(actual).toEqual(expectedCnt.deleteBtn);
        })

        it ('TC-035 Reset Button = Reset', function () {
            const actual = $(selectorCnt.resetBtn).getText();
            expect(actual).toEqual(expectedCnt.resetBtn);
        })

        it ('TC-036 Label = Edit Counter Title', function () {
            const actual = $(selectorCnt.editNameFieldLabel).getText();
            expect(actual).toEqual(expectedCnt.editNameFieldLabel);
        })

        it ('TC-037 Placeholder for Edit Name Field = Default Counter', function () {
            const actual = $(selectorCnt.editNameField).getAttribute('value');
            expect(actual).toEqual(expectedCnt.editNameField);
        })

        it ('TC-038 Input for LLF = 1', function () {
            $(selectorCnt.lowerLimitField).click();
            const actual = $(selectorCnt.lowerInputField).getAttribute('value');
            expect(actual).toEqual(expectedCnt.lowerInputField);
        })

        it ('TC-039 Input for ULF = 3', function () {
            $(selectorCnt.upperLimitField).click();
            const actual = $(selectorCnt.upperInputField).getAttribute('value');;
            expect(actual).toEqual(expectedCnt.upperInputField);
        })

    });

});