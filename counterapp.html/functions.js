/*function listOfItems(arr){
for(i=0;i<arr.length;i++){
    console.log(i+1, arr[i])
}
}
var students_names=["Mumbus","kabz","shelly"]
listOfItems(students_names)*/

function finder(word,match){
for(var i=0;i<word.length;i++){
    if(word[i]==match){
        console.log("found the match at:",i)
   
    }else{
        console.log("-----No match found at",i)
    }

        
    
}
}

finder("test","t")