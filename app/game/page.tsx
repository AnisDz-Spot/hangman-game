import { Suspense } from "react";
import GameHeader from "@/components/GameHeader";
import GamePage from "./GamePage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="relative w-full min-h-screen pt-15 text-center mx-auto px-5 lg:px-30">
          <GameHeader title="Loading Game..." position="relative" />
        </div>
      }
    >
      <GamePage />
    </Suspense>
  );
}
