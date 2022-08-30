console.log('JS-OK')
/*Ciao ragazze e ciao ragazzi!

Consegna:
Data una lista della spesa
stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente
con un ciclo while.

Consigli:

- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while

- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/


//creo la lista della spesa
const list = ['pane', 'acqua', 'riso', 'limone', 'pasta', 'sapone']
console.log(list)

let containerHTML = document.querySelector('.ae-lista')
console.log(containerHTML)

//inizializzo il contatore (NECESSARIO) che verrà incrementato ad ogni ciclo

let i = 0
console.log(i)
//il contatore andrà a selezionare un elemento diverso della lista ad ogni ciclo, il quale verrà stampato
    while(i < list.length){
    //fino al verificarsi della condizione
     containerHTML.innerHTML += `<li class="border-bottom border-dark py-2 border-2">${list[i]}</li>`
     //questo comando viene eseguito ad ogni ciclo

     i++
     //successivamente viene eseguito questo comando, NECESSARIO per far funzionare e poter uscire dal ciclo
    }

const clickAddElement = document.getElementById('requestButton')


//al click
clickAddElement.addEventListener('click',
    function(){
        
        //si prende il nuovo valore/contenuto
        const newElement = document.getElementById('newElement')
        let addElement = newElement.value
        console.log(addElement)
        
        //se il valore è presente nell'input
        if(addElement){
            //si svuota la vecchia lista
            containerHTML.innerHTML = ''
            //allora verrà aggiunto nella lista
            list.push(addElement)
            console.log(list)

            //quindi la lista verrà stampata
            i = 0
            console.log(i)

            while(i < list.length){
                //perchè non funziona la condizione??????????????????????????
                if(addElement !== list.includes(i)){
                    containerHTML.innerHTML += `<li class="border-bottom border-dark py-2 border-2">${list[i]}</li>`
                    i++
                }
            }
        }
});
//prende il valore dell'input

//lo inserisce nella lista
