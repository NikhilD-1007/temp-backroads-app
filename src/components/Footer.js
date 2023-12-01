import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      {/* We used Separte create pagelink page here insted of below code. Below code is also working stage */}
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul> */}

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />

          // const { id, href, icon } = link
          // return (
          //   <li key={id}>
          //     <a
          //       href={href}
          //       target="_blank"
          //       rel="noreferrer"
          //       className="footer-icon"
          //     >
          //       <i className={icon}></i>
          //     </a>
          //   </li>
          // )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
