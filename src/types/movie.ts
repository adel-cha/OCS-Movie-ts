import Title from './Title'
interface Movie {
    detaillink:string,
    fullscreenimageurl:string,
    id:string,
    imageurl:string,
    subtitle:string,
    title:Array<Title>
}
export default Movie