import Head from "next/head"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

const Layout = (props) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="bg-white dark:bg-slate-700 dark:text-slate-300 h-screen my-16 px-5 py-8">
        <h1 className="text-4xl font-bold pb-5">{title}</h1>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
