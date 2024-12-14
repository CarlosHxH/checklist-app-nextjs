
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editCheck } from '@/actions/check';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  

  export default async function CheckEditPage({ params }: { params: { id: string } }) {
    const check = await prisma.check.findUnique({
      where: { id: params.id },
      
    });

    
    
    if (!check) {
      return (
    <>
      <header>
        <Heading>Check not found</Heading>
      </header>
      <footer>
        <Link href="/checks">
          Return to Checks list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit Check</Heading>
        </header>
        <form action={editCheck} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      defaultValue={check.name}
      required
      
    />
  </div><div>
    <Input
      type="number"
      label="Price"
      name="price"
      className="mb-2"
      
      defaultValue={check.price}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Really Long Description"
      name="reallyLongDescription"
      className="mb-2"
      
      defaultValue={check.reallyLongDescription}
      
      
    />
  </div>

          <input type="hidden" name="id" value={check.id} />

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
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  