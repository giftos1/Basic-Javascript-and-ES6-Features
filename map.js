const movies = [
    {
        name: 'The Matrix',
        actor: 'Keanu Reeves',
        release_date: 2002,
        genre: 'action, sci-fi',
        film: 'series'
    },
    {
        name: 'The Last',
        actor: 'Boy man',
        release_date: 2015,
        genre: 'action',
        film: 'series'
    },
    {
        name: 'Undisputed III',
        actor: 'Boica',
        release_date: 2007,
        genre: 'action',
        film: 'movie'
    },
    {
        name: 'Javascript Show',
        actor: 'Gift Ogingo',
        release_date: 2023,
        genre: 'action, sci-fi',
        film: 'series',
        seasons: 4
    }];

// MAP
// Get array of all names
const names = movies.map(movie => movie.name);
console.log(names);
// Get array of all actors
const actors = movies.map(movie => movie.actor);
console.log(actors);
// Get array of objects with just name and release_date
const minifiedRecords = movies.map(movie => ({
    name: movie.name,
    release_date: movie.release_date
}));
console.log(minifiedRecords);
// Get array of all first names
const firstNames = movies.map(movie => movie.name.split(" ")[0]);
console.log(firstNames);