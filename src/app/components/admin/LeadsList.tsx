import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase, JOURNEY_STAGES } from '../../../lib/supabase';
import type { Lead } from '../../../lib/supabase';
import {
  Search,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Users,
  Download,
} from 'lucide-react';

const PAGE_SIZE = 20;

const stageColors: Record<string, string> = {
  'New Inquiry': 'bg-blue-100 text-blue-800',
  'Consultation Scheduled': 'bg-indigo-100 text-indigo-800',
  'Quote Sent': 'bg-yellow-100 text-yellow-800',
  'Booking Confirmed': 'bg-green-100 text-green-800',
  'Travel Arranged': 'bg-purple-100 text-purple-800',
  'Treatment Complete': 'bg-emerald-100 text-emerald-800',
  'Follow-up': 'bg-gray-100 text-gray-800',
};

export default function LeadsList() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [stageFilter, setStageFilter] = useState(searchParams.get('stage') || '');
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchLeads();
  }, [stageFilter, page]);

  useEffect(() => {
    const channel = supabase
      .channel('leads-list')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, () => {
        fetchLeads();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [stageFilter, page]);

  const fetchLeads = async () => {
    setLoading(true);
    let query = supabase
      .from('leads')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

    if (stageFilter) {
      query = query.eq('status', stageFilter);
    }

    const { data, count, error } = await query;
    if (!error) {
      setLeads((data || []) as Lead[]);
      setTotalCount(count || 0);
    }
    setLoading(false);
  };

  const filteredLeads = search
    ? leads.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase()) ||
        (l.treatment_interest || '').toLowerCase().includes(search.toLowerCase()) ||
        (l.phone || '').includes(search)
      )
    : leads;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Treatment', 'Status', 'Source', 'Date', 'Budget', 'Country'];
    const rows = filteredLeads.map(l => [
      l.name, l.email, l.phone || '', l.treatment_interest || '', l.status,
      l.source_form, new Date(l.created_at).toLocaleDateString(), l.budget_range || '', l.passport_country || ''
    ]);
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#2C2825]">Leads</h1>
          <p className="text-[#9B918A] text-sm mt-1">{totalCount} total leads</p>
        </div>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#2C2825] hover:bg-gray-50 transition-colors"
        >
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9B918A]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, treatment, or phone..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B5724A]/30 focus:border-[#B5724A] transition-all text-sm"
          />
        </div>
        <div className="relative">
          <Filter size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9B918A]" />
          <select
            value={stageFilter}
            onChange={(e) => {
              setStageFilter(e.target.value);
              setPage(0);
              if (e.target.value) {
                setSearchParams({ stage: e.target.value });
              } else {
                setSearchParams({});
              }
            }}
            className="pl-10 pr-8 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B5724A]/30 focus:border-[#B5724A] transition-all text-sm bg-white appearance-none cursor-pointer min-w-[200px]"
          >
            <option value="">All Stages</option>
            {JOURNEY_STAGES.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#B5724A] border-t-transparent" />
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-16 text-[#9B918A]">
            <Users className="mx-auto mb-3 opacity-30" size={40} />
            <p className="font-medium">No leads found</p>
            <p className="text-sm mt-1">
              {search || stageFilter ? 'Try adjusting your search or filters' : 'Leads will appear here when visitors submit forms'}
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Treatment</th>
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Stage</th>
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-xs font-medium text-[#9B918A] uppercase tracking-wider">Budget</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => navigate(`/admin/leads/${lead.id}`)}
                      className="hover:bg-[#FAF7F2] cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-[#2C2825]">{lead.name}</p>
                          <p className="text-sm text-[#9B918A]">{lead.email}</p>
                          {lead.phone && <p className="text-xs text-[#9B918A]">{lead.phone}</p>}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#2C2825]">
                        {lead.treatment_interest || '\u2014'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[lead.status] || 'bg-gray-100 text-gray-800'}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#9B918A] capitalize">
                        {lead.source_form}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#9B918A]">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#2C2825]">
                        {lead.budget_range || '\u2014'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
                <p className="text-sm text-[#9B918A]">
                  Showing {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, totalCount)} of {totalCount}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-sm text-[#2C2825] font-medium px-2">
                    {page + 1} / {totalPages}
                  </span>
                  <button
                    onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                    disabled={page >= totalPages - 1}
                    className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
