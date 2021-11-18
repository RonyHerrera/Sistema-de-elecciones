
const fs = require("fs");
const path = require("path");

const dataPath = path.join(path.dirname(require.main.filename), "data", "movies.json")

const GetAllMoviesFromFiles = (callBack) => {

    fs.readFile(dataPath, function (error, data) {
        if (error) {
            callBack([]);
        } else {
            callBack(JSON.parse(data));
        }
    });

}



module.exports = class Movie {
    constructor(id, titulo, description, genero, estado) {
        this.id = id;
        this.titulo = titulo;
        this.description = description;
        this.genero = genero;
        this.estado = estado;
    }

    Save() {
        GetAllMoviesFromFiles( function(movies) {
            if (Movie.constructor.id) {
                const editMovieIndex = movies.findIndex((moviii) => moviii.id === this.id);
                movies[editMovieIndex] = this;
                fs.writeFileS(dataPath, JSON.stringify(movies), function (error) {
                    console.log(error);
                }); 
           } else {
            Movie.constructor.id = Math.random().toString();
                    movies.push(this);
                fs.writeFile(dataPath, JSON.stringify(movies)), function (error) {
                    console.log(error);
                }   
            }
        })
    }



    static GetAll(cb) {
        GetAllMoviesFromFiles(cb);
    }; 
    
    static GetById(id,cb) {
        GetAllMoviesFromFiles((movies) => {
            const movie = movies.find(movies=> movies.id === id);
            cb(movie); 
        })

    };
    static Delete(id) {
        GetAllMoviesFromFiles((movies) => {
            const movie = movies.find(m=> m.id === id);
            
            const newMovieLiest = movies.filter(movies => movies.id !== id)

            fs.writeFile(dataPath, JSON.stringify(newMovieLiest)), function (error) {
                console.log(error);
            }
        });

    }
};