export default function Grade6MathsPractice() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Grade 6 Maths Practice Tests
          </h1>
          <p className="text-lg mb-6">
            Exam-oriented practice papers with answer keys and common mistake corrections.
          </p>
          <p className="text-md text-gray-600 mb-8">
            Pay only when you need. No subscriptions. No pressure.
          </p>
          <a href="https://wa.me/919916665190?text=Hello%20I%20want%20to%20buy%20a%20Grade%206%20Maths%20practice%20test" target="_blank" className="inline-block px-6 py-3 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700">Buy Practice Test on WhatsApp</a>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold mb-8 text-center">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Full-Length Tests</h3>
            <p className="text-sm text-gray-600">
              40-mark practice papers aligned to Grade 6 syllabus.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Answer Keys</h3>
            <p className="text-sm text-gray-600">
              Clear answers so parents can verify independently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Mistake Analysis</h3>
            <p className="text-sm text-gray-600">
              Common errors and quick revision points for exams.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold mb-6">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Single Practice Test</h3>
              <p className="text-2xl font-bold mb-2">₹250</p>
              <p className="text-sm text-gray-600">One chapter or mixed test</p>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Final Exam Pack</h3>
              <p className="text-2xl font-bold mb-2">₹999</p>
              <p className="text-sm text-gray-600">5 full-length tests</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold mb-8 text-center">How It Works</h2>
        <ol className="space-y-4 text-gray-700">
          <li>1. Choose the grade and topic</li>
          <li>2. Pay for the test you need</li>
          <li>3. Receive PDF on WhatsApp / Email</li>
          <li>4. Practice, check answers, revise mistakes</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center text-sm text-gray-600">
          <p>Prepared by an Independent Maths Educator</p>
          <p className="mt-2">For queries, contact via WhatsApp</p>
        </div>
      </footer>
    </div>
  );
}




/* Minimal react testing code
export default function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Grade 6 Maths Practice Tests</h1>
      <p>If you can see this, React is working 🎉</p>
    </div>
  );
}

*/


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/

