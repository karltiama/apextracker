// Import withNextra function from 'nextra' using dynamic import
import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-blog', // or 'nextra-theme-docs' for documentation theme
  themeConfig: './theme.config.js',
});

// Define your Next.js configuration with Nextra
const nextConfig = withNextra({
  // Your existing Next.js configurations
});

export default nextConfig;
