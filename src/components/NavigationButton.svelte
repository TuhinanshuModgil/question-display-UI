<script>
    export let currentIndex;
    export let buttonIndex;

    function handleQuestionNavigation() {
        currentIndex = buttonIndex;
    }
</script>

<button
    class="bg-orange-300 rounded-md p-1"
    on:click={handleQuestionNavigation}
>
    {buttonIndex}
</button>
