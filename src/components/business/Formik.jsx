import FormInput from "@/components/ui/FormInput"
import Button from "@/components/ui/Button"
const Formik = (props) => {
  const { formik } = props

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-slate-900 mb-5 p-2 rounded-lg drop-shadow-lg">
        <FormInput
          name="firstName"
          label="First name"
          placeHolder="John"
          formikErrors={formik.errors.firstName}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormInput
          name="lastName"
          label="Last name"
          placeHolder="Doe"
          formikErrors={formik.errors.lastName}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeHolder="john.doe@gmail.com"
          formikErrors={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormInput
          name="birthday"
          type="date"
          label="Birthday"
          formikErrors={formik.errors.birthday}
          value={formik.values.birthday}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormInput
          name="phoneNumber"
          label="Phone number (+33)"
          placeHolder="0123456789"
          formikErrors={formik.errors.phoneNumber}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxlength="10"
        />
      </div>
      <div className="">
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default Formik
