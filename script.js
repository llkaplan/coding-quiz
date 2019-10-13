window.onload=function(){


    //global vars
    var score = 0;
    var startBtn = document.getElementById('getStarted');
    var firstPage = document.getElementById('quizContent');
    var questionPage = document.getElementById('quiz');
    var nextButton = document.getElementById('next');


    // storing all my questions

    var myQuestions = [
        {
            question: "What keywords do you use to declare variables",
            answers: ["Var and Name", "Variable and Let", "Var and Let"
        ],
            correctAnswer: 'Var and Let'
        },
        {
            question: "Which of the following isn't a data type?",
            answers: ["String", "Group", "Boolean", "Array", "Object"
        ],
            correctAnswer: 'b'
        },
        {
            question: "What is the proper syntax for an click event?",
            answers: ["addEventListener(\"click\", myScript)", "click.function()", "addEventListener(click)"
        ],
            correctAnswer: 'a'
        }
    ];

    startBtn.addEventListener("click", function(){
        firstPage.style.display="none";
        questionPage.style.display="block";
        var questionText = document.createElement("h3");
        questionText.innerHTML = myQuestions[0].question;
        questionPage.appendChild(questionText);
        questionPage.insertBefore(questionText, null);
        questionPage.insertBefore(questionText, questionPage.childNodes[0] || null);

        for (i = 0; i < myQuestions[0].answers.length; i++){
            var answerButton = document.createElement("button");
            answerButton.innerHTML = myQuestions[0].answers[i];
            answerButton.classList.add("btn", 'btnlight', "answerBtn");
            questionPage.appendChild(answerButton);
            questionPage.insertBefore(answerButton, null);
            questionPage.insertBefore(answerButton, questionPage.childNodes[1] || null);
        };

        answerButton.addEventListener("click", function(){
            if(answerButton = myQuestions[0].correctAnswer){
                score++;
                console.log(score);
            }
        });

        for (i = 0; i < myQuestions.length; i++){
            myQuestions[+1]
        }

        nextButton.addEventListener("click", function(){
    });


}


