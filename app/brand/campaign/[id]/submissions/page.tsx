import { useEffect, useState } from "react";

export default function SubmissionApproval({ params }) {
    const [submissions, setSubmissions] = useState([]);
  
    useEffect(() => {
      fetch(`/api/campaigns/${params.id}/submissions`)
        .then((res) => res.json())
        .then(setSubmissions);
    }, [params.id]);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Submission Approval</h1>
        <ul>
          {submissions.map((sub) => (
            <li key={sub.id} className="border p-4 mb-2 flex justify-between">
              <span>{sub.content} - {sub.status}</span>
              <div>
                <button className="bg-green-500 px-3 py-1 mr-2">Approve</button>
                <button className="bg-red-500 px-3 py-1">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }