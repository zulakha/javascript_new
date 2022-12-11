// function listarrayitems(arr){
//     for(var i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// var colors=['red','blue','black','orange'];
// listarrayitems(colors);


// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'red') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
// }
function letterFinder(word,match){
    for( var i =0 ;i< word.length ;i++){
        if( word[i]==match){
            console.log('found the',match,'at',i)
        }else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test","t")