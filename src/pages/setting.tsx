export const Setting = () => {
  return (
    <section>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded w-full border p-4">
        <div className="grid grid-cols-[1fr_6rem] gap-2">
          <div>
            <label className="label" htmlFor="server">
              Servidor
            </label>
            <input
              id="server"
              type="text"
              className="input w-full mt-1"
              placeholder="localhost"
            />
          </div>

          <div>
            <label className="label" htmlFor="port">
              Puerto
            </label>
            <input
              id="port"
              type="number"
              className="input w-full mt-1 input-md"
              placeholder="1433"
              defaultValue="1433"
            />
          </div>
        </div>

        <label className="label" htmlFor="auth-select">
          Autenticación
        </label>
        <select
          id="auth-select"
          className="select w-full"
          name="auth-select"
          defaultValue="windows"
        >
          <option value="windows">Windows</option>
          <option value="sqlServer">SQL Server</option>
        </select>

        <button className="btn btn-neutral mt-4">Validar Conexión</button>
      </fieldset>
    </section>
  );
};
