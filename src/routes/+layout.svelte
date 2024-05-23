<script>
    import "../app.css";
    import CandidateDetails from "../components/CandidateDetails.svelte";
    import ExamDetails from "../components/ExamDetails.svelte";
    import { onMount } from "svelte";
    import { questionPaper } from "../stores/question_paper.store";

    async function fetchData() {

      let jsonData = {}
      let questions = []
      try {
          const response = await fetch(
              "482541_QP/qpdownload_482541_V3921920101.json",
          ); // Adjust the file path as needed
          jsonData = await response.json();
          questions = jsonData.questions; // an array having all the questions
          console.log(jsonData);
      } catch (error) {
          console.error("Error fetching JSON data:", error);
      }

      // modifying for user responses
      // add all the extra fields that need to be added for user interaction here
      const userJsonData = questions.map((question)=>{
        question.userAnswer = ""
        return question
      }) 

      questionPaper.update(() =>{
        return {loading: false,
        data: userJsonData} // an array of objects having all questions that have new fields added above
      })
      
  }

  onMount(fetchData)


  </script>

<nav class="h-[12svh] border-b-[1px] shadow-md border-black/50 flex justify-between">
    
    <ExamDetails/>
    <CandidateDetails/>


</nav>
<slot />