import ListHeader from "@/components/ui/ListHeader"
import ListBody from "@/components/ui/ListBody"

const List = () => {
  return (
    <div className="grid grid-cols-6 gap-2 bg-slate-900 p-2 rounded-lg drop-shadow-lg">
      <ListHeader />
      <ListBody />
    </div>
  )
}
export default List
