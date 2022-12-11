import Layout from "@/components/ui/Layout"
import Formik from "@/components/business/Formik"
import { useFormik } from "formik"
import { useState } from "react"
import * as yup from "yup"

const CreateCustomer = () => {
  const [message, setMessage] = useState("") // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      phoneNumber: "",
    },
    onSubmit: () => {
      setMessage("Created a user!")
      setSubmitted(true)
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required("First name is required."),
      lastName: yup.string().trim().required("Last name is required."),
      email: yup
        .string()
        .email("Must be a valid email.")
        .required("Email is required."),
      message: yup.string().trim().required("Message is required."),
      birthday: yup.string().trim().required("Birthday is required."),
      phoneNumber: yup.string().trim().required("Phone number is required."),
    }),
  })

  return (
    <Layout title="Create a customer">
      <div className="pb-5">
        Add a customer to your list by filling the form below.
      </div>
      <div className="w-full">
        <Formik formik={formik} />
      </div>
    </Layout>
  )
}
export default CreateCustomer
