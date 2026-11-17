export default function ServiceLocator() {

  return (

    <div className="bg-white p-6 rounded-lg shadow mt-10">

      <h2 className="text-2xl font-bold">
        Find Support
      </h2>

      <input
        placeholder="Enter suburb"
        className="border p-2 w-full"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-3"
      >
        Search
      </button>

    </div>

  );
}
