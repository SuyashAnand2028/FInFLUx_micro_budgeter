import { useAuthStore } from "../store";
import { Home, CreditCard, Lightbulb, LogOut } from 'lucide-react';

export default function Navigation({ currentPage, onNavigate}){
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'expenses', label: 'Expenses', icon: CreditCard },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-lg">
              <span className="text-xl font-bold text-white">💰</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              FInFLUx
            </h1>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  currentPage === id
                    ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </div>

          {/* User & Logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-800">{user?.username}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors duration-200"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                currentPage === id
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white'
                  : 'text-gray-700 bg-gray-100'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}