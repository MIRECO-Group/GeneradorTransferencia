/* 
 *  Esta configuración corresponde al contenido de un objeto de aprendizaje del
 *  curso de transferencia de conocimiento. Para llenar este contenido por favor
 *  inicie por asignar un indice dentro del objeto "macrorecursos" para cada 
 *  macrorecurso definido en la arquitectura aprobada para el curso, es decir:
 *  
 *  1: portada 
 *  2: sensibilización de apertura
 *  3: contextualización
 *  4: contenido y actividades
 *  5: recordemos
 *  6: preguntas de conocimiento
 *  7: sensibilización de cierre
 *  
 *  Cada uno de estos macrorecursos cuenta con atributos que definen su nombre y 
 *  un id que permita al software identificarlo con mas facilidad. Esta información
 *  no debe cambiar entre un objeto y otro.
 *  
 *  También cuentan con un atributo recursos, el cual conserva la información de 
 *  cada slide contenido en un macrorecurso específico. El atributo recursos es
 *  también un objeto Javascript y debe asignarse un índice numérico (iniciando 
 *  desde 1) que aumenta en 1 para cada recurso.
 *  
 *  Cada uno de estos recursos cuenta con atributos que definen su tipo y estilo.
 *  El tipo para un recurso siempre debe ser "layout", el cual corresponde a una disposición
 *  (retícula) de elementos. Es en el atributo estilo donde podemos definir el identificador 
 *  de la reticula específica que va a utilizar el recurso.
 *  
 *  También cuentan con un atributo componentes, el cual conserva la información de 
 *  cada contenido a situarse en un espacio de la retícula definida en estilo.
 *  El atributo componentes es también un objeto Javascript y debe asignarse un índice
 *  numérico (iniciando desde 1) que aumenta en 1 para cada componente y corresponde a la 
 *  sección en la retícula que ocupará dicho componente.
 *  
 *  Cada uno de estos componentes cuenta con la posibilidad de definir tipo y estilo.
 *  El objeto atributos contiene los atributos específicos de configuración para un componente 
 *  (ej. titulo, subtitulo e icono para componente titulo).
 *  
 *  El tipo de un componente representa los posibles contenidos que pueden asignarse a 
 *  una sección de layout, estos incluyen entre otros:
 *  
 *  título
 *  párrafo
 *  imagen
 *  botón
 *  reproductor
 *  lista
 *  organizadores gráficos
 *  actividades.
 *  
 *  Sin embargo, en el caso de las actividades, se usará un tipo diferente para cada actividad 
 *  (drag_drop, pick_many, etc...), y no un tipo "actividad".
 *  
 *      
 *  El atributo estilo, al igual que para los recursos definirá la disposición de elementos
 *  dentro del componente (por ejemplo, si una lista es vertical u horizontal).
 *  
 *  También cuentan con un atributo elementos, el cual conserva la información de 
 *  cada elemento a distribuirse dentro de un componente. El atributo elementos es también 
 *  un objeto Javascript y debe asignarse un índice numérico (iniciando desde 1) 
 *  que aumenta en 1 para cada componente.
 *  
 */

var macrorecursos = {
    //<editor-fold defaultstate="collapsed" desc="PORTADA">
    1: {
        id: "portada",
        nombre: "portada",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "portada",
                especiales: ["no-controles"],
                background: "img/fondo_portada.jpg",
                componentes: {
                    1: {
                        tipo: "imagen",
                        estilo: "full",
                        atributos: {
                            url: "img/banner_portada.jpg",
                            descripcion: "portada del objeto"
                        }
                    },
                    2: {
                        tipo: "layout",
                        estilo: "og_2",
                        componentes: {
                            1: {
                                tipo: "titulo",
                                estilo: "resultados",
                                atributos: {
                                    titulo: "Resultados de Aprendizaje"
                                }
                            },
                            2: {
                                tipo: "lista",
                                estilo: "vineta_tipografia",
                                atributos: {
                                    enunciado: "",
                                    elementos: {
                                        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    }
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "boton",
                        estilo: "portada",
                        atributos: {
                            tag: "Enviar",
                            funcion: "ir_a",
                            destino: "2"
                        }
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="SENSIBILIZACION DE APERTURA">
    2: {
        id: "sensibilizacion_apertura",
        nombre: "sensibilización de apertura",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "contenido_1",
                componentes: {
                    1: {
                        tipo: "parrafo",
                        estilo: "basico",
                        atributos: {
                            parrafos: {
                                1: "regardless"
                            }
                        }
                    },
                    2: {
                        tipo: "imagen",
                        estilo: "full",
                        atributos: {
                            url: "img/banner_portada.jpg",
                            descripcion: "portada del objeto"
                        }
                    },
                    3: {
                        tipo: "parrafo",
                        estilo: "basico",
                        atributos: {
                            parrafos: {
                                1: "dress me"
                            }

                        }
                    },
                    4: {
                        tipo: "organizador",
                        estilo: "tabs_superior",
                        atributos: {
                            tabs: {
                                1: {
                                    tag: "1",
                                    tipo: "layout",
                                    estilo: "sensibilizacion",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "regardless",
                                                    2: "my touch is black and poisonouss"
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    tag: "act",
                                    tipo: "layout",
                                    estilo: "sensibilizacion",
                                    componentes: {
                                        1: {
                                            tipo: "select",
                                            estilo: "select_horizontal",
                                            atributos: {
                                                enunciado: "test",
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
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="CONTEXTUALIZACION">
    3: {
        id: "sensibilizacion_apertura",
        nombre: "sensibilización de apertura",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "contenido_1",
                componentes: {
                    1: {
                        tipo: "drag_drop",
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
                    },
                    2: {
                        tipo: "layout",
                        estilo: "contenido_4",
                        componentes: {
                            1: {
                                tipo: "parrafo",
                                estilo: "basico",
                                atributos: {
                                    parrafos: {
                                        1: "<b>Instrucción:</b> En el campo de la educación podemos mencionar las siguientes aplicaciones. Haga clic sobre los botones listados a la izquierda."
                                    }
                                }
                            },
                            2:{
                                
                            },
                            3:{
                                
                            },
                            4:{
                                
                            }
                        }
                        
                    },
                    3:{
                        
                    },
                    4:{
                        
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="CONTENIDO/ACTIVIDADES">
    4: {
        id: "contenido",
        nombre: "Contenido/Actividades",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "layout_subportada",
                componentes: {
                    1: {
                        tipo: "imagen",
                        estilo: "imagen_basica",
                        atributos: {
                            thumbnail: "img/subportada1_thumbnail.png",
                            url: "img/subportada1.png",
                            descripcion: "subportada primer contenido"
                        }
                    }
                }
            },
            2: {
                tipo: "layout",
                estilo: "layout_recurso_1",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        atributos: {
                            titulo: "Contenidos",
                            subtitulo: "Título del primer subcontenido",
                            icono: "contenido"
                        }
                    },
                    2: {
                        tipo: "lista",
                        estilo: "lista_vertical",
                        atributos: {
                            categoria: "no_numerada",
                            enunciado: "Las herramientas digitales son programas que ayudan a interactuar con la tecnología para el logro de una variedad de propósitos, por ejemplo:",
                            elementos: {
                                1: "Permiten la comunicación en tiempo real sin barreras de tiempo y espacio.",
                                2: "Permiten crear bases de datos, encuestas, etc.",
                                3: "Facilitan la recopilación, manejo de la información, gestión de procesos pedagógicos, entre muchos otros.",
                                4: "facilitan la recopilación, manejo de la información, gestión de procesos pedagógicos, entre muchos otros.",
                                5: "le permiten al aprendiz: buscar, seleccionar, registrar información, y muchas otras actividades."
                            }
                        }
                    },
                    3: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "<b>Instrucción:</b> En el campo de la educación podemos mencionar las siguientes aplicaciones. Haga clic sobre los botones listados a la izquierda."
                            }
                        }
                    },
                    4: {
                        tipo: "organizador",
                        estilo: "organizador_tabs_superiores",
                        atributos: {
                            tabs: {
                                1: {
                                    tag: "CMS",
                                    tipo: "layout",
                                    estilo: "layout_og2_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Párrafo 1",
                                                    2: "Párrafo 2"
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    tag: "LMS",
                                    tipo: "layout",
                                    estilo: "layout_og2_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Párrafo 1",
                                                    2: "Párrafo 2"
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    tag: "LCMS",
                                    tipo: "layout",
                                    estilo: "layout_og2_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Párrafo 1",
                                                    2: "Párrafo 2"
                                                }
                                            }
                                        }
                                    }
                                },
                                4: {
                                    tag: "Redes Sociales",
                                    tipo: "layout",
                                    estilo: "layout_og2_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Párrafo 1",
                                                    2: "Párrafo 2"
                                                }
                                            }
                                        }
                                    }
                                },
                                5: {
                                    tag: "Multimedia",
                                    tipo: "layout",
                                    estilo: "layout_og2_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Párrafo 1",
                                                    2: "Párrafo 2"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            3: {
                tipo: "layout",
                estilo: "layout_recurso_4",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        atributos: {
                            titulo: "Contenido 2",
                            subtitulo: "Título del primer subcontenido",
                            icono: "contenido"
                        }
                    },
                    2: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "Un programa es un conjunto de instrucciones ordenadas de manera lógica que permiten el procesamiento de la información, para el logro de unos resultados específicos. Algunos ejemplos de programa o aplicación son los procesadores de texto, las hojas de cálculo, los juegos, los simuladores y los buscadores.",
                                2: "<b>Instrucción:</b> Revisemos lo que hasta ahora hemos estudiado acerca de las TIC. Alba es instructora de Logística en el SENA. ¿Cuál de los siguientes elementos le permite a Alba personalizar y manejar un curso de nivel intermedio por módulos? Seleccione la respuesta correcta."
                            }
                        }
                    },
                    3: {
                        tipo: "pick_many",
                        estilo: "pickmany_vertical",
                        atributos: {
                            preguntas: {
                                1: {
                                    enunciado: "De las siguientes opciones solo una es correcta.",
                                    respuesta: [3],
                                    picks: {
                                        1: "El sistema operativo",
                                        2: "Las bases de datos",
                                        3: "El LMS",
                                        4: "Las redes sociales"
                                    }
                                }
                            }
                        }
                    },
                    4: {
                        tipo: "boton",
                        estilo: "submit_actividad",
                        atributos: {
                            tag: "Enviar",
                            funcion: "iniciar_examen"
                        }
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="RECORDEMOS">
    5: {
        id: "recordemos",
        nombre: "recordemos",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "layout_recordemos",
                componentes: {
                    1: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        atributos: {
                            parrafos: {
                                1: "<b>Instrucción:</b> Para recordar algunos conceptos, lea las siguientes definiciones. Haga clic en las flechas para desplazarse."
                            }
                        }
                    },
                    2: {
                        tipo: "organizador",
                        estilo: "organizador_recordemos",
                        atributos: {
                            titulo: "",
                            tabs: {
                                1: {
                                    tag: "1",
                                    tipo: "layout",
                                    estilo: "layout_og1_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Las Tecnologías de la Información y las Comunicaciones son recursos, herramientas y programas que posibilitan la creación, manipulación y distribución de la información mediante medios impresos, digitales y audiovisuales."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "imagen",
                                            estilo: "imagen_basica",
                                            atributos: {
                                                thumbnail: "img/prueba_thumbnail.png",
                                                url: "img/prueba.png",
                                                descripcion: "descripción de prueba"
                                            }
                                        }
                                    }
                                },
                                2: {
                                    tag: "1",
                                    tipo: "layout",
                                    estilo: "layout_og1_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Las TIC hacen parte de todos los ámbitos, incluyendo el campo de la educación. Si bien las TIC no son el fin último de la educación, si han transformado la manera como interactuamos entre nosotros mismos y con los diferentes dispositivos. "
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "imagen",
                                            estilo: "imagen_basica",
                                            atributos: {
                                                thumbnail: "img/prueba_thumbnail.png",
                                                url: "img/prueba.png",
                                                descripcion: "descripcion de prueba"
                                            }
                                        }
                                    }
                                },
                                1: {
                                    tag: "1",
                                    tipo: "layout",
                                    estilo: "layout_og1_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "La implementación de las TIC requiere aprendices e instructores con nuevas competencias relacionadas con la gestión del tiempo, la investigación y un papel activo en la sociedad del conocimiento, entre otras."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "imagen",
                                            estilo: "imagen_basica",
                                            atributos: {
                                                thumbnail: "img/prueba_thumbnail.png",
                                                url: "img/prueba.png",
                                                descripcion: "descripcion de prueba"
                                            }
                                        }
                                    }
                                },
                                1: {
                                    tag: "1",
                                    tipo: "layout",
                                    estilo: "layout_og1_1",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "Web 2.0 es un conjunto de herramientas digitales compartidas por grupos de usuarios que aportan y comparten información para la solución de uno o varios problemas (wikis, blogs, foros, redes sociales)."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "imagen",
                                            estilo: "imagen_basica",
                                            atributos: {
                                                thumbnail: "img/prueba_thumbnail.png",
                                                url: "img/prueba.png",
                                                descripcion: "descripcion de prueba"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "imagen",
                        estilo: "personaje",
                        elementos: {
                            url: "img/personaje.png",
                            title: "Marcos"
                        }
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="PREGUNTAS DE CONOCIMIENTO">
    6: {
        id: "preguntas",
        nombre: "preguntas de conocimiento",
        recursos: {
            1: {
                tipo: "layout",
                estilo: "layout_examen",
                componentes: {
                    1: {
                        tipo: "organizador",
                        estilo: "organizador_examen",
                        atributos: {
                            tabs: {
                                1: {
                                    tipo: "layout",
                                    estilo: "layout_portada_examen",
                                    componentes: {
                                        1: {
                                            tipo: "titulo",
                                            estilo: "titulo_recurso",
                                            atributos: {
                                                titulo: "Preguntas de Conocimiento",
                                                icono: "preguntas"
                                            }
                                        },
                                        2: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Verifique la apropiación de los saberes que hemos estudiado en este tema respondiendo a las siguientes preguntas.</b>",
                                                    2: "Instrucciones:"
                                                }
                                            }
                                        },
                                        3: {
                                            tipo: "lista",
                                            estilo: "lista_vertical",
                                            atributos: {
                                                categoria: "no_numerada",
                                                elementos: {
                                                    1: "A continuación usted podrá encontrar alguno(s) de los siguientes tipos de preguntas: opción múltiple, verdadero/falso, de relación o de selección.",
                                                    2: "Lea cada pregunta cuidadosamente, revise todas las opciones y elija la respuesta que considere correcta.",
                                                    3: "elemento 3",
                                                    4: "Después de elegir la respuesta haga clic en la flecha para continuar a la siguiente pregunta.",
                                                    5: "En la última pregunta se habilitará el botón Enviar."
                                                }
                                            }
                                        },
                                        4: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Recuerde:</b>",
                                                    2: "Responda todas las preguntas antes de hacer clic en el botón Enviar."
                                                }
                                            }
                                        }
                                    }
                                },
                                2: {
                                    tipo: "layout",
                                    estilo: "layout_recurso_5",
                                    componentes: {
                                        1: {
                                            tipo: "titulo",
                                            estilo: "titulo_recurso",
                                            atributos: {
                                                titulo: "Preguntas de Conocimiento",
                                                icono: "preguntas"
                                            }
                                        },
                                        2: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Instrucción:</b> Organice las siguientes competencias en la columna correspondiente (para el instructor o para el aprendiz). Haga clic en la flecha para ver las opciones."
                                                }
                                            }
                                        },
                                        3: {
                                            tipo: "actividad",
                                            estilo: "sortable_vertical",
                                            atributos: {
                                                preguntas: {
                                                    1: {
                                                        enunciado: "El nuevo instructor debe:",
                                                        orden: [3, 2, 1],
                                                        elementos: {
                                                            1: "Generar conocimiento",
                                                            2: "Profundizar conocimiento",
                                                            3: "Tener nociones básicas de TIC"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        4: {
                                            tipo: "actividad",
                                            estilo: "sortable_vertical",
                                            atributos: {
                                                preguntas: {
                                                    1: {
                                                        enunciado: "El aprendiz digital debe:",
                                                        orden: [3, 2, 1],
                                                        elementos: {
                                                            1: "Tener autonomía",
                                                            2: "Gestionar su tiempo",
                                                            3: "Ser autodisciplinado"
                                                        }
                                                    },
                                                    2: {
                                                        respuesta: 3,
                                                        opciones: {
                                                            1: "Ser autodisciplinado",
                                                            2: "Tener autonomía",
                                                            3: "Gestionar su tiempo"
                                                        }
                                                    },
                                                    3: {
                                                        respuesta: 3,
                                                        opciones: {
                                                            1: "Gestionar su tiempo",
                                                            2: "Ser autodisciplinado",
                                                            3: "Tener autonomía"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                3: {
                                    tipo: "layout",
                                    estilo: "layout_recurso_4",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Instrucción:</b> seleccione la opción que completa la frase."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "actividad",
                                            estilo: "pickmany_vertical",
                                            atributos: {
                                                preguntas: {
                                                    1: {
                                                        enunciado: "Los campos virtuales permiten la interacción con _____",
                                                        respuesta: [1],
                                                        picks: {
                                                            1: "otros actores",
                                                            2: "dispositivos electrónicos",
                                                            3: "el conocimiento",
                                                            4: "dispositivos y conocimiento"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                4: {
                                    tipo: "layout",
                                    estilo: "layout_recurso_4",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Instrucción:</b> seleccione la opción que completa la frase."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "actividad",
                                            estilo: "select_vertical",
                                            atributos: {
                                                enunciado: "Las personas y las instituciones generan _____________ al cambio",
                                                preguntas: {
                                                    1: {
                                                        respuesta: 1,
                                                        opciones: {
                                                            1: "resistencia",
                                                            2: "deseo",
                                                            3: "amor por",
                                                            4: "severidad"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                5: {
                                    tipo: "layout",
                                    estilo: "layout_recurso_4",
                                    componentes: {
                                        1: {
                                            tipo: "parrafo",
                                            estilo: "parrafo_basico",
                                            atributos: {
                                                parrafos: {
                                                    1: "<b>Instrucción:</b> seleccione la opción que completa la frase."
                                                }
                                            }
                                        },
                                        2: {
                                            tipo: "actividad",
                                            estilo: "dragdrop_horizontal",
                                            atributos: {
                                                preguntas: {
                                                    1: {
                                                        enunciado: "Este es un drag and drop de prueba",
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
                                                                        descripcion: "imagen del drop 1"
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
                                                                        descripcion: "imagen del drop 2"
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
                                                                        descripcion: "imagen del drop 3"
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
                                                                        descripcion: "imagen del drop 4"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    //</editor-fold>
    //<editor-fold defaultstate="collapsed" desc="SENSIBILIZACION DE CIERRE">
    7: {
        id: "sensibilizacion_cierre",
        nombre: "sensibilización de cierre",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_sensibilizacion",
                componentes: {
                    1: {
                        tipo: "reproductor",
                        estilo: "reproductor_completo",
                        atributos: {
                            1: {
                                tipo: "video",
                                url: "media/video/scierre.mp4",
                                imagen_reproductor: "img/scierre.png",
                                descripcion: "Marco en el taxi"
                            }
                        }
                    }
                }
            }
        }
    }
    //</editor-fold>
};