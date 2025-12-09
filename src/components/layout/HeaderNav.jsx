import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-2xl">FinNAI</span>
        </Link>

        {/* 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link to="/" className="text-slate-700 hover:text-primary">
            Dashboard
          </Link>
          <Link to="/markets" className="text-slate-700 hover:text-primary">
            Markets
          </Link>
          <Link to="/news" className="text-slate-700 hover:text-primary">
            News
          </Link>
          <Link to="/portfolio" className="text-slate-700 hover:text-primary">
            Portfolio
          </Link>
        </nav>

        {/* 로그인 / 회원가입 */}
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
