//Single Linked List is a linear data structure where the data refers to the next pointer here Node. In linked list data can be inserted and removed with O(1)
//Time complexity but in arrays accessing an element takes O(1) time but in linked list time consuming. Inserting of data in Arrays at first position takes O(N)
// In Linked list takes O(1) time for inserting at first and End

//S.no    OperationType     Arrays     SingleLinkedList     DoubleLinkedList
// 1)        push            O(1)           O(1)                   O(1)
// 2)        pop             O(1)           O(1)                   O(1)
// 3)        unshift         O(N)           O(1)                   O(1)
// 4)        shift           O(N)           O(1)                   O(1)
// 5)        access          O(1)           O(N)                   O(N)


//Array methods Time Complexities
//concat => O(N)
//slice  => O(N)
//splice => O(N)
//sort   => O(N*logN)
//indexOf=> O(N)
//forEach => O(N)
//High order functions: map, filter, every, some, reduce => O(N)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }else{
            let current = this.head;
            let newTail = this.head;
            while(current.next !== null){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(!this.length){
                this.head = null;
                this.tail = null;
            }
            return this;
        }
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head){
            return undefined;
        }else{
            let currentHead = this.head.next;
            this.head = currentHead;
            this.length--;
            if(!this.length){
                this.head = null;
                this.tail = null;
            }
            return this;
        }
    }
    get(index){
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    insertAt(index, val){
        if(index < 0 || index > this.length){
            return false;
        }else if(index === 0){
            return !!this.unshift(val);
        }else if(index === this.length){
            return !!this.push(val);
        }else{
            let node = new Node(val);
            let prevNode = this.get(index-1);
            let nextNode = prevNode.next;
            prevNode.next = node;
            node.next = nextNode;
            this.length++;
            return true;
        }
    }
    removeAt(index){
        if(index < 0 || index >= this.length){
            return false;
        }else if(index === 0){
            return !!this.shift();
        }else if(index === this.length-1){
            return !!this.pop();
        }else{
            let prevNode = this.get(index-1);
            let nextNode = prevNode.next;
            prevNode.next = nextNode.next;
            this.length--;
        }
        return this;
    }
}