import Link from "next/link";
import Amplify from "aws-amplify";
import { css } from "@emotion/css";

// import config from "../src/aws-exports";
import "../styles/globals.css";

// Amplify.configure({
//   ...config,
//   ssr: true,
// });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <span className={linkStyle}>Home</span>
        </Link>
        <Link href="/profile">
          <span className={linkStyle}>Profile</span>
        </Link>
        <Link href="/protected">
          <span className={linkStyle}>Protected SSR Route</span>
        </Link>
        <Link href="/protected-client-route">
          <span className={linkStyle}>Protected Client Route</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`;

const navStyle = css`
  display: flex;
  padding: 30px;
  border-bottom: 1px solid #ddd;
`;

export default MyApp;
