function About() {

    const styleSheet = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "45vw",
        height: "min-content",
        borderStyle: "dotted",
    }

    const nameStyle = {
        position: "relative",
        width: "150vw",
        marginLeft: "10vw",
        padding: "5vw",
        justifySelf: "center",
        
    }

    const aboutStyle = {
        padding: "0vh 5vw 0vh 5vw",
        marginBottom: "5vh"
    }

    return (
        <div style={styleSheet}>

            <h1 style={nameStyle}> Dru Sanchez</h1>

            <p style={aboutStyle}>Lorizzle gangsta dolor shizzle my nizzle crocodizzle pimpin', stuff adipiscing elit. Nullizzle sapizzle velizzle, shut the shizzle up volutpizzle, gizzle quizzle, gravida vel, arcu. Things break it down tortor. We gonna chung erizzle. Shiz izzle dolor da bomb fo shizzle tempizzle shiz. Mauris pellentesque mammasay mammasa mamma oo sa et sizzle. Fo shizzle my nizzle in fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Mah nizzle sheezy rhoncizzle mah nizzle. In crackalackin habitasse platea dictumst. Crazy dapibizzle. Shizzlin dizzle tellizzle the bizzle, rizzle i'm in the shizzle, mattizzle izzle, eleifend vitae, nunc. We gonna chung suscipizzle. Sizzle semper velit dizzle uhuh ... yih!.</p>
        </div>
    )
}

export default About;