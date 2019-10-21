import React from 'react'

export default function Comment({comment , editClick, deleteClick}) {
    // console.log(comment)
    return (
        <div>
            {/* <p> this should render the author name and date</p> */}
            <p>{comment.author}</p>
            {/* <p>this should render the content</p> */}
            <p>{comment.content}</p>
            {/* <p> the comment should be realted to a specific doctor</p> */}
            <button onClick={(event) => editClick(event, comment)}> Edit Comment </button>
            <button onClick={(event) => deleteClick(event, comment)}>Delete Comment</button>
        </div>
    )
}
 