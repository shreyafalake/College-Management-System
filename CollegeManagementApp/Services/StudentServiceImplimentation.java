package MyPack.CollegeManagementApp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MyPack.CollegeManagementApp.DAO.StudentDAO;
import MyPack.CollegeManagementApp.Entities.Student;

@Service
public class StudentServiceImplimentation implements StudentService
{
	@Autowired
	private StudentDAO studentdao;
	
	@Override
	public List<Student> getStudents()
	{
		// get all students
		return studentdao.findAll();
	}

	@Override
	public Student getStudent(long studentId)
	{
		// get one student
		return studentdao.getOne(studentId);
	}

	@Override
	public Student addStudent(Student student) 
	{
		// add one student
		return student;
	}

	@Override
	public Student updateStudent(Student student) 
	{
		// update student
		studentdao.save(student);
		return student;
	}

	@Override
	public void deleteStudent(long parseLong) 
	{
		// delete student
		Student entity=studentdao.getOne(parseLong);
		studentdao.delete(entity);
	}
	
}
