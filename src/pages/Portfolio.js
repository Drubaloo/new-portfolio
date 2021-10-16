function Portfolio (props) {

    return (
        <div>
            <div>
                <h1>stack list</h1>
            </div>
            <div>
                <h1>projects</h1>
               <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Portfolio;