// Write your JavaScript code here.

function init() {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

    function prepareForTakeoff() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response = true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        }
    }
    takeOffButton.addEventListener("click", prepareForTakeoff);

    function landingProcedure() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
    }
    landingButton.addEventListener("click", landingProcedure);

    function missionAbort() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response = true) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    }
    abortButton.addEventListener("click", missionAbort);

    let moveRight = 0
    let moveLeft = 0

    function moveUp() {
        document.getElementById("rocket").style.marginBottom += "10pxc";
        let height = (Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000);
        document.getElementById("spaceShuttleHeight").innerHTML = height.toString()
    }
    upButton.addEventListener("click", moveUp);

    function moveDown() {
        document.getElementById("rocket").style.marginTop += "10px";
        let height = (Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000);
        document.getElementById("spaceShuttleHeight").innerHTML = height.toString()
    }
    downButton.addEventListener("click", moveDown);

    function moveRight() {
        moveRight += 10;
        document.getElementById("rocket").style.marginLeft = $ { moveRight } + "px";
    }
    rightButton.addEventListener("click", moveRight);

    function moveLeft() {
        moveLeft -= 10;
        document.getElementById("rocket").style.marginLeft = $ { moveRight } + "px";
    }
    leftButton.addEventListener("click", moveLeft);
}
// Remember to pay attention to page loading!
window.addEventListener("load", init);