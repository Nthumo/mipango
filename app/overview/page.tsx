import Layout from "../components-mipango/layout";
import { Button } from "@/components/ui/button";

export default function OverViewPage() {
  return (
    <>
    <Layout>
      <div className="flex text-black dark:text-white">
        <main className="flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mb-4">General overview</h1>
            
          </div>        
          <p>Welcome to your general overview page.</p>
        </main>
      </div>      
    </Layout>
    </>
  );
}
