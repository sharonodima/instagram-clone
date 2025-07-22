export default function NavBar() {
  return (
    <nav className="w-full h-16 border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="text-xl font-bold">Instagram</div>
      <div className="flex gap-4">
        <button className="text-sm hover:underline">Login</button>
        <button className="text-sm hover:underline">Sign up</button>
      </div>
    </nav>
  );
}