//const data = require('data.json')
//console.log(data)

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((job, index) => {
        if (job.new){
            main.innerHTML += `<div class="card">
            <div class="left">
                <div class="profileimg">
                  <img src=${job.logo} alt=${job.company}/>    
                </div>
                <div class="info">
                    <!-- job -->
                    <div class="top">
                      <ul>
                        <li>${job.company}</li>
                         <li id="news">NEW!</li>
                        <li id="features">FEATURED</li>
                      </ul>
                    </div>
                    <!-- ROLE -->
                    <div class="position">
                        <p>${job.position}</p>
                    </div>
        
                    <!-- time -->
                    <div class="time">
                        <span>${job.postedAt} &nbsp;&nbsp; • &nbsp;&nbsp;${job.contract} &nbsp;&nbsp;•&nbsp;&nbsp; ${job.location}</span>
                    </div>
            </div>  
            </div>
            <div class="right">
                <!-- skill -->
                <span>${job.role}</span>
                <span>${job.level}</span>
                <span id="langs">
                ${job.languages}
                </span>            
            </div>
        </div>`;
        }
        else{
            main.innerHTML += `<div class="card">
      <div class="left">
          <div class="profileimg">
            <img src=${job.logo} alt=${job.company}/>    
          </div>
          <div class="info">
              <!-- job -->
              <div class="top">
                <ul>
                  <li>${job.company}</li>
                  <li id="features">FEATURED</li>
                </ul>
              </div>
              <!-- ROLE -->
              <div class="position">
                  <p>${job.position}</p>
              </div>
  
              <!-- time -->
              <div class="time">
                  <span>${job.postedAt} &nbsp;&nbsp; • &nbsp;&nbsp;${job.contract} &nbsp;&nbsp;•&nbsp;&nbsp; ${job.location}</span>
              </div>
      </div>  
      </div>
      <div class="right">
          <!-- skill -->
          <span>${job.role}</span>
          <span>${job.level}</span>
          <span id="langs">
          ${job.languages}
          </span>             
      </div>
  </div>`;
        }
      
        
    });

  });
