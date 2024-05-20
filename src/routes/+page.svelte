<script>
    import { onMount } from "svelte";
    import QuestoinArea from "../components/QuestoinArea.svelte";
    import NavigationButton from "../components/NavigationButton.svelte";
    import TImerClock from "../components/TImerClock.svelte";

    let jsonData;
    let numberOfQuestions;
    let questionNO = 0;
    let question;

    // Fetch JSON data when the component is mounted
    async function fetchData() {
        try {
            const response = await fetch(
                "482541_QP/qpdownload_482541_V3921920101.json",
            ); // Adjust the file path as needed
            console.log("Reached here", question);
            jsonData = await response.json();
            question = jsonData.questions[questionNO];
            numberOfQuestions = jsonData.questions.length;
            console.log(jsonData);

            return jsonData;
        } catch (error) {
            console.error("Error fetching JSON data:", error);
        }
    }

    const changeQuestion = (questionNO) => {
        if (question) {
            question = jsonData.questions[questionNO];
            console.log("Changed Question to: ", questionNO);
        }
    };  
    $: changeQuestion(questionNO);

    // Call the fetchData function when the component is mounted
    onMount(fetchData);
</script>

<!-- <div class="h-[88svh] flex">
    {#if jsonData}
        <div class="grid grid-cols-4 max-h-full border-[5px] border-green-500">
            <div
                class="border-[5px] border-purple-500 col-span-3 h-[500px] overflow-auto min-h-0"
            >
                <QuestoinArea questionData={question} />
            </div>
            <div class="border-[2px] border-orange-500 col-span-1">
                <div class="grid grid-cols-8 gap-4 p-5">
                    {#each jsonData.questions as que, i}
                        <button
                            class="bg-orange-300 rounded-md p-1"
                            on:click={() => handleQuestionNavigation(i)}
                        >
                            {i}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div> -->

<div class=" h-[88svh] flex">
    {#if jsonData}
        <div class="border-[5px] border-purple-500 w-2/3 grid grid-rows-6 min-h-0">
            <div class="row-span-5 overflow-auto">
                <QuestoinArea questionData={question} />
            </div>
            <div class="w-full row-span-1 flex justify-center items-center">
                <button class="bg-tertary-dark">Next</button>
                
            </div>
        </div>
        <div class="border-[2px] border-orange-500 w-1/3 flex flex-col ">
            <div class="h-1/4 flex flex-col">
            <TImerClock/>
            </div>
            <div class="grid grid-cols-8 gap-4 p-5">
                {#each jsonData.questions as que, i (que.qid)}
                    <NavigationButton
                        bind:currentIndex={questionNO}
                        buttonIndex={i}
                    />
                {/each}
            </div>
        </div>
    {/if}
</div>
