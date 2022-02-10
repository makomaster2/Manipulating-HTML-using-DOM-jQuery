$(document).ready(function() {

    // #1. Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
    
    $('body').append('<button class=niceButton>Say something nice!');
    $('.niceButton').click(function() {
        alert('Hello, beautiful! You are loved!')
    })

    
    // #2. Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
    
    $('#alertButton').click(function() {
        alert(`${$('#alertButtonInput').val()}`);
    })
    
    // #3. Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
    
    $('#div1').mouseenter(function() {
        $(this).css('background-color', 'red');
    }).mouseleave(function() {
        $(this).css('background-color', '');
    })
    
    // #4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).

    function randomColor() {
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        return color;
    }

    $('#para1').click(function() {
        $(this).css('color', randomColor() )
    })
    
    // #5. Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
    
    $('#nameButton').click(function() {
        $('#nameDiv').append('<span>Austin Gage Jones')
    })
    
    // #6. Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.

    let friends = ['Branwin', 'Jessie', 'Ashley', 'Austin', 'Karlie', 'Cody', 'Hunter', 'Bailey', 'Matt', 'Meghan']

    $('#friendButton').click(function() {
        $.each(friends, function(index, value) {
            $('#friendList').append('<li>' + value + '</li')
        })
    })
    
});