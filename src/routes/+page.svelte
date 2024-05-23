<script>
    import QuestoinArea from "../components/QuestoinArea.svelte";
    import NavigationButton from "../components/NavigationButton.svelte";
    import TimerClock from "../components/TimerClock.svelte"
    import {questionPaper} from "../stores/question_paper.store"
    import { onDestroy } from 'svelte';


    let userQuestoinData = []  // this will become an array of obj having all question data
    let noOfQuestions = 0
    let currentQuestion = {} // this will be an object having index and ID of the current question

    // we will subscribe to the questionPaper store 
    const unsbscribe = questionPaper.subscribe((value)=>{
        if (value.data.length){
            userQuestoinData = value.data
            noOfQuestions = value.data.length
            currentQuestion = {index: 0, qid: value.data[0].qid}
        }
        
    }) 

    // unsubscribe whent the component is destroyed
    onDestroy(unsbscribe)
    
</script>


<div class=" h-[88svh] flex">
    {#if userQuestoinData.length}
        <div class=" w-2/3 grid grid-rows-6 min-h-0 px-5">
            <QuestoinArea questionData={userQuestoinData[currentQuestion.index]} bind:currentQuestion={currentQuestion.index} />
        </div>
        <div class=" w-1/3 flex flex-col">
            <div class="h-1/4 flex flex-col p-4">
                <TimerClock />

                <p>
                    Questions Left: 00
                </p>
                <p>
                    Question Answered: 00
                </p>
            </div>
            <div class="grid grid-cols-8 gap-2 p-4">
                {#each userQuestoinData as que, i (que.qid)}
                    <NavigationButton
                        bind:currentIndex={currentQuestion.index}
                        buttonIndex={i}
                    />
                {/each}
            </div>
        </div>
    {/if}
</div>


<!-- <button class="bg-red-300 p-4" on:click={()=> console.log(jsonData) }> console </button> -->