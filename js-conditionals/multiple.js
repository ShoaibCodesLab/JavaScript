const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true; 


if(salary > 20000 && height > 66){
    console.log('Su----patro');
}
else{
    console.log('onno patro khuji');
}

if(salary > 20000 || height > 66){
    console.log('eso baba kobul');
}
else{
    console.log('vaag tui mokbul');
}


/* ------ multiple condition------ */
if(salary > 20000 || height > 66 || isBCS == true){    /* jekono 1ta true hoilei hbe */
    console.log('Su----patro');
}
else{
    console.log('onno patro khuji');
}


if(salary > 20000 && height > 66 && isBCS == true){    /*sob guloi true hoite hbe */
    console.log('Su----patro');
}
else{
    console.log('onno patro khuji');
}


/*----------Complex condition--------*/
if((salary > 20000 && hasCar == true) || isBCS == true){    /* hoy 1st 2ta, noyto isBCS */
    console.log('tmr 14 gosti raji');
}
else{
    console.log('raji nah');
}

if((salary > 20000 || hasCar == true) && isBCS == true){    /* 1st 2tar 1ta hoilei hbe and BCS hote hbe */
    console.log('tmr 14 gosti raji');
}
else{
    console.log('raji nah');
}