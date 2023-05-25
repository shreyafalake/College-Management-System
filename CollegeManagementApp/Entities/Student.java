package MyPack.CollegeManagementApp.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student
{
	@Id
	private int id;
	private String name;
	private String division;
	public int getId() 
	{
		return id;
	}
	public void setId(int id) 
	{
		this.id = id;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public String getDivision() 
	{
		return division;
	}
	public void setDivision(String division) 
	{
		this.division = division;
	}
	@Override
	public String toString() 
	{
		return "Student [id=" + id + ", name=" + name + ", division=" + division + "]";
	}
	public Student(int id, String name, String division) 
	{
		super();
		this.id = id;
		this.name = name;
		this.division = division;
	}
	public Student() 
	{
		super();
	}
	
}
