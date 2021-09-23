import Season from './season';
import Title from './Title';

interface Serie {
    categoryID:number,
    contents:{
        fullscreenimageurl:string,
        detaillink:string,
        id:string,
        imageurl:string,
        subtitle:string,
        title:Title[],
        seasons:Season[],
    }
    parentalrating:number,
    template:string
    
}
export default Serie