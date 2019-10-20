import React from 'react'

export default function Comment({comment , editClick}) {
    // console.log(comment)
    return (
        <div>
            {/* <p> this should render the author name and date</p> */}
            <p>{comment.author}</p>
            {/* <p>this should render the content</p> */}
            <p>{comment.content}</p>
            {/* <p> the comment should be realted to a specific doctor</p> */}
            <button onClick={(event) => editClick(event, comment)}> Edit Comment </button>
            <p> this button should populate the comment form with the current comment and user</p>
        </div>
    )
}
 