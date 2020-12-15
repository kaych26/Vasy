//import React, { useState } from "react";
//import Expanded from './Expanded';
//import InputTag from './InputTag';

//export default function Students(props) {

//  const average = (arr) => {
//    let totalGrades = arr.reduce((sum, num) => parseInt(sum) + parseInt(num));
//    return totalGrades / arr.length;
//  }

//  // handling expanded functionality
//  //use array in useState to keep track of each student's id
//  const [open, setOpen] = useState([]);

//  const toggle = (id) => {
//    if (open.includes(id)) {
//    setOpen(open.filter(sid => sid !== id))
//    } else {
//    let newOpen = [...open]
//    newOpen.push(id)
//    setOpen(newOpen)
//    }
//}

//return (

//    <>
//      {props.students.map((student, idx) => (
//        <div key={idx} className="student">

//          <div className="student-info">

//						<div>
//            	<img src={student.pic} alt="icon" />
//						</div>

//            <div>
//              <h1>{student.firstName} {student.lastName}</h1>
//              <div className="info">
//                <p>Email:{student.email}</p>
//                <p>Company:{student.company}</p>
//                <p>Skill:{student.skill}</p>
//                <p>Average:{average(student.grades)}%</p>
//              </div>

//            {/* conditionally display Expanded component */}
//              {
//                open.includes(student.id)
//                ?
//                  <Expanded
//                    open={open}
//                    grades={student.grades} />
//                :
//                  null
//              }

//              <InputTag
//                tags={props.tags}
//                onKeyDown={props.onKeyDown}
//              />

//            </div>

//          </div>


//          <div>
//            <button onClick={()=>toggle(student.id)}>
//              {open.includes(student.id) ? '-' : '+'}
//            </button>
//          </div>

//        </div>
//      ))}
//    </>
//  )
//}
