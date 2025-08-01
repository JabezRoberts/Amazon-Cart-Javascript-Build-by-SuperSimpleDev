import { formatCurrency } from "../../scripts/utils/money.js";

// create a test suite using describe fxn
describe('test suite: format Currency', () => {
    it('converts cents into dollars', () => { // it() is another fxn provided by Jasmine. name in string
        // expect() lets us compare two values
        expect(formatCurrency(2095)).toEqual('20.95'); // checks if these two values are equal 
        // test this file by loading it inside tests.html from jasmine
    }); 

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent', () =>{
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });

});

// if (formatCurrency(2095) === '20.95') {
//     console.log('passed');
// } else {
//     console.log('failed');
// }

// if (formatCurrency(0) === '0.00') {
//     console.log('passed');
// } else {
//     console.log('failed');
// }

// if (formatCurrency(2000.5) === '20.01') {
//     console.log('passed');
// } else {
//     console.log('failed');
// }


if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}