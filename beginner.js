console.log(2+2)
console.log(1+2+3+4+5)
console.log(20-10)
console.log(2*3)
console.log(8/2)
console.log(3>2)
console.log(2>3)
console.log(10==10)

// conditional statements
//if
var place='first';

if (place=='first'){
    console.log('gold')
}else if(place=='second'){
    console.log('silver')
}else if(place=='third'){
    console.log('bronze')
}else{
    console.log('no medal')
}

//switch
switch(place){
    case 'first':
        console.log('Gold');
        break;

    case 'second':
        console.log('silver');
        break;

        case 'third':
            console.log('Bronze');
            break;

            default:
                console.log('No medal')
    

}