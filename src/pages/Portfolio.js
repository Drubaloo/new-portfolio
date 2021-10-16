function Portfolio (props) {

    const styleSheet = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }

    const col1 = {
        height: "100vh",
        flexDirection: "column",
        flexBasis: "100vw",
        flex: 1
    }

    const col2 = {
        height: "100vh",
        flexDirection: "column",
        flexBasis: "100vw",
        flex: 1
    }

    return (
        <div style={styleSheet}>
            <div style={col1}>
                <h1>stack list</h1>
            </div>
            <div style={col2}>
                <h1>projects</h1>
               <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Portfolio;