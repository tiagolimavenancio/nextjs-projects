import comments from "./comments.json";

export default (req, res) => {
  return res.status(200).json({ post: req.query.id, comments });
};
