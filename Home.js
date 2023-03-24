// import { useNavigate } from "react-router-dom";
import './Home.css'
const Home= ()=>{
// const navigate = useNavigate();
// const clickHandler =()=>{

// }
return (
    <>
<div className="container-fluid bg-light">
    <div className="col-md-6 ">
        <ul className="ul">
            <li>Home</li>
            <li>About</li>
            <li>haha</li>
            <li>HIHI</li>
        </ul>
    </div>
    <div className="col-md-6 text-end">
        <button type="button" className='btn btn-info m-2' ><a href="/register">Signup</a></button>
        <button type="button" className="btn btn-success"><a href="/login">Login</a></button>
    </div>
</div>
</>
)

}
export default Home;