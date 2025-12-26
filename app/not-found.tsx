import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-565px)] md:min-h-[calc(100vh-325px)]  items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Pagina no encontrada</p>
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
