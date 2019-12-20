import React from 'react'

export default function CommentForm({ content, handleContent, handleSubmit, editComment, handleEditSubmit}) {
    return (
        <div>
            <form onSubmit={editComment ? (event) => handleEditSubmit(event) : (event) => handleSubmit(event)}>
                <label>Leave A Comment</label>
                <br/>
                <textarea name='content' placeholder={editComment ? editComment.content : 'Add Content'} rows='4' cols='50' onChange={(event) => handleContent(event)} value={content}/>
                <input type='submit'/>
            </form>
        </div>
    )
}
