import { data } from '../data/data.js'

const items = document.getElementById('items');
const templatecard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment()
let like = {};
document.addEventListener('DOMcontentLoaded', ()=> {
   loadata(data)

})

const loadata = data =>{
    data.array.forEach(personajes =>{
        const{id, name,img}= personajes
        templatecard.queryselector('h5').textcontent = name;
        templatecard.queryselector('img').setAttribute('src',imag);
        templatecard.queryselector('.btn-dark').dataset.id = id

        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}