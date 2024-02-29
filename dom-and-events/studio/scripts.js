function init() {
    const takeoff = document.getElementById('takeoff')
    const flightStatus = document.getElementById('flightStatus')
    const shuttleScreen = document.getElementById('shuttleBackground')
    const shuttleHeight = document.getElementById('spaceShuttleHeight')
    const rocket = document.getElementById('rocket');
    let height = 0;
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    rocket.style.position = 'absolute';
    rocket.style.top = '250px';
    rocket.style.left = '250px';



    takeoff.addEventListener('click', function(){
        let response = window.confirm('Confirm ready for takeoff');

        if (response) {
            flightStatus.innerHTML = 'Flight in progress'
            shuttleScreen.style.backgroundColor = 'blue'
            rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
            height = height + 10000
            shuttleHeight.innerHTML = height
        } else {
            console.log('no')
        }
        
    
    
    })
    
    upButton.addEventListener('click', function(){
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        height = height + 10000;
        shuttleHeight.innerHTML = height;
    })
    downButton.addEventListener('click', function(){
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        height = height - 10000;
        shuttleHeight.innerHTML = height;
    })
    rightButton.addEventListener('click', function(){
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    })
    leftButton.addEventListener('click', function(){
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    })

    



}

window.addEventListener('load',init)