// Write your code here
import './style.css'

let state = {
USState: '',
breweries: [],
}

function render (){

}

function listenToSelectStateForm (){
let formEl = document.querySelector('#select-state-form')
formEl?.addEventListener('submit', (event) => {
event.preventDefault()
let stateEl = document.querySelector('#select-state')
state.USState = stateEl?.value
render()
 
})
}
listenToSelectStateForm()