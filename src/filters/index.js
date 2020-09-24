//引入

import Vue from 'vue';

import {currency} from './number.js' 
Vue.filter('currency',currency)

import {fillzero} from './fillzero.js' 
Vue.filter('fillzero',fillzero)