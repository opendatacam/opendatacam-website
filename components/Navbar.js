export default function Nav() {
  return (
    <nav>
      <ul className="relative z-10 flex items-center justify-between p-8 lg:pr-16 lg:pl-16">
        <li className="flex text-lg text-black font-regular">
          <a href="./">
            <img className="w-8" src="static/odc-logo.png" />
          </a>
          <a href="./" className="odcTitle">
            OpenDataCam
          </a>
        </li>
        <li>
          <ul className="flex items-center">
            <li className="">
              <a href="https://github.com/opendatacam" target="_blank">
                <img width="20" height="20" src="static/icons/github.svg" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
