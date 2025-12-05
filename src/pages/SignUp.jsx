export default function SignUp() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto p-4">

        {/* 로고 영역 */}
        <div className="flex justify-center items-center mb-8">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <svg fill="none" height="24" width="24" viewBox="0 0 24 24">
              <path d="M4 15V9C4 8.44772 4.44772 8 5 8H6C6.55228 8 7 8.44772 7 9V15C7 15.5523 6.55228 16 6 16H5C4.44772 16 4 15.5523 4 15Z" fill="#1d82f5"/>
              <path d="M9 15V9C9 8.44772 9.44772 8 10 8H11C11.5523 8 12 8.44772 12 9V15C12 15.5523 11.5523 16 11 16H10C9.44772 16 9 15.5523 9 15Z" fill="#1d82f5"/>
              <path d="M14 15V9C14 8.44772 14.4477 8 15 8H16C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16H15C14.4477 16 14 15.5523 14 15Z" fill="#1d82f5"/>
              <path d="M19 15V9C19 8.44772 19.4477 8 20 8H21C21.5523 8 22 8.44772 22 9V15C22 15.5523 21.5523 16 21 16H20C19.4477 16 19 15.5523 19 15Z" fill="#1d82f5"/>
            </svg>
          </div>
          <span className="text-2xl font-bold ml-3">FinNAI</span>
        </div>

        {/* 회원가입 카드 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-2">Create an Account</h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Start your journey with FinNAI today.
          </p>

          {/* 폼 */}
          <form className="space-y-6">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600
                rounded-lg focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600
                rounded-lg focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* 비밀번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter a strong password"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600
                rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600
                rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            {/* 버튼 */}
            <button className="w-full py-3 px-4 rounded-lg text-white font-medium bg-primary hover:bg-blue-600
              transition-colors">
              Register
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a className="font-medium text-primary hover:text-blue-600" href="/login">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
