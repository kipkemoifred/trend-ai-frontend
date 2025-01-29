export default function handler(req, res) {
    res.status(200).json([
      { id: 1, name: "John Doe", posts: 5 },
      { id: 2, name: "Jane Smith", posts: 3 }
    ]);
  }