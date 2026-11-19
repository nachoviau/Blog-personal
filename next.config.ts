import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Sección papers escondida: el código sigue en pages/papers, pero las URLs
  // redirigen al inicio. Para reactivarla, borrar este bloque y volver a
  // agregar el link en components/Layout.tsx.
  async redirects() {
    return [
      { source: '/papers', destination: '/', permanent: false },
      { source: '/papers/:path*', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
