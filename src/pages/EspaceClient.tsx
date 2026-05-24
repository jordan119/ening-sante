import { Shield, LogOut, FileText, Folder, Calendar, CalendarDays, ShieldCheck, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarView } from '../components/dashboard/CalendarView';

export function EspaceClient() {
  const [activeTab, setActiveTab] = useState('contrats');

  const tabs = [
    { id: 'contrats', label: 'Mes contrats', icon: <FileText size={18} /> },
    { id: 'rapports', label: 'Mes rapports', icon: <Folder size={18} /> },
    { id: 'visites', label: 'Mes visites', icon: <Calendar size={18} /> },
    { id: 'calendrier', label: 'Calendrier', icon: <CalendarDays size={18} /> },
    { id: 'conformite', label: 'Ma conformité', icon: <ShieldCheck size={18} /> },
    { id: 'messagerie', label: 'Messagerie', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-neutral-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#155e42] p-2 rounded-lg flex items-center justify-center">
            <Shield size={24} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-[16px] leading-tight">Espace Client</h1>
            <p className="text-gray-400 text-[12px]">Chargement...</p>
          </div>
        </div>
        <Link to="/" className="text-gray-500 hover:text-gray-800 flex items-center gap-2 text-[14px] font-medium transition-colors">
          <LogOut size={18} />
          Déconnexion
        </Link>
      </header>

      {/* Main Container */}
      <div className="flex-grow w-full px-6 py-8 flex flex-col">
        <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-t-lg text-[14px] font-medium transition-colors whitespace-nowrap mb-[-1px] border-b-2 ${
                  activeTab === tab.id
                    ? 'bg-[#155e42] text-white border-[#155e42]'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 border-transparent'
                } ${activeTab === tab.id ? 'rounded-lg' : ''}`}
                style={activeTab === tab.id ? { borderBottom: 'none' } : {}}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-grow flex flex-col">
            {activeTab === 'contrats' && (
              <div className="bg-neutral-white border border-gray-200 rounded-2xl flex-grow flex flex-col items-center justify-center shadow-sm min-h-[500px]">
                <FileText size={48} strokeWidth={1.5} className="mb-4 text-[#64748b]" />
                <p className="text-[15px] font-medium text-[#64748b]">Aucun contrat pour le moment.</p>
              </div>
            )}
            
            {activeTab === 'calendrier' && <CalendarView />}

            {activeTab !== 'contrats' && activeTab !== 'calendrier' && (
              <div className="bg-neutral-white border border-gray-200 rounded-2xl flex-grow flex flex-col items-center justify-center shadow-sm min-h-[500px]">
                <p className="text-[15px] font-medium text-[#64748b]">Contenu en cours de développement...</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
