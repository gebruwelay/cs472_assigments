package com.students.domain;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;


public class Student {
	@NotEmpty(message = "{ID_should_not_be_null_and_empty}")
	private Integer id;

	@NotEmpty(message = "{first_name_not_empty}")
	@Size(min = 4, max = 50, message = "{Size.firstName.validation}")
 	private String firstName = null;

	@NotEmpty(message = "{second_name_not_empty}")
 	private String lastName  = null;

 	@Email(message = "{email_validation}")
 	private String email = null;
	
 	private String gender = null;

 	@DateTimeFormat(pattern = "mm/dd/yyyy")
	@NotNull
    private Date birthday;

 	@Valid
	private Phone phone;

  	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public Phone getPhone() {
		return phone;
	}
	public void setPhone(Phone phone) {
		this.phone = phone;
	}	
	   	
	   

}
