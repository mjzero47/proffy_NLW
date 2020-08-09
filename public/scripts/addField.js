//Procurar o butao
document.querySelector('#add-time')
//quando cllicar no botao 
.addEventListener('click', cloneField)


//executar uma acao
function cloneField() {
    //dublicar campos. que campos? 
   const newFielContainer = document.querySelector('.schedule-item').cloneNode(true) 
   
    //limpe os caompos. que campos
    const fields = newFielContainer.querySelectorAll('input')
    //para cada campos limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ''
    })


     //colocar na pagina: onde ? 
     document.querySelector('#schedule-items').appendChild(newFielContainer)
    
}




