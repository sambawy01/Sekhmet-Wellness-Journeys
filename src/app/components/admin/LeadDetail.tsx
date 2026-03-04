import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase, JOURNEY_STAGES } from '../../../lib/supabase';
import type { Lead, JourneyHistory } from '../../../lib/supabase';
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Calendar,
  DollarSign,
  FileText,
  Heart,
  User,
  Clock,
  CheckCircle2,
  Send,
  Trash2,
} from 'lucide-react';

const stageColors: Record<string, string> = {
  'New Inquiry': 'border-blue-400 bg-blue-50 text-blue-700',
  'Consultation Scheduled': 'border-indigo-400 bg-indigo-50 text-indigo-700',
  'Quote Sent': 'border-yellow-400 bg-yellow-50 text-yellow-700',
  'Booking Confirmed': 'border-green-400 bg-green-50 text-green-700',
  'Travel Arranged': 'border-purple-400 bg-purple-50 text-purple-700',
  'Treatment Complete': 'border-emerald-400 bg-emerald-50 text-emerald-700',
  'Follow-up': 'border-gray-400 bg-gray-50 text-gray-700',
};

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);
  const [history, setHistory] = useState<JourneyHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) fetchLead();
  }, [id]);

  const fetchLead = async () => {
    const [leadRes, historyRes] = await Promise.all([
      supabase.from('leads').select('*').eq('id', id).single(),
      supabase.from('journey_history').select('*').eq('lead_id', id).order('changed_at', { ascending: true }),
    ]);

    if (leadRes.data) setLead(leadRes.data as Lead);
    if (historyRes.data) setHistory(historyRes.data as JourneyHistory[]);
    setLoading(false);
  };

  const updateStage = async (newStage: string) => {
    if (!lead || lead.status === newStage) return;
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();

    await Promise.all([
      supabase.from('leads').update({ status: newStage }).eq('id', lead.id),
      supabase.from('journey_history').insert([{
        lead_id: lead.id,
        from_stage: lead.status,
        to_stage: newStage,
        changed_by: user?.id || null,
        note: `Stage changed from "${lead.status}" to "${newStage}"`,
      }]),
    ]);

    await fetchLead();
    setSaving(false);
  };

  const addNote = async () => {
    if (!lead || !newNote.trim()) return;
    setSaving(true);

    const { data: { user } } = await supabase.auth.getUser();
    const updatedNotes = [
      ...(lead.notes || []),
      { text: newNote.trim(), author: user?.email || 'Admin', date: new Date().toISOString() },
    ];

    await supabase.from('leads').update({ notes: updatedNotes }).eq('id', lead.id);
    setNewNote('');
    await fetchLead();
    setSaving(false);
  };

  const deleteLead = async () => {
    if (!lead || !window.confirm('Are you sure you want to delete this lead? This cannot be undone.')) return;
    await supabase.from('leads').delete().eq('id', lead.id);
    navigate('/admin/leads');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0D9488] border-t-transparent" />
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="text-center py-16">
        <p className="text-[#64748B]">Lead not found</p>
        <button onClick={() => navigate('/admin/leads')} className="text-[#0D9488] mt-2">
          Back to Leads
        </button>
      </div>
    );
  }

  const currentStageIndex = JOURNEY_STAGES.indexOf(lead.status as any);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/leads')}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#1A2332]">{lead.name}</h1>
            <p className="text-[#64748B] text-sm">{lead.email}</p>
          </div>
        </div>
        <button
          onClick={deleteLead}
          className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors"
        >
          <Trash2 size={16} /> Delete Lead
        </button>
      </div>

      {/* Journey Stage Tracker */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Patient Journey</h2>
        <div className="flex flex-wrap gap-2">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isCurrent = lead.status === stage;
            const isPast = idx < currentStageIndex;
            const isFuture = idx > currentStageIndex;

            return (
              <button
                key={stage}
                onClick={() => updateStage(stage)}
                disabled={saving}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border-2 transition-all disabled:opacity-50 ${
                  isCurrent
                    ? stageColors[stage] + ' border-2 shadow-sm'
                    : isPast
                    ? 'border-gray-200 bg-gray-50 text-gray-500'
                    : 'border-gray-100 bg-white text-gray-400 hover:border-[#0D9488]/30 hover:text-[#0D9488]'
                }`}
              >
                {isPast ? (
                  <CheckCircle2 size={14} className="text-green-500" />
                ) : isCurrent ? (
                  <Clock size={14} />
                ) : null}
                {stage}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Contact Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Mail size={18} className="text-[#0D9488]" />
                <div>
                  <p className="text-xs text-[#64748B]">Email</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Phone size={18} className="text-[#0D9488]" />
                <div>
                  <p className="text-xs text-[#64748B]">Phone</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.phone || 'Not provided'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Globe size={18} className="text-[#0D9488]" />
                <div>
                  <p className="text-xs text-[#64748B]">Passport Country</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.passport_country || 'Not provided'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <Calendar size={18} className="text-[#0D9488]" />
                <div>
                  <p className="text-xs text-[#64748B]">Preferred Dates</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.preferred_dates || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Treatment Details</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                <Heart size={18} className="text-[#0D9488] mt-0.5" />
                <div>
                  <p className="text-xs text-[#64748B]">Treatment Interest</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.treatment_interest || 'Not specified'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                <DollarSign size={18} className="text-[#0D9488] mt-0.5" />
                <div>
                  <p className="text-xs text-[#64748B]">Budget Range</p>
                  <p className="text-sm font-medium text-[#1A2332]">{lead.budget_range || 'Not provided'}</p>
                </div>
              </div>
              {lead.medical_history && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <FileText size={18} className="text-[#0D9488] mt-0.5" />
                  <div>
                    <p className="text-xs text-[#64748B]">Medical History</p>
                    <p className="text-sm text-[#1A2332] whitespace-pre-wrap">{lead.medical_history}</p>
                  </div>
                </div>
              )}
              {lead.message && (
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <FileText size={18} className="text-[#0D9488] mt-0.5" />
                  <div>
                    <p className="text-xs text-[#64748B]">Message</p>
                    <p className="text-sm text-[#1A2332] whitespace-pre-wrap">{lead.message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Notes</h2>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addNote()}
                placeholder="Add a note..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 focus:border-[#0D9488] transition-all text-sm"
              />
              <button
                onClick={addNote}
                disabled={!newNote.trim() || saving}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#0D9488] text-white rounded-xl text-sm font-medium hover:bg-[#9A6030] disabled:opacity-50 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>

            {(lead.notes || []).length === 0 ? (
              <p className="text-sm text-[#64748B] text-center py-4">No notes yet</p>
            ) : (
              <div className="space-y-3">
                {[...(lead.notes || [])].reverse().map((note, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-sm text-[#1A2332]">{note.text}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-[#64748B]">
                      <User size={12} />
                      <span>{note.author}</span>
                      <span>&middot;</span>
                      <span>{new Date(note.date).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Journey Timeline */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Meta</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Source</span>
                <span className="text-[#1A2332] capitalize font-medium">{lead.source_form}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Created</span>
                <span className="text-[#1A2332] font-medium">{new Date(lead.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Updated</span>
                <span className="text-[#1A2332] font-medium">{new Date(lead.updated_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">ID</span>
                <span className="text-[#1A2332] font-mono text-xs">{lead.id.slice(0, 8)}...</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">Journey Timeline</h2>
            {history.length === 0 ? (
              <p className="text-sm text-[#64748B] text-center py-4">No history yet</p>
            ) : (
              <div className="space-y-0">
                {history.map((h, idx) => (
                  <div key={h.id} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${idx === history.length - 1 ? 'bg-[#0D9488]' : 'bg-gray-300'}`} />
                      {idx < history.length - 1 && <div className="w-0.5 h-full bg-gray-200 min-h-[40px]" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium text-[#1A2332]">{h.to_stage}</p>
                      {h.note && <p className="text-xs text-[#64748B] mt-0.5">{h.note}</p>}
                      <p className="text-xs text-[#64748B] mt-1">
                        {new Date(h.changed_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
