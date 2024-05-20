<script>
    export let candiadteName = "Candidate Name"
    export let candiadteID = "Candidate ID"
    export let candiadteClass = "Candidate Class"
    export let candiadteSection = "Candidate Name"  
    export let candiadteSubject = "Candidate Subject"

</script>


<div class=" h-full laptop:p-2 p-2 min-w-[25rem]  text-[1rem] gap-4 grid grid-cols-2">

    <div class="  flex flex-col gap-1 justify-start h-full">
        <p>
            <span class="font-bold">Candidate Name:</span> {candiadteName}
        </p> 
        <p>
            <span class="font-bold">Candidate ID:</span> {candiadteID}
        </p>
        
        
    </div>
    <div class="flex flex-col gap-1 ">
        <p>
            <span class="font-bold">Class:</span> {candiadteClass}
        </p>
        <p>
            <span class="font-bold">Section :</span> {candiadteSection}
        </p> 
        <p>
            <span class="font-bold">Subject:</span> {candiadteSubject}
        </p> 
    </div>
    
</div>