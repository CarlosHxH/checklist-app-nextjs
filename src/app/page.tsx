import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  return (
    <section className="my-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-indigo-700 sm:block">
            5sTransportes!
          </h1>

          <p className="mt-8 sm:text-xl/relaxed">Bem vindo!</p>

          <div className="mt-8 mx-auto">
            <Button
              as="a"
              href="#"
              className="font-medium shadow sm:w-auto"
              target="_blank"
            >
              fazer login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
