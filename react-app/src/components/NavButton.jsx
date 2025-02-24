export default function NavButton({ action }) {
  if ((action = "PREV")) {
    return (
      <>
        <button className="nav-button">{action}?◀️:▶️</button>
      </>
    );
  } else {
    return (
      <>
        <button className="nav-button">▶️</button>
      </>
    );
  }
}
