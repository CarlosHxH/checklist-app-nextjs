
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createProduct } from '@/actions/product';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  
  
  export default async function ProductCreatePage() {
    
    return (
      <>
        <header className="mb-4">
          <Heading>Create Product</Heading>
        </header>
        <form action={createProduct} className="px-2 max-w-xl">
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
              href="/products"
              className="underline text-gray-500"
            >
              Return to Products list
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
  