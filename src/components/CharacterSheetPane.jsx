import React, { useRef } from 'react';
import { Copy, Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import { compileCharacterSheetPrompt } from '../utils/promptCompiler';

export default function CharacterSheetPane({ 
  charInfo, 
  onChangeCharInfo, 
  onCopyText, 
  t 
}) {
  const fileInputRef = useRef(null);

  const sheetTypes = [
    { code: 'turnaround', label: t.sheetTypes.turnaround, desc: 'Front, side, back, 3/4 — one sheet.' },
    { code: 'expressions', label: t.sheetTypes.expressions, desc: 'Many facial mimics, same identity.' },
    { code: 'poses', label: t.sheetTypes.poses, desc: 'Dynamic action poses, consistent model.' },
    { code: 'outfit', label: t.sheetTypes.outfit, desc: 'Different clothing designs & props.' },
    { code: 'reference-lock', label: t.sheetTypes.referenceLock, desc: 'Close-up facial detail reference.' },
    { code: 'character choices', label: t.sheetTypes.characterChoices, desc: 'Model sheet overview.' }
  ];

  const styles = [
    'Realistic', 'Cartoon', 'Anime', 'Watercolor', 'Oil Painting', 
    'Pixel Art', '3D Render', 'Sketch', 'Cyberpunk', 'Vintage', 
    'Studio Ghibli', 'Comic Book'
  ];

  const dimensions = [
    'Wide (16:9)', 'Square (1:1)', 'Instagram Post', 'Instagram Story', 
    'TikTok / Reels', 'YouTube', 'Facebook Post', 'Pinterest'
  ];

  const cameras = [
    { code: 'default', label: t.cameraOptions.default },
    { code: 'headshot', label: t.cameraOptions.headshot },
    { code: 'portrait', label: t.cameraOptions.portrait },
    { code: 'fashion', label: t.cameraOptions.fashion },
    { code: 'hero', label: t.cameraOptions.hero },
    { code: 'documentary', label: t.cameraOptions.documentary },
    { code: 'showcase', label: t.cameraOptions.showcase },
    { code: 'group', label: t.cameraOptions.group },
    { code: 'landscape', label: t.cameraOptions.landscape }
  ];

  const compiledPrompt = compileCharacterSheetPrompt(charInfo);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onChangeCharInfo('refPhoto', {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        type: e.target.files[0].type
      });
    }
  };

  return (
    <div className="sidebar-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Pane Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{t.paneTitle}</h2>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.paneSubTitle}</p>
      </div>

      {/* 1. Sheet Type */}
      <div className="form-section">
        <div className="section-header">
          <h3><Sparkles size={16} /> {t.sheetType}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sheetTypes.map(type => (
            <button
              key={type.code}
              className={`choice-btn ${charInfo.sheetType === type.code ? 'active' : ''}`}
              onClick={() => onChangeCharInfo('sheetType', type.code)}
              style={{ alignItems: 'flex-start', padding: '12px' }}
              type="button"
            >
              <span style={{ fontWeight: 600, fontSize: '0.8rem' }}>{type.label}</span>
              <span className="btn-desc" style={{ textAlign: 'left', marginTop: '2px' }}>{type.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Visual Style */}
      <div className="form-section">
        <div className="section-header">
          <h3>{t.visualStyle}</h3>
        </div>
        <div className="grid-buttons-3">
          {styles.map(style => (
            <button
              key={style}
              className={`choice-btn ${charInfo.visualStyle === style ? 'active' : ''}`}
              onClick={() => onChangeCharInfo('visualStyle', style)}
              type="button"
            >
              <span>{style}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Sheet Dimension */}
      <div className="form-section">
        <div className="section-header">
          <h3>{t.sheetDimension}</h3>
        </div>
        <div className="grid-buttons">
          {dimensions.map(dim => (
            <button
              key={dim}
              className={`choice-btn ${charInfo.sheetDimension === dim ? 'active' : ''}`}
              onClick={() => onChangeCharInfo('sheetDimension', dim)}
              type="button"
            >
              <span>{dim}</span>
            </button>
          ))}
        </div>
        <p className="help-text">{t.paneNote}</p>
      </div>

      {/* 4. Character Info */}
      <div className="form-section">
        <div className="section-header">
          <h3>{t.characterInfo}</h3>
        </div>
        
        {/* Character Name */}
        <div className="form-group">
          <label>{t.characterName}</label>
          <input
            className="input-text"
            type="text"
            value={charInfo.name}
            onChange={(e) => onChangeCharInfo('name', e.target.value)}
            placeholder={t.characterNamePlaceholder}
          />
        </div>

        {/* Reference Photo */}
        <div className="form-group">
          <label>
            <span>{t.referencePhoto} <span className="optional">{t.referencePhotoOptional}</span></span>
          </label>
          <div className="file-upload-wrapper">
            <button 
              className="file-upload-btn"
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              <Upload size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
              {t.uploadButton}
            </button>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
              {charInfo.refPhoto ? charInfo.refPhoto.name : t.noFileSelected}
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          <p className="help-text">{t.referencePhotoHelp}</p>
        </div>

        {/* Physical Features */}
        <div className="form-group">
          <label>
            <span>{t.physicalFeatures}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-sub)' }}>{t.physicalFeaturesHelp}</span>
          </label>
          <textarea
            className="textarea"
            value={charInfo.physicalFeatures}
            onChange={(e) => onChangeCharInfo('physicalFeatures', e.target.value)}
            placeholder={t.physicalFeaturesPlaceholder}
          />
        </div>

        {/* Outfit */}
        <div className="form-group">
          <label>{t.outfit}</label>
          <textarea
            className="textarea"
            value={charInfo.outfit}
            onChange={(e) => onChangeCharInfo('outfit', e.target.value)}
            placeholder={t.outfitPlaceholder}
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label>
            <span>{t.age}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-sub)' }}>{t.ageHelp}</span>
          </label>
          <input
            className="input-text"
            type="text"
            value={charInfo.age}
            onChange={(e) => onChangeCharInfo('age', e.target.value)}
            placeholder={t.agePlaceholder}
          />
        </div>
      </div>

      {/* 5. Visual Guide Settings */}
      <div className="form-section">
        <div className="section-header">
          <h3>{t.visualGuideSettings}</h3>
        </div>

        {/* Art Style */}
        <div className="form-group">
          <label>{t.artStyle}</label>
          <input
            className="input-text"
            type="text"
            value={charInfo.artStyle}
            onChange={(e) => onChangeCharInfo('artStyle', e.target.value)}
            placeholder={t.artStylePlaceholder}
          />
        </div>

        {/* Mood */}
        <div className="form-group">
          <label>{t.mood}</label>
          <input
            className="input-text"
            type="text"
            value={charInfo.mood}
            onChange={(e) => onChangeCharInfo('mood', e.target.value)}
            placeholder={t.moodPlaceholder}
          />
        </div>

        {/* Color Palette */}
        <div className="form-group">
          <label>{t.colorPalette}</label>
          <input
            className="input-text"
            type="text"
            value={charInfo.colorPalette}
            onChange={(e) => onChangeCharInfo('colorPalette', e.target.value)}
            placeholder={t.colorPalettePlaceholder}
          />
        </div>

        {/* Camera & Lens */}
        <div className="form-group">
          <label>{t.cameraLens}</label>
          <select
            className="select"
            value={charInfo.cameraLens}
            onChange={(e) => onChangeCharInfo('cameraLens', e.target.value)}
          >
            {cameras.map(cam => (
              <option key={cam.code} value={cam.label}>{cam.label}</option>
            ))}
          </select>
          <p className="help-text">{t.cameraLensNote}</p>
        </div>
      </div>

      {/* 6. Prompt Output Section */}
      <div className="form-section">
        <div className="section-header">
          <h3>{t.characterSheetPrompt}</h3>
        </div>
        <p className="help-text" style={{ marginTop: '-10px' }}>{t.characterSheetPromptHelp}</p>
        
        <div className="preview-prompt-box">
          {compiledPrompt}
        </div>

        <button
          className="action-btn"
          onClick={() => onCopyText(compiledPrompt)}
          type="button"
        >
          <Copy size={16} />
          {t.copySheetPrompt.replace('{name}', charInfo.name || 'Character')}
        </button>
      </div>

    </div>
  );
}
