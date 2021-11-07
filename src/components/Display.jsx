import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Action'

export default function Display() {
    const notes = useSelector(state => state.Reducer.notes)
    const dispatch = useDispatch()
    const render = () => {
        let mapRows;
        if (notes === []) {
            mapRows = (
                <>
                    Notes not added yet
                </>
            )
        }
        else {
            mapRows = notes.map((note, index) => (
                <div key={index} className="display-cont">
                    <div className="title">
                        <div className="display-title">{note.title}</div>
                        <button className="X" onClick={() => dispatch(remove(index))}>X</button>
                    </div>
                    <div>{note.content}</div>
                </div>
            ));
        }
        return mapRows;
    }
    return (
        <div>
            <div className="heading-dis">
                All Notes
            </div>
            <div>{render()}</div>
        </div>
    )
}
