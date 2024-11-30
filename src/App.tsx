function App() {
  return (
    <main>
      {/* navbar here */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl hidden sm:flex">
            SmartWear Monitoring System
          </a>
          <a className="btn btn-ghost text-xl flex sm:hidden">SWM</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Font Size</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Small</a>
                  </li>
                  <li>
                    <a>Medium</a>
                  </li>
                  <li>
                    <a>Large</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Themes</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Light</a>
                  </li>
                  <li>
                    <a>Dark</a>
                  </li>
                  <li>
                    <a>Black</a>
                  </li>
                  <li>
                    <a>Bumblebee</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* content here */}
      {/* footer here */}
    </main>
  );
}

export default App;
