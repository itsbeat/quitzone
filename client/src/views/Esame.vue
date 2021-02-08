<template>
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-5">
          <h5 class="uppercase">{{quiztitolo}} {{currentQuiz.divider}} {{currentQuiz.materia}} {{currentQuiz.divider}} {{currentQuiz.docente}}</h5>
          <div class="flex justify-center">
                <div 
                    class="border-2 border-blue-800 text-blue-800 rounded-full text-center px-4 py-2 m-2" 
                    v-for="(q, index) in quizList"
                    :class="{
                        'active' : index === currentQuizIndex,
                        [checkAnswerByIndex(index)]: true
                    }" 
                    :key="index">
                        <h1>{{index + 1}} </h1>
                </div>
        </div>
        <div class="flex items-center rounded-full">
            <hello-world></hello-world>
        </div>
    </div>
        
        
      
    <div>

        <div v-if="currentView === 'quiz'">

            <div class="flex justify-center">
                <div class="flex-1 border-2 border-grey-200 p-4 ">
                    <div class="p-1 underline">
                        Domanda: {{currentQuiz.id}}
                    </div>

                    <div class="bg-gray-200 p-4 mb-3">
                        {{currentQuiz.quiz}}
                    </div>
                
                    <div class="">
                        <div class="p-1" v-for="(r, index) in currentQuiz.choices" :key="index">
                            
                            <input type="radio" name="risposta" :value="r.id" v-model="risposte[currentQuiz.id]">
                            <label class="pl-2" for="risposta">{{r.text}}</label>
                            
                        </div>
                    </div>
                </div>
                <div class="flex-1 pl-5">
                    <img class="object-contain h-50 w-full" src="http://via.placeholder.com/640x360" alt="">
                </div>
            </div>
            <div class="flex justify-center items-center mt-8">
                <button id="back" class="bg-blue-700 text-white focus:outline-none m-2 p-2 uppercase" @click="retrocedi()" :disabled = "canGoBack">Indietro</button>
                <span class="font-bold mx-8">{{currentQuiz.id}}/{{quizList.length}}</span>
                <button id="next" class="bg-blue-700 text-white focus:outline-none m-2 p-2 uppercase disabled:bg-black" @click="avanza()">Avanti</button>
                <button id="next" class="bg-blue-700 text-white focus:outline-none m-2 p-2 uppercase" @click="fine()" :disabled = "endButtonLabel" >Fine</button>
            </div>
            
        
        </div>
        <div class="containerNewGame" v-if="currentView === 'result'">
            <h1>🥳🥳🥳🥳Bravo! hai completato il quiz!🥳🥳🥳🥳</h1>
            <h1>Score: {{score}} / {{quizList.length}}</h1>
            <button @click="newGame()">Gioca di Nuovo!</button>
        </div>
    </div>


    <router-view></router-view>
  </div>
</template>
<script>
export default({
    name: "Esame",
    data() {
        return {
            quizList : [
                {
                    id: 1,
                    materia: 'Informatica',
                    docente: 'Alberini',
                    divider: '>',
                    quiz: 'Di che colore era il cavallo bianco di napoleone?',
                    answers: [],
                    seen: false,
                    correct:[1],
                    choices : [
                            {
                                id : 1, text: 'bianco'
                            },
                            {
                                id : 2, text: 'nero'
                            },
                            {
                                id : 3, text: 'grigio'
                            },
                            {
                                id : 4, text: 'bianco'
                            },
                        ],
                },  {
                    id: 2,
                    materia: 'Informatica',
                    docente: 'Rocchetto',
                    divider: '>',
                    quiz: 'Quante sono le regioni italiane?',
                    answers: [],
                    seen: false,
                    correct:[1],
                    choices: [                        
                            {
                                id : 1, text: '20'
                            },
                            {
                                id : 2, text: '21'
                            },
                            {
                                id : 3, text: '19'
                            },
                            {
                                id : 4, text: '22'
                            },
                        ]
                },  {
                    id: 3,
                    materia: 'Informatica',
                    docente: 'Rocchetto',
                    divider: '>',
                    quiz: 'Chi tra questi comanda in ITS Last?',
                    answers: [],
                    seen: false,
                    correct:[3],
                    choices: [
                        {
                            id : 1, text: 'Giacomo Alberini'
                        },
                        {
                            id : 2, text: 'Sara Vedovato'
                        },
                        {
                            id :3, text: 'Zavaah'
                        },
                        {
                            id : 4, text: 'Massimo Piazza'
                        },
                    ],
                },  {
                    id: 4,
                    materia: 'Informatica',
                    docente: 'Rocchetto',
                    divider: '>',
                    quiz: 'Quanto fa: 15 + 18?',
                    answers: [],
                    seen: false,
                    correct:[4],
                    choices: [
                        
                            {
                                id : 1, text: '36'
                            },
                            {
                                id : 2, text: '33'
                            },
                            {
                                id : 3, text: 'un pesce'
                            },
                            {
                                id : 4, text: 'te pituro sul muro'

                            }
                        ]
                },
                {
                    id: 5,
                    materia: 'Informatica',
                    docente: 'Rocchetto',
                    divider: '>',
                    quiz: 'Quanto fa: 15 + 18?',
                    answers: [],
                    seen: false,
                    correct:[4],
                    choices: [
                        
                            {
                                id : 1, text: '36'
                            },
                            {
                                id : 2, text: '33'
                            },
                            {
                                id : 3, text: 'un pesce'
                            },
                            {
                                id : 4, text: 'te pituro sul muro'

                            }
                        ]
                }
            ],
            currentQuizIndex: 0,
            currentView: 'quiz',
            score: 0,
            risposte: {},
            countdown: 3600000,
            quiztitolo: 'Esame',
        }
    },
    methods: {
        avanza(){
            console.log(this.currentQuizIndex)
            if(this.currentQuizIndex < this.quizList.length - 1){
                this.quizList[this.currentQuizIndex].seen = true;
                this.currentQuizIndex ++;
            }
        },
        fine(){
            this.getScore();
        },
        retrocedi() {
            this.quizList[this.currentQuizIndex].seen = true;
            this.currentQuizIndex = this.currentQuizIndex > 0 ? this.currentQuizIndex - 1 : this.currentQuizIndex;
        },
        getScore(){
            this.currentView = 'result';
            this.quizList.forEach(quiz => {
               this.score += quiz.correct.indexOf(this.risposte[quiz.id]) > -1 ? 1 : 0;
            });            
            
        },
        newGame(){
            this.risposte = {};
            this.currentQuizIndex = 0;
            this.currentView = 'quiz';
            
        },
        checkAnswerByIndex(index) {
            let quizElement = this.quizList[index]
            if (!this.risposte[quizElement.id] && quizElement.seen) {
                return 'bg-indigo-200';
            } else if (!this.risposte[quizElement.id]) {
                return 'bg-white';
            } else {
                return 'bg-blue-800 font-color-white';
            }
        }
    },
    computed: {
        currentQuiz(){
            return this.quizList[this.currentQuizIndex];
        },
        canGoBack(){
            return this.currentQuizIndex === 0;
        },
        endButtonLabel(){
            return this.currentQuizIndex != this.quizList.length -1;
        }

    }
})
</script>

<style>
.font-color-white{
    color: white !important;
}
</style>