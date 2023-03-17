
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f704d30a')
//  .then(response => response.json())
//  .then((json) => {
//  console.log(json)
// const name=json.Title;
// const year=json.Year;
// const id=json.imdbID;
// const poster=json.Poster;
// const type=json.Type;
// const movies=`<li type="none"><img src="${poster}"><h2>${name}</h2><p>${year}</p><p>${id}</p><p>${type}</p></li>`;
// document.querySelector('.movie').innerHTML+=movies;
// });
//faker store
function movieapp() {
    const searchText = document.querySelector('input')
    const cardContainer = document.querySelector('.card-container')
    cardContainer.textContent = ''
    fetch(`https://www.omdbapi.com/?s=${searchText.value}&apikey=f704d30a`)
        .then((response) => response.json())
        .then((data) => data.Search)
        .then((movie)=>{
            movie.map((element) => {
                const card = document.createElement('div')
               cardContainer.appendChild(card)
               card.classList.add('card')
                //console.log(cardContainer)
                
                const Title = document.createElement('h4')
                card.appendChild(Title)
                Title.textContent = element.Title
    
                const poster = document.createElement('img')
                card.appendChild(poster).style="width:200px;height:200px;margin-top:20px;"
                poster.src = element.Poster
    
                const year = document.createElement('p')
                card.appendChild(year)
                year.textContent = element.Year

                const imdbLink = document.createElement('a')
                card.appendChild(imdbLink)
                imdbLink.textContent = "IMDB Link"
                imdbLink.href = `//imdb.com/title/${element.imdbID}`
            });
            
        });
    }

    function speech(){
        var recognition = new webkitSpeechRecognition();
        recognition.lang="en-GB";
        var speech = recognition.onresult=function(event){
            console.log(event) 
            document.getElementById("speak").value=event.results[0][0].transcript
        }
        recognition.start();
    }
    


       
      /*  let page=data;
        let firstPage= data.length;
        if(data.length<=6)
        {
            console.log(data);
        }*/



    
    


