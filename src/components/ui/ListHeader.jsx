const ListHeader = (props) => {
  const { ...otherProps } = props

  return (
    <>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        First name
      </div>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        Last name
      </div>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        Email
      </div>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        Birthday
      </div>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        Phone number (+33)
      </div>
      <div className="p-2 rounded-lg bg-slate-300 text-black font-bold text-center">
        Actions
      </div>
    </>
  )
}

export default ListHeader
