import skullboard from "./images/dru-logo.png"

function Logo() {
    const stylesheet = {
        marginTop: "1rem",
        marginLeft: "1rem",
        width: "8rem"
    }

    return (
        <div >
            <img src={skullboard} alt="skullboard logo" style={stylesheet}></img>
        </div>
    )
};

export default Logo;