const quotes = [
    [
        "When you have a dream, you've got to grab it and never let go.",
        "Carol Burnett"
    ],
    [
        "Nothing is impossible. The word itself says 'I'm possible!'",
        "Audrey Hepburn"
    ],
    [
        "There is nothing impossible to they who will try.",
        "Alexander the Great"
    ],
    [
        "The bad news is time flies. The good news is you're the pilot.",
        "Michael Altshuler"
    ],
    [
        "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        "Nicole Kidman"
    ],
    [
        "Keep your face always toward the sunshine, and shadows will fall behind you.",
        "Walt Whitman"
    ],
    [
        "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
        "Amal Clooney"
    ],
    [
        "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
        "Duchess Meghan"
    ],
    [
        "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
        "Taylor Swift"
    ],
    [
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Winston Churchill"
    ],
    [
        "You define your own life. Don't let other people write your script.",
        "Oprah Winfrey"
    ],
    [
        "You are never too old to set another goal or to dream a new dream.",
        "Malala Yousafzai"
    ]
];
var text = document.getElementById("text");
var author = document.getElementById("author");
const updateQuote = () => {
    let i = Math.floor(Math.random() * quotes.length + 1);
    text.innerHTML = quotes[i][0];
    author.innerHTML = quotes[i][1];
};