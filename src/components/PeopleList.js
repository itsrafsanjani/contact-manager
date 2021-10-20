function PeopleList(props) {
    const arr = props.data;
    const listItems = arr.map((value, index) =>
        <li key={index}>{value}</li>
    )

    return <ul>{listItems}</ul>
}

export default PeopleList