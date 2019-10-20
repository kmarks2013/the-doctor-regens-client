import React from 'react'

export default function CommentForm({author, content, handleFormChange, handleSubmit}) {
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Leave A Comment</label>
                <br/>
                <label>Author</label>
                <br/>
                <input name='author' value={author} onChange={(event) => handleFormChange(event)}/>
                <br/>
                <textarea name='content' rows='4' cols='50' onChange={(event) => handleFormChange(event)} value={content}/>
                <input type='submit'/>
            </form>
        </div>
    )
}
