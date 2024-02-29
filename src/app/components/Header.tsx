import Link from "next/link";

const Header = () => {
  return (
    <nav className='bg-gray-800 text-white p-4'>
      <section className='max-w-5xl mx-auto w-full px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            {/* Navigation Links */}
            <Link href="/" className='hover:text-gray-300'>Home</Link>
            <Link href="/blog" className='hover:text-gray-300'>Blog</Link>
            <Link href="/projects" className='hover:text-gray-300'>Projects</Link>
            <Link href="/shorts" className='hover:text-gray-300'>Shorts</Link>
          </div>
          <div>
            <div>Icon</div>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Header;
