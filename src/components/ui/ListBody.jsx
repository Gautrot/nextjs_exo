import userList from "@/components/userList"
import { TrashIcon } from "@heroicons/react/20/solid"
import { PencilSquareIcon } from "@heroicons/react/20/solid"
import Link from "@/components/ui/Link"

const ListBody = () => {
  return (
    <>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2">
        {userList.firstName}
      </div>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2">
        {userList.lastName}
      </div>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2">
        {userList.email}
      </div>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2">
        {userList.birthday}
      </div>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2 text-right">
        {userList.phoneNumber}
      </div>
      <div className="rounded-lg bg-slate-600 drop-shadow-lg font-normal p-2 flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-400 active:bg-blue-700 p-1 mx-1 text-white text-bold rounded-md">
          <Link href={`editCustomer/${userList.id}`}>
            <PencilSquareIcon className="h-4 w-4" />
          </Link>
        </button>
        <button className="bg-red-600 hover:bg-red-400 active:bg-red-700 p-1 mx-1 text-white text-bold rounded-md">
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </>
  )
}

export default ListBody
