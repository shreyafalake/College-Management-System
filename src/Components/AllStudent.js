import React, { useState,useEffect } from "react";
import Student from "./Student";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllStudent =() => {

    useEffect(() => {
            document.title="All Students || Learn Code with Shreya";
    });

    //Function to call servers
    const getAllStudentFromServer = () => {
        axios.get(`${base_url}/student`).then(
            (response) => {
                //For Success
                //console.log("Success");
                console.log(response.data);
                toast.success("Students has been loaded...",{position:"bottom-center"});
                setstudent(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong...",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllStudentFromServer();
        },[]);

    const [student,setstudent]=useState([]);

    const updateStudent=(id)=>{
        setstudent(student.filter((c)=>c.id!==id));
    };

    //const[courses,setcourses]=useState([
      //  {item:101,title:"Java Course",description:"This is demo course"},
        //{item:102,title:"React Course",description:"This is React course"},
        //{item:103,title:"NodeJS Course",description:"This is NodeJS course"},
    //])
    return(
        <div>
            <h1 className="text-center my-3 border border-danger">All Students</h1>
            <h4 className="text-center my-3"><u>List of Students as follows:- </u></h4>
           {student.length > 0 
            ? student.map((item) => <Student key={item.id} student={item}/>) 
            :"No Students."};
       </div>

    );
};

export default AllStudent;