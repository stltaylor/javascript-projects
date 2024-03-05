// Add code that runs on the window load event.

// This is done because we can’t interact with 
// the HTML elements until the page has loaded.
// Make a GET request using fetch to the 
// astronauts 
// API <https://handlers.education.launchcode.org/static/astronauts.json>__

// Do this part inside the load event handler.
// Add each astronaut returned to the web page.

// Use the HTML template shown below.
// Be sure to use the exact HTML including the CSS classes. 
// (starter code contains CSS definitions)
// const container = document.getElementById('container')

window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response){
        response.json().then( function(json){
            const container = document.getElementById('container')
            
            for(let i=0;i < json.length;i++) {
                console.log(json)
                let color = json[i].active ? "green":"red"
                
    
                container.innerHTML += `
                <div class="astronaut">
        <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${json[i].hoursInSpace}</li>
            <li>Active: ${json[i].active  }</li>
            <li>Skills: ${json[i].skills}</li>
            </ul>
        </div>
        <img class="avatar" src="${json[i].picture}">
    </div>
            
            `
            }
      })
    })
})

//     <div class="astronaut">
//     <div class="bio">
//         <h3>Mae Jemison</h3>
//         <ul>
//         <li>Hours in space: 190</li>
//         <li>Active: false</li>
//         <li>Skills: Physician, Chemical Engineer</li>
//         </ul>
//     </div>
//     <img class="avatar" src="images/mae-jemison.jpg">
// </div>

//  destination.innerHTML = `
//             <div>
//                <h3>Planet ${json[0].name}</h3>
//                <img src=${json[0].image} height=250></img>
//             </div>



// "id": 1,
//         "active": false,
//         "firstName": "Mae",
//         "lastName": "Jemison",
//         "skills": [
//             "Physician", "Chemical Engineer"
//         ],
//         "hoursInSpace": 190,
//         "picture": "mae-jemison.jpg"