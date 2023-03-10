//const data = require('data.json')
//console.log(data)
let datas = []
let filter = []
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    datas = data
    datas.map((job, index) => {
      let language = job.languages
          main.innerHTML += `<div class="card">
          <div class="left">
              <div class="profileimg">
                <img src=${job.logo} alt=${job.company}/>    
              </div>
              <div class="info">
                  <div class="top">
                    <ul>
                      <li>${job.company}</li>
                      ${job.new ? `<li id='news'>NEW!</li>` : ""}
                      ${job.featured ? `<li id='features'>FEATURED</li>` : ""}
                    </ul>
                  </div>
                  <div class="position">
                      <p>${job.position}</p>
                  </div>
                  <div class="time">
                      <span>${job.postedAt} &nbsp;&nbsp; • &nbsp;&nbsp;${job.contract} &nbsp;&nbsp;•&nbsp;&nbsp; ${job.location}</span>
                  </div>
          </div>  
          </div>
          <div class="right">
              <span>${job.role}</span>
              <span>${job.level}</span>
              ${job.languages.map((lang, i)=>
                `<span onclick={getData()} id="language">${lang}</span>`
              )}
          </div>
          </div>`;
      
  });

});


const getData = () => {
  let element = document.querySelectorAll('#language')
  element.forEach((ele)=>{
  ele.addEventListener('click', () => {
    let text = ele.innerHTML
    filter.innerHTML += `
    <button class="item">${text}<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path fill="#FFF" fill-rule="evenodd"
                d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
            </svg></span></button>
    `
    console.log(ele.innerHTML)
  })}
  )
}

// const getLanguages = () => {
//   fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((job, index) => {
//       let languages = job.languages
//       for (let l in languages){
//         console.log(languages[l])
//       }
//     })
//   })
// }