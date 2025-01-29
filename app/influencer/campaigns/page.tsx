
// app/influencer/campaigns/page.tsx
import { useEffect, useState } from "react";

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("/api/campaigns")
      .then((res) => res.json())
      .then(setCampaigns);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Campaign List</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="border p-4 mb-2">
            {campaign.name} - {campaign.status} (Deadline: {campaign.deadline})
          </li>
        ))}
      </ul>
    </div>
  );
}