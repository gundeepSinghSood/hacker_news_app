import Link from 'next/link'
import HomePage from '../components/templates/HomePage/HomePage';

const Index = () => (
  <div>
    <Link href="/about">
      <a className="btn btn-light">About us</a>
    </Link>
    <HomePage/>
  </div>
)

export default Index
