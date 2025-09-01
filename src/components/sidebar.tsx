import { SiBrandfolder } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import { PiEyeThin } from "react-icons/pi";

export const Sidebar = () => {
  return (
    <nav className="bg-base-200 w-72 overflow-y-auto overscroll-contain pr-1">
      <ul className="menu rounded-box max-w-xs w-full">
        <li>
          <details>
            <summary>
              <SiBrandfolder />
              Marca
            </summary>
            <ul>
              <li>
                <a>
                  <IoCreateOutline />
                  Crear Marca
                </a>
              </li>
              <li>
                <a>
                  <PiEyeThin />
                  Ver Marcas
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};
