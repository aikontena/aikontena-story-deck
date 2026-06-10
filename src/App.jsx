import React, { useState, useEffect } from 'react';
import { SidebarClose, SidebarOpen, CheckCircle, Flame, Sparkles } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import CharacterSheetPane from './components/CharacterSheetPane';
import StoryboardPane from './components/StoryboardPane';
import { translations } from './constants/translations';

// Default initial state for Aiko
const DEFAULT_CHAR_INFO = {
  name: "Aiko",
  refPhoto: null,
  physicalFeatures: "A young Japanese woman, large expressive amber eyes, short brown bob haircut, delicate freckles on cheeks.",
  outfit: "Green oversized hoodie, black athletic leggings, clean white sneakers.",
  age: "24",
  sheetType: "turnaround",
  visualStyle: "Anime",
  sheetDimension: "Wide (16:9)",
  artStyle: "Studio Ghibli aesthetic, anime illustration",
  mood: "Soft morning sunlight, warm atmosphere",
  colorPalette: "Muted pastels, moss green, amber glow",
  cameraLens: "Cinematic Hero Shot"
};

const DEFAULT_SCENES = [
  {
    id: 'scene-1',
    title: "Scene 1: Morning Walk",
    description: "Aiko walking happily along a quiet path lined with pink cherry blossoms in full bloom, soft breeze blowing."
  },
  {
    id: 'scene-2',
    title: "Scene 2: Cozy Café",
    description: "Aiko sitting inside a cozy wooden coffee shop next to a large window, enjoying a warm cup of coffee, steam rising."
  },
  {
    id: 'scene-3',
    title: "Scene 3: Study Time",
    description: "Aiko sitting at a quiet wooden study desk in the library, looking down intently while reading a large open book."
  }
];

export default function App() {
  // Try loading from localStorage or use defaults
  const [activeLang, setActiveLang] = useState(() => {
    return localStorage.getItem('storydeck_lang') || 'en';
  });

  const [activePlatform, setActivePlatform] = useState(() => {
    return localStorage.getItem('storydeck_platform') || 'midjourney';
  });

  const [charInfo, setCharInfo] = useState(() => {
    const saved = localStorage.getItem('storydeck_char');
    return saved ? JSON.parse(saved) : DEFAULT_CHAR_INFO;
  });

  const [scenes, setScenes] = useState(() => {
    const saved = localStorage.getItem('storydeck_scenes');
    return saved ? JSON.parse(saved) : DEFAULT_SCENES;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [toasts, setToasts] = useState([]);

  const t = translations[activeLang] || translations.en;

  // Persist states in LocalStorage
  useEffect(() => {
    localStorage.setItem('storydeck_lang', activeLang);
  }, [activeLang]);

  useEffect(() => {
    localStorage.setItem('storydeck_platform', activePlatform);
  }, [activePlatform]);

  useEffect(() => {
    localStorage.setItem('storydeck_char', JSON.stringify(charInfo));
  }, [charInfo]);

  useEffect(() => {
    localStorage.setItem('storydeck_scenes', JSON.stringify(scenes));
  }, [scenes]);

  const handleChangeCharInfo = (field, value) => {
    setCharInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUpdateScene = (id, field, value) => {
    setScenes(prev => prev.map(scene => 
      scene.id === id ? { ...scene, [field]: value } : scene
    ));
  };

  const handleAddScene = () => {
    const newId = `scene-${Date.now()}`;
    const newIndex = scenes.length + 1;
    setScenes(prev => [
      ...prev,
      {
        id: newId,
        title: `Scene ${newIndex}: Untitled`,
        description: ""
      }
    ]);
  };

  const handleDeleteScene = (id) => {
    setScenes(prev => prev.filter(scene => scene.id !== id));
  };

  const handleMoveScene = (index, direction) => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === scenes.length - 1) return;

    const swapWith = direction === 'up' ? index - 1 : index + 1;
    const newScenes = [...scenes];
    const temp = newScenes[index];
    newScenes[index] = newScenes[swapWith];
    newScenes[swapWith] = temp;
    setScenes(newScenes);
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message: t.toastPromptCopied }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 2500);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="app-container">
      
      {/* 1. Header Bar */}
      <header className="app-header">
        <div className="brand-section">
          <div className="logo-icon">
            <Flame size={18} fill="#fff" />
          </div>
          <div className="brand-info">
            <h1>{t.appTitle}</h1>
            <p>{t.tagline}</p>
          </div>
        </div>

        <div className="header-controls">
          {/* Toggle Configuration Sidebar */}
          <button 
            className="secondary-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            type="button"
          >
            {isSidebarOpen ? <SidebarClose size={16} /> : <SidebarOpen size={16} />}
            <span>{isSidebarOpen ? t.hidePanel : t.showPanel}</span>
          </button>

          {/* Localization Dropdown */}
          <LanguageSelector 
            activeLang={activeLang} 
            onChangeLang={setActiveLang} 
          />
        </div>
      </header>

      {/* 2. Content Body split panel grid */}
      <main className="app-main">
        {/* Left Side: Character Sheet Configuration Pane */}
        <aside className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
          <CharacterSheetPane
            charInfo={charInfo}
            onChangeCharInfo={handleChangeCharInfo}
            onCopyText={handleCopyText}
            t={t}
          />
        </aside>

        {/* Right Side: Storyboard Deck list */}
        <section className="deck-panel-wrapper" style={{ flex: 1, overflowY: 'auto' }}>
          <StoryboardPane
            scenes={scenes}
            charInfo={charInfo}
            activePlatform={activePlatform}
            onChangePlatform={setActivePlatform}
            onUpdateScene={handleUpdateScene}
            onAddScene={handleAddScene}
            onDeleteScene={handleDeleteScene}
            onMoveScene={handleMoveScene}
            onCopyText={handleCopyText}
            t={t}
          />
        </section>
      </main>

      {/* 3. Toast Notifications Popup */}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast">
            <CheckCircle size={16} style={{ color: 'var(--success)' }} />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
