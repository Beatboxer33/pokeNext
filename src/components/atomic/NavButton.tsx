export default function NavButton({ action,onClick}) {
  return (
    <>
      <button className="nav-button" onClick={onClick}>
        {action}
      </button>
    </>
  );
}
