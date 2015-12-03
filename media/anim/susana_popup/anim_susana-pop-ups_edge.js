/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'anim_susana',
                            symbolName: 'anim_susana',
                            type: 'rect',
                            rect: ['115', '1', '491', '423', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '605px', '425px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 13068,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "anim_susana": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '-50px', '550px', '557px', 'auto', 'auto'],
                            id: 'circulo_azul',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circulo_azul.png', '0px', '0px']
                        },
                        {
                            rect: ['156px', '-32px', '156px', '295px', 'auto', 'auto'],
                            id: 'cabello_atras',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cabello_atras.png', '0px', '0px']
                        },
                        {
                            id: 'brazo_mov',
                            symbolName: 'brazo_mov',
                            rect: ['61px', '41px', '75', '377', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['145px', '43px', '370px', '441px', 'auto', 'auto'],
                            id: 'torzo_susana',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/torzo_susana.png', '0px', '0px']
                        },
                        {
                            id: 'cabeza_complet',
                            symbolName: 'cabeza_complet',
                            rect: ['237', '4', '203', '249', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '491px', '423px']
                        }
                    }
                },
                timeline: {
                    duration: 13068,
                    autoPlay: true,
                    labels: {
                        "repeat-head": 20
                    },
                    data: [
                        [
                            "eid887",
                            "rotateZ",
                            3058,
                            263,
                            "linear",
                            "${cabeza_complet}",
                            '0deg',
                            '-7deg'
                        ],
                        [
                            "eid893",
                            "rotateZ",
                            9891,
                            241,
                            "linear",
                            "${cabeza_complet}",
                            '-7deg',
                            '0deg'
                        ],
                        [
                            "eid884",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1077",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1078",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1079",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1080",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1081",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza_complet}",
                            [31,64],
                            [31,64],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid890",
                            "location",
                            3058,
                            263,
                            "linear",
                            "${cabello_atras}",
                            [[234, 115.5, 0, 0, 0, 0,0],[225, 116.5, 0, 0, 0, 0,9.06]]
                        ],
                        [
                            "eid896",
                            "location",
                            9891,
                            241,
                            "linear",
                            "${cabello_atras}",
                            [[225, 116.5, 0, 0, 0, 0,0],[233.6, 115.25, 0, 0, 0, 0,8.69]]
                        ]
                    ]
                }
            },
            "cabeza_complet": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-30px', '-31px', '200px', '240px', 'auto', 'auto'],
                            id: 'cabeza_susana',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cabeza_susana.png', '0px', '0px']
                        },
                        {
                            id: 'boquitas',
                            symbolName: 'boquitas',
                            rect: ['0', '4', '140', '168', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['-5px', '68px', '89px', '29px', 'auto', 'auto'],
                            id: 'ojos',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ojos.png', '0px', '0px']
                        },
                        {
                            id: 'mov_cejas',
                            symbolName: 'mov_cejas',
                            rect: ['10', '60', '62', '16', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'mov_pepasOjos',
                            symbolName: 'mov_pepasOjos',
                            rect: ['18', '77', '44', '10', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'parpadeo',
                            symbolName: 'parpadeo',
                            rect: ['8', '73', '62', '20', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['-18px', '-53px', '260px', '356px', 'auto', 'auto'],
                            id: 'cabello_delante',
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cabello_delante.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '203px', '249px']
                        }
                    }
                },
                timeline: {
                    duration: 8226.7306773,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mov_cejas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            id: 'ceja_izq',
                            type: 'image',
                            rect: ['23px', '2px', '46px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ceja_izq.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            id: 'ceja_der',
                            type: 'image',
                            rect: ['-4px', '-3px', '28px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ceja_der.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 8226.7306773,
                    autoPlay: true,
                    labels: {
                        "repeat-cejas": 35
                    },
                    data: [
                        [
                            "eid138",
                            "location",
                            0,
                            0,
                            "linear",
                            "${ceja_izq}",
                            [[46, 10.5, 0, 0, 0, 0,0],[46, 10.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid144",
                            "location",
                            1569,
                            138,
                            "linear",
                            "${ceja_izq}",
                            [[46, 10.5, 0, 0, 0, 0,0],[46, 7.5, 0, 0, 0, 0,3]]
                        ],
                        [
                            "eid150",
                            "location",
                            5611,
                            230,
                            "linear",
                            "${ceja_izq}",
                            [[46, 7.5, 0, 0, 0, 0,0],[46, 10.95, 0, 0, 0, 0,3.45]]
                        ],
                        [
                            "eid139",
                            "location",
                            0,
                            0,
                            "linear",
                            "${ceja_der}",
                            [[10, 8, 0, 0, 0, 0,0],[10, 8, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid145",
                            "location",
                            1569,
                            138,
                            "linear",
                            "${ceja_der}",
                            [[10, 8, 0, 0, 0, 0,0],[10, 5, 0, 0, 0, 0,3]]
                        ],
                        [
                            "eid151",
                            "location",
                            5611,
                            230,
                            "linear",
                            "${ceja_der}",
                            [[10, 5, 0, 0, 0, 0,0],[10, 7.7, 0, 0, 0, 0,2.7]]
                        ]
                    ]
                }
            },
            "mov_pepasOjos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['37px', '3px', '7px', '7px', 'auto', 'auto'],
                            id: 'pupila_susana',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pupila_susana.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '7px', '7px', 'auto', 'auto'],
                            id: 'pupila_susana2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pupila_susana.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '10px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "againEyes": 40
                    },
                    data: [
                        [
                            "eid1",
                            "location",
                            0,
                            0,
                            "linear",
                            "${pupila_susana}",
                            [[40.5, 6.5, 0, 0, 0, 0,0],[40.5, 6.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid7",
                            "location",
                            2340,
                            300,
                            "linear",
                            "${pupila_susana}",
                            [[40.5, 6.5, 0, 0, 0, 0,0],[36.5, 5.5, 0, 0, 0, 0,4.12]]
                        ],
                        [
                            "eid16",
                            "location",
                            6500,
                            300,
                            "linear",
                            "${pupila_susana}",
                            [[36.5, 5.5, 0, 0, 0, 0,0],[40.5, 6.5, 0, 0, 0, 0,4.12]]
                        ],
                        [
                            "eid2",
                            "location",
                            0,
                            0,
                            "linear",
                            "${pupila_susana2}",
                            [[3.5, 3.5, 0, 0, 0, 0,0],[3.5, 3.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid8",
                            "location",
                            2340,
                            300,
                            "linear",
                            "${pupila_susana2}",
                            [[3.5, 3.5, 0, 0, 0, 0,0],[-0.5, 2.5, 0, 0, 0, 0,4.12]]
                        ],
                        [
                            "eid15",
                            "location",
                            6500,
                            300,
                            "linear",
                            "${pupila_susana2}",
                            [[-0.5, 2.5, 0, 0, 0, 0,0],[3.5, 3.5, 0, 0, 0, 0,4.12]]
                        ]
                    ]
                }
            },
            "parpadeo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            type: 'image',
                            rect: ['-12px', '-2px', '89px', '29px', 'auto', 'auto'],
                            id: 'parpados2',
                            display: 'none',
                            clip: 'rect(0px 89px 4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/parpados2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 6195,
                    autoPlay: true,
                    labels: {
                        "repeat": 40
                    },
                    data: [
                        [
                            "eid23",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1082",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1083",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1084",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1085",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1086",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [43,17],
                            [43,17],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1070,
                            0,
                            "linear",
                            "${parpados2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${parpados2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${parpados2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            1930,
                            0,
                            "linear",
                            "${parpados2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            4080,
                            0,
                            "linear",
                            "${parpados2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            4260,
                            0,
                            "linear",
                            "${parpados2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            5915,
                            0,
                            "linear",
                            "${parpados2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            6095,
                            0,
                            "linear",
                            "${parpados2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${parpados2}",
                            [0,89,4,0],
                            [0,89,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid31",
                            "clip",
                            1070,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,4,0],
                            [0,89,29,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid32",
                            "clip",
                            1160,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,29,0],
                            [0,89,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid33",
                            "clip",
                            1750,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,4,0],
                            [0,89,29,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid34",
                            "clip",
                            1840,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,29,0],
                            [0,89,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid62",
                            "clip",
                            4080,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,4,0],
                            [0,89,29,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid63",
                            "clip",
                            4170,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,29,0],
                            [0,89,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid64",
                            "clip",
                            5915,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,4,0],
                            [0,89,29,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid65",
                            "clip",
                            6005,
                            90,
                            "linear",
                            "${parpados2}",
                            [0,89,29,0],
                            [0,89,4,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "boquitas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            id: 'bocaM',
                            type: 'image',
                            rect: ['-30px', '-36px', '200px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bocaM.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            rect: ['-30px', '-36px', '200px', '240px', 'auto', 'auto'],
                            display: 'none',
                            id: 'bocaI',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bocaI.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 7361.5856718922,
                    autoPlay: true,
                    labels: {
                        "repeatboca": 38
                    },
                    data: [
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bocaI}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${bocaI}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${bocaI}",
                            'block',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            7322,
                            0,
                            "linear",
                            "${bocaI}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bocaI}",
                            '0',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            2750,
                            100,
                            "linear",
                            "${bocaI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            7250,
                            72,
                            "linear",
                            "${bocaI}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "brazo_mov": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['139px', '115px', '99px', '320px', 'auto', 'auto'],
                            id: 'brazo_susana',
                            transform: [[], ['42'], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brazo_susana.png', '0px', '0px']
                        },
                        {
                            rect: ['141px', '277px', '106px', '295px', 'auto', 'auto'],
                            id: 'antebrazo2',
                            transform: [[], ['135'], [], ['0.7', '0.7']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/antebrazo.png', '0px', '0px']
                        },
                        {
                            rect: ['-8px', '310px', '67px', '184px', 'auto', 'auto'],
                            transform: [[], ['114'], [], ['0.7', '0.7']],
                            id: 'mano2_susana',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mano2_susana.png', '0px', '0px']
                        },
                        {
                            rect: ['-82px', '149px', '84px', '163px', 'auto', 'auto'],
                            transform: [[], ['128'], [], ['0.7', '0.7']],
                            type: 'image',
                            id: 'mano1_susana',
                            opacity: '0.68275862068966',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mano1_susana.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '75px', '377px']
                        }
                    }
                },
                timeline: {
                    duration: 11949,
                    autoPlay: true,
                    labels: {
                        "repeat-hand": 20
                    },
                    data: [
                        [
                            "eid403",
                            "rotateZ",
                            4560,
                            157,
                            "linear",
                            "${mano1_susana}",
                            '128deg',
                            '108deg'
                        ],
                        [
                            "eid404",
                            "rotateZ",
                            4717,
                            117,
                            "linear",
                            "${mano1_susana}",
                            '108deg',
                            '128deg'
                        ],
                        [
                            "eid412",
                            "rotateZ",
                            7095,
                            182,
                            "linear",
                            "${mano1_susana}",
                            '128deg',
                            '105deg'
                        ],
                        [
                            "eid413",
                            "rotateZ",
                            7277,
                            130,
                            "linear",
                            "${mano1_susana}",
                            '105deg',
                            '128deg'
                        ],
                        [
                            "eid322",
                            "rotateZ",
                            3750,
                            381,
                            "linear",
                            "${brazo_susana}",
                            '0deg',
                            '42deg'
                        ],
                        [
                            "eid477",
                            "rotateZ",
                            11000,
                            362,
                            "linear",
                            "${brazo_susana}",
                            '42deg',
                            '0deg'
                        ],
                        [
                            "eid394",
                            "opacity",
                            4312,
                            79,
                            "linear",
                            "${mano2_susana}",
                            '1',
                            '0'
                        ],
                        [
                            "eid420",
                            "opacity",
                            8057,
                            117,
                            "linear",
                            "${mano2_susana}",
                            '0',
                            '1'
                        ],
                        [
                            "eid390",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1087",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1088",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1089",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1090",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1091",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            [57,10],
                            [57,10],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid335",
                            "location",
                            3750,
                            34,
                            "linear",
                            "${mano2_susana}",
                            [[26.2, 324.72, 0, 0, 0, 0,0],[17.16, 322.72, 0, 0, 0, 0,9.26]]
                        ],
                        [
                            "eid340",
                            "location",
                            3784,
                            32,
                            "linear",
                            "${mano2_susana}",
                            [[17.16, 322.72, -9.44, -8.79, 0, 0,0],[6.27, 321.72, 0, 0, 0, 0,11.25]]
                        ],
                        [
                            "eid341",
                            "location",
                            3816,
                            47,
                            "linear",
                            "${mano2_susana}",
                            [[6.27, 321.72, -13.36, -15.49, 0, 0,0],[-7.69, 318.72, 0, 0, 0, 0,14.84]]
                        ],
                        [
                            "eid342",
                            "location",
                            3863,
                            47,
                            "linear",
                            "${mano2_susana}",
                            [[-7.69, 318.72, -10.99, -18.84, 0, 0,0],[-18.33, 315.72, 0, 0, 0, 0,12.09]]
                        ],
                        [
                            "eid343",
                            "location",
                            3910,
                            22,
                            "linear",
                            "${mano2_susana}",
                            [[-18.33, 315.72, -3.93, -11.63, 0, 0,0],[-22.72, 312.72, 0, 0, 0, 0,5.84]]
                        ],
                        [
                            "eid345",
                            "location",
                            3932,
                            28,
                            "linear",
                            "${mano2_susana}",
                            [[-22.72, 312.72, -4.58, -9.57, 0, 0,0],[-26.84, 292.72, 0, 0, 0, 0,20.44]]
                        ],
                        [
                            "eid344",
                            "location",
                            3960,
                            171,
                            "linear",
                            "${mano2_susana}",
                            [[-26.84, 292.72, -7.3, -41.73, 0, 0,0],[-31.96, 250.08, -41.64, -112.59, -5.17, -13.98,42.96],[-32.84, 165.1, 0, 0, 0, 0,129.05]]
                        ],
                        [
                            "eid696",
                            "location",
                            11000,
                            44,
                            "linear",
                            "${mano2_susana}",
                            [[-32.84, 165.1, 0, 0, 0, 0,0],[-33.83, 199.72, 12.41, 33.28, 12.41, 33.28,34.92]]
                        ],
                        [
                            "eid697",
                            "location",
                            11044,
                            68,
                            "linear",
                            "${mano2_susana}",
                            [[-33.83, 199.72, 8.34, 22.38, 46.76, 125.45,0],[-35.83, 247.72, 12.68, 28.16, 12.68, 28.16,48.26]]
                        ],
                        [
                            "eid698",
                            "location",
                            11112,
                            47,
                            "linear",
                            "${mano2_susana}",
                            [[-35.83, 247.72, 7.24, 16.08, 58.39, 129.7,0],[-29.83, 283.72, 9.03, 15.07, 9.03, 15.07,36.56]]
                        ],
                        [
                            "eid699",
                            "location",
                            11159,
                            40,
                            "linear",
                            "${mano2_susana}",
                            [[-29.83, 283.72, 7.05, 11.77, 63.82, 106.49,0],[-22.33, 312.72, 7.88, 9.67, 7.88, 9.67,30.01]]
                        ],
                        [
                            "eid700",
                            "location",
                            11199,
                            41,
                            "linear",
                            "${mano2_susana}",
                            [[-22.33, 312.72, 8.69, 10.67, 63.4, 77.84,0],[-10.83, 316.72, 9.18, 6.59, 9.18, 6.59,12.38]]
                        ],
                        [
                            "eid701",
                            "location",
                            11240,
                            26,
                            "linear",
                            "${mano2_susana}",
                            [[-10.83, 316.72, 6.71, 4.81, 57.8, 41.49,0],[-4.19, 319.72, 6.54, 3.35, 6.54, 3.35,7.3]]
                        ],
                        [
                            "eid702",
                            "location",
                            11266,
                            32,
                            "linear",
                            "${mano2_susana}",
                            [[-4.19, 319.72, 8.73, 4.47, 49.85, 25.5,0],[5.17, 321.72, 8.11, 2.51, 8.11, 2.51,9.61]]
                        ],
                        [
                            "eid703",
                            "location",
                            11298,
                            27,
                            "linear",
                            "${mano2_susana}",
                            [[5.17, 321.72, 7.54, 2.33, 38.16, 11.82,0],[13.17, 322.72, 6.5, 1.33, 6.5, 1.33,8.07]]
                        ],
                        [
                            "eid704",
                            "location",
                            11325,
                            56,
                            "linear",
                            "${mano2_susana}",
                            [[13.17, 322.72, 26.42, 5.41, 26.42, 5.41,0],[26.67, 324.75, 0, 0, 0, 0,13.66]]
                        ],
                        [
                            "eid196",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1092",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1093",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1094",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1095",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1096",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${brazo_susana}",
                            [47,14],
                            [47,14],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid212",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1097",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1098",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1099",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1100",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1101",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${mano2_susana}",
                            [51,8],
                            [51,8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid195",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1102",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1103",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1104",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1105",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1106",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${antebrazo2}",
                            [43,15],
                            [43,15],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid399",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mano1_susana}",
                            'none',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            4312,
                            0,
                            "linear",
                            "${mano1_susana}",
                            'none',
                            'block'
                        ],
                        [
                            "eid417",
                            "display",
                            8174,
                            0,
                            "linear",
                            "${mano1_susana}",
                            'block',
                            'none'
                        ],
                        [
                            "eid331",
                            "rotateZ",
                            3932,
                            199,
                            "linear",
                            "${antebrazo2}",
                            '88deg',
                            '135deg'
                        ],
                        [
                            "eid530",
                            "rotateZ",
                            11000,
                            199,
                            "linear",
                            "${antebrazo2}",
                            '135deg',
                            '88deg'
                        ],
                        [
                            "eid325",
                            "location",
                            3750,
                            381,
                            "linear",
                            "${antebrazo2}",
                            [[186.58, 321.25, 0, 0, 0, 0,0],[132.04, 308.54, -83.95, -31.87, -77.82, -29.54,56.12],[78.58, 280.25, 0, 0, 0, 0,116.71]]
                        ],
                        [
                            "eid556",
                            "location",
                            11000,
                            381,
                            "linear",
                            "${antebrazo2}",
                            [[78.58, 280.25, 0, 0, 0, 0,0],[132.04, 308.54, 77.82, 29.54, 83.95, 31.87,60.59],[186.58, 321.25, 0, 0, 0, 0,116.71]]
                        ],
                        [
                            "eid397",
                            "opacity",
                            4312,
                            79,
                            "linear",
                            "${mano1_susana}",
                            '0.68275862068966',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            8095,
                            79,
                            "linear",
                            "${mano1_susana}",
                            '1',
                            '0'
                        ],
                        [
                            "eid235",
                            "rotateZ",
                            1575,
                            925,
                            "easeOutQuart",
                            "${mano2_susana}",
                            '110deg',
                            '82deg'
                        ],
                        [
                            "eid339",
                            "rotateZ",
                            3932,
                            199,
                            "linear",
                            "${mano2_susana}",
                            '82deg',
                            '114deg'
                        ],
                        [
                            "eid369",
                            "rotateZ",
                            4250,
                            141,
                            "linear",
                            "${mano2_susana}",
                            '114deg',
                            '133deg'
                        ],
                        [
                            "eid449",
                            "rotateZ",
                            8227,
                            145,
                            "linear",
                            "${mano2_susana}",
                            '133deg',
                            '114deg'
                        ],
                        [
                            "eid615",
                            "rotateZ",
                            11000,
                            199,
                            "linear",
                            "${mano2_susana}",
                            '114deg',
                            '82deg'
                        ],
                        [
                            "eid707",
                            "rotateZ",
                            11564,
                            171,
                            "easeOutQuart",
                            "${mano2_susana}",
                            '82deg',
                            '110deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anim_susana-pop-ups_edgeActions.js");
})("EDGE-125954754");
