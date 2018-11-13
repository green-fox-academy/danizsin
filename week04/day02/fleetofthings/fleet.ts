import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    print(){
        this.things.forEach((e,i,a)=>{
            if(e.completed){
                console.log(`${i+1}. [x] ${e.name}`);
            } else {
                console.log(`${i+1}. [ ] ${e.name}`);
            }
        });
    }
}

export { Fleet };