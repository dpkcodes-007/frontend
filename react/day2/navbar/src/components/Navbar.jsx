import images from '../assets/hero.png'
const Navbar = ()=>{

return (
    <>
    <div className="parent">
    <div className="logo">
        <img className='img'  src={images} alt="" />
      </div>
      <div className="details">
        <a href="">Home</a> |
        <a href="">Contact</a> |
        <a href="">Reach us</a> |
        <a href="">login</a> 
      </div>
    
    </div>
    
</>

)


}
export default Navbar