
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editUser } from '@/actions/user';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  

  export default async function UserEditPage({ params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
      where: { id: Number(params.id) },
      
    });

    
    
    if (!user) {
      return (
    <>
      <header>
        <Heading>User not found</Heading>
      </header>
      <footer>
        <Link href="/users">
          Return to Users list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit User</Heading>
        </header>
        <form action={editUser} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      defaultValue={user.name}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Email"
      name="email"
      className="mb-2"
      
      defaultValue={user.email}
      required
      
    />
  </div>

          <input type="hidden" name="id" value={user.id} />

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
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  