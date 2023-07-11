import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-slate-200 text-gray-900 p-6 border rounded-[50px]">
        <input className="px-6 py-3 rounded-full" />
        <div className="mt-5 uppercase">To do</div>
        <ul>
          <li className="py-1 flex items-center">
            <input type="checkbox" className="p-1 w-4 h-4" />
            <span className="ml-2">Task number 1</span>
          </li>
          <li className="py-1 flex items-center">
            <input type="checkbox" className="p-1 w-4 h-4" />
            <span className="ml-2">Task number 2</span>
          </li>
          <li className="py-1 flex items-center">
            <input type="checkbox" className="p-1 w-4 h-4" />
            <span className="ml-2">Task number 3</span>
          </li>
        </ul>
        <div className="mt-5 uppercase">To do</div>
        <ul>
          <li className="py-1 flex items-center">
            <input type="checkbox" className="p-1 w-4 h-4" />
            <span className="ml-2">Task number 3</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
