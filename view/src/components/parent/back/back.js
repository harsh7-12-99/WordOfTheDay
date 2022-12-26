export function Back() {

    return (
        <div className="back">
            <EnterWord />
            <GetWord />
        </div>
    )
}

function EnterWord() {
    return (

        <div className="left"><div> this is back left div</div></div>

    )
}

function GetWord() {

    const handleClick = (e) => {
        document.getElementById('main').style.transform = 'rotateY(0deg)';
    }
    return (
        <div className="right">back--right
            <button onClick={handleClick}>flip</button>
        </div>
    )
}