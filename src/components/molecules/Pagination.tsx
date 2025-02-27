import NavButton from "../atomic/NavButton";

export default function Pagination({actionValueLeft,actionValueRight,numPageValue,onClickLeft,onClickRight}){

    return(
        <div className="nav-container">
            <NavButton
                action={actionValueLeft}
                onClick={onClickLeft}
            />
            <h2>Page {numPageValue}</h2>
            <NavButton
                action={actionValueRight}
                onClick={onClickRight}
            />
        </div>
    )
}