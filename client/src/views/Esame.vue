<template>
  <div>
      <div class="flex py-5">
          <h5 class="uppercase pl-5">Esame</h5>
      </div>

      <div class="flex justify-center bg-grey-lighter">
                <div class="border-2 border-blue-500 text-blue-500 rounded-full text-center px-4 py-2 m-2" v-for="(q, index) in quizList" :class="{
                    'active' : index === currentQuizIndex,
                }" :key="index">
                        <h1>{{index + 1}}</h1>
                </div>
            </div>
    <div class="pl-5">
        <!---->
        <div v-if="currentView === 'quiz'">

            <div class="flex">
                <div class="border-2 border-grey-200 p-4">
                    <div class="p-1 underline">
                        Domanda: {{currentQuiz.id}}
                    </div>

                    <div class="bg-gray-200 p-4">
                        {{currentQuiz.quiz}}
                    </div>
                
                    <div class="">
                        <div class="p-1" v-for="(r, index) in currentQuiz.choices" :key="index">
                            
                            <input type="radio" name="risposta" :value="r.id" v-model="risposte[currentQuiz.id]">
                            <label class="pl-2" for="risposta">{{r.text}}</label>
                            
                        </div>
                    </div>
                </div>
                <div class="pl-28">
                    <img class="object-contain h-50 w-full" src="http://via.placeholder.com/640x360" alt="">
                </div>
            </div>
            <div class="flex justify-center">
                <button id="back" class="bg-blue-500 text-white m-2 p-2 uppercase" @click="retrocedi()" :disabled = "canGoBack">Indietro</button>
                <button id="next" class="bg-blue-500 text-white m-2 p-2 uppercase disabled:bg-black" @click="avanza()" :disabled = "canGoNext">Avanti</button>
                <button id="next" class="bg-blue-500 text-white m-2 p-2 uppercase" @click="fine()" :disabled = "endButtonLabel" >Fine</button>
            </div>
            
            <pre>{{risposte}}
                canGoNext
                {{canGoNext}}
            </pre>
        
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
                    quiz: 'Di che colore era il cavallo bianco di napoleone?',
                    answers: [0],
                    choices : [
                            {
                                id : 0, text: 'bianco',
                                correct: true,
                            },
                            {
                                id : 1, text: 'nero',
                                correct: false,
                            },
                            {
                                id : 2, text: 'grigio',
                                correct: false,
                            },
                            {
                                id : 3, text: 'bianco',
                                correct: false,
                            },
                        ],
                },  {
                    id: 2,
                    quiz: 'Quante sono le regioni italiane?',
                    answers: [0],
                    choices: [                        
                            {
                                id : 0, text: '20',
                                correct: true,
                            },
                            {
                                id : 1, text: '21',
                                correct: false,
                            },
                            {
                                id : 2, text: '19',
                                correct: false,
                            },
                            {
                                id : 3, text: '22',
                                correct: false,
                            },
                        ]
                },  {
                    id: 3,
                    quiz: 'Chi tra questi comanda in ITS Last?',
                    answers: [2],
                    choices: [
                        {
                            id : 0, text: 'Giacomo Alberini',
                            correct: false,
                        },
                        {
                            id : 1, text: 'Sara Vedovato',
                            correct: false,
                        },
                        {
                            id :2, text: 'Zavaah',
                            correct: true,
                        },
                        {
                            id : 3, text: 'Massimo Piazza',
                            correct: false,
                        },
                    ],
                },  {
                    id: 4,
                    quiz: 'Quanto fa: 15 + 18?',
                    answers: [0],
                    choices: [
                        
                            {
                                id : 0, text: '36',
                                correct: true,
                            },
                            {
                                id : 1, text: '33',
                                correct: false,
                            },
                            {
                                id : 2, text: 'un pesce',
                                correct: false,
                            },
                        ]
                }
            ],
            currentQuizIndex: null,
            currentView: 'quiz',
            score: 0,
            risposte: {},
        }
    },
    beforeMount() {
        this.currentQuizIndex = 0;
    },
    methods: {
        avanza(){
            console.log(this.currentQuizIndex)
            if(this.currentQuizIndex < this.quizList.length - 1){
                this.currentQuizIndex ++;
            }
        },
        fine(){
            this.getScore();
        },
        retrocedi() {
            this.currentQuizIndex = this.currentQuizIndex > 0 ? this.currentQuizIndex - 1 : this.currentQuizIndex;
        },
        getScore(){
            this.currentView = 'result'; 
            
            this.quizList.forEach(quiz => {
               this.score += quiz.answers.indexOf(this.risposte[quiz.id]) > -1 ? 1 : 0;
            });
            
            
        },
        newGame(){
            this.risposte = {};
            this.currentQuizIndex = 0;
            this.currentView = 'quiz';
            
        },
        
    },
    computed: {
        currentQuiz(){
            return this.quizList[this.currentQuizIndex];
        },
        canGoNext(){
            return this.currentQuizIndex < this.quizList.length -1;
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
    
</style>
