import Layout from "../components-mipango/layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function StarredTasksPage() {
  return (
    <>
    <Layout>
      <div className="flex text-black dark:text-white">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Starred Tasks Page</h1>
          <p>This are the starred tasks.</p>
        </main>
      </div>
    </Layout>
    </>
  );
}
