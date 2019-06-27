import Link from 'next/link'

export default function TopBar () {
  return (
    <nav>
      <ul className='flex justify-between items-center p-8'>
        <li>
          <Link prefetch href='/'>
            <a className='text-blue-500 no-underline'>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
