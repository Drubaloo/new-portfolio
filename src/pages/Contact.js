function Contact() {

    const listStyle = {
        display: "flex",
        flexDirection: "column",
        width: "45rem",
        justifyContent: "space-around",
        alignContent: "center",
        listStyleType: "none"
    }

    return (

        <div>
            <h1> Contact Me</h1>
            <p>If you'd like to get in contact with me feel free to reach out!</p>

            <div>
                <ul style={listStyle}>
                    <li><a href="https://github.com/Drubaloo" target="_blank" rel="norefferer"><button >Github</button></a></li>
                    <li><a href="https://www.linkedin.com/in/dru-sanchez-465696194/" target="_blank" rel="norefferer"><button>LinkdIn</button></a></li>
                    <li><a href="mailto:drubaloo@outlook.com" target="_blank" rel="norefferer"><button>Email</button></a></li>
                    <li><a href="https://docs.google.com/document/d/1xRv2T5UMTBJSLEjiq6XIc3WAdm3oSwCPdVHcrL5s7MU/edit?usp=sharing" rel="norefferer"><button>Resume</button></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;