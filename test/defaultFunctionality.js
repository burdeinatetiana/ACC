const selectorCnt = require('./../data/selectors.json').counter;
const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
const inputNumber = require ('./../helpers/inputNumber');

describe('DEFAULT COUNTER FUNCTIONALITY', function () {

    describe('CALCULATION WORKS', function () {

        it('TC-040 Subtract 1 Gives -1', function () {
            browser.url('');
            const button = $(selectorCnt.blackBtn);
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC040);
        })

        it('TC-041 Add 3 Gives 2', function () {
            const button = $$(selectorCnt.blackBtn)[5];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC041);
        })

        it('TC-042 LLF Accept 1', function () {
            inputNumber('left', expectedDCF.inputMin);
            const result = $(selectorCnt.error).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-043 ULF Accept 9', function () {
            inputNumber('right', expectedDCF.inputMax);
            const result = $(selectorCnt.error).isDisplayed();
            expect(result).toEqual(false);
        })

        it('TC-044 LLF = 1 and ULF = 1 Gives Two Black Buttons', function () {
            browser.refresh();
            inputNumber('left', expectedDCF.inputMin);
            inputNumber('right', expectedDCF.inputMin);
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedDCF.btnQuantity2);
        })

        it('TC-045 LLF = 9 and ULF = 9 Gives 2 Black Buttons', function () {
            browser.refresh();
            inputNumber('right', expectedDCF.inputMax);
            inputNumber('left', expectedDCF.inputMax);
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedDCF.btnQuantity2);
        })

        it('TC-046 Reset Button Works', function () {
            $(selectorCnt.blackBtn).click();
            $(selectorCnt.resetBtn).click();
            const actual = $(selectorCnt.countValue).getText();
            expect(actual).toEqual(expectedDCF.countValue);
        })

        it('TC-047 Delete Button Works', function () {
            $(selectorCnt.deleteBtn).click();
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(false);
        })

    });

});