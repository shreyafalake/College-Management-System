import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,Button,Container} from "reactstrap";
import base_url from "../api/bootapi";

const Student=({student,update})=>{

  //delete student
  const deleteStudent=(id)=>{
    axios.delete(`${base_url}/student/${id}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Student deleted successfully");
        update(id);
      })
      .catch((error)=>{
        toast.error("Student not deleted");
      });
  }
  //form handler function
  const handleForm=(e)=>{
    console.log(student);
    postDatatoServer(student);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/student`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Student deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong!!",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">ID : {student.id}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Division : {student.division}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Name : {student.name}</CardSubtitle> 
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteStudent(student.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-students">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Student;