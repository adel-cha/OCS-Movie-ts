import Episode from './episode'
import Title from './Title'
interface Season {
    id:string,
    episodes:Episode[],
    number:number,
    imageurl:string,
    pitch:string,
    subtitle:string,
    menutitle:Title[]
}
export default Season