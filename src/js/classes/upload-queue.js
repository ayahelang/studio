export default class UploadQueue{

    constructor(maxConcurrent=2){
        this.maxConcurrent=maxConcurrent;
        this.running=0;
        this.queue=[];
    }

    add(task){
        this.queue.push(task);
        this.next();
    }

    async next(){
        if(this.running>=this.maxConcurrent){
            return;
        }

        const task=this.queue.shift();

        if(!task){
            return;
        }

        this.running++;

        try{
            await task();
        }catch(error){
            console.error(error);
        }

        this.running--;

        this.next();
    }

}
