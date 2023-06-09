"use strict"



const node = function(value=null,nextNode=null){
    return {value,nextNode};
}


//console.log(node("hhhaaa",2));


const linkedList = function(){
    let head = null;
    let tail = null;
    let size= 0;

    const display = function(){
        console.log(head);
    }

    const create = function(value){
        head = node(value);
        //tail = head;
        size++;
    }


    const append = function(value){
        //console.log(tail);
        if(tail!==null){
        tail.nextNode = node(value);
        tail = tail.nextNode;
        size++;
        }

        else{
            head.nextNode = node(value);
            tail = head.nextNode;
            size++;
        }
    }

    const prepend = function(value){
        const temp = node(value,head);
        head = temp;
        size++;
    }

    const sizeShow = function(){
        console.log(size);
    }

    const headShow = function(){
        console.log(head);
    }

    const tailShow = function(){
        console.log(tail);
    }

    const at = function(index){
        let i = 0;
        let temp = head;
       while(i<=index){
            if(i===index){

                console.log(temp);
                i++;
                return temp;
            }
            else{
                i++;
                temp = temp.nextNode;
            }
        }
    }



    const pop = function(){
        let newTail = at(size-2);
        tail = newTail;
        newTail.nextNode = null;
        size--;
        
    }

    const contains = function(val){
        let cont = false;
        for(let j=0;j<size;j++){
            let temp = at(j);
            if(temp.value == val){
                cont = true;
            }
        }
        return cont;
    }


    const find = function(val){
        let cont = false;
        let ind = null;
        for(let j=0;j<size;j++){
            let temp = at(j);
            if(temp.value == val){
                cont = true;
                ind = j;
            }
        }
        return {cont,ind};
    }



    const toString = function(){
        let str = "";
        for(let k=0;k<size;k++){
            let temp = at(k);
            str+=temp.value;
            str+=" -> ";
        }
        str+=null;

        return str;

    }








    return {create,display,append,prepend,sizeShow,headShow,tailShow,at,pop,contains,find,toString}
}


let x = linkedList();
x.create("A");
x.append("B");
x.append("C");
x.append("D");
x.append("E");
x.prepend("aaahahaha");
console.log(x.toString());

