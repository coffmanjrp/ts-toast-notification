"use strict";
var button = document.getElementById('button');
var toasts = document.getElementById('toasts');
var messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
];
var types = ['info', 'success', 'error'];
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
function createNotification(message, type) {
    if (message === void 0) { message = null; }
    if (type === void 0) { type = null; }
    var notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type || getRandomType());
    notif.innerText = message || getRandomMessage();
    toasts.appendChild(notif);
    setTimeout(function () {
        notif.remove();
    }, 3000);
}
button.addEventListener('click', function () { return createNotification(); });
