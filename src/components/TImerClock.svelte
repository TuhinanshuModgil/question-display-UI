<script>
    let [seconds, minutes, hours] = [0, 0, 0];
    let intervalID = null;

    let h = '00'
    let m = '00'
    let s = '00'
    

    function handleStart() {
        if (intervalID != null) {
            clearInterval(intervalID);
        }
        intervalID = setInterval(displayTimer, 1000);
        
    }

    function handleStop() {
        clearInterval(intervalID);
    }

    function handleReset() {
        clearInterval(intervalID);
        [seconds, minutes, hours] = [0, 0, 0];
        
        h = '00'
        m = '00'
        s = '00'

    }

    function displayTimer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

        h = hours < 10 ? "0" + hours : hours;
        m = minutes < 10 ? "0" + minutes : minutes;
        s = seconds < 10 ? "0" + seconds : seconds;

    }
</script>

<div>{h} : {m} : {s}</div>
<button class="p-2 bg-orange-400 rounded m-1" on:click={handleStart}
    >Start</button
>
<button class="p-2 bg-red-400 rounded m-1" on:click={handleStop}>Stop</button>
<button class="p-2 bg-green-400 rounded m-1" on:click={handleReset}>Reset</button>
