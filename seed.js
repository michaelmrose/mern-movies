require('dotenv').config();
require('./config/database');
const mongoose = require("mongoose")

// Require the Mongoose models
const Movie = require('./models/movie')
const Actor = require('./models/actor')

const movies = require("./data")
let actors = Array.from(new Set(movies.flatMap(movie=>movie.cast))).map(actor=>{return {name: actor, movies: movies.filter(movie=>movie.cast.includes(actor))}})

 async function seedDatabase() {
    try {
        // Drop the collections
        await mongoose.connection.dropCollection('actors');
        await mongoose.connection.dropCollection('movies');
        
        // Seed the actors first but don't populate their movies yet
        const actorPromises = actors.map(actor => Actor.create({ name: actor.name }));
        const createdActors = await Promise.all(actorPromises);
        
        // Create a mapping between actor names and their IDs
        const actorNameToIdMap = {};
        createdActors.forEach(actor => {
            actorNameToIdMap[actor.name] = actor._id;
        });

        // Seed the movies
        for (const movie of movies) {
            const castIds = movie.cast.map(name => actorNameToIdMap[name]);
            const createdMovie = await Movie.create({
                title: movie.title,
                releaseDate: new Date(movie.releaseDate),
                posterPath: movie.posterPath,
                cast: castIds
            });

            // Update each actor's movies array
            await Actor.updateMany(
                { _id: { $in: castIds } },
                { $push: { movies: createdMovie._id } }
            );
        }

        console.log('Database seeding complete!');
    } catch (error) {
        console.log('An error occurred:', error);
    } finally {
        // Disconnect the database
        mongoose.connection.close();
    }
}

seedDatabase();