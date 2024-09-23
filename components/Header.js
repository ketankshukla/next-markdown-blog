import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <header>
      <div className='container'>
        <h2 className={router.pathname === '/' ? 'home' : 'not-home'}>
          <Link
            href='/'
            className={router.pathname === '/' ? 'home' : 'not-home'}
          >
            {'<'}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {'>'} Ketan's Blog
          </Link>
        </h2>
      </div>
    </header>
  )
}
