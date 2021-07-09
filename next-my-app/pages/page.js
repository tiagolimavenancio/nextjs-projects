import Layout from "../components/Layout";

const Page = () => <Layout content={<p>Here´s a Page!</p>} />;

Page.getInitialProps = ({ query }) => {};

export default Page;
