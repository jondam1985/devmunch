import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

class DB {
    constructor(){
        this.Get = Get;
        this.Create = Create;
        this.Delete = Delete;
        this.Update = Update;
    }    
}

export default DB