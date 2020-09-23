export default function fetch(uid : string) : PostData[] {
    
    return [];
}

export class PostData {
    id : string;
    title : string;
    content : string;
    postedAt : Date;

    constructor(id : string, title : string, content : string, postedAt : Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.postedAt = postedAt;
    }
}