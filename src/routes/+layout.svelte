<script>
    import "../app.css";
    import CandidateDetails from "../components/CandidateDetails.svelte";
    import ExamDetails from "../components/ExamDetails.svelte";
  </script>

<nav class="h-[12svh] border-b-[2px] border-black/50 flex justify-between">
    
    <ExamDetails/>
    <CandidateDetails/>


</nav>
<slot />