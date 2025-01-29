import { useEffect, useState } from "react";

export default function InfluencerList({ params }) {
    const [influencers, setInfluencers] = useState([]);
  
    useEffect(() => {
      fetch(`/api/campaigns/${params.id}/influencers`)
        .then((res) => res.json())
        .then(setInfluencers);
    }, [params.id]);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Influencer List</h1>
        <ul>
          {influencers.map((inf) => (
            <li key={inf.id} className="border p-4 mb-2">
              {inf.name} - {inf.posts} Posts
            </li>
          ))}
        </ul>
      </div>
    );
  }