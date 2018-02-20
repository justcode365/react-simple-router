import React from 'react'

export default ({ params }) => {
  console.log(params)
  return <div>User: {params.user} </div>
}
