import { ExclamationTriangleIcon } from "@heroicons/react/20/solid"

const FormInput = (props) => {
  const {
    type = "text",
    name,
    placeHolder,
    label,
    formikErrors,
    ...otherProps
  } = props

  return (
    <div className="mb-3 p-2 grid">
      <label htmlFor="name" className="font-bold mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-input border-2 border-slate-500 rounded-lg px-4 bg-slate-700"
        placeholder={placeHolder}
        {...otherProps}
      />
      {formikErrors && (
        <div className="pt-1 text-sm text-red-600 font-bold">
          <span className="flex">
            <ExclamationTriangleIcon className="w-6 h-6 pr-2" />
            {formikErrors}
          </span>
        </div>
      )}
    </div>
  )
}

export default FormInput
