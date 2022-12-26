import "./btn.css"

export function HoverBtn(props) {
    let btnTxt = props.text;
    return (
        <>
            <button class="hvrbtn" onClick={props.onClick}>
                <svg viewBox="0 0 180 60" class="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                </svg>
                <span>{btnTxt}</span>
            </button>
        </>
    )
}