import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import Nav from '../components/Nav'
import { cartAtom } from '../lib/atoms'

const Product = () => {
  const router = useRouter()
  const [cart, setCart] = useAtom(cartAtom)

  return (
    <>
      <Nav />
      <h1>Product XY</h1>
      <p>
        <button
          onClick={() => {
            setCart(
              cart.id
                ? { ...cart, quantity: cart.quantity + 1 }
                : { id: 123, quantity: cart.quantity + 1 }
            )
            router.push('/cart')
          }}
        >
          <a>Add to cart</a>
        </button>
      </p>
    </>
  )
}

export default Product
