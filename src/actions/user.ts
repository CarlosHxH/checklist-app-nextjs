
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createUser(formData: FormData) {
    const data = {
      name: formData.get('name') as string,
email: formData.get('email') as string,

    }
    
    const user = await prisma.user.create({ data });

    if (user) {
      redirect(`/users/${user.id}`)
    }
  }

  export async function editUser(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        name: formData.get('name') as string,
email: formData.get('email') as string,

      }
      
      await prisma.user.update({
        where: { id: Number(id) },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/users/${id}`)
  }

  export async function deleteUser (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete user' };
    }

    revalidatePath(`/users`)
  }
  