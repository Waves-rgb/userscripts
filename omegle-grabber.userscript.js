// ==UserScript==
// @name         Omegle IP Grabber
// @version      1.0
// @description  Grabs the IP and looks up information.
// @author       Waves-rgb
// @match        https://www.omegle.com/
// @icon         https://www.google.com/s2/favicons?domain=omegle.com
// @grant        none
// @
// ==/UserScript==

function putMessage(text) {
    const logBox = document.querySelector('.logbox')
    const messageBox = logBox.children[0]

    const msgContainer = document.createElement('div')
    msgContainer.setAttribute('class', 'logitem')

    const msg = document.createElement('p')

    msg.setAttribute('class', 'statuslog')
    msg.innerText = text

    msgContainer.appendChild(msg)
    messageBox.appendChild(msgContainer)

    return msgContainer;
}

(() => {
    
})()