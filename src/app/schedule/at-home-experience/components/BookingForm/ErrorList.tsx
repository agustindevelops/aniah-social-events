const ErrorList = ({ errors }: { errors: string[] }) =>
  errors.length > 0 ? (
    <div
      role="alert"
      className="rounded-xl border border-peach-200 bg-peach-50 px-4 py-3 text-sm text-peach-700"
    >
      <ul className="list-disc space-y-1 pl-5">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  ) : null;

export default ErrorList;
