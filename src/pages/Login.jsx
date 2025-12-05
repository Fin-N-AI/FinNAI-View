export default function Login() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="h-8 w-auto text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 18h3v-5H4v5ZM4 11h3V6H4v5Zm5 7h3v-9H9v9Zm5-13v3h3V5h-3Zm-5 2h3V3H9v4Zm5 5h3v-3h-3v3Zm0 5h3v-3h-3v3Z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white ml-2">
              FinNAI
            </h1>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
            Sign in to access your dashboard.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address or username"
                className="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-border-light dark:border-border-dark 
                placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white 
                bg-background-light dark:bg-surface-dark focus:outline-none focus:ring-primary 
                focus:border-primary focus:z-10 sm:text-sm"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-border-light dark:border-border-dark 
                placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white 
                bg-background-light dark:bg-surface-dark focus:outline-none focus:ring-primary 
                focus:border-primary focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <a
              href="#"
              className="font-medium text-primary hover:text-blue-500 text-sm"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
            text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
