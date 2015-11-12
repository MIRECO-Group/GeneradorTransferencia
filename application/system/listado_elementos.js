
//**************************************************************************** GENERAL *********************************************************************

var curso = {
    "nombre": "Transferencia de conocimiento"
};
var unidad = {
    "numero": 1,
    "nombre": "Pedagodía de lenguas extranjeras I",
    "lugar": "Inglaterra"
};
var leccion = {
    "numero": 1,
    "nombre": "Uso TIC parte 1",
    "lugar": "Londres"
};
var tema = {
    numero: 1,
    nombre: "Qué se entiende por TIC?",
    lugar: "Aeropuerto Heathrow"
};
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
 mostrar_icono: define si el título debería ir acompañado del icono correspondiente al macrorecurso donde se encuentra. 
 titulo: Texto. OBLIGATORIO. Es la información principal a mostrarse en el componente.  
 subtitulo: Texto. Opcional. Información menos jerárquica a aparecer junto al título. 
 */

var componente1 = {
    tipo: "titulo",
    estilo: "titulo_recurso",
    atributos: {
        titulo: "",
        subtitulo: "",
        mostrar_icono: false
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
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra la imagen a mostrar.
 title: Texto. OPCIONAL. Contenido a mostrarse al ubicar el cursor sobre la imagen (pequeña descripción).
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
 */

var componente4 = {
    tipo: "boton",
    estilo: "submit_actividad",
    atributos: {
        tag: "Enviar",
        funcion: "iniciar_examen"
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
            imagen_reproductor: "img/melon.png"
        }
    }
};
//LISTA
/*
 categoria: Texto. OBLIGATORIO. Corresponde al tipo de lista a utilizarse (ordenada, no ordenada). 
 texto: Texto. OBLIGATORIO. Corresponde al texto a mostrarse en un elemento específico de la lista.
 */

var componente6 = {
    tipo: "lista",
    estilo: "lista_vertical",
    atributos: {
        categoria: "numerada",
        elementos: {
            1: "elemento 1",
            2: "elemento 2",
            3: "elemento 3"
        }
    }
};
//ORGANIZADOR GRAFICO
/*
 *  tabs : Objeto. OBLIGATORIO. Corresponde a los contenidos del organizador con navegación interna mediante tabs.
 *      tag: Texto. OBLIGATORIO. Corresponde al texto visible en cada uno de los tags del organizador.
 *      estimulo: Objeto. OPCIONAL. Corresponde al archivo multimedia que acompaña el contenido en un tab específico (audio o imagen)
 *          tipo: Texto. OBLIGATORIO. Corresponde al tipo del estimulo (imagen o audio).
 *          url: Texto con formato URL. Corresponde a la dirección del archivo de estímulo.
 *      titulo: Texto. OBLIGATORIO. Corresponde al titulo a visualizarse en un tab específico.
 *      parrafos: Objeto. OBLIGATORIO. Corresponde al texto de contenido en un tab específico separado por párrafos. 
 */

var componente7 = {
    tipo: "organizador",
    estilo: "organizador_saberes",
    atributos: {
        titulo: "",
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
 tipo_drags: Texto. OBLIGATORIO. Corresponde al tipo de elemento que usaran todos los drags (audio/texto). 
 tipo_drops: Texto. OBLIGATORIO. Corresponde al tipo de elemento que usaran todos los drops (imagen/audio). 
 drags: Objeto. OBLIGATORIO. Grupo de elementos drags a utilizarse en la actividad.
 drops: Objeto. OBLIGATORIO. Grupo de elementos drops a utilizarse en la actividad.
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra el archivo a convertir en drag o drop (solo aplica si el tipo de drags o drops es imagen o audio).
 texto: Texto. OBLIGATORIO. Corresponde al texto a convertirse en drag (solo aplica si el tipo de drags o drops es texto).
 */

var componente8 = {
    tipo: "actividad",
    estilo: "dragdrop_horizontal",
    atributos: {
        preguntas: {
            1: {
                enunciado: "",
                drags: {
                    1: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "drag 1"
                            }
                        }
                    },
                    2: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "drag 2"
                            }
                        }
                    },
                    3: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "drag 3"
                            }
                        }
                    },
                    4: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: ""
                            }
                        }
                    }
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
 pregunta: Texto. OPCIONAL. Puede ser usado como enunciado corto antes de un pick many (solo aplica si el tipo de picks es texto) como complemento de la instrucción del recurso.
 tipo_picks: Texto. OBLIGATORIO. Corresponde al tipo de elemento que usaran todos las opciones de respuesta (imagen/audio/texto). 
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra el archivo a usarse como opción de respuesta (solo aplica si el tipo de picks es imagen o audio).
 texto: Texto. OBLIGATORIO. Corresponde al texto a usarse como opción de respuesta (solo aplica si el tipo de picks es texto).
 correct: Boolean. OBLIGATORIO (en al menos una opción de respuesta). Especifica cual es la opción correcta en un pick many, si hay varias opciones con la opción correct asignada en true,
 la actividad se tratará como una pregunta de múltiple respuesta. De lo contrario se tratará como pregunta de única respuesta. Si no se asigna a una opción, automáticamente se tomará
 como falsa para esa opción específica.
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
                        elemento: {
                            tipo: "parrafo",
                            estilo: "parrafo_basico",
                            atributos: {
                                parrafos: {
                                    1: "Roja"
                                }
                            }
                        }
                    },
                    2: {
                        elemento: {
                            tipo: "parrafo",
                            estilo: "parrafo_basico",
                            atributos: {
                                parrafos: {
                                    1: "Blanca"
                                }
                            }
                        }
                    },
                    3: {
                        elemento: {
                            tipo: "parrafo",
                            estilo: "parrafo_basico",
                            atributos: {
                                parrafos: {
                                    1: "Verde"
                                }
                            }
                        }
                    },
                    4: {
                        elemento: {
                            tipo: "parrafo",
                            estilo: "parrafo_basico",
                            atributos: {
                                parrafos: {
                                    1: "Azul"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
//ORDENAMIENTO
/*
 orden: Arreglo de enteros. OBLIGATORIO. Especifica el orden correcto de los elementos en la actividad.
 texto: Texto. OBLIGATORIO. Corresponde al texto a usarse como elemento ordenable en la actividad.
 */

var componente10 = {
    tipo: "actividad",
    estilo: "sortable_vertical",
    atributos: {
        enunciado: "",
        orden: [1, 3, 2, 4],
        elementos: {
            1: "Despertar",
            2: "Comer",
            3: "Cocinar",
            4: "Cepillar"
        }
    }
};
//LISTA DESPLEGABLE
/*
 selects: Objeto. OBLIGATORIO. Grupo de listas desplegables a utilizarse en la actividad.
 tipo_estimulo: 	Texto. OBLIGATORIO. Corresponde al tipo de elemento que se usará como estímulo previo en todas las listas desplegables (imagen/audio/texto). 
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra el archivo a usarse como estímulo (solo aplica si el tipo de estímulo es imagen o audio).
 opcion_default: Texto. OPCIONAL. Corresponde al mensaje que se mostrará por defecto en la lista desplegable al iniciar la actividad.
 opciones: Objeto. OBLIGATORIO. Grupo de opciones de respuesta a desplegarse en una lista específica.
 pregunta: Texto. OPCIONAL. Puede ser usado como enunciado corto antes de un pick many (solo aplica si el tipo de estímulo es texto) como complemento de la instrucción del recurso.
 texto: Texto. OBLIGATORIO. Corresponde al texto a usarse como opción de respuesta.
 correct: Boolean. OBLIGATORIO (en al menos una opción de respuesta). Especifica cual es la opción correcta en una lista desplegable. Si no se asigna a una opción, 
 automáticamente se tomarácomo falsa para esa opción específica.
 
 */

var componente11 = {
    tipo: "actividad",
    estilo: "select_horizontal",
    atributos: {
        preguntas: {
            1: {
                enunciado: "",
                selects: {
                    1: {
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/select1_thumbnail.png",
                                url: "img/select1.png",
                                descripcion: ""
                            }
                        },
                        respuesta : 1,
                        opciones: {
                            1: "Blanco",
                            2: "Verde",
                            3: "Amarillo",
                            4: "Rojo"
                        }
                    },
                    2: {
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/select2_thumbnail.png",
                                url: "img/select2.png",
                                descripcion: ""
                            }
                        },
                        respuesta : 2,
                        opciones: {
                            1: "Blanco",
                            2: "Verde",
                            3: "Amarillo",
                            4: "Rojo"
                        }
                    },
                    3: {
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/select3_thumbnail.png",
                                url: "img/select3.png",
                                descripcion: ""
                            }
                        },
                        respuesta : 3,
                        opciones: {
                            1: "Blanco",
                            2: "Verde",
                            3: "Amarillo",
                            4: "Rojo"
                        }
                    },
                    4: {
                        elemento: {
                            tipo: "imagen",
                            estilo: "imagen_basica",
                            atributos: {
                                thumbnail: "img/select4_thumbnail.png",
                                url: "img/select4.png",
                                descripcion: ""
                            }
                        },
                        respuesta : 4,
                        opciones: {
                            1: "Blanco",
                            2: "Verde",
                            3: "Amarillo",
                            4: "Rojo"
                        }
                    }
                }
            }
        }
    }
};																																																									
