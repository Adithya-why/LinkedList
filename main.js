const node = function(value=null,nextNode=null){
    return {value,nextNode};
}


//console.log(node("hhhaaa",2));


const linkedList = function(){
    let head = null;

    const display = function(){
        console.log(head);
    }

    const create = function(value){
        head = node(value);
    }


    const append = function(value){
        head.nextNode = node(value);
    }

    const prepend = function(value){
        const temp = node(value,head);
        head = temp;
    }









    return {create,display,append,prepend}
}


let x = linkedList();
x.create("aaaaaaa");
x.display();
x.append("bbbbbbb");
x.display();
x.prepend("ooooooo");
x.display();