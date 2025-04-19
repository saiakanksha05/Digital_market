export default function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to the Digital Marketing Agency Website
      </h1>
      <button onClick={() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mr-4"
      >
      Get Started
    </button>
    </div>
  );
}
