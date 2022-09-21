function Reverse1(str){
    if(str.length<2 || typeof str !== "string" || !str){
        return "provide valid string";
    }
    let item = str.length - 1;
    let convert = [];
    for( i = item; i>=0; i--){
      convert.push(str[i]);
    }
    return convert.join('');
}

function Reverse2(str){
 return str.splict('').Reverse().join('');   
}

const reverse3 = str => [...str].reverse().join('');