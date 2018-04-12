import { person } from './person'
import _ from 'lodash';
export let employee = function(){

    let x = _.join(['Hello', person ], ' ');

    return x;
}