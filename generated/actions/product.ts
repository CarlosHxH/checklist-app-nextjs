
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createProduct(formData: FormData) {
    const data = {
      name: formData.get('name') as string,
price: formData.get('price') as number,
reallyLongDescription: formData.get('reallyLongDescription') as string,

    }
    
    const product = await prisma.product.create({ data });

    if (product) {
      redirect(`/products/${product.id}`)
    }
  }

  export async function editProduct(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        name: formData.get('name') as string,
price: formData.get('price') as number,
reallyLongDescription: formData.get('reallyLongDescription') as string,

      }
      
      await prisma.product.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/products/${id}`)
  }

  export async function deleteProduct (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete product' };
    }

    revalidatePath(`/products`)
  }
  