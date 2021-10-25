function PeopleList(props) {
    const arr = props.data;
    const listItems = arr.map((value, index) =>
        <li className="w-80 px-3 py-3 bg-green-500 text-white rounded mb-2 break-words" key={index}>{value}</li>
    )

    return (
        <div>
            <ul className="container mb-2">{listItems}</ul>
        </div>
    )
}

export default PeopleList