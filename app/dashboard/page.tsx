import { CreateFlash } from "@/lib/gemini-flash"

async function Dashboard() {
  const flashcards = await CreateFlash({
    questionAmount: 2,
    "file": ""
  })
  
  return (
    <main className='flex gap-x-4 py-2'>
      <section className="w-1/3  px-1 border-r-1 ">
        <button className="w-full py-2.5 rounded-sm cursor-pointer hover:bg-foreground/10">
          Placeholder
        </button>
      </section>
      <section>Main</section>
    </main>
  )
}

export default Dashboard