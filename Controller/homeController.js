const MovieModel = require("../Models/Movies")

exports.GetIndex = (req,res,next) =>{

    MovieModel.GetAll((movies)=>{
     res.render("HomeMovies/Home",{
         title: "Peliculas",
         mov: movies,
        hasMovies: movies.lenght > 0,
        }) 
    })

    
};
exports.GetListMovies = (req,res,next) => {
    MovieModel.GetAll((movies)=>{
        res.render("HomeMovies/Movie-list",{
            title: "Lista de peliculas", listActive: true, mov: movies
           }) 
       })
};

exports.GetTerror = (req,res,next) => {
    res.render("HomeMovies/Terror-m",{title: "Terror", terrorActive: true})
};

exports.GetAccion = (req,res,next) => {
    res.render("HomeMovies/accion-m",{title: "Accion", accionActive: true})
};

exports.GetSuspenso = (req,res,next) => {
    res.render("HomeMovies/Susp-m",{title: "Suspenso", suspensoActive: true})
};

exports.GetComedia = (req,res,next) => {
    res.render("HomeMovies/Comedia-m",{title: "Comedia", comediaActive: true})
};

exports.GetDocumentals = (req,res,next) => {
    res.render("HomeMovies/Documental-m",{title: "Documentales", docuActive: true})
};
