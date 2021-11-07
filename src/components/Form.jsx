import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Action'

export default function Form() {
    const dispatch = useDispatch()
    const Submit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        dispatch(add(title, content));
        e.target.reset()
    }
    return (
        <>
            <div className="form-cont">
                <div className="form-header">
                    ADD NOTE
                </div>
                <form className="form" onSubmit={(e) => Submit(e)}>
                    <label className="label">Title :</label>
                    <input type="text" name="title" />
                    <label className="label">Content :</label>
                    <textarea type="text" name="content" className="content" />
                    <button type="submit" className="form-submit">Add Note</button>
                </form>
            </div>
            <hr className="line" />
        </>
    )
}
