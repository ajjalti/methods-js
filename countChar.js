function countChar(chaine,ch){
    var count=0;
    for (var i of chaine){
        if(i==ch){
            count+=1;
        }
    }
    return count;
}