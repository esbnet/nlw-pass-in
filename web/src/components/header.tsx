import nlwUnityLogo from "../assets/logo.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUnityLogo} />
      <nav className="flex items-center gap-5">
        <NavLink>Eventos</NavLink>
        <NavLink>Participantes</NavLink>
        <NavLink>temp</NavLink>
      </nav>
    </div>
  );
}
