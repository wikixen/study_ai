import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Btn from "./ui/btn";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-4xl">StudyAI</h1>
      <SignedOut>
        <nav className="flex gap-x-1">
          <SignInButton children={<Btn>Log In</Btn>} forceRedirectUrl={"/dashboard"}/>
          <SignUpButton children={<Btn>Sign Up</Btn>} forceRedirectUrl={"/dashboard"}/>
        </nav>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Header