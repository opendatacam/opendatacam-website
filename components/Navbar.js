import Link from 'next/link';

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' }
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8 lg:pr-16 lg:pl-16 relative z-10">
        <li className="flex text-black text-lg font-regular">
          <a href="./">
            <img className="w-8" src="static/odc-logo.png" />
          </a>
          <a href="./">
            OpenDataCam
          </a>
        </li>
        <li>
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="https://twitter.com/moovellab">
                <img width="20" height="20" src="static/icons/twitter.svg" />
              </a>
            </li>
            <li className="mr-6">
              <a href="https://github.com/opendatacam/opendatacam">
                <img width="20" height="20" src="static/icons/github.svg" />
              </a>
            </li>
            <li>
              <a className="text-black text-lg font-regular" href="#">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
