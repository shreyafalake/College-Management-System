import React from "react";
import {ListGroup,ListGroupItem} from 'reactstrap';

const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem className="bg-warning border border-dark" tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem className="bg-warning border border-dark" tag="a" href="/add-student">Add Student</ListGroupItem>  
            <ListGroupItem className="bg-warning border border-dark" tag="a" href="/update-students">Update Student</ListGroupItem>
            <ListGroupItem className="bg-warning border border-dark" tag="a" href="/view-students">All Students</ListGroupItem> 
            <ListGroupItem className="bg-warning border border-dark" tag="a" href="/about-us">About Us</ListGroupItem> 
        </ListGroup>
    );
}
export default Menus;