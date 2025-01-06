import Frontpage from "../Frontpage";
import Navbar from "../Navbar";


export default function HomePage(){

    return (
        <div className="container-fluid">
            <Navbar/>
            <Frontpage/>
        </div>
    );
}