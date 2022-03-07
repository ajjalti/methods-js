// function for validate age : 
function validAge(n){
    if(isNaN(n)){
        return false;
    }
    if(n<=0){
        return false;
    }
    if(n>=18){
        return true
    }
    else{
        return false;
    }
}
//tests :
validAge(12); // => l'utilisateur est encore mineur
validAge("a"); // => sauf les nombres sont autorisé!
validAge("0"); // => le nombre n'est pas valid!!
validAge("18"); // => l'utilisateur est un(e) adulte
