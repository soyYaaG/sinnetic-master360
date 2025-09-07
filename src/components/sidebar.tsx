import { SiBrandfolder } from "react-icons/si";
import { IoCreateOutline } from "react-icons/io5";
import { PiEyeThin } from "react-icons/pi";
import { Link } from "react-router";
import { FiHome } from "react-icons/fi";
import { LuLayers3 } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";

export const Sidebar = () => {
  return (
    <nav className="bg-base-200 w-72 overflow-y-auto overscroll-contain pr-1">
      <ul className="menu rounded-box max-w-xs w-full">
        <li>
          <Link to="/">
            <FiHome />
            Principal
          </Link>
        </li>
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

        <li>
          <details>
            <summary>
              <LuLayers3 />
              Catalogo
            </summary>
            <ul>
              <li>
                <Link to="/catalog/create">
                  <IoCreateOutline />
                  Crear
                </Link>
              </li>
              <li>
                <a>
                  <PiEyeThin />
                  Ver Catalogo
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link to="/setting">
            <VscSettings />
            Configuración
          </Link>
        </li>
      </ul>
    </nav>
  );
};
