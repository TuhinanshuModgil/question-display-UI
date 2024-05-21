<script>
    export let currentIndex;
    export let buttonIndex;
    let name = ""

    $:{
        if(buttonIndex === currentIndex){
            console.log("Css added for question: ", buttonIndex )
            name = "border-orange-500 border-2"
        }
        else{
            console.log("Css removed for question: ", buttonIndex )
            name = "border-wite border-2"
        }

    }
    function handleQuestionNavigation() {
        currentIndex = buttonIndex;

    }
</script>

<button
    class="bg-red-light rounded-[4px] p-1 {name}"
    on:click={handleQuestionNavigation}
>
    {buttonIndex+1}
</button>
