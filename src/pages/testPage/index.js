import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

export default function TestPage() {

  const path = useLocation()

  return <div>
    Hello Test World!
    <Link to={[path.pathname,"#","DownBelow"].join("")}>Go Down</Link>
    <div id="DownBelow" style={{position: "absolute", top: "2000px"}}>
      Down below
    </div>
    </div>
}
 