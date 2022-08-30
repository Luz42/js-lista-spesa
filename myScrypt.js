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
const list = ['pane', 'acqua', 'riso', 'limone']
console.log(list)

//inizializzo il contatore (NECESSARIO) che verrà incrementato ad ogni ciclo
let i = 0
console.log(i)

//il contatore andrà a selezionare un elemento diverso della lista ad ogni ciclo, il quale verrà stampato
while(i < list.length){
   //fino al verificarsi della condizione

    console.log(list[i])
    //questo comando viene eseguito ad ogni ciclo

    i++
    //successivamente viene eseguito questo comando, NECESSARIO per far funzionare e poter uscire dal ciclo
}

//creare un elemento html

//inserirci all'interno i nomi della lista
