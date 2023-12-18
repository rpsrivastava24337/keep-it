import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target


        setNote(prevValue => {
            return (
                {
                    ...prevValue, [name]: value
                }
            )
        })


    }

    function onSubmit(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }


    return (
        <div>
            <form>
                <input type="text" value={note.title} name="title" onChange={handleChange} placeholder="Note title"></input>
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Note Content"></textarea>
                <button onClick={onSubmit}>Add</button>
            </form>
        </div>

    )
}

export default CreateArea