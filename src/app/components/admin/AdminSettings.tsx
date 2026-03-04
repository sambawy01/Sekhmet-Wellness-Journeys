import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import {
  UserPlus,
  Shield,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
} from 'lucide-react';

export default function AdminSettings() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitePassword, setInvitePassword] = useState('');
  const [inviteStatus, setInviteStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setCurrentUser(user);
    });
  }, []);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setInviteStatus(null);

    // Note: Creating users via admin API requires service_role key
    // For now, we provide instructions for adding users via Supabase Dashboard
    setInviteStatus({
      type: 'error',
      message: `To add team members, go to your Supabase Dashboard > Authentication > Users > Add User. Use email: ${inviteEmail} with the password you chose. They can then log in at the admin panel.`
    });
    setLoading(false);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-[#1A2332]">Settings</h1>
        <p className="text-[#64748B] text-sm mt-1">Manage your CRM configuration</p>
      </div>

      {/* Current User */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Shield size={18} className="text-[#0D9488]" />
          <h2 className="text-lg font-semibold text-[#1A2332]">Current Account</h2>
        </div>
        {currentUser && (
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-3 rounded-lg bg-gray-50">
              <span className="text-[#64748B]">Email</span>
              <span className="text-[#1A2332] font-medium">{currentUser.email}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-gray-50">
              <span className="text-[#64748B]">User ID</span>
              <div className="flex items-center gap-2">
                <span className="text-[#1A2332] font-mono text-xs">{currentUser.id.slice(0, 16)}...</span>
                <button
                  onClick={() => navigator.clipboard.writeText(currentUser.id)}
                  className="text-[#64748B] hover:text-[#0D9488]"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-gray-50">
              <span className="text-[#64748B]">Last Sign In</span>
              <span className="text-[#1A2332] font-medium">
                {currentUser.last_sign_in_at
                  ? new Date(currentUser.last_sign_in_at).toLocaleString()
                  : 'N/A'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Add Team Member */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <UserPlus size={18} className="text-[#0D9488]" />
          <h2 className="text-lg font-semibold text-[#1A2332]">Add Team Member</h2>
        </div>

        {inviteStatus && (
          <div className={`mb-4 p-4 rounded-xl flex items-start gap-3 ${
            inviteStatus.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-amber-50 border border-amber-200'
          }`}>
            {inviteStatus.type === 'success' ? (
              <CheckCircle size={18} className="text-green-600 mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={18} className="text-amber-600 mt-0.5 shrink-0" />
            )}
            <p className={`text-sm ${inviteStatus.type === 'success' ? 'text-green-700' : 'text-amber-700'}`}>
              {inviteStatus.message}
            </p>
          </div>
        )}

        <form onSubmit={handleInvite} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Email Address</label>
            <input
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
              placeholder="colleague@company.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Temporary Password</label>
            <input
              type="text"
              value={invitePassword}
              onChange={(e) => setInvitePassword(e.target.value)}
              required
              placeholder="Create a temporary password"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0D9488] text-white rounded-xl text-sm font-medium hover:bg-[#9A6030] disabled:opacity-50 transition-colors"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <UserPlus size={16} />
            )}
            Get Instructions
          </button>
        </form>
      </div>

      {/* Supabase Dashboard Link */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-semibold text-[#1A2332] mb-3">Supabase Dashboard</h2>
        <p className="text-sm text-[#64748B] mb-4">
          Manage users, view database, and configure advanced settings directly in Supabase.
        </p>
        <a
          href="https://supabase.com/dashboard/project/byqfoitydtjyddsythmi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <ExternalLink size={16} />
          Open Supabase Dashboard
        </a>
      </div>

      {/* Email Notifications Setup */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-semibold text-[#1A2332] mb-3">Email Notifications</h2>
        <p className="text-sm text-[#64748B] mb-4">
          To enable email notifications when new leads come in, add a Resend API key to your Supabase Edge Function secrets.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 text-sm font-mono text-[#1A2332] space-y-1">
          <p className="text-[#64748B] font-sans text-xs mb-2">Steps:</p>
          <p>1. Sign up at resend.com (free: 100 emails/day)</p>
          <p>2. Get your API key</p>
          <p>3. Go to Supabase Dashboard \u2192 Edge Functions \u2192 Secrets</p>
          <p>4. Add secret: RESEND_API_KEY = your-key</p>
          <p>5. Uncomment the email code in the Edge Function</p>
        </div>
      </div>
    </div>
  );
}
