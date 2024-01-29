import Link from 'next/link';

const Header = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <section className='layout'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
              <div>Home</div>
              <div>Blog</div>
              <div>Projects</div>
              <div>Shorts</div>
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
  )
}

export default Header;