import "bootstrap";
import "./style.css";


  let pronoun = ['el', 'tú','nuestro'];
  let adj = ['pequeño', 'gran','errante'];
  let noun = ['gamer', 'gato','windrunner'];
  const dominio = '.com'


for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
      for (let w = 0; w < noun.length; w++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[w]}${dominio}`)
        
      }
  }
  
}
