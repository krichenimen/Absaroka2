const questionsText = `[
    {
        "titleQuestion": "Quel est l’autre nom des Absaroka ?",
        "choices": [
            {
                "response": "A- Crows",
                "is_correct": true
            },
            {
                "response": "B- Abénaquis ",
                "is_correct": false
            },
            {
                "response": "C- Cheyennes ",
                "is_correct": false
            },
            {
                "response": "D- Cherokees",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Que signifie le mot “Crows” ? ",
        "choices": [
            {
                "response": "A- Aigles",
                "is_correct": false
            },
            {
                "response": "B- Corbeaux",
                "is_correct": true
            },
            {
                "response": "C- Lapins",
                "is_correct": false
            },
            {
                "response": "D- Loups",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Où vivaient historiquement les Absaroka précisément ?",
        "choices": [
            {
                "response": "A- Dans la Vallée de la rivière Yellowstone",
                "is_correct": true
            },
            {
                "response": "B- Le long du Missouri",
                "is_correct": false
            },
            {
                "response": "C- Dans le Nebraska",
                "is_correct": false
            },
            {
                "response": "D- Le long du Snake",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Où ont été déportés les Absaroka ? ",
        "choices": [
            {
                "response": "A- Dans une réserve près de Billings",
                "is_correct": true
            },
            {
                "response": "B- Dans une réserve près de Helena",
                "is_correct": false
            },
            {
                "response": "C- Dans une réserve près de Great Falls",
                "is_correct": false
            },
            {
                "response": "D- Dans une réserve près de Missoula",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "De quelle matière sont faits les tipis des Absaroka ? ",
        "choices": [
            {
                "response": "A- De peaux de vaches",
                "is_correct": false
            },
            {
                "response": "B- De peaux de moutons",
                "is_correct": false
            },
            {
                "response": "C- De peaux de bisons",
                "is_correct": true
            },
            {
                "response": "D- De peaux de serpents",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Comment s’habillaient les femmes Absaroka ?",
        "choices": [
            {
                "response": "A- Des ponchos",
                "is_correct": false
            },
            {
                "response": "B- Des chemises et des jambières",
                "is_correct": false
            },
            {
                "response": "C- Des pulls et pantalons faits de peaux de moutons",
                "is_correct": false
            },
            {
                "response": " D- Des robes faites de peaux de mouton et de cerf, avec des mocassins et des jambières",
                "is_correct": true
            }
        ]
    },
    {
        "titleQuestion": "Comment s’habillaient les hommes Absaroka ?",
        "choices": [
            {
                "response": "A- Des ponchos",
                "is_correct": false
            },
            {
                "response": "B- Des chemises et des jambières",
                "is_correct": true
            },
            {
                "response": "C- Des pulls et pantalons faits de peaux de moutons",
                "is_correct": false
            },
            {
                "response": " D- Des robes faites de peaux de mouton et de cerf, avec des mocassins et des jambières",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Quelle était la particularité des femmes Absaroka ?",
        "choices": [
            {
                "response": "A- Elles portaient des cheveux courts",
                "is_correct": true
            },
            {
                "response": "B- Elles portaient des cheveux longs",
                "is_correct": false
            },
            {
                "response": "C- Elles avaient les cheveux rasés",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Quelle était la particularité des hommes Absaroka ?",
        "choices": [
            {
                "response": "A- Ils portaient des cheveux courts",
                "is_correct": false
            },
            {
                "response": "B- Ils portaient des cheveux longs",
                "is_correct": true
            },
            {
                "response": "C- Ils avaient les cheveux rasés",
                "is_correct": false
            }
        ]
    },
    {
        "titleQuestion": "Quelle est la population totale des Absaroka ?",
        "choices": [
            {
                "response": "A- 120 000",
                "is_correct": false
            },
            {
                "response": "B- 12 000",
                "is_correct": true
            },
            {
                "response": "C- 3000",
                "is_correct": false
            },
            {
                "response": "D- 90 000",
                "is_correct": false
            }
        ]
    }
]`

/* function Random de cinq questions */
function pickRandomQuestions(questions) {
    var pickedQuestions = [];  /* nouveau tableau pour les 5 questions */
    while (pickedQuestions.length != 5) {  /* tant que le tableau n'est pas rempli par les 5 questions */
        var nextIndex = Math.floor(Math.random() * questions.length); /* donner un nombre de 0 --> 9 */
        /* prenons l'exemple de 4 */
        if (!(pickedQuestions.includes(questions[nextIndex]))) { /* si le pickedQuestions contient déjà le question[4], on l'ajoute pas  */
            pickedQuestions.push(questions[nextIndex]);  /* on va ajouter question[4] dans le tableau pickedQuestions */
        }
    }
    return pickedQuestions
}

/* function Show Questions */
function showQuestions(questionsToDisplay) {  /* affichage */ 
    var my_form = document.createElement('FORM'); 
    my_form.id = 'quizForm';
    my_form.name = 'quizForm';
    my_form.onsubmit = computeAndResult; /* ajouter onsubmit computeAndResult : je l'ai mis sans parenthese parceque je veux passer la fonction mais pas son exécution */ 
    document.getElementById("quiz").appendChild(my_form);

    /* remplissage question par question */
    for (var i = 0; i < questionsToDisplay.length; i++) {
        var container_div = document.createElement('div');
        my_form.appendChild(container_div);

        var currentquestion = questionsToDisplay[i];
        const questionH4 = document.createElement('h4');
        questionH4.textContent = currentquestion.titleQuestion;
        questionH4.id = 'Q' + i.toString();
        container_div.appendChild(questionH4);

        for (var j = 0; j < currentquestion.choices.length; j++) {

            var currentchoice = document.createElement('input');
            currentchoice.type = 'radio';
            currentchoice.name =  'Q' + i.toString(); /* input radio doit avoir le même name, i.toString() prend le numéro de la question courante */
            var choice_id = currentquestion.choices[j].response;
            currentchoice.id = choice_id;
            currentchoice.value = currentquestion.choices[j].is_correct; /* question 5 --> choix 2 --> reponse correcte ou pas  */

            var label = document.createElement('label');
            label.for = choice_id;
            label.textContent = currentquestion.choices[j].response;

            container_div.appendChild(currentchoice);
            container_div.appendChild(label);
            container_div.appendChild(document.createElement('br'));
        }
    }
     
    /* submit button */
    var bt_submit = document.createElement('input');
    bt_submit.type = 'submit';
    bt_submit.name = 'submit';
    bt_submit.value = 'Corriger';
    bt_submit.classList.add("btn");
    bt_submit.classList.add("btn-warning");
    my_form.appendChild(bt_submit);
}

/* function CALCUATE RESULT */
function computeAndResult() {
    document.getElementById("results").innerHTML = "";
    var true_answers = 0;
    var questionsTab = document.querySelectorAll('h4');
    for (var i = 0; i < questionsTab.length; i++) {
        var questionP = document.createElement('p');
        questionP.textContent = "Question:  " + questionsTab[i].textContent;
        document.getElementById("results").appendChild(questionP);

        var userAnswer = document.querySelector('input[name="'+questionsTab[i].id+'"]:checked');
        userAnswer = (userAnswer) ? userAnswer.id : "";
        var trueAnswer = document.querySelector('input[name="'+questionsTab[i].id+'"][value="true"]');
        if (userAnswer !== "" && userAnswer == trueAnswer.id) {
            var userAnswerP = document.createElement('p');
            userAnswerP.textContent = "Ta réponse: " + userAnswer;
            userAnswerP.style = "color: green;";
            true_answers++;
            questionP.appendChild(userAnswerP);
        } else {
            var userAnswerP = document.createElement('p');
            userAnswerP.textContent = (userAnswer) ? "Ta réponse: " + userAnswer : "Pas de réponse";
            userAnswerP.style = "color: red;";
            questionP.appendChild(userAnswerP);
            var trueAnswerP = document.createElement('p');
            trueAnswerP.textContent = "La réponse juste: " + trueAnswer.id;
            trueAnswerP.style = "color: green;";
            questionP.appendChild(trueAnswerP);
        }
    }

    if (true_answers < 3) {
        document.getElementById("ResultQuizModalLabel").textContent = "Échoué";
        document.getElementById("message").textContent = "Dommage tu as eu " + true_answers.toString() + "/5 réponses justes";
    } else {
        document.getElementById("ResultQuizModalLabel").textContent = "Succès";
        document.getElementById("message").textContent = "Félicitation tu as eu " + true_answers.toString() + "/5 réponses justes";
    }

    $("#ResultQuizModal").modal();
    return false;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var questions = JSON.parse(this.responseText);
    } else if (this.readyState == 4 && this.status != 200) {
        /* appel pour les fonctions */
        var questions = JSON.parse(questionsText);
    }
    if (questions) {
        var pickedQuestions = pickRandomQuestions(questions);
        showQuestions(pickedQuestions);
    }
};
xmlhttp.open("GET", "http://localhost:8000/js/quiz.json", true);
xmlhttp.send();

document.getElementById('close').onclick = function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    return false;
};

document.getElementById('restart').onclick = function () {
    location.reload();
    return false;
};

// python -m http.server
