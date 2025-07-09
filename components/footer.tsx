import { Github } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='flex justify-between gap-x-2 p-4'>
      <p>&copy; Benny Hernandez 2025</p>
      <Link href={"https://github.com/wikixen/study_ai"} target='_blank'><Github className='hover:text-foreground/50 transition-colors' /></Link>
    </footer>
  )
}

export default Footer