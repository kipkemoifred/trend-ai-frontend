export default function handler(req, res) {
    res.status(200).json([
      { id: 1, name: "Summer Campaign", status: "Active", deadline: "2025-02-15" },
      { id: 2, name: "Winter Promo", status: "Closed", deadline: "2025-01-10" }
    ]);
  }