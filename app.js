// this is a constructor for the movie class

function Anime(title, genre, year, studio, episodes) {
    function anime(title, genre, year, studio, episodes) {
      this.title = title;
      this.genre = genre;
      this.year = year;
     -25,6 +25,26;  function  Anime(title, genre, year, studio, episodes) {
    }
    
    // Creating some movie objects
    const anime1 = new movie("Berserk", "Seinen", 2023, "GEMBA", 75);
    const anime2 = new movie("Naruto", "Shounen", 2000, "Unknown", "500+");
    const anime2 = new movie("Bleach", "Shounen", 2000, "Unknown", "500+");
    const anime1 = new anime("Berserk", "Seinen", 2023, "GEMBA", 75);
    const anime2 = new anime("Naruto", "Shounen", 2000, "Unknown", 500);
    const anime3 = new anime("Bleach", "Shounen", 2001, "Unknown", 375);
    const anime4 = new anime("Orange", "Romance", 2015, "Unknown", 25);
    
    // I need to store toh movies in an array to loop through it
    const storedAnimes = [
        anime1,
        anime2,
        anime3,
        anime4,
    ];
    
    // to get the animes by genre
    function selectAnimesByGenre(genre){
        const selectedAnime = storedAnimes.filter(anime => anime.genre === genre)
            return selectedAnime;
    }
    
    // Choose Genre and Display Genre animes romance, just switch genre names
    const romance = selectAnimesByGenre("romance");
    console.log("Romance Animes: ");
    romance.forEach(movie => console.log(anime.getAnimeInfo()));
