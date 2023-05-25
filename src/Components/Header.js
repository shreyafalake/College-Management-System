import React from "react";
import { Card, CardBody } from "reactstrap";


function Header({name,title})
{
     return(
     <div>
       <Card className="my-2 bg-info border border-danger" >
         <CardBody>
         
            <h1 className="text-center my-5"><img src="Image/mumbai.png" alt="college" height="200"  width="200" border="dark"/><u><b>  Welcome to Vidyalankar College Website.</b></u></h1>
         </CardBody>
       </Card>
     </div>
     );
}
export default Header;