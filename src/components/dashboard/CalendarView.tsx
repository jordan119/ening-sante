import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

// Helpers pour la gestion des dates
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Lundi = 0, Dimanche = 6
};

const MONTH_NAMES = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

// Données simulées pour démontrer le fonctionnement
const MOCK_VISITS = [
  { day: 12, month: new Date().getMonth(), year: new Date().getFullYear(), status: 'effectuee', title: 'Audit de Conformité', time: '09:00', location: 'Site Principal' },
  { day: 23, month: new Date().getMonth(), year: new Date().getFullYear(), status: 'planifiee', title: 'Visite Médecine du Travail', time: '14:30', location: 'Clinique Partenaire' },
  { day: 28, month: new Date().getMonth(), year: new Date().getFullYear(), status: 'annulee', title: 'Formation Secourisme', time: '08:00', location: 'Salle de Conférence' }
];

export function CalendarView() {
  const today = new Date();
  
  // État du calendrier
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<number | null>(today.getDate());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Calculs pour la grille
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);
  
  const prevMonthDays = Array.from({ length: firstDayIndex }, (_, i) => daysInPrevMonth - firstDayIndex + i + 1);
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  // Navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const isToday = (day: number) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  // Filtrage des visites
  const getDayVisits = (day: number) => MOCK_VISITS.filter(v => v.day === day && v.month === month && v.year === year);
  
  const selectedVisits = selectedDate ? getDayVisits(selectedDate) : [];
  const currentMonthVisitsCount = MOCK_VISITS.filter(v => v.month === month && v.year === year).length;

  // Helper pour la couleur des pastilles
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planifiee': return 'bg-[#155e42]';
      case 'effectuee': return 'bg-gray-300';
      case 'annulee': return 'bg-red-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="w-full text-left flex flex-col flex-grow">
      <h2 className="text-[22px] font-bold text-gray-900 mb-6">Calendrier des visites</h2>
      
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column: Calendar Grid */}
        <div className="flex-grow w-full bg-neutral-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Header Calendrier */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h3 className="text-[18px] font-bold text-gray-900 capitalize">
              {MONTH_NAMES[month]} {year}
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={handlePrevMonth}
                className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <button 
                onClick={handleNextMonth}
                className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-7 mb-4">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-[13px] font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Grille */}
            <div className="grid grid-cols-7 border-l border-t border-gray-100">
              {prevMonthDays.map(day => (
                <div key={`prev-${day}`} className="h-24 bg-gray-50/50 border-r border-b border-gray-100 p-2 text-gray-400 text-[13px] font-medium">
                  {day}
                </div>
              ))}
              
              {currentMonthDays.map(day => {
                const dayVisits = getDayVisits(day);
                const isSelected = selectedDate === day;
                const isCurrentDay = isToday(day);

                return (
                  <div 
                    key={`curr-${day}`} 
                    onClick={() => setSelectedDate(day)}
                    className={`h-24 border-r border-b border-gray-100 p-2 text-[13px] font-medium cursor-pointer transition-colors relative flex flex-col
                      ${isSelected ? 'bg-emerald-50/50 border-emerald-200' : 'bg-neutral-white hover:bg-gray-50'}
                    `}
                  >
                    {/* Numéro du jour */}
                    <div className="flex justify-center mb-1">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full 
                        ${isSelected && !isCurrentDay ? 'bg-emerald-100 text-emerald-800' : ''}
                        ${isCurrentDay ? 'bg-[#155e42] text-white font-bold' : 'text-gray-700'}
                      `}>
                        {day}
                      </span>
                    </div>

                    {/* Pastilles de visites */}
                    <div className="flex flex-wrap gap-1 mt-auto justify-center">
                      {dayVisits.map((visit, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full ${getStatusColor(visit.status)}`} title={visit.title}></div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Legend */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-6 text-[13px] text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#155e42]"></div>
              <span>Planifiée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <span>Effectuée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-200"></div>
              <span>Annulée</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Info Cards */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
          
          {/* Détails de la visite sélectionnée */}
          {selectedDate && selectedVisits.length > 0 ? (
            <div className="border border-emerald-200 bg-emerald-50/30 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h4 className="text-[14px] font-bold text-gray-900 border-b border-emerald-100 pb-2">
                Visite du {selectedDate} {MONTH_NAMES[month]} {year}
              </h4>
              {selectedVisits.map((visit, idx) => (
                <div key={idx} className="bg-neutral-white border border-gray-100 p-4 rounded-xl shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(visit.status)}`}></div>
                    <span className="font-bold text-[14px] text-gray-900 leading-tight">{visit.title}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[12px] mt-1">
                    <Clock size={14} />
                    <span>{visit.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-[12px]">
                    <MapPin size={14} />
                    <span>{visit.location}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-gray-500 h-40 bg-neutral-white">
              <CalendarIcon size={28} className="mb-3 text-gray-400" />
              <p className="text-[13px] leading-relaxed">Cliquez sur une visite dans le calendrier pour voir les détails</p>
            </div>
          )}
          
          {/* Résumé du mois */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-neutral-white">
            <h4 className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-3">
              CE MOIS — {currentMonthVisitsCount} VISITE{currentMonthVisitsCount !== 1 ? 'S' : ''}
            </h4>
            {currentMonthVisitsCount > 0 ? (
              <p className="text-[13.5px] text-gray-600">Vous avez {currentMonthVisitsCount} visite{currentMonthVisitsCount !== 1 ? 's' : ''} prévue{currentMonthVisitsCount !== 1 ? 's' : ''} ce mois-ci.</p>
            ) : (
              <p className="text-[13.5px] text-gray-600">Aucune visite ce mois-ci.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
