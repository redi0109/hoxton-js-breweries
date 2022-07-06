// Write your code here
import './style.css'

let state = {
USState: '',
breweries: [],
}

function getBreweries (state: String){
fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.USState}`)
.then(response => response.json())
.then(data => {
state.breweries = data
render()
})
}


function render (){

}

function listenToSelectStateForm (){
let formEl = document.querySelector<HTMLFormElement>('#select-state-form')
formEl?.addEventListener('submit', (event) => {
event.preventDefault()
let stateEl = document.querySelector('#select-state')
state.USState = stateEl?.value
render()
 
})
}
listenToSelectStateForm()