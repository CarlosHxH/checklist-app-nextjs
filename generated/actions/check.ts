
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createCheck(formData: FormData) {
    const data = {
      name: formData.get('name') as string,
price: formData.get('price') as number,
reallyLongDescription: formData.get('reallyLongDescription') as string,

    }
    
    const check = await prisma.check.create({ data });

    if (check) {
      redirect(`/checks/${check.id}`)
    }
  }

  export async function editCheck(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        name: formData.get('name') as string,
price: formData.get('price') as number,
reallyLongDescription: formData.get('reallyLongDescription') as string,

      }
      
      await prisma.check.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/checks/${id}`)
  }

  export async function deleteCheck (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.check.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete check' };
    }

    revalidatePath(`/checks`)
  }
  