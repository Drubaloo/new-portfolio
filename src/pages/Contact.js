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
                <li><button>Github</button></li>
                <li><button>LinkdIn</button></li>
                <li><button>Email</button></li>
                <li><button>Resume</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;