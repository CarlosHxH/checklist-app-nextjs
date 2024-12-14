
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createUser } from '@/actions/user';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  
  
  export default async function UserCreatePage() {
    
    return (
      <>
        <header className="mb-4">
          <Heading>Create User</Heading>
        </header>
        <form action={createUser} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Email"
      name="email"
      className="mb-2"
      
      
      required
      
    />
  </div>

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/users"
              className="underline text-gray-500"
            >
              Return to Users list
            </Link>
  
            <Button
              type="submit"
            >
              Create
            </Button>
          </footer>
        </form>
      </>
    )
  }
  