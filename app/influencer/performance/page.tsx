import { useEffect, useState } from "react";

export default function PerformanceSnapshot() {
    const [metrics, setMetrics] = useState(null);
  
    useEffect(() => {
      fetch("/api/performance")
        .then((res) => res.json())
        .then(setMetrics);
    }, []);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Performance Snapshot</h1>
        {metrics && (
          <div>
            <p>Total Posts: {metrics.totalPosts}</p>
            <p>Estimated Engagement: {metrics.engagement}</p>
          </div>
        )}
      </div>
    );
  }