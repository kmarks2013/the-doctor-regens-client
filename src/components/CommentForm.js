import React from 'react'


// SET STATE HERE ACCEPTING PROPS.
export default function CommentForm({author, content, handleFormChange, handleSubmit, editComment, handleEditSubmit}) {
    console.log(editComment)
    return (
        <div>
            <form onSubmit={editComment ? (event) => handleEditSubmit(event) :(event) => handleSubmit(event)}>
                <label>Leave A Comment</label>
                <br/>
                <label>Author</label>
                <br/>
                <input name='author' placeholder= {editComment ? editComment.author : 'Author'} defaultValue={editComment ? editComment.author : author} onChange={(event)  => handleFormChange(event)}/>
                <br/>
                <textarea name='content' placeholder={editComment ? editComment.content : 'Add Content'} rows='4' cols='50' onChange={(event) => handleFormChange(event)} defaultValue={content}/>
                <input type='submit'/>
            </form>
        </div>
    )
}
