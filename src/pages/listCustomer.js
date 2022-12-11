import List from "@/components/business/List"
import Layout from "@/components/ui/Layout"

const ListCustomer = () => {
  return (
    <Layout title="List of customers">
      <div className="pb-5">
        The list of customers is shown below. You can also edit or remove one
        customer at a time.
      </div>
      <div className="w-full">
        <List />
      </div>
    </Layout>
  )
}
export default ListCustomer
