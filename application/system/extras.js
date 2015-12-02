
var extras = {
    1: {
        id: "glosario",
        tipo: "layout",
        estilo: "layout_glosario",
        atributos: {
            titulo: "Glosario",
            icono: "glosario"
        },
        componentes: {
            1: {
                tipo: "lista",
                estilo: "lista_vertical",
                atributos: {
                    categoria: "no_ordenada",
                    elementos: {
                        1: "<b>Nombre:</b> Lorem Ipsum.",
                        2: "<b>Nombre:</b> Lorem Ipsum.",
                        3: "<b>Nombre:</b> Lorem Ipsum."
                    }
                }
            }
        }
    },
    2: {
        id: "final_subcontenido1",
        tipo: "layout",
        estilo: "layout_og_1",
        atributos: {
            titulo: "Glosario",
            icono: "glosario"
        },
        componentes: {
            1: {
                tipo: "parrafo",
                estilo: "parrafo_basico",
                atributos: {
                    parrafos: {
                        1: "Lorem Ipsum"
                    }
                }
            },
            2: {
                tipo: "imagen",
                estilo: "imagen_basica",
                atributos: {
                    thumbnail: "img/susana_thumbnail.png",
                    url: "img/susana.png",
                    descripcion: ""
                }
            }
        }
    }

};