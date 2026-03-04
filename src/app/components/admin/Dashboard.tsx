import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, JOURNEY_STAGES } from '../../../lib/supabase';
import type { Lead } from '../../../lib/supabase';
import {
  Users,
  UserPlus,
  TrendingUp,
  Clock,
  ArrowRight,
  Calendar,
} from 'lucide-react';

interface Stats {
  totalLeads: number;
  newToday: number;
  newThisWeek: number;
  byStage: Record<string, number>;
  recentLeads: Lead[];
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    newToday: 0,
    newThisWeek: 0,
    byStage: {},
    recentLeads: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('leads-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => {
        fetchStats();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const fetchStats = async () => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [allLeads, todayLeads, weekLeads, recentLeads] = await Promise.all([
      supabase.from('leads').select('status', { count: 'exact' }),
      supabase.from('leads').select('id', { count: 'exact' }).gte('created_at', todayStart),
      supabase.from('leads').select('id', { count: 'exact' }).gte('created_at', weekStart),
      supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(5),
    ]);

    const byStage: Record<string, number> = {};
    JOURNEY_STAGES.forEach(s => byStage[s] = 0);
    allLeads.data?.forEach((l: any) => {
      if (byStage[l.status] !== undefined) byStage[l.status]++;
      else byStage[l.status] = 1;
    });

    setStats({
      totalLeads: allLeads.count || 0,
      newToday: todayLeads.count || 0,
      newThisWeek: weekLeads.count || 0,
      byStage,
      recentLeads: (recentLeads.data || []) as Lead[],
    });
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0D9488] border-t-transparent" />
      </div>
    );
  }

  const statCards = [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'New Today', value: stats.newToday, icon: UserPlus, color: 'bg-green-50 text-green-600' },
    { label: 'This Week', value: stats.newThisWeek, icon: TrendingUp, color: 'bg-purple-50 text-purple-600' },
    { label: 'In Pipeline', value: stats.totalLeads - (stats.byStage['Follow-up'] || 0) - (stats.byStage['Treatment Complete'] || 0), icon: Clock, color: 'bg-orange-50 text-orange-600' },
  ];

  const stageColors: Record<string, string> = {
    'New Inquiry': 'bg-blue-100 text-blue-800',
    'Consultation Scheduled': 'bg-indigo-100 text-indigo-800',
    'Quote Sent': 'bg-yellow-100 text-yellow-800',
    'Booking Confirmed': 'bg-green-100 text-green-800',
    'Travel Arranged': 'bg-purple-100 text-purple-800',
    'Treatment Complete': 'bg-emerald-100 text-emerald-800',
    'Follow-up': 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A2332]">Dashboard</h1>
        <p className="text-[#64748B] text-sm mt-1">Overview of your patient leads and pipeline</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#64748B]">{card.label}</span>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.color}`}>
                <card.icon size={18} />
              </div>
            </div>
            <p className="text-3xl font-bold text-[#1A2332]">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Pipeline Overview */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-lg font-semibold text-[#1A2332] mb-4">Pipeline Stages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {JOURNEY_STAGES.map((stage) => (
            <button
              key={stage}
              onClick={() => navigate(`/admin/leads?stage=${encodeURIComponent(stage)}`)}
              className="text-center p-3 rounded-xl border border-gray-100 hover:border-[#0D9488]/30 hover:shadow-sm transition-all group"
            >
              <p className="text-2xl font-bold text-[#1A2332] group-hover:text-[#0D9488] transition-colors">
                {stats.byStage[stage] || 0}
              </p>
              <p className="text-xs text-[#64748B] mt-1 leading-tight">{stage}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-lg font-semibold text-[#1A2332]">Recent Leads</h2>
          <button
            onClick={() => navigate('/admin/leads')}
            className="text-sm text-[#0D9488] hover:text-[#9A6030] flex items-center gap-1 font-medium"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>

        {stats.recentLeads.length === 0 ? (
          <div className="px-6 pb-6 text-center text-[#64748B] py-8">
            <Users className="mx-auto mb-3 opacity-30" size={40} />
            <p className="font-medium">No leads yet</p>
            <p className="text-sm mt-1">Leads will appear here when visitors submit forms on your website</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t border-gray-100 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-[#64748B] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-[#64748B] uppercase tracking-wider">Treatment</th>
                  <th className="px-6 py-3 text-xs font-medium text-[#64748B] uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-xs font-medium text-[#64748B] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-medium text-[#64748B] uppercase tracking-wider">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stats.recentLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => navigate(`/admin/leads/${lead.id}`)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-[#1A2332]">{lead.name}</p>
                        <p className="text-sm text-[#64748B]">{lead.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#1A2332]">
                      {lead.treatment_interest || '\u2014'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[lead.status] || 'bg-gray-100 text-gray-800'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(lead.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B] capitalize">
                      {lead.source_form}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
