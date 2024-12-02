export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl hidden sm:flex">
          HeatStress Monitoring System
        </a>
        <a className="btn btn-ghost text-xl flex sm:hidden">SWM</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Themes</summary>
              <ul className="bg-base-100 rounded-t-none p-2 z-50">
                <li>
                  <button data-set-theme="light" data-act-class="ACTIVECLASS">
                    Light
                  </button>
                </li>
                <li>
                  <button data-set-theme="dark" data-act-class="ACTIVECLASS">
                    Dark
                  </button>
                </li>
                <li>
                  <button data-set-theme="black" data-act-class="ACTIVECLASS">
                    Black
                  </button>
                </li>
                <li>
                  <button
                    data-set-theme="bumblebee"
                    data-act-class="ACTIVECLASS"
                  >
                    Bumblebee
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
