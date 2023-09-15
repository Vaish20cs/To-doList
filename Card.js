const Card = (props) => {
    const handleClick= () =>
     props.handleComplete(props.id)
    return(
        <div className="card">
            <p>{props.text}</p>
            <button onClick={handleClick}> Completed </button>

        </div>
    )
}

export default Card;