
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editProduct } from '@/actions/product';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  

  export default async function ProductEditPage({ params }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      
    });

    
    
    if (!product) {
      return (
    <>
      <header>
        <Heading>Product not found</Heading>
      </header>
      <footer>
        <Link href="/products">
          Return to Products list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit Product</Heading>
        </header>
        <form action={editProduct} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      defaultValue={product.name}
      required
      
    />
  </div><div>
    <Input
      type="number"
      label="Price"
      name="price"
      className="mb-2"
      
      defaultValue={product.price}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Really Long Description"
      name="reallyLongDescription"
      className="mb-2"
      
      defaultValue={product.reallyLongDescription}
      
      
    />
  </div>

          <input type="hidden" name="id" value={product.id} />

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
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  