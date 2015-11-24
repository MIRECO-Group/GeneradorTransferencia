/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var BASE_DATA = {
    layouts: {
        layout_portada: {
            tag: "dummy-layout"
        },
        layout_og_saberes: {
            tag: "layout_og_saberes"
        }
    },
    componentes: {
        organizador: {
            organizador_saberes: {
                tag: "organizador-tabs-superiores"
            }
        }
    }
};

function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}