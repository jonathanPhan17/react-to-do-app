import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
      <div className="root-layout">
        <header>
          <nav>
            <h1>Jonathan Phanthawong</h1>
            <NavLink to="/">Todos</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
        </header>

        <main>
            <Outlet />
        </main>
      </div>
    );
}