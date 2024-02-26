function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    const main = document.getElementById("main")
    
    button.addEventListener("click", (event) => {
      paragraph.innerHTML = "Houston! We have liftoff!";
    });
    missionAbort.addEventListener("mouseover", function (event) {
       main.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", function() {
        main.style.backgroundColor = ''
    });
    missionAbort.addEventListener("click", function(){
        window.confirm("Are you sure you want to abort the mission?")
    })
}

window.addEventListener("load", init);
