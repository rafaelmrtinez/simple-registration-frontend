import { useState } from "react"
import { RegistrationForm } from "@/components/RegistrationForm"
import { RegistrationChart } from "@/components/RegistrationChart"

function App() {
  const [totalRegistrations, setTotalRegistrations] = useState(0)

  return (
    <main className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <RegistrationForm onSubmit={() => setTotalRegistrations((n) => n + 1)} />
        <RegistrationChart newCount={totalRegistrations} />
      </div>
    </main>
  )
}

export default App
