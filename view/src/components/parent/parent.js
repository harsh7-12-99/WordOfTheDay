import { Back } from "./back/back";
import { Front } from "./front/front";
import { HoverBtn } from "../ui/btn/howerBtn.js"
import './parent.css'


export function Parent() {

    let toggle = true;

    const handleFlipClick = (e) => {

        if (toggle) {
            toggle = false;
            document.getElementById('main').style.transform = 'rotateY(180deg)';
        }
        else {
            document.getElementById('main').style.transform = 'rotateY(0deg)';
            toggle = true;
        }
    }


    return (
        <>
            <div className="container">
                <div class="main" id="main">
                    <Front />
                    <Back />
                </div>
                <div >
                    <div className='btnPosition'>


                        <HoverBtn
                            text={"Flip"}
                            onClick={handleFlipClick}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}