// function Question(questionText, answers, correctAnswer) {
//     this.questionText = questionText;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Question.prototype.checkAnswer = function (answer) {
//     return answer === this.correctAnswer;
// }           


class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}

let questions = [
    new Question("What was our first date like?", {
        a: "Romantic and unforgettable",
        b: "A bit awkward but sweet",
        c: "An adventure we’ll always remember"
    }, "b"),
    new Question("What have we learned about each other this past year?", {
        a: "Patience and understanding",
        b: "The importance of communication",
        c: "Each other’s quirks and habits"
    }, "c"),
    new Question("What’s our favorite memory from the past year?", {
        a: "Our anniversary or a special holiday",
        b: "A random but hilarious moment",
        c: "Achieving a milestone together"
    }, "a"),
    new Question("How well do we know each other’s families and friends?", {
        a: "Like the back of our hand",
        b: "We’re getting there",
        c: "There’s room for improvement"
    }, "c"),
    new Question("How excited are we for our future together?", {
        a: "Over the moon",
        b: "Optimistic and hopeful",
        c: "Realistically cautious but positive"
    }, "a")
];
