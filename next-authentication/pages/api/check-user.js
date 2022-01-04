import Amplify, { withSSRContext } from "aws-amplify";
import config from "../../src/aws-exports.js";

Amplify.configure({
  ...config,
  ssr: true,
});

export default async (req, res) => {
  const { Auth } = withSSRContext({ req });
  try {
    // get user session
    const user = await Auth.currentAuthenticatedUser();

    // return user
    res.json({ user });
  } catch (err) {
    res.json({ user: null });
  }
};
