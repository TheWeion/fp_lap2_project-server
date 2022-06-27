/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../login&registration.html'), 'utf8');

describe('registration', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('register form', () => {
        test('Expect a input for email', () => {
            let input = document.querySelector('#register-email');
            expect(input).toBeTruthy();
        });

        test('Expect a input for username', () => {
            let input = document.querySelector('#register-username');
            expect(input).toBeTruthy();
        });

        test('Expect a input for password', () => {
            let input = document.querySelector('#register-password');
            expect(input).toBeTruthy();
        });

        test('Expect a button to submit information', () => {
            let input = document.querySelector('#register-submit');
            expect(input).toBeTruthy();
        });
    });
});

describe('login', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('login form', () => {
        test('Expect a input for username', () => {
            let input = document.querySelector('#login-username');
            expect(input).toBeTruthy();
        });

        test('Expect a input for password', () => {
            let input = document.querySelector('#login-password');
            expect(input).toBeTruthy();
        });

        test('Expect a button to submit information', () => {
            let input = document.querySelector('#login-submit');
            expect(input).toBeTruthy();
        });
    });
});



// describe('Title Contents', () => {
//     test('contents of title will be Login/Registration', () => {
//         const title = document.querySelector('title');
//         const text = title.innerHTML;
//         expect(text).toBe("Login/Registration");
//     });
// });

// describe('h1', () => {
//     test('body changes to red on mouse click', () => {
//         const h1 = document.querySelector('h1');
//         const bodyColor = document.body.style.backgroundColor;
//         h1.onclick(
//             expect(bodyColor).toBe("red")
//         );
        
//     });
// });
