
import {MDCRipple} from '@material/ripple';
import {MDCSwitch} from '@material/switch';
import {MDCList} from '@material/list';
import {MDCSelect} from '@material/select';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCChipSet} from '@material/chips';
import {MDCTextField} from '@material/textfield';
import {MDCDialog} from '@material/dialog';

const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
const select = new MDCSelect(document.querySelector('.mdc-select'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
//const MDCComponent = require('mdc-base').MDCComponent;
//const MDCFoundation = require('mdc-base').MDCFoundation;
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));


new MDCList(document.querySelector('.mdc-list'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

dialog.listen('MDCDialog:opened', () => {
  list.layout();
});


console.log('hello world 123');