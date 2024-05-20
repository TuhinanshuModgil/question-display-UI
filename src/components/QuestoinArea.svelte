<script>
    export let questionData;

    $: qdata = questionData;
</script>

{#if qdata}
    <div class=" w-full border-4 border-cyan-300 p-5 overflow-auto">
        <p>{@html qdata.qimage}</p>
        <p>Hint: {@html qdata?.q_hint}</p>
        {#each qdata.q_choices as choice, i}
        <div class="option-image-container">

            <p >{String.fromCharCode(i + 'A'.charCodeAt(0))}. {@html choice.cimage}</p>
        </div>
        {/each}
    </div>
{/if}
