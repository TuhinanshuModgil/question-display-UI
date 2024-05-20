<script>
    export let questionData;
    export let currentQuestion;
    $: qdata = questionData;

    function handlePrevious(){
        if(currentQuestion > 0){
            currentQuestion = currentQuestion-1
        }   
    }

    function handleNext(){
        if(currentQuestion < 100){
            currentQuestion = currentQuestion+1
        }   
    }


</script>



<div class="row-span-5 overflow-auto">
    
    {#if qdata}
    <div class="  p-5 overflow-auto">
        <p class="mb-2">Question: {currentQuestion+1}</p>
        <p>{@html qdata.qimage}</p>
        <p class="mb-4">Hint: {@html qdata?.q_hint}</p>
        {#each qdata.q_choices as choice, i}
        <div class="option-image-container flex gap-2 p-2">
            <input type="radio">
            <p >{String.fromCharCode(i + 'A'.charCodeAt(0))}. {@html choice.cimage}</p>
        </div>
        {/each}
    </div>
{/if}
</div>
<div
    class="w-full row-span-1 flex justify-center items-center gap-2"
>
    <button class="bg-tertary-dark p-2 text-white rounded-[4px]" on:click={handlePrevious}
        >Previous</button
    >
    <button class="bg-tertary-dark p-2 text-white rounded-[4px]"
        >Clear Response</button
    >
    <button class="bg-tertary-dark p-2 text-white rounded-[4px]" on:click={handleNext}
        >Next</button
    >
</div>


