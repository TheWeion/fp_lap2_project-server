const request = require("supertest");
const app = require("../../api/server");

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    // describe('head', () => {
    //     test('it has a title', () => {
    //         let title = document.querySelector('title');
    //         expect(title).toBeTruthy();
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

    // describe('h2', () => {
    //     test('contents of h2 will change to greeting on mouse over', () => {
    //         const h2 = document.querySelector('h2');
    //         const text = h2.innerHTML;
    //         h2.onmouseover(
    //             expect(text).toBe("Greetings")
    //         );
    //     });
    // });

});
