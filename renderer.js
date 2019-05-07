// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function startAction() {
    const { remote } = require('electron')

    console.log(`request get function ${Date.now()}`)
    console.time('1')
    const { createObjects } = remote.getGlobal('mainProcessModule')
    console.timeEnd('1')
    console.log(`request get function End ${Date.now()}`)

    console.log(`request start function ${Date.now()}`)
    console.time('2')
    const obejcts = createObjects()
    console.timeEnd('2')
    console.log(`request start function End ${Date.now()}`)

    console.log(`request literate values ${Date.now()}`)
    console.time('3')
    for (const obejct of obejcts) {
        console.log(JSON.stringify(obejct))
    }
    console.timeEnd('3')
    console.log(`request literate values End ${Date.now()}`)
}

const divElement = document.createElement('div')
divElement.innerHTML = `We are using Node.js ${process.versions.node},
Chromium ${process.versions.chrome},
and Electron ${process.versions.electron}.`
document.body.appendChild(divElement)

const textElement = document.createElement('div')
textElement.setAttribute('class', 'count_down_cnt')
let value = 0
setInterval(() => {
    value ++
    textElement.innerHTML = value
}, 500)
document.body.appendChild(textElement)

const buttonContainerElement = document.createElement('div')
buttonContainerElement.setAttribute('class', 'button_cnt')
document.body.appendChild(buttonContainerElement)

const buttonElement = document.createElement('button')
buttonElement.setAttribute('class', 'button')
buttonElement.onclick = startAction
buttonElement.innerHTML = 'RemoteAction'
buttonContainerElement.appendChild(buttonElement)
