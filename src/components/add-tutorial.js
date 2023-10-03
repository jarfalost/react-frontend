import React, { Component } from 'react';
import StudentDataService from '../services/student.service';

export default class AddStudents extends Component {
  constructor(props){  //ทำทันที
    super(props);  // ส่งให้คลาสแม่

    this.onChangeStudentId = this.onChangeStudentId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUniversity = this.onChangeUniversity.bind(this);
    this.onChangeGraduation = this.onChangeGraduation.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newStudent = this.newStudent.bind(this);

    this.state = {
      id: null,
      studentId: "",
      name: "",
      lastname: "",
      university: "",
      graduation: false
    }
  }

  onChangeStudentId(e) {
    this.setState({
      studentId: e.target.value
    });
  }
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeUniversity(e) {
    this.setState({
      university: e.target.value
    });
  }

  onChangeGraduation(e) {
    this.setState({
      graduation: e.target.value
    });
  }

  saveStudent() {
    var data = {
      name: this.state.name,
      lastname: this.state.lastname
    };

    StudentsDataService.create(data)
      .then( response => {
        this.setState({
          id: response.data.id,
          studentId: response.data.studentId,
          name: response.data.name,
          lastname: response.data.lastname,
          university: response.data.university,
          graduation: response.data.graduation,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  newStudent(){
    this.setState({
      id: null,
      studentId: "",
      name: "",
      lastname: "",
      university: "",
      graduation: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className='submit-form'>
        {this.state.submitted ? (
          <>
            <h4>You submitted successfully</h4>
            <button className='btn btn-success' onClick={this.newStudent}>Add</button>
          </>
        ) : (
          <>
            <div className='form-group'>
              <label htmlFor='studentId'>Student Id:</label>
              <input type='text' 
                className='form-control' 
                id='studentId' value={this.state.studentId}
                onChange={this.onChangeStudentId}
                name='studentId'
                required />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' 
                className='form-control' 
                id='name' value={this.state.name}
                onChange={this.onChangeName}
                name='name'
                required />
            </div>
            <div className='form-group'>
              <label htmlFor='lastname'>Lastname</label>
              <input type='text' 
                className='form-control' 
                id='lastname' value={this.state.lastname}
                onChange={this.onChangeLastname}
                name='lastname'
                required />
            </div>
            <div className='form-group'>
              <label htmlFor='university'>University</label>
              <input type='text' 
                className='form-control' 
                id='university' value={this.state.university}
                onChange={this.onChangeUniversity}
                name='university'
                required />
            </div>
            <div className='form-group'>
              <label htmlFor='graduation'>Graduation</label>
              <input type='text' 
                className='form-control' 
                id='graduation' value={this.state.graduation}
                onChange={this.onChangeGraduation}
                name='graduation'
                required />
            </div>

            <button onClick={this.saveStudent} 
              className='btn btn-success'>
                Submit
            </button>
          </>
        )}
      </div>
    )
  }
}
