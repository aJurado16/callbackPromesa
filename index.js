

// class Persona {
//     constructor(nombre,instagram) {
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// };

// const data = [
//     ["Adrian Jurado","@ajur"],
//     ["Naomis Salinas","@lanao"],
//     ["Perla Jur","@perjur"],
//     ["Daniela Jurado"],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++) {
//     personas[i] = new Persona(data[i][0],data[i][1]);
// }

// const obtenerPersona = (id,cb) => {
//     if (personas[id] == undefined){
//         cb("No se ha encontrado la persona");
//     } else {
//         cb(null,personas[id],id)
//     }
// }

// const obtenerInstagram = (id,cb) => {
//     if (personas[id].instagram == undefined){
//         cb("No se ha encontrado el instagram");
//     } else {
//         cb(null,personas[id].instagram);
//     }
// }

// obtenerPersona(2,(err,persona,id)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,instagram) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(instagram);
//             }
//         });
//     }
// })






class Persona {
    constructor(nombre,instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

const data = [
    ["Adrian Jurado","@ajur"],
    ["Naomis Salinas","@lanao"],
    ["Perla Jur","@perjur"],
    ["Daniela Jurado"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id) => {
    return new Promise((resolve,reject) => {
        if (personas[id] == undefined ) reject("No se ha encontrado la persona");
        else {resolve(personas[id])}
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve,reject) => {
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else {resolve(personas[id].instagram)}
    })
}

 id = 1;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre)
    return obtenerInstagram(id)
}).then((instsgram) => {
    console.log(instsgram)
    }).catch((e) => {
    console.log(e)
    })

