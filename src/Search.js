import React from 'react'

export default function Search(props) {
  return (
    <>
      {/* search by name */}
      <form
        className="search-form"
        onSubmit={(e) => props.onSubmit(e)}
      >
        <input
            className="search-input"
            value={props.value}
            onChange={(e) => props.onChange(e)}
            name="Search"
            placeholder="Search by name"
            type="text"
            autoFocus
        />
      </form>
      
     {/* search by tag */}
      <form
        className="search-form"
        onSubmit={(e) => props.onSubmit(e)}
      >
        <input
            className="search-input"
            value={props.value}
            onChange={(e) => props.onChange(e)}
            name="Search"
            placeholder="Search by tag"
            type="text"
            autoFocus
        />
        </form>
    </>
  )
}


