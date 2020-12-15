import React, { Component } from 'react'
import axios from "axios";
import Student from './Student';
import Search from './Search';
import InputTag from './InputTag';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
			//tags: [],
      filterValue: '',
      filteredStudents: null
		}
	}


  componentDidMount = async () => {
		const response = await axios("https://api.hatchways.io/assessment/students")
    console.log(response);
    this.setState({
			students: response.data.students
		})

	}


  handleSearchChange = event => {
		const filter = () => {
			const filteredStudents = this.state.students.filter(student => {
				return student.firstName.toLowerCase().includes(this.state.filterValue.toLowerCase()) ||
        student.lastName.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredStudents })
    }
    this.setState({ filterValue: event.target.value }, filter)
	}


	handleSubmit = event => event.preventDefault()


  // targetStudentforTag = () => {
		//   const student = this.state.students.find(stud => {
			//     return student.id
			//   })
			// }
			inputKeyDown = (e) => {
				const value = e.target.value;
				console.log(value);
				if (e.key === 'Enter' && value) {
					this.setState({ tags: [...this.state.tags, value] })
				}
			}


				handleNewTag = (value, idx) => {
					console.log ("XXXXXXXXXXXXXXXXXX")
					console.log(value, idx)
					console.log (this.state.students[idx])
					console.log("XXXXXXXXXXXXXXXXXX")


					const studentTags = this.state.students.slice()

					studentTags[idx].tags = value;

					this.setState({
							students: studentTags

					})
				}


			render() {

				const students = this.state.filteredStudents ? this.state.filteredStudents : this.state.students

				return (
					<>
        <Search
          onSubmit={this.handleSubmit}
          onChange={this.handleSearchChange}
          value={this.state.filterValue}
           students={students}
						/>

						{this.state.students.map((student, idx) => (
							<div key={idx} className="student">

								<Student
									student={student}
									onKeyDown={this.inputKeyDown}
									tags={this.state.tags}
								/>

								<input
									type="text"
									onChange={e => this.handleNewTag(e.target.value, idx) }
								/>

							</div>
						))}
      </>
    )
  }
}

