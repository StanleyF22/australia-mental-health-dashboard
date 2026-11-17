import CrisisBanner from "@/components/CrisisBanner";
import StatCard from "@/components/StatCard";
import AustraliaMap from "@/components/AustraliaMap";
import AgeChart from "@/components/AgeChart";

export default function Dashboard() {
  return (
    <main className="p-8">

      <CrisisBanner />

      <h1 className="text-4xl font-bold mb-6">
        Australian Mental Health Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-4">

        <StatCard
          title="Annual Deaths"
          value="3,283"
        />

        <StatCard
          title="Median Age"
          value="45"
        />

        <StatCard
          title="Leading Cause"
          value="15 - 44"
        />

        <StatCard
          title="States Monitored"
          value="8"
        />

      </div>

      <AustraliaMap />

      <AgeChart />

    </main>
  );
}
