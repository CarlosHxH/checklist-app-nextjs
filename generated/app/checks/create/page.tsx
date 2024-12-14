
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createCheck } from '@/actions/check';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  
  
  export default async function CheckCreatePage() {
    
    return (
      <>
        <header className="mb-4">
          <Heading>Create Check</Heading>
        </header>
        <form action={createCheck} className="px-2 max-w-xl">
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
      type="number"
      label="Price"
      name="price"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Really Long Description"
      name="reallyLongDescription"
      className="mb-2"
      
      
      
      
    />
  </div>

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/checks"
              className="underline text-gray-500"
            >
              Return to Checks list
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
  