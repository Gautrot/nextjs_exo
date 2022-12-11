import Link from "@/components/ui/Link"

const Navbar = () => {
  return (
    <nav className="px-2 py-3 bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="text-xl font-semibold text-white">Exercise</span>
        <div className="justify-between flex w-auto">
          <ul className="flex flex-row p-4 mt-0 space-x-8 text-sm font-medium bg-gray-900">
            <li>
              <Link
                href="/"
                className="py-2 px-4 bg-transparent text-white hover:bg-slate-700 rounded-md active:bg-slate-500 active:text-white"
                aria-current="page"
              >
                Index
              </Link>
            </li>
            <li>
              <Link
                href="/createCustomer"
                className="py-2 px-4 bg-transparent text-gray-400 hover:bg-slate-700 rounded-md active:bg-slate-500 active:text-white"
              >
                Create customer
              </Link>
            </li>
            <li>
              <Link
                href="/listCustomer"
                className="py-2 px-4 bg-transparent text-gray-400 hover:bg-slate-700 rounded-md active:bg-slate-500 active:text-white"
              >
                List of customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
