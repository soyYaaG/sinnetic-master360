import { useEffect, useState } from "react";
import { app as tauriApp } from "@tauri-apps/api";
import { platform } from "@tauri-apps/plugin-os";
import { useThemeStore } from "@stores/themeStore";
import { ThemeName, THEMES } from "@interfaces/theme";
import { invoke } from "@tauri-apps/api/core";

export const Statusbar = () => {
  const setSetting = useThemeStore((s) => s.setSetting);
  const setting = useThemeStore((s) => s.setting);
  const [version, setVersion] = useState<string>("-");
  const [operatingSystem, setOperatingSystem] = useState<string>("-");
  const [username, setUsername] = useState<string>("-");
  const [hostname, setHostname] = useState<string>("-");

  useEffect(() => {
    const fetchOperatingSystem = async () => {
      setVersion(await tauriApp.getVersion());
      setOperatingSystem(platform());
      setUsername(await invoke<string>("get_username"));
      setHostname(await invoke<string>("get_hostname"));
    };
    fetchOperatingSystem();
  }, []);

  return (
    <footer className="h-8 text-xs px-3 flex items-center gap-4 justify-between bg-base-200">
      <div>
        <b>SO:</b> {operatingSystem}
      </div>
      <div>
        <b>Versión:</b> {version}
      </div>
      <div className="dropdown dropdown-top dropdown-end">
        <button
          tabIndex={0}
          type="button"
          className="btn btn-link no-underline! text-base-content btn-sm hover:no-underline"
        >
          Cambiar tema: <span className="font-normal">{setting}</span>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu menu-vertical bg-base-100 rounded-box w-60 max-h-72 overflow-y-auto overflow-x-hidden p-2 shadow-sm z-[1] flex-row"
        >
          {THEMES.map((theme: ThemeName) => (
            <li key={theme} className="w-full">
              <button
                type="button"
                className="w-full justify-start"
                onClick={() => {
                  setSetting(theme);
                }}
              >
                {theme} {setting === theme && "✓"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <b>Host/Usuario:</b> {hostname}/{username}
      </div>
    </footer>
  );
};
