import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Compass size={24} strokeWidth={2} />
      </span>
      <p className="stat-number mt-6 text-6xl font-extrabold text-muted-foreground/40">
        404
      </p>
      <h1 className="mt-3 text-xl font-extrabold">Page Not Found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you are looking for may have moved or never existed.
      </p>
      <Link
        to="/"
        className="btn-primary mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs"
      >
        <ArrowLeft size={13} /> Return home
      </Link>
    </div>
  );
}
