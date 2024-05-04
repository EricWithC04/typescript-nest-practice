import './style.css'
import { name, age } from './bases/01-types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello my name is ${ name } and i am ${ age } years old!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>
`
