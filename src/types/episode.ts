import Title from './Title';
interface Episode{
    duration:string,
    fullscreenimageurl: string,
    id:string,
    imageurl:string,
    menutitle:Title[],
    menutitlefocus:Title[],
    number:number,
    parentalrating:number,
    pitch:string,
    subtitle:string,
    subtitlefocus:string,
    summary:string,
    title:string
}
export default Episode;