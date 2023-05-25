package MyPack.CollegeManagementApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import MyPack.CollegeManagementApp.Entities.Student;
import MyPack.CollegeManagementApp.Services.StudentService;

@RestController
@CrossOrigin(allowedHeaders = "*")
public class MyController 
{
	@Autowired
    private StudentService studentservice;

	@GetMapping("/home")
	public String Home()
	{
		return "Welcome to College Management Application";
	}
	
	@GetMapping("/student")
	public List<Student> getStudents()
	{
		return this.studentservice.getStudents();
	}
	
	@GetMapping("/student/{studentId}")
	public Student getStudent(@PathVariable String studentId)
	{
		return this.studentservice.getStudent(Long.parseLong(studentId));
	}
	
	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student)
	{
		return this.studentservice.addStudent(student);	
	}
	
	@PutMapping("/student")
	public Student updateStudent(@RequestBody Student student)
	{
		return this.studentservice.updateStudent(student);
	}
	
	@DeleteMapping("/student/{studentId}")
	public void deleteStudent(@PathVariable String studentId)
	{
		this.studentservice.deleteStudent(Long.parseLong(studentId));
	}
}
