
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

var componente = {
    tipo: "titulo",
    estilo: "titulo_recurso",
    mostrar_icono: true,
    elementos: {
        titulo: "Contenido I",
        subtitulo: "Descubramos las TIC"
    }
};

//PARRAFO
/*
 parrafos: Objeto. OBLIGATORIO. Es la información principal a mostrarse en el componente.
 texto: Texto. OBLIGATORIO. Contenido a mostrarse dentro de un parrafo especifico.
 
 */

var componente = {
    tipo: "parrafo",
    estilo: "parrafo_basico",
    elementos: {
        parrafos: {
            1: {
                texto: ""
            },
            2: {
                texto: ""
            }
        }
    }
};

//IMAGEN
/*
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra la imagen a mostrar.
 title: Texto. OPCIONAL. Contenido a mostrarse al ubicar el cursor sobre la imagen (pequeña descripción).
 */

var componente = {
    tipo: "imagen",
    estilo: "imagen_basica",
    elementos: {
        url: "img/prueba.png",
        title: ""
    }
};

//BOTON
/*
 tag: Texto. Obligatorio. Texto que aparecerá dentro del botón.
 funcion: Texto. Obligatorio. Define la funcionalidad que debe tener el botón.
 */

var componente = {
    tipo: "boton",
    estilo: "submit_actividad",
    elementos: {
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
var componente = {
    tipo: "reproductor",
    estilo: "reproductor_basico",
    elementos: {
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

var componente = {
    tipo: "lista",
    estilo: "lista_horizontal",
    categoria: "numerada",
    elementos: {
        1: {
            texto: "elemento 1"
        },
        2: {
            texto: "elemento 2"
        },
        3: {
            texto: "elemento 3"
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

var componente = {
    tipo: "organizador",
    estilo: "organizador_saberes",
    elementos: {
        tabs: {
            1: {
                tag: "1",
                estimulo: {
                    tipo: "imagen",
                    url: "img/estimulo1.jpg"
                },
                titulo: "Título tab 1",
                parrafos: {
                    1: "Este es mi contenido de organizador gráfico 1",
                    2: "Este es mi contenido de organizador gráfico 1",
                    3: "Este es mi contenido de organizador gráfico 1",
                    4: "Este es mi contenido de organizador gráfico 1"
                }
            },
            2: {
                tag: "2",
                estimulo: {
                    tipo: "imagen",
                    url: "img/estimulo2.jpg"
                },
                titulo: "Título tab 2",
                parrafos: {
                    1: "Este es mi contenido de organizador gráfico 1",
                    2: "Este es mi contenido de organizador gráfico 1",
                    3: "Este es mi contenido de organizador gráfico 1",
                    4: "Este es mi contenido de organizador gráfico 1"
                }
            },
            3: {
                tag: "3",
                estimulo: {
                    tipo: "imagen",
                    url: "img/estimulo3.jpg"
                },
                titulo: "Título tab 3",
                parrafos: {
                    1: "Este es mi contenido de organizador gráfico 1",
                    2: "Este es mi contenido de organizador gráfico 1",
                    3: "Este es mi contenido de organizador gráfico 1",
                    4: "Este es mi contenido de organizador gráfico 1"
                }
            },
            4: {
                tag: "4",
                estimulo: {
                    tipo: "imagen",
                    url: "img/estimulo4.jpg"
                },
                titulo: "Título tab 4",
                parrafos: {
                    1: "Este es mi contenido de organizador gráfico 1",
                    2: "Este es mi contenido de organizador gráfico 1",
                    3: "Este es mi contenido de organizador gráfico 1",
                    4: "Este es mi contenido de organizador gráfico 1"
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

var componente = {
    tipo: "drag_drop",
    estilo: "dragdrop_horizontal",
    elementos: {
        tipo_drags: "texto",
        drags: {
            1: {
                texto: "drag 1"
            },
            2: {
                texto: "drag 2"
            },
            3: {
                texto: "drag 3"
            },
            4: {
                texto: "drag 4"
            }
        },
        tipo_drops: "imagen",
        drops: {
            1: {
                url: "img/imagen1.png",
            },
            2: {
                url: "img/imagen2.png"
            },
            3: {
                url: "img/imagen3.png"
            },
            4: {
                url: "img/imagen4.png"
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

var componente = {
    tipo: "pick_many",
    estilo: "pickmany_horizontal",
    elementos: {
        preguntas: {
            1: {
                pregunta: "¿De qué color es la nieve?",
                tipo_picks: "texto",
                picks: {
                    1: {
                        texto: "Blanca",
                        correct: true
                    },
                    2: {
                        texto: "Verde"
                    },
                    3: {
                        texto: "Amarilla"
                    },
                    4: {
                        texto: "Roja"
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

var componente = {
    tipo: "sortable",
    estilo: "sortable_vertical",
    orden: [1, 3, 2, 4],
    elementos: {
        1: {
            texto: "Despertar"
        },
        2: {
            texto: "Comer"
        },
        3: {
            texto: "Cocinar"
        },
        4: {
            texto: "Cepillar"
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

var componente = {
    tipo: "select",
    estilo: "select_horizontal",
    elementos: {
        preguntas: {
            1: {
                selects: {
                    tipo_estimulo: "imagen",
                    1: {
                        url: "img/imagen_select1.png",
                        opcion_default: "Selecciona la respuesta correcta",
                        opciones: {
                            1: {
                                texto: "Blanco",
                                correct: true
                            },
                            2: {
                                texto: "Verde"
                            },
                            3: {
                                texto: "Amarillo"
                            },
                            4: {
                                texto: "Rojo"
                            }
                        }
                    },
                    2: {
                        url: "img/imagen_select2.png",
                        opcion_default: "Selecciona la respuesta correcta",
                        opciones: {
                            1: {
                                texto: "Perro"
                            },
                            2: {
                                texto: "Casa"
                            },
                            3: {
                                texto: "Zapato",
                                correct: true
                            },
                            4: {
                                texto: "Puente"
                            }
                        }
                    },
                    3: {
                        url: "img/imagen_select3.png",
                        opcion_default: "Selecciona la respuesta correcta",
                        opciones: {
                            1: {
                                texto: "1"
                            },
                            2: {
                                texto: "11",
                                correct: true
                            },
                            3: {
                                texto: "22"
                            },
                            4: {
                                texto: "12"
                            }
                        }
                    },
                    4: {
                        url: "img/imagen_select4.png",
                        opcion_default: "Selecciona la respuesta correcta",
                        opciones: {
                            1: {
                                texto: "Camisa"
                            },
                            2: {
                                texto: "Pantalon"
                            },
                            3: {
                                texto: "Medias"
                            },
                            4: {
                                texto: "Correa",
                                correct: true
                            }
                        }
                    }
                }
            }
        }
    }
};																																																									