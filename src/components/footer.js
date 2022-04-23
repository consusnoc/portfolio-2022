/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "#1b1c28",
    }}
  >
    <div className="container">
      <p>
        Contact: 
        <Link to="mailto:hello@consueloromano.com"> hello@consueloromano.com</Link>
        {/*{" "}
        <span className="icon -love">
          <RiHeart2Line />
  </span>{" "}*/}
      </p>
    </div>
  </footer>
)

export default Footer
