export default function handler(req, res) {
    res.status(200).json([
      { id: 1, content: "Instagram Post", status: "Pending" },
      { id: 2, content: "Twitter Mention", status: "Approved" }
    ]);
  }