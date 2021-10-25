import React, { useState } from 'react'


function AddPersonForm(props) {
    const [person, setPerson] = useState("")

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleSubmit(e) {
        if (person && person.trim()) {
            props.handleSubmit(person)
        }
        setPerson('')
        e.preventDefault()
    }

    return (
        <div>
            <form className="container mb-2"
                onSubmit={handleSubmit}>
                <input className="px-3 py-3 mr-2 outline-none rounded"
                    type="text"
                    placeholder="Add contact person"
                    onChange={handleChange}
                    value={person} />
                <button className="bg-green-500 hover:bg-green-600 px-3 py-3 rounded text-white font-normal"
                    type="submit">Add Person</button>
            </form>
        </div>
    )

}

export default AddPersonForm