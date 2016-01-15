
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

var componente = {
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

var componente = {
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

var componente = {
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
 clasescss: Texto. Opcional. Adiciona clase css(animaciones etc). 
 */

var componente = {
    tipo: "boton",
    estilo: "submit_actividad",
    atributos: {
        tag: "Enviar",
        funcion: "iniciar_examen",
        destino: "glosario",
        clasescss: "animated pulse infinite"
    }
};
//REPRODUCTOR DE AUDIO Y VÍDEO

/*Componente audio*/

var componente = {
    tipo: "reproductor",
    estilo: "boton_pequeno",
    atributos: {
        tipo: "audio",
        url: "media/audio/audio1.mp3",
        descripcion: ""
    }
};

/*Componente video*/

var componente = {
	tipo: "reproductor",
	estilo: "video",
	atributos: {
	    tipo: "video",
	    url: "media/video/video1.mp4",
	    poster: "img/leon.jpg",
	    descripcion: "",
	    autoplay: true,
	    controls: false,
	    loop: true
	}
}


//LISTA
/*
 enunciado: Texto. OPCIONAL. Corresponde a un texto introductorio que precede a la lista.
 elementos: Texto. OBLIGATORIO. Corresponde a los textos a organizarse dentro de la lista.
 */

var componente = {
    tipo: "lista",
    estilo: "vineta_tipografia",
    atributos: {
        enunciado: "",
        elementos: {
            1: "elemento 1",
            2: "elemento 2",
            3: "elemento 3"
        }
    }
};

//FRAME
/*
 url: Texto con formato URL. OBLIGATORIO. Corresponde a la ruta donde se encuentra la versión grande de la imagen a mostrar.
 descripcion: Texto. OPCIONAL. Contenido a mostrarse al ubicar el cursor sobre la imagen (pequeña descripción).
 */

var componente = {
    tipo: "frame",
    estilo: "mediano",
    atributos: {
        url: "media/anim/animacion.html",
        descripcion: ""
    }
};

//ORGANIZADOR GRAFICO
/*
 *  tabs : Objeto. OBLIGATORIO. Corresponde a los contenidos del organizador. 
 *  Funcionan como recursos independientes usando layouts y componentes.
 */

var componente = {
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

var componente = {
    tipo: "drag_drop",
	estilo: "dragdrop_horizontal",
	atributos: {
		intentos: 3,
		preguntas: {
			1: {
				enunciado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				drags: {
					1: "texto 1",
					2: "texto 2",
					3: "texto 3",
					4: "texto 4"
				},
				atributos: {
					drops: {
						1: {
							accepted: [4],
							elemento: {
								tipo: "imagen",
								estilo: "basica",
								atributos: {
									thumbnail: "img/leon_thumbnail.jpg",
									url: "img/leon.jpg",
									descripcion: ""
								}
							}
						},
						2: {
							accepted: [3],
							elemento: {
								tipo: "imagen",
								estilo: "basica",
								atributos: {
									thumbnail: "img/leon_thumbnail.jpg",
									url: "img/leon.jpg",
									descripcion: ""
								}
							}
						},
						3: {
							accepted: [2],
							elemento: {
								tipo: "imagen",
								estilo: "basica",
								atributos: {
									thumbnail: "img/leon_thumbnail.jpg",
									url: "img/leon.jpg",
									descripcion: ""
								}
							}
						},
						4: {
							accepted: [1],
							elemento: {
								tipo: "imagen",
								estilo: "basica",
								atributos: {
									thumbnail: "img/leon_thumbnail.jpg",
									url: "img/leon.jpg",
									descripcion: ""
								}
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

var componente = {
    tipo: "pick_many",
	estilo: "pickmany_horizontal",
	atributos: {
		intentos: 3,
		preguntas: {
			1: {
				enunciado: "Enunciado pregunta 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia debitis possimus cupiditate ab porro excepturi quo, quam placeat eaque provident veritatis consectetur, pariatur, aperiam tempore aut quas voluptatum. Vel!",
				respuesta: [1],
				atributos: {
					picks: {
						1: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								}
							}
						},
						2: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								}
							}
						},
						3: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								}
							}
						},
						4: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								}
							}
						},
						5: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "pick 5 anasaf tor bin"
								}
							}
						}
					}
				}
			},
			2: {
				enunciado: "Enunciado pregunta 2: Lorem ipsum dolor sit amet, illo voluptates alias, labore, ut ut numquam, quasi ullam dolores veniam assumenda, eius illum! Harum, amet. Nobis sint dolorum sapiente odit! illo voluptates alias, labore, ut numquam, quasi ullam dolores veniam assumenda, eius illum! Harum, amet. Nobis sint dolorum sapiente odit!",
				respuesta: [2,3],
				atributos: {
					picks: {
						1: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "pick 1 - Lorem ipsum."
								}
							}
						},
						2: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "pick 2 - Lorem ipsum."
								}
							}
						},
						3: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "pick 3 - Lorem ipsum dolor."
								}
							}
						},
						4: {
							tipo: "parrafo",
							estilo: "basico",
							atributos: {
								parrafos: {
									1: "pick 4 - Lorem ipsum dolor sit."
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
 preguntas: Objeto. OBLIGATORIO. Grupo de actividades.
 enunciado: Texto. OPCIONAL. Puede ser usado como pregunta antes de un ordenamiento como complemento de la instrucción del recurso.
 orden: Arreglo de enteros. OBLIGATORIO. Especifica el orden correcto de los elementos en la actividad.
 elementos: Objeto. OBLIGATORIO. Corresponde al grupo de elementos (solo texto) que se usarán en el ordenamiento.
 */

var componente = {
    tipo: "sortable",
	estilo: "sortable_vertical",
	atributos: {
		intentos: 3,
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

var componente = {
    tipo: "select",
	estilo: "select_horizontal",
	atributos: {
		enunciado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		intentos: 3,
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
					tipo: "parrafo",
					estilo: "basico",
					atributos: {
						parrafos: {
							1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						}
					}
				}
			}
		}
	}
};


//PREGUNTAS DE CONOCIMIENTO
var componente: {
    id: "preguntas",
    nombre: "preguntas de conocimiento",
    recursos: {
        1: {
            tipo: "layout",
            estilo: "examen",
            componentes: {
                1: {
                    tipo: "organizador",
                    estilo: "preguntas",
                    atributos: {
                        tabs: {
                            1: {
                                tipo: "sortable",
                                estilo: "sortable_vertical",
                                atributos: {
                                    intentos: 1,
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
                            2: {
                                tipo: "select",
                                estilo: "select_horizontal",
                                atributos: {
                                    enunciado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    intentos: 1,
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
                                                tipo: "parrafo",
                                                estilo: "basico",
                                                atributos: {
                                                    parrafos: {
                                                        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                    }
                                                }
                                            }
                                        },
                                        2: {
                                            respuesta: 2,
                                            opciones: {
                                                1: "Blanco",
                                                2: "Verde",
                                                3: "Amarillo",
                                                4: "Rojo"
                                            },
                                            elemento: {
                                                tipo: "parrafo",
                                                estilo: "basico",
                                                atributos: {
                                                    parrafos: {
                                                        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                    }
                                                }
                                            }
                                        },
                                        3: {
                                            respuesta: 3,
                                            opciones: {
                                                1: "Blanco",
                                                2: "Verde",
                                                3: "Amarillo",
                                                4: "Rojo"
                                            },
                                            elemento: {
                                                tipo: "parrafo",
                                                estilo: "basico",
                                                atributos: {
                                                    parrafos: {
                                                        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                    }
                                                }
                                            }
                                        },
                                        4: {
                                            respuesta: 4,
                                            opciones: {
                                                1: "Blanco",
                                                2: "Verde",
                                                3: "Amarillo",
                                                4: "Rojo"
                                            },
                                            elemento: {
                                                tipo: "parrafo",
                                                estilo: "basico",
                                                atributos: {
                                                    parrafos: {
                                                        1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            3: {
                                tipo: "pick_many",
                                estilo: "pickmany_horizontal",
                                atributos: {
                                    intentos: 1,
                                    preguntas: {
                                        1: {
                                            enunciado: "Enunciado pregunta 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam officia debitis possimus cupiditate ab porro excepturi quo, quam placeat eaque provident veritatis consectetur, pariatur, aperiam tempore aut quas voluptatum. Vel!",
                                            respuesta: [1],
                                            atributos: {
                                                picks: {
                                                    1: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                            }
                                                        }
                                                    },
                                                    3: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                            }
                                                        }
                                                    },
                                                    4: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                            }
                                                        }
                                                    },
                                                    5: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "pick 5 anasaf tor bin"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        2: {
                                            enunciado: "Enunciado pregunta 2: Lorem ipsum dolor sit amet, illo voluptates alias, labore, ut ut numquam, quasi ullam dolores veniam assumenda, eius illum! Harum, amet. Nobis sint dolorum sapiente odit! illo voluptates alias, labore, ut numquam, quasi ullam dolores veniam assumenda, eius illum! Harum, amet. Nobis sint dolorum sapiente odit!",
                                            respuesta: [2,3],
                                            atributos: {
                                                picks: {
                                                    1: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "pick 1 - Lorem ipsum."
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "pick 2 - Lorem ipsum."
                                                            }
                                                        }
                                                    },
                                                    3: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "pick 3 - Lorem ipsum dolor."
                                                            }
                                                        }
                                                    },
                                                    4: {
                                                        tipo: "parrafo",
                                                        estilo: "basico",
                                                        atributos: {
                                                            parrafos: {
                                                                1: "pick 4 - Lorem ipsum dolor sit."
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            4: {
                                tipo: "drag_drop",
                                estilo: "dragdrop_horizontal",
                                atributos: {
                                    intentos: 1,
                                    preguntas: {
                                        1: {
                                            enunciado: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                            drags: {
                                                1: "texto 1",
                                                2: "texto 2",
                                                3: "texto 3",
                                                4: "texto 4"
                                            },
                                            atributos: {
                                                drops: {
                                                    1: {
                                                        accepted: [4],
                                                        elemento: {
                                                            tipo: "imagen",
                                                            estilo: "basica",
                                                            atributos: {
                                                                thumbnail: "img/leon_thumbnail.jpg",
                                                                url: "img/leon.jpg",
                                                                descripcion: ""
                                                            }
                                                        }
                                                    },
                                                    2: {
                                                        accepted: [3],
                                                        elemento: {
                                                            tipo: "imagen",
                                                            estilo: "basica",
                                                            atributos: {
                                                                thumbnail: "img/leon_thumbnail.jpg",
                                                                url: "img/leon.jpg",
                                                                descripcion: ""
                                                            }
                                                        }
                                                    },
                                                    3: {
                                                        accepted: [2],
                                                        elemento: {
                                                            tipo: "imagen",
                                                            estilo: "basica",
                                                            atributos: {
                                                                thumbnail: "img/leon_thumbnail.jpg",
                                                                url: "img/leon.jpg",
                                                                descripcion: ""
                                                            }
                                                        }
                                                    },
                                                    4: {
                                                        accepted: [1],
                                                        elemento: {
                                                            tipo: "imagen",
                                                            estilo: "basica",
                                                            atributos: {
                                                                thumbnail: "img/leon_thumbnail.jpg",
                                                                url: "img/leon.jpg",
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
    }
}
 
