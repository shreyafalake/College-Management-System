import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddStudent=()=>{
    useEffect(()=>{
        document.title="ADD Student || Learn Code with Shreya";
},[]);

    const [student,setstudent]=useState({});

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
            toast.success("Student added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong!!",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3 border border-danger">Fill Student Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <b><label for="StudentId">Student Id</label></b>
                <Input
                        Type="text"
                        placeholder="Enter StudentId here : "
                        name="StudentId"
                        Id="StudentId"
                        onChange={(e)=>{
                            setstudent({...student,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
            <b><label for="Name">Student Name</label></b>
                <Input
                        Type="text"
                        placeholder="Enter StudentName here : "
                        name="Name"
                        Id="Name"
                        onChange={(e)=>{
                            setstudent({...student,name:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <b><label for="Division">Student Division</label></b>
                <Input
                        Type="textarea"
                        placeholder="Enter Division here :  "
                        Id="Division"
                        style={{height:100}}
                        onChange={(e)=>{
                            setstudent({...student,division:e.target.value});
                        }}
                />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Student</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddStudent;