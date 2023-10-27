// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directorsOfAllTheTime = moviesArray.map(movies => movies.director); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let SpielbergDramaMovies = []
    moviesArray.filter(movie => {
        if (movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")) {
            SpielbergDramaMovies.push(movie)
        }
    })
    return SpielbergDramaMovies.length
    // if (moviesArray = []) {
    //     return 0
    // } 
    // return )
    // return moviesArray.filter(movies =>  movies.director === 'Steven Spielberg' && movies.genre.includes('drama')).length;
    // // return spielbergDramaMovies.length;
   
    //     // const SpielbergDramaMovies = moviesArray.filter(function(Dramas) {
    //     //   return Dramas.director.includes("Steven Spielberg") && Dramas.genre.includes() 
      
    //     // });
    //     //   return SpielbergDrama.length;
    
}

console.log(SpielbergDramaMovies.length)
howManyMovies()

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // const scoreIs = moviesArray.reduce((accumulator, movies) => {
    //   }, 0)
    // let moviesScore = moviesArray.reduce((accumulator, movies) => {
    //     accumulator + movies.score
    // }, 0)

    // return moviesScoreSum = moviesScore / movies.length;

    if(moviesArray.length === 0) {
        return 0
    }
    let scoresSum = moviesArray.reduce((acc, movie) => {
        if ( movie.score) {
            return acc + (movie.score || 0)
        } else {
            return acc
        }
    }, 0)
    let scoresAvg = scoresSum / moviesArray.length
    return Math.round(scoresAvg*100)/100 
    
    // return scoreIs/moviesArray.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScore = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if(dramaScore.length === 0) {
        return 0
    } else {
    let dramaMoviesSum = dramaScore.reduce((acc, movie) => acc + movie.score,0)
    let dramaMovieAvg = dramaMoviesSum / dramaScore.length
    return Number(dramaMovieAvg.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray]
    newArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
          } else if (b.year > a.year) {
            return -1;
          } else {
            if (a.title > b.title) {
              return 1;
            } else if (b.title > a.title) {
              return -1;
            }
            return 0;
          }
        });
    return newArray
}

console.log(newArray)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphaArray = [...moviesArray]
    alphaArray.sort((a, b) => a.title.localeCompare(b.title)) 
    alphaArray = alphaArray.slice(0, 20).map((movie) => movie.title)

    return alphaArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
