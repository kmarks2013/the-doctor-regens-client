import React from 'react'

export default function CommentForm({author, content, handleFormChange, handleSubmit, editComment}) {
    console.log(editComment)
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Leave A Comment</label>
                <br/>
                <label>Author</label>
                <br/>
                <input name='author' palcehodler={author} value={author} onChange={(event)  => handleFormChange(event)}/>
                <br/>
                <textarea name='content' placeholder={content}rows='4' cols='50' onChange={(event) => handleFormChange(event)} value={content}/>
                <input type='submit'/>
            </form>
        </div>
    )
}
