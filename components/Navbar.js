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
              <iframe src="https://ghbtns.com/github-btn.html?user=opendatacam&repo=opendatacam&type=watch&count=true&size=large"
                frameborder="0" 
                scrolling="0" 
                width="150" 
                height="30" 
                title="GitHub"
                style={{ objectPosition: 'right', objectFit: 'none' }}>
              </iframe>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
