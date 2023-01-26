import worldLogo from "../assets/world.svg"

export default function Nav()
{
  return (
    <nav className="nav--container">
      <img src={worldLogo} alt="My Travel Journal Logo" className="nav--logo" />
      <h2 className="nav--title">my travel journal</h2>
    </nav>
  );
}
