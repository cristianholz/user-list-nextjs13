import { Spinner } from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center py-60">
      <Spinner />
    </div>
  );
}
