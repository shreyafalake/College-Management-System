import {Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn Code with Shreya";
},[]);
    return(  
    <div >
       <Card className="text-center" color="warning ml-2" border="dark" >
        <CardBody className="border border-dark">
            <h3><CardTitle><b>Vidyalankar College of Engineering.</b></CardTitle></h3>
        </CardBody>
        </Card> 
        <img src="Image/college.jpg" alt="college" height="350"  width="735"/>
        <h5><CardTitle className="text-center" color="warning ml-2" border="dark" ><b>College Campus.</b></CardTitle></h5>
        <img src="Image/campus.jpg" alt="college" height="200"  width="500"/>
        <h5><CardTitle className="text-center" color="warning ml-2" border="dark" ><b>College Ground.</b></CardTitle></h5>
        <img src="Image/ground.webp" alt="college" height="200"  width="500"/>
        <h5><CardTitle className="text-center" color="warning ml-2" border="dark" ><b>College Library.</b></CardTitle></h5>
        <img src="Image/library.jpg" alt="college" height="200"  width="500"/>
        <h5><CardTitle className="text-center" color="warning ml-2" border="dark" ><b>College Canteen.</b></CardTitle></h5>
        <img src="Image/canteen.jpg" alt="college" height="200"  width="500"/>
     </div>
    );
};
export default Home;