function add( a, b) {

    var c= a+b;
    console.log('add', c);
    return c;

}

function sub(a, b) {

     const c= a-b;
     console.log('sub' ,c)
     return c;
}


module.exports = {
    add: add,
    sub : sub

};

