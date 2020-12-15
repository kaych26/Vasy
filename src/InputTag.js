// import React, { Component } from 'react'

// export default class InputTag extends Component {

//   constructor() {
//     super();
//     this.state = {
//       tags: []
//     };
//   }

//   inputKeyDown = (e) => {
//     const value = e.target.value;
//     if (e.key === 'Enter' && value) {
//       this.setState({ tags: [...this.state.tags, value] })
//       //clearing input field at Enter
//       this.tagInput.value = null;
//     }
//   }


//   render() {
//     return (
//       <div className="input-tag">
//           {this.state.tags.map((tag, idx) => (
//             <p key={idx}>{tag}</p>
//           ))}

//           <input
//             type="text"
//             onKeyDown={this.inputKeyDown}
//             //referencing DOM to clear input field later
//             ref={ el => { this.tagInput = el }}
//           />
//         </div>
//     )
//   }
// }

import React from 'react'

export default function InputTag(props) {
  return (
    <div className="input-tag">

      {/*{props.tags.map((tag, idx) => (
            <p key={idx}>{tag}</p>
          ))}*/}

          <input
				type="text"
            onKeyDown={props.onKeyDown}
          />
    </div>
  )
}
