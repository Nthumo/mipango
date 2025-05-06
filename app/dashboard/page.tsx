import Layout from "../components-mipango/layout";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
    <Layout>
      <div className="flex">
        <main className="flex-1 p-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            
          </div>        
          <p>Welcome to your dashboard.</p>
        </main>
      </div>      
    </Layout>
    </>
  );
}
