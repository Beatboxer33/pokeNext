import LoaderLogo from "./loader-logo.gif";

export default function Loader({ isVisible }) {
  const loadDisplay = isVisible ? "block" : "none";
//   console.log(isVisible);
  return (
    <>
      <div style={{ display: loadDisplay }}>
        <img src={LoaderLogo} alt="loader" style={{display:"block",width:"auto", height:"500px" ,margin:"auto"}} />
      </div>
    </>
  );
}
