
import React, { useState, useCallback } from 'react';
import IntroScreen from './components/IntroScreen';
import CrisisQuestionsScreen from './components/CrisisQuestionsScreen';
import OperatingRoom from './components/OperatingRoom';
import SolutionModal from './components/SolutionModal';

function App() {
  const [currentView, setCurrentView] = useState<'intro' | 'crisisQuestions' | 'operatingRoom'>('intro');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProceedToQuestions = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('crisisQuestions');
  }, []);

  const handleProceedToCrisis = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('operatingRoom');
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-y-auto overflow-x-hidden font-sans bg-black">
      {currentView === 'intro' && <IntroScreen onProceed={handleProceedToQuestions} />}
      
      {currentView === 'crisisQuestions' && <CrisisQuestionsScreen onProceed={handleProceedToCrisis} />}

      {currentView === 'operatingRoom' && (
        <>
          <OperatingRoom onSavePatient={openModal} isCrisisActive={!isModalOpen} />
          <SolutionModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      )}
    </div>
  );
}

export default App;
