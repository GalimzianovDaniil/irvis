"use strict";


import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';


import {popupWindow}  from './parts/popupWindow';
import {popup}        from './parts/popup';
import {formsInit}    from './parts/formsInit';
import {tabsGlazzing} from './parts/tabsGlazzing';
import {calcPopup}    from './parts/calcPopup';

window.addEventListener('DOMContentLoaded', function(){
    window.globalObj = {};
    popupWindow();
    popup();
    formsInit();
    tabsGlazzing();
    calcPopup();
});