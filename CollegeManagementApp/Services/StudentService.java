package MyPack.CollegeManagementApp.Services;

import java.util.List;

import MyPack.CollegeManagementApp.Entities.Student;

public interface StudentService 
{
	public List<Student> getStudents();
	public Student getStudent(long studentId);
	public Student addStudent(Student student);
	public Student updateStudent(Student student);
	public void deleteStudent(long parseLong);
}
