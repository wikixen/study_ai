import Btn from "@/components/ui/btn"
import { SignUpButton } from "@clerk/nextjs"

function Landing() {
  return (
    <main className="min-w-screen flex flex-col items-center justify-center gap-y-4 text-wrap text-center">
      <div className="flex flex-col gap-y-4 max-w-140">
        <h1 className="text-4xl font-semibold">Make Studying Easier.</h1>
        <p>One of the most important parts of studying is testing yourself, but this often requires you to devote time to creating your own flashcards.</p>
      </div>
      <div className="flex flex-col gap-y-4 max-w-140">
        <h1 className="text-4xl font-semibold">That's Where StudyAI Comes In</h1>
        <p>We automate the cumbersome parts of studying by creating flashcards for you using your notes so that you can put 100% of your focus into studying.</p>
      </div>
      <SignUpButton children={<Btn>Get Started</Btn>} />
    </main>
  )
}

export default Landing