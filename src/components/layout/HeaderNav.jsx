import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl">FinNAI</span>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-primary font-semibold hover:bg-primary/10 rounded-lg transition"
          >
            로그인
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            회원가입
          </Link>
        </div>

      </div>
    </header>
  );
}
