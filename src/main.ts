import './style.css'
// import { name, age } from './bases/01-types';
// import { bulbasaur, pokemons } from './bases/02-objects';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${ charmander.name } ${ charmander.id }!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>
`
