<script>
export let organisationName = 'Organiastion Name'
export let examinationName = 'Examination Name'

</script>

<div class=" h-full flex p-2" >

    <!-- Look into how to handle the Logo display -->
    <img src="/favicon.png" alt="favicon" class="w-auto h-full" />
    <div class="p-2">
        <p class="text-2xl font-semibold">{organisationName}</p> 
        <p class="text-lg">{examinationName}</p> 
    </div>
</div>