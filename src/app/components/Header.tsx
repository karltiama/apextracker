import Link from 'next/link';

const Header = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <section className='layout'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            {/* Using Link components for navigation */}
            <Link href="/" className='hover:text-gray-300'>
              Home
            </Link>
            <Link href="/blog" className='hover:text-gray-300'>
              Blog
            </Link>
            <Link href="/projects" className='hover:text-gray-300'>
              Projects
            </Link>
            <Link href="/shorts" className='hover:text-gray-300'>
              Shorts
            </Link>
          </div>
          {/* Right Aligned Items */}
          <div>
            <div>Icon</div>
          </div>
        </div>
        {/* Logo and Brand Name */}
        {/* Left Aligned Items */}
      </section>
    </nav>
  );
}

export default Header;
