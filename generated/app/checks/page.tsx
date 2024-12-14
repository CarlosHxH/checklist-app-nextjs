
  import { prisma } from '@/lib/prisma';
  import { deleteCheck } from '@/actions/check';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function ChecksListPage() {
    const checks = await prisma.check.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'Checks', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All Checks</Heading>
          <Button
            as="a"
            href="/checks/create"
            className="font-medium"
          >
           New Check
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Name
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Price
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Really Long Description
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {checks.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-4">
                    No checks found
                  </td>
                </tr>
              )}

              {checks.map((check) => (
                <tr key={check.id}>
                  <td className="px-4 py-2 text-gray-700">
          {check.name}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {check.price}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {check.reallyLongDescription}
        </td>
        
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/checks/${check.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/checks/${check.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteCheck} className="inline-block">
                        <input type="hidden" name="id" value={check.id} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="font-medium text-red-600 hover:bg-red-100 disabled:bg-red-100"
                        >
                          Delete
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    )
  }
  