import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <header className="flex justify-between items-center pb-8">
      <h1 className="text-4xl">StudyAI</h1>
      <SignedOut>
        <nav className="flex gap-x-1">
          <SignInButton
            children={
              <button className="px-3 py-1 rounded-sm bg-foreground text-background cursor-pointer hover:bg-foreground/80 transition-colors">Log In</button>
            }
          />
          <SignUpButton
            children={
              <button className="px-3 py-1 rounded-sm bg-foreground text-background cursor-pointer hover:bg-foreground/80 transition-colors">Sign Up</button>
            }
          />
        </nav>
      </SignedOut>
      <SignedIn>
        
      </SignedIn>
    </header>
  )
}

export default Header