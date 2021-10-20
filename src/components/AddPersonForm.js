import React, { useState } from 'react'


function AddPersonForm(params) {
    const [person, setPerson] = useState("")

    function handleChange(e) {
        setPerson(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form className="container mb-2 md:flex md:items-center md:justify-center"
            onSubmit={handleSubmit}>
            <input className="px-3 py-3 mr-2 outline-none rounded focus:ring-2 focus:ring-green-500"
                type="text"
                placeholder="Add contact person"
                onChange={handleChange}
                value={person} />
            <button className="bg-green-500 hover:bg-green-600 px-3 py-3 rounded text-white font-normal"
                type="submit">Add Person</button>
        </form>
    )

}

export default AddPersonForm