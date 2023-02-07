import * as React from "react"

const IndexPage = () => {
  return (
    <main>
    Hell
    </main>
  )
}

export default IndexPage

export const Head = ({ location, params, data, pageContext }) => (
  <>
    {/* </><html lang="en">
    <body className="my-body-class"></body> */}
    <title>Home page title</title>
    <meta name="description" content="Home page description" />
  </>
)
