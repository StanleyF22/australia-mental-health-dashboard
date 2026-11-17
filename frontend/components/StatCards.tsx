interface Props {
  title:string;
  value:string;
}

export default function StatCard({title,value}:Props) {
  return (
    <div className="shadow-lg rounded-lg p-6 bg-white">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <div className="text-4xl font-bold">
        {value}
      </div>

    </div>
  );
}
