<script>
    export let currentIndex;
    export let buttonIndex;

    function handleQuestionNavigation() {
        currentIndex = buttonIndex;
    }
</script>

<button
    class="bg-red-light rounded-[4px] p-1"
    on:click={handleQuestionNavigation}
>
    {buttonIndex+1}
</button>
