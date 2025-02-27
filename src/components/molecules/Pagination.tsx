"use client";
import NavButton from "../atomic/NavButton";

export default function Pagination({ numPageState, quantityByPage }) {
    const [numPage, setNumPage] = numPageState;

    const onClickNav = (numPage: number, action: string) => {
        if (action === "◀️") {
            const newNumPage = numPage > 1 ? numPage - 1 : numPage;
            setNumPage(newNumPage);
        } else {
            const newNumPage = numPage < quantityByPage ? numPage + 1 : numPage;
            setNumPage(newNumPage);
        }
    };

    const onClickLeft = () => onClickNav(+numPage, "◀️");

    const onClickRight = () => onClickNav(+numPage, "▶️");

    return (
        <div className="nav-container">
            <NavButton action={"◀️"} onClick={onClickLeft} />
            <h2>Page {numPage}</h2>
            <NavButton action={"▶️"} onClick={onClickRight} />
        </div>
    );
}
