export default function handler(req, res) {
    res.status(200).json({ totalPosts: 30, engagement: "15k likes, 3k shares" });
  }