// import styles from '../styles/footer.module.css';

import Link from 'next/link'


export const Footer = () =>{
    return(
      <footer>
      <p> Copyright Howard Lee {new Date().getFullYear()}</p>

      <div className="footer-links">

      <Link href="https://github.com/howardlee93">Github</Link>
      <Link href="https://www.linkedin.com/in/leehoward93/">LinkedIn</Link>
      <Link href="https://howardlee93.github.io/">Portfolio</Link>
      </div>
      </footer>
    )
};
