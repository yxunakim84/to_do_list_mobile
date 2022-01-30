const quotes = [
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall",
    },
    {
        quote: "Stay afraid, but do it anyway. What's important is the action. You don't have to wait to be confident. Just do it and eventually the confidence will follow.",
        author: "Carrie Fisher",
    },
    {
        quote: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
        author: "Abraham Maslow",
    },
    {
        quote: "Don't go through life, grow through life.",
        author: "Eric Butterworth",
    },
    {
        quote: "We can't become what we need to be by remaining what we are.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
        author: "Bernice Johnson Reagon",
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        author: "Amelia Earhart",
    },
    {
        quote: "If there is no struggle, there is no progress.",
        author: "Frederick Douglass",
    },
    {
        quote: "Do the best you can until you know better. Then when you know better, do better.",
        author: "Maya Angelou",
    },
    {
        quote: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
        author: "Larry Bird",
    },
    {
        quote: "Remember that wherever your heart is, there you will find your treasure.",
        author: "Paulo Coelho",
    },
    {
        quote: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
        author: "Ella Fitzgerald",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuate = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = "\"" + todaysQuate.quote + "\"" + '\n';
author.innerText = "- " + todaysQuate.author;
