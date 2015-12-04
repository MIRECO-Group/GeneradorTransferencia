
//****************************************************************************MACRORECURSO*********************************************************************

var macrorecurso = {
    id: "s_apertura",
    nombre: "Sensibilización de apertura",
    recursos: {}
};
//**************************************************************************** RECURSO **************************************************************************

//Los recursos SIEMPRE deben tener tipo layout

var recurso = {
    nombre: "¿Qué son las TIC?",
    tipo: "layout",
    estilo: "layout_recurso_2",
    componentes: {}
};
//**************************************************************************** COMPONENTES ************************************************************************

//Todos los componentes utilizan los atributos "tipo" (titulo, parrafo, imagen, etc...) y "estilo" (variacion de estilo propia de cada componente).
// Todos los componentes utilizan el atributo "elementos" para definir su contenido. 

//TITULO
/*
 titulo: Texto. OBLIGATORIO. Es la información principal a mostrarse en el componente.  
 subtitulo: Texto. Opcional. Información menos jerárquica a aparecer junto al título. 
 icono : Texto. OBLIGATORIO. Corresponde al identificador del icono a mostrar.
 */

var componente1 = {
    tipo: "titulo",
    estilo: "titulo_recurso",
    atributos: {
        titulo: "",
        subtitulo: "",
        icono: ""
    }
};
//PARRAFO
/*
 parrafos: Objeto. OBLIGATORIO. Es la información principal a mostrarse en el componente.
 texto: Texto. OBLIGATORIO. Contenido a mostrarse dentro de un parrafo especifico.
 
 */

var componente2 = {
    tipo: "parrafo",
    estilo: "parrafo_basico",
    atributos: {
        parrafos: {
            1: "",
            2: "",
            3: ""
        }
    }
};
//IMAGEN
/*
 * thumbnail: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra la versión pequeña de la imagen a mostrar.
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra la versión grande de la imagen a mostrar.
 descripcion: Texto. OPCIONAL. Contenido a mostrarse al ubicar el cursor sobre la imagen (pequeña descripción).
 */

var componente3 = {
    tipo: "imagen",
    estilo: "imagen_basica",
    atributos: {
        thumbnail: "img/prueba_thumbnail.png",
        url: "img/prueba.png",
        descripcion: ""
    }
};
//BOTON
/*
 tag: Texto. Obligatorio. Texto que aparecerá dentro del botón.
 funcion: Texto. Obligatorio. Define la funcionalidad que debe tener el botón.
 destino: Texto. Opcional. Para botones que dirigen a un popup o link específico, define hacia donde debe dirigirse.
 */

var componente4 = {
    tipo: "boton",
    estilo: "submit_actividad",
    atributos: {
        tag: "Enviar",
        funcion: "iniciar_examen",
        destino: "glosario"
    }
};
//REPRODUCTOR
/*
 tipo: Texto. OBLIGATORIO. Corresponde al tipo de archivo multimedia a ser reproducido (audio/video).
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra el archivo multimedia a reproducir.
 imagen_reproductor: Texto con formato URL. OPCIONAL. Corresponde a la ruta donde se encuentra la imagen a mostrar por defecto en el reproductor (antes de dar play si es un video, siempre si es un audio).
 */
var componente5 = {
    tipo: "reproductor",
    estilo: "reproductor_basico",
    atributos: {
        1: {
            tipo: "audio",
            url: "media/audio/melones.mp3",
            imagen_reproductor: "img/melon.png",
            descripcion: ""
        }
    }
};
//LISTA
/*
 categoria: Texto. OBLIGATORIO. Corresponde al tipo de lista a utilizarse (ordenada, no ordenada).
 enunciado: Texto. OPCIONAL. Corresponde a un texto introductorio que precede a la lista.
 elementos: Texto. OBLIGATORIO. Corresponde a los textos a organizarse dentro de la lista.
 */

var componente6 = {
    tipo: "lista",
    estilo: "lista_vertical",
    atributos: {
        categoria: "ordenada",
        enunciado: "",
        elementos: {
            1: "elemento 1",
            2: "elemento 2",
            3: "elemento 3"
        }
    }
};
//ORGANIZADOR GRAFICO
/*
 *  tabs : Objeto. OBLIGATORIO. Corresponde a los contenidos del organizador. 
 *  Funcionan como recursos independientes usando layouts y componentes.
 */

var componente7 = {
    tipo: "organizador",
    estilo: "organizador_saberes",
    atributos: {
        tabs: {
            1: {
                tag: "1",
                tipo: "layout",
                estilo: "layout_og1_1",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        atributos: {
                        },
                        componentes: {
                        }
                    },
                    2: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/prueba_thumbnail.png",
                            url: "img/prueba.png",
                            descripcion: ""
                        }
                    },
                    3: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "Este es mi contenido de organizador gráfico 1",
                                2: "Este es mi contenido de organizador gráfico 1",
                                3: "Este es mi contenido de organizador gráfico 1"
                            }
                        }
                    }
                }
            }
        }
    }
};
//*************************** ACTIVIDADES ******************************

//DRAG AND DROP
/*
 * enunciado: Texto. OPCIONAL. Puede ser usado como pregunta antes de un drag and drop como complemento de la instrucción del recurso.
 drags: Objeto. OBLIGATORIO. Grupo de elementos drags a utilizarse en la actividad.
 drops: Objeto. OBLIGATORIO. Grupo de elementos drops a utilizarse en la actividad.
 accepted: Array. Incluye los ids de los drags que son aceptados como respuesta en este drop correspondiente.
 Los ids deben corresponder a los utilizados en el objeto drags.
 elemento: contenido del drop.
 
 Los contenidos de drags y drops pueden ser imagen, audio o texto. En el caso de imagen
 o audio deben usarse los componentes correspondientes (imagen / reproductor), para texto se
 recibe solo el texto deseado y no un objeto.
 */

var componente8 = {
    tipo: "actividad",
    estilo: "dragdrop_horizontal",
    atributos: {
        preguntas: {
            1: {
                enunciado: "",
                drags: {
                    1: "texto 1",
                    2: "texto 2",
                    3: "texto 3",
                    4: "texto 4"
                },
                drops: {
                    1: {
                        accepted: [4],
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/drop1_thumbnail.png",
                                url: "img/drop1.png",
                                descripcion: ""
                            }
                        }
                    },
                    2: {
                        accepted: [3],
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/drop2_thumbnail.png",
                                url: "img/drop2.png",
                                descripcion: ""
                            }
                        }
                    },
                    3: {
                        accepted: [2],
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/drop3_thumbnail.png",
                                url: "img/drop3.png",
                                descripcion: ""
                            }
                        }
                    },
                    4: {
                        accepted: [1],
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/drop4_thumbnail.png",
                                url: "img/drop4.png",
                                descripcion: ""
                            }
                        }
                    }
                }
            }
        }
    }
};

//PICK MANY
/*
 preguntas: Objeto. OBLIGATORIO. Grupo de preguntas a utilizarse en la actividad.
 enunciado: Texto. OPCIONAL. Puede ser usado como pregunta antes de un pick many como complemento de la instrucción del recurso.
 respuesta: Array. Incluye los ids de los picks que son aceptados como respuesta en esta pregunta correspondiente.
 Los ids deben corresponder a los utilizados en el objeto picks.
 
 Si el arreglo de respuestas contiene mas de un id, la actividad se tratará como una pregunta de múltiple respuesta. De lo contrario se tratará como pregunta de única respuesta. Si no se asigna a una opción, automáticamente se tomará
 como falsa para esa opción específica.
 
 picks: contenido del pick.
 
 Los contenidos de cada pick pueden ser imagen, audio o texto. En el caso de imagen
 o audio deben usarse los componentes correspondientes (imagen / reproductor), para texto se
 recibe solo el texto deseado y no un objeto.
 */

var componente9 = {
    tipo: "actividad",
    estilo: "pickmany_horizontal",
    atributos: {
        preguntas: {
            1: {
                enunciado: "¿De qué color es la nieve?",
                respuesta: [2],
                picks: {
                    1: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/pick1_thumbnail.png",
                            url: "img/pick1.png",
                            descripcion: ""
                        }
                    },
                    2: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/pick2_thumbnail.png",
                            url: "img/pick2.png",
                            descripcion: ""
                        }
                    },
                    3: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/pick3_thumbnail.png",
                            url: "img/pick3.png",
                            descripcion: ""
                        }
                    },
                    4: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/pick4_thumbnail.png",
                            url: "img/pick4.png",
                            descripcion: ""
                        }
                    }
                }
            }
        }
    }
};
//ORDENAMIENTO
/*
 preguntas: Objeto. OBLIGATORIO. Grupo de actividades.
 enunciado: Texto. OPCIONAL. Puede ser usado como pregunta antes de un ordenamiento como complemento de la instrucción del recurso.
 orden: Arreglo de enteros. OBLIGATORIO. Especifica el orden correcto de los elementos en la actividad.
 elementos: Objeto. OBLIGATORIO. Corresponde al grupo de elementos (solo texto) que se usarán en el ordenamiento.
 */

var componente10 = {
    tipo: "actividad",
    estilo: "sortable_vertical",
    atributos: {
        preguntas: {
            1: {
                enunciado: "",
                orden: [1, 3, 2, 4],
                elementos: {
                    1: "Despertar",
                    2: "Comer",
                    3: "Cocinar",
                    4: "Cepillar"
                }
            }
        }
    }
};
//LISTA DESPLEGABLE
/*
 enunciado: Texto. OPCIONAL. Puede ser usado como pregunta antes de un ordenamiento como complemento de la instrucción del recurso.
 preguntas: Objeto. OBLIGATORIO. Grupo de actividades.
 respuesta: Array. Corresponde al id de la opción correcta.
 Los ids deben corresponder a los utilizados en el objeto opciones.
 
 Si el arreglo de respuestas contiene mas de un id, la actividad se tratará como una pregunta de múltiple respuesta. De lo contrario se tratará como pregunta de única respuesta. Si no se asigna a una opción, automáticamente se tomará
 como falsa para esa opción específica.
 
 picks: contenido del pick.
 */

var componente11 = {
    tipo: "actividad",
    estilo: "select_horizontal",
    atributos: {
        enunciado: "",
        preguntas: {
            1: {
                respuesta: 1,
                opciones: {
                    1: "Blanco",
                    2: "Verde",
                    3: "Amarillo",
                    4: "Rojo"
                },
                elemento: {
                    tipo: "imagen",
                    estilo: "imagen_basica",
                    atributos: {
                        thumbnail: "img/select1_thumbnail.png",
                        url: "img/select1.png",
                        descripcion: ""
                    }
                }
            }
        }
    }
};
