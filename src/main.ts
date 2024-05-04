import './style.css'
// import { name, age } from './bases/01-types';
import { bulbasaur, pokemons } from './bases/02-objects';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${ bulbasaur.name } ${ pokemons[0].name }!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>
`
