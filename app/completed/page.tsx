import Layout from "../components-mipango/layout";

export default function CompletedTasksPage() {
  return (
    <>
    <Layout>
      <div className="flex">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
          <p>Welcome to your completed tasks.</p>
        </main>
      </div>
    </Layout>
    </>
  );
}
