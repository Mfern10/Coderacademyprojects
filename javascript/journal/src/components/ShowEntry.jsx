import React from 'react'

const ShowEntry = ({entry}) => {
  return entry ? (
    <>
        <h5>{entry.content}</h5>
        <p>Posted in {entry.category}</p>
    </>
  ) : (
    <h3>Entry not found!</h3>
  )
}

export default ShowEntry