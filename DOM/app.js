window.addEventListener('DOMContentLoaded', function () {

    // #1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.

    let button = document.createElement('button');
    let btnText = document.createTextNode('Say something nice!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        alert('Hey, beautiful! You are loved!');
    });

    // #2. Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.

    let alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', function () {
        let alertButtonText = document.getElementById('alertButtonInput').value;
        alert(alertButtonText);
    });

    // #3. Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.

    let div1 = document.getElementById('div1');

    div1.addEventListener('mouseenter', function () {
        div1.style.backgroundColor = 'red';
    }), div1.addEventListener('mouseleave', function () {
        div1.style.backgroundColor = '';
    });

    // #4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).

    let paragraph = document.getElementById('para1');

    function randomColor() {
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        return color;
    }

    paragraph.addEventListener('click', function() {
        paragraph.style.color = randomColor();
    });

    // #5. Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.

    let nameButton = document.getElementById('nameButton');
    let nameDiv = document.getElementById('nameDiv');

    nameButton.addEventListener('click', function() {
        let nameSpan = document.createElement('span');
        nameDiv.appendChild(nameSpan);
        nameSpan.append('Austin Gage Jones');
    });

    // #6. Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.

    let friendButton = document.getElementById('friendButton');
    let friendList = document.getElementById('friendList');
    let friends = ['Branwin', 'Jessie', 'Ashley', 'Austin', 'Karlie', 'Cody', 'Hunter', 'Bailey', 'Matt', 'Meghan']

    friendButton.addEventListener('click', function() {
        for (let i = 0; i < friends.length; i++) {
            let listItem = document.createElement('li');
            let listText = document.createTextNode(friends[i]);
            listItem.appendChild(listText);
            friendList.appendChild(listItem);
        }
    });

});