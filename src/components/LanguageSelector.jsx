import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSelector({ activeLang, onChangeLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ms', label: 'Melayu' },
    { code: 'zh', label: '中文' }
  ];

  const currentLangLabel = languages.find(l => l.code === activeLang)?.label || 'English';

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="lang-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        type="button"
      >
        <Globe size={16} />
        <span>{currentLangLabel}</span>
        <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${activeLang === lang.code ? 'active' : ''}`}
              onClick={() => {
                onChangeLang(lang.code);
                setIsOpen(false);
              }}
              type="button"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
