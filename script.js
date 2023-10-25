const Api_Url =  'https://swapi.dev/api/people';


getMovies(Api_Url);
const main = document.getElementById('main');

async function getMovies(url) { 
     await fetch(url).then(res => res.json().then(data=>{
        console.log(data.results)
        showMovies(data.results);
    }))
}


//This function extracts and shows the movie details
function showMovies(data) {                                                                  
    main.innerHTML = '';
    
    data.forEach(people=> {
            
        const {name, gender, height}  = people
        const movieEl = document.createElement('div');
        const imageExtension = '.jpeg';
        movieEl.classList.add('movie');
        movieEl.innerHTML =  `
        
        <img src="images/${name+imageExtension}" alt="${name}+Image">

                <div class="movie-info"> 
                    <h3>${name}</h3> <br>
                </div>
        
                <div class="overview">

                <h5>Name: ${name}</h5> 
                <h5>Height: ${height}</h5>
                <h5>Gender: ${gender}</h5>
                
                </div>`
                
        main.appendChild(movieEl);
    })
}

// This displays the movie apis
// works on double click 
function showOverview() {
    main.addEventListener('click', (event) => {
        const movieCard = event.target.closest('.movie');
    
        if (movieCard) {
            const overview = movieCard.querySelector('.overview');
    
            if (overview) {
                if (overview.style.display === 'none') {
                    overview.style.display = 'block';  
                    
                } else {
                    overview.style.display = 'none';
                }
            }
        }
    });
     
}
showOverview();


