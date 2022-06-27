/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../login&registration.html'), 'utf8');


describe('login&registration.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            let title = document.querySelector('title');
            expect(title).toBeTruthy();
        });
    });

    describe('Title Contents', () => {
        test('contents of title will be Login/Registration', () => {
            const title = document.querySelector('title');
            const text = title.innerHTML;
            expect(text).toBe("Login/Registration");
        });
    });

    // describe('h1', () => {
    //     test('body changes to red on mouse click', () => {
    //         const h1 = document.querySelector('h1');
    //         const bodyColor = document.body.style.backgroundColor;
    //         h1.onclick(
    //             expect(bodyColor).toBe("red")
    //         );
            
    //     });
    // });

});
