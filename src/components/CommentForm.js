import React from 'react'


// SET STATE HERE ACCEPTING PROPS.
export default function CommentForm({ content, handleFormChange, handleSubmit, editComment, handleEditSubmit}) {
    console.log(editComment)
    return (
        <div>
            <form onSubmit={editComment ? (event) => handleEditSubmit(event) :(event) => handleSubmit(event)}>
                <label>Leave A Comment</label>
                <br/>
                <textarea name='content' placeholder={editComment ? editComment.content : 'Add Content'} rows='4' cols='50' onChange={(event) => handleFormChange(event)} value={content}/>
                <input type='submit'/>
            </form>
        </div>
    )
}
