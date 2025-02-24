import LoaderLogo from "./loader-logo.gif";

export default function Loader({ isVisible }: { isVisible: boolean }) {
    if (isVisible) {
        return (
            <div>
                <img
                    src={LoaderLogo}
                    alt="loader"
                    style={{
                        display: "block",
                        width: "auto",
                        height: "500px",
                        margin: "auto",
                    }}
                />
                <h1 style={{textAlign:"center"}}>Chargement en cours...</h1>
            </div>
        );
    }

    return null;
}
