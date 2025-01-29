import Link from "next/link";

const fetchCampaigns = async () => {
  return [
    { id: 1, title: "Tech Review", status: "Ongoing", deadline: "2025-02-10" },
    { id: 2, title: "Fitness Challenge", status: "Pending", deadline: "2025-03-01" },
  ];
};

export default async function CampaignList() {
  const campaigns = await fetchCampaigns();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Campaign Submission Tracker</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="border p-3 mb-2 rounded">
            <Link href={`/campaigns/${campaign.id}`} className="text-blue-500">
              {campaign.title}
            </Link>
            <p>Status: {campaign.status}</p>
            <p>Deadline: {campaign.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
