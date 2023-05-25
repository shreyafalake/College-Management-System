package MyPack.CollegeManagementApp.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import MyPack.CollegeManagementApp.Entities.Student;


public interface StudentDAO extends JpaRepository<Student, Long>
{

}
