import comments from "./comments.json";

export default (_, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({ comments });
      break;
    case "POST":
      res.status(200).json({ success: true });
      break;
    default:
      res.status(405).end();
      break;
  }
};
