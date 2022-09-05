import Link from 'next/link'
import { useAtom } from 'jotai'
import { cartAtom } from '../lib/atoms'

const links = [
  { path: '/', title: 'Home' },
  { path: '/product', title: 'Product' },
  { path: '/cart', title: 'Cart' },
]

const Nav = () => {
  const [cart] = useAtom(cartAtom)

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
      <li>{cart.quantity} item(s) in cart</li>
    </ul>
  )
}

export default Nav
