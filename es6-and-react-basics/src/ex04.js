// without 'export' attribute, a member (like this function) becomes a local member of the module

function welcome() {
    return 'Wecome to ReactJS';
}

// by adding the export prefix to a member (like this function), it becomes accessible to any part of your application, by importing the same
export function greet(name='friend', city='your city') {
    return `Hello ${name}, how's weather in ${city}`;
}

export const AUTHOR_NAME = 'Vinod Kumar';
export const AUTHOR_EMAIL = 'vinod@vinod.co';

export default function version() {
    console.log('Version 1.0');
}