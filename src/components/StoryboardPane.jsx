import React, { useState, useEffect } from 'react';
import { Plus, Trash, ArrowLeft, ArrowRight, Copy, RefreshCw, Sparkles, AlertCircle } from 'lucide-react';
import { compileScenePrompt, getAspectRatio } from '../utils/promptCompiler';

// Helper component for individual scene card
function SceneCard({ 
  scene, 
  index, 
  totalScenes, 
  charInfo, 
  platform, 
  onUpdate, 
  onDelete, 
  onMove, 
  onCopyText, 
  t 
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const scenePrompt = compileScenePrompt(charInfo, scene, platform);
  const aspectRatioClass = `aspect-${getAspectRatio(charInfo.sheetDimension).replace(':', '-')}`;

  // Check matching mock images based on description and name
  const getMockImage = (desc = '', name = '') => {
    const isAiko = name.toLowerCase().includes('aiko');
    if (!isAiko) return null;

    const lowerDesc = desc.toLowerCase();
    if (lowerDesc.includes('park') || lowerDesc.includes('walk') || lowerDesc.includes('outside')) {
      return '/aiko_park.png';
    }
    if (lowerDesc.includes('coffee') || lowerDesc.includes('cafe') || lowerDesc.includes('drink') || lowerDesc.includes('shop')) {
      return '/aiko_coffee.png';
    }
    if (lowerDesc.includes('read') || lowerDesc.includes('library') || lowerDesc.includes('book') || lowerDesc.includes('desk')) {
      return '/aiko_library.png';
    }
    if (lowerDesc.includes('turnaround') || lowerDesc.includes('expressions') || lowerDesc.includes('poses') || lowerDesc.includes('sheet')) {
      return '/aiko_turnaround.png';
    }
    
    // Fallback order of images based on index
    const fallbacks = ['/aiko_park.png', '/aiko_coffee.png', '/aiko_library.png', '/aiko_turnaround.png'];
    return fallbacks[index % fallbacks.length];
  };

  // Simulate AI generation whenever description or character properties change
  useEffect(() => {
    setIsLoading(true);
    const mockImg = getMockImage(scene.description, charInfo.name);
    
    const timer = setTimeout(() => {
      setImageSrc(mockImg);
      setIsLoading(false);
    }, 1200); // 1.2 second simulated generation lag

    return () => clearTimeout(timer);
  }, [scene.description, charInfo.name, charInfo.physicalFeatures, charInfo.outfit, charInfo.visualStyle]);

  const handleRegenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="scene-card">
      
      {/* 1. Visual Card Panel (Left) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className={`scene-frame-container ${aspectRatioClass}`}>
          <span className="scene-frame-badge">{t.frame} {index + 1}</span>
          
          {isLoading ? (
            <div className="image-placeholder">
              <div className="loading-spinner"></div>
              <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>Generating Frame...</span>
            </div>
          ) : imageSrc ? (
            <img src={imageSrc} alt={`Scene ${index + 1}`} className="scene-image" />
          ) : (
            <div className="image-placeholder">
              <Sparkles size={24} style={{ color: 'var(--primary)' }} />
              <span>Ready to generate consistent {charInfo.name || 'character'} render</span>
            </div>
          )}
        </div>
        
        {/* Quick Re-generate option */}
        <button
          className="choice-btn"
          style={{ width: '100%', flexDirection: 'row', gap: '8px', padding: '8px 12px' }}
          onClick={handleRegenerate}
          disabled={isLoading}
          type="button"
        >
          <RefreshCw size={14} className={isLoading ? 'loading-spinner' : ''} />
          <span>{t.regenerateFrame}</span>
        </button>
      </div>

      {/* 2. Form details Panel (Right) */}
      <div className="scene-content">
        <div className="scene-card-header">
          <input
            className="scene-title-input"
            type="text"
            value={scene.title}
            onChange={(e) => onUpdate(scene.id, 'title', e.target.value)}
            placeholder={`${t.frame} ${index + 1}`}
          />
          
          {/* Card action controls */}
          <div className="card-actions">
            <button
              className="icon-btn"
              onClick={() => onMove(index, 'up')}
              disabled={index === 0}
              title={t.moveLeft}
              type="button"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              className="icon-btn"
              onClick={() => onMove(index, 'down')}
              disabled={index === totalScenes - 1}
              title={t.moveRight}
              type="button"
            >
              <ArrowRight size={16} />
            </button>
            <button
              className="icon-btn danger"
              onClick={() => onDelete(scene.id)}
              title={t.deleteScene}
              type="button"
            >
              <Trash size={16} />
            </button>
          </div>
        </div>

        {/* Scene Description input */}
        <div className="form-group">
          <textarea
            className="textarea"
            value={scene.description}
            onChange={(e) => onUpdate(scene.id, 'description', e.target.value)}
            placeholder={t.sceneDescPlaceholder}
            style={{ minHeight: '60px' }}
          />
        </div>

        {/* Dynamic platform specific Prompt display */}
        <div className="form-group" style={{ gap: '6px' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span>{t.scenePromptLabel} &middot; {t.platforms[platform]}</span>
            <button
              onClick={() => onCopyText(scenePrompt)}
              style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600 }}
              type="button"
            >
              <Copy size={12} />
              {t.copyPrompt}
            </button>
          </label>
          <div className="preview-prompt-box" style={{ background: 'hsla(222, 47%, 5%, 0.7)', maxHeight: '72px' }}>
            {scenePrompt}
          </div>
        </div>

      </div>

    </div>
  );
}

export default function StoryboardPane({
  scenes,
  charInfo,
  activePlatform,
  onChangePlatform,
  onUpdateScene,
  onAddScene,
  onDeleteScene,
  onMoveScene,
  onCopyText,
  t
}) {
  return (
    <div className="deck-panel">
      
      {/* Storyboard Header */}
      <div className="deck-header">
        <div className="deck-info">
          <h2>{t.deckTitle}</h2>
          <p>{scenes.length} {t.deckSubTitle}</p>
        </div>
        
        {/* Target platform selector */}
        <div className="deck-controls">
          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {t.targetPlatform}:
            </span>
            <select
              className="select"
              value={activePlatform}
              onChange={(e) => onChangePlatform(e.target.value)}
              style={{ width: '180px', padding: '8px 12px' }}
            >
              <option value="midjourney">{t.platforms.midjourney}</option>
              <option value="dalle">{t.platforms.dalle}</option>
              <option value="leonardo">{t.platforms.leonardo}</option>
              <option value="gemini">{t.platforms.gemini}</option>
              <option value="generic">{t.platforms.generic}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Storyboard Card Grid List */}
      <div className="scene-list">
        {scenes.map((scene, idx) => (
          <SceneCard
            key={scene.id}
            scene={scene}
            index={idx}
            totalScenes={scenes.length}
            charInfo={charInfo}
            platform={activePlatform}
            onUpdate={onUpdateScene}
            onDelete={onDeleteScene}
            onMove={onMoveScene}
            onCopyText={onCopyText}
            t={t}
          />
        ))}
      </div>

      {/* Add scene card control button */}
      <button 
        className="add-scene-btn" 
        onClick={onAddScene}
        type="button"
      >
        <Plus size={18} />
        {t.addScene}
      </button>

    </div>
  );
}
