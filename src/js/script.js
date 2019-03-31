"use strict";


import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';


import {popupWindow} from './parts/popupWindow';
import {popup}       from './parts/popup';
import {formsInit}   from './parts/formsInit';

window.addEventListener('DOMContentLoaded', function(){
    popupWindow();
    popup();
    formsInit();
});