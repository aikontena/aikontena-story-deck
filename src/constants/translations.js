export const translations = {
  en: {
    appTitle: "StoryDeck",
    appSubTitle: "Consistent AI Storyboard Generator",
    tagline: "One character. One style. Every scene on-model.",
    
    // Panel Toggles
    hidePanel: "Hide",
    showPanel: "Show",
    
    // Configuration Pane
    paneTitle: "Ai.KONTENA Sheets",
    paneSubTitle: "Pick sheet type → fill info → generate reference",
    
    // Section 1: Sheet & Style
    sheetType: "Sheet Type",
    visualStyle: "Visual Style",
    sheetDimension: "Sheet Dimension",
    paneNote: "Layout, labels, neutral pose, lighting and clean background are arranged automatically — you focus on character identity. Age is always locked to 20+ (adults).",
    
    // Character Info
    characterInfo: "Character Info",
    characterName: "Character Name",
    characterNamePlaceholder: "e.g. Aiko",
    referencePhoto: "Reference Photo",
    referencePhotoOptional: "(optional)",
    referencePhotoHelp: "Upload a photo. The generated character will resemble the person in the photo.",
    uploadButton: "Choose Photo",
    noFileSelected: "No file chosen",
    
    physicalFeatures: "Physical Features",
    physicalFeaturesHelp: "(face, hair, skin, body type)",
    physicalFeaturesPlaceholder: "e.g. A young woman with short black bob hair, round glasses, freckles, wearing a green hoodie.",
    
    outfit: "Outfit",
    outfitPlaceholder: "e.g. Long-sleeve batik shirt, black trousers, leather shoes.",
    
    age: "Age",
    ageHelp: "(20+)",
    agePlaceholder: "e.g. 35",
    
    // Visual Guide Settings
    visualGuideSettings: "Visual Guide Settings",
    artStyle: "Art Style",
    artStylePlaceholder: "Cinematic photo, anime, watercolor...",
    
    mood: "Mood",
    moodPlaceholder: "Warm golden hour, melancholic dusk...",
    
    colorPalette: "Color Palette",
    colorPalettePlaceholder: "Amber, cream, deep charcoal...",
    
    cameraLens: "Camera & Lens",
    cameraLensNote: "Edits here will automatically merge into each scene prompt. Re-generate any frame after tweaking.",
    
    // Character sheet prompt export
    characterSheetPrompt: "Character sheet prompt",
    characterSheetPromptHelp: "Paste into Midjourney, ChatGPT, Gemini, Leonardo, etc.",
    copySheetPrompt: "Copy {name} sheet prompt",
    
    // Storyboard Deck Pane
    deckTitle: "The deck",
    deckSubTitle: "scenes · each card keeps the same character across renders.",
    addScene: "Add scene",
    targetPlatform: "Target platform",
    targetPlatformHelp: "Scene prompt will be formatted for your selected platform.",
    
    // Scene Card Labels
    frame: "Frame",
    sceneTitlePlaceholder: "Scene Title",
    sceneDescPlaceholder: "Describe what happens in this scene...",
    scenePromptLabel: "Your scene prompt",
    copyPrompt: "Copy prompt",
    
    // Platform Options
    platforms: {
      midjourney: "Midjourney",
      dalle: "DALL·E / ChatGPT",
      leonardo: "Leonardo",
      gemini: "Gemini",
      generic: "Generic"
    },
    
    // Actions & Toast Messages
    copied: "Copied to clipboard!",
    toastPromptCopied: "Prompt copied successfully!",
    generateStoryboard: "Generate Storyboard",
    regenerateFrame: "Re-generate",
    
    // Tooltips & Controls
    moveLeft: "Move Left",
    moveRight: "Move Right",
    deleteScene: "Delete",
    
    // Sheet Types Titles
    sheetTypes: {
      turnaround: "Turnaround",
      expressions: "Expressions",
      poses: "Poses",
      outfit: "Outfit",
      referenceLock: "Reference-Lock",
      characterChoices: "Character Choices"
    },
    
    // Camera Options
    cameraOptions: {
      default: "Select camera...",
      headshot: "Professional Headshot",
      portrait: "Social Media Portrait",
      fashion: "Fashion Editorial",
      hero: "Cinematic Hero Shot",
      documentary: "Documentary Style",
      showcase: "Product Showcase",
      group: "Group Photo",
      landscape: "Landscape Person"
    }
  },
  ms: {
    appTitle: "StoryDeck",
    appSubTitle: "Jana Storyboard AI Konsisten",
    tagline: "Satu watak. Satu gaya. Setiap babak konsisten.",
    
    hidePanel: "Sembunyi",
    showPanel: "Papar",
    
    paneTitle: "Helaian Ai.KONTENA",
    paneSubTitle: "Pilih jenis helaian → isi maklumat → jana rujukan",
    
    sheetType: "Jenis Helaian",
    visualStyle: "Gaya Visual",
    sheetDimension: "Dimensi Helaian",
    paneNote: "Susun atur, label, pose neutral, pencahayaan dan latar bersih disusun secara automatik — anda fokus pada identiti watak. Umur sentiasa dikunci 20+ (dewasa).",
    
    characterInfo: "Maklumat Watak",
    characterName: "Nama Watak",
    characterNamePlaceholder: "e.g. Aiko",
    referencePhoto: "Foto Rujukan",
    referencePhotoOptional: "(pilihan)",
    referencePhotoHelp: "Muat naik foto. Watak yang dijana akan menyerupai orang dalam foto.",
    uploadButton: "Pilih Foto",
    noFileSelected: "Tiada fail dipilih",
    
    physicalFeatures: "Ciri Fizikal",
    physicalFeaturesHelp: "(muka, rambut, kulit, jenis badan)",
    physicalFeaturesPlaceholder: "e.g. A young woman with short black bob hair, round glasses, freckles, wearing a green hoodie.",
    
    outfit: "Pakaian",
    outfitPlaceholder: "e.g. Long-sleeve batik shirt, black trousers, leather shoes.",
    
    age: "Umur",
    ageHelp: "(20+)",
    agePlaceholder: "e.g. 35",
    
    visualGuideSettings: "Tetapan Panduan Visual",
    artStyle: "Gaya Seni",
    artStylePlaceholder: "Cinematic photo, anime, watercolor...",
    
    mood: "Mood",
    moodPlaceholder: "Warm golden hour, melancholic dusk...",
    
    colorPalette: "Palet Warna",
    colorPalettePlaceholder: "Amber, cream, deep charcoal...",
    
    cameraLens: "Kamera & Lensa",
    cameraLensNote: "Editan di sini akan digabungkan secara automatik ke dalam setiap arahan babak. Jana semula mana-mana bingkai selepas membuat perubahan.",
    
    characterSheetPrompt: "Arahan helaian watak",
    characterSheetPromptHelp: "Tampal ke dalam Midjourney, ChatGPT, Gemini, Leonardo, dll.",
    copySheetPrompt: "Salin arahan helaian {name}",
    
    deckTitle: "Dek anda",
    deckSubTitle: "babak · setiap kad kekal sama watak merentas render.",
    addScene: "Tambah babak",
    targetPlatform: "Platform sasaran",
    targetPlatformHelp: "Arahan babak akan diformat untuk platform yang anda pilih.",
    
    frame: "Bingkai",
    sceneTitlePlaceholder: "Tajuk babak",
    sceneDescPlaceholder: "Terangkan apa yang berlaku dalam babak ini…",
    scenePromptLabel: "Arahan babak anda",
    copyPrompt: "Salin arahan",
    
    platforms: {
      midjourney: "Midjourney",
      dalle: "DALL·E / ChatGPT",
      leonardo: "Leonardo",
      gemini: "Gemini",
      generic: "Generik"
    },
    
    copied: "Disalin ke papan klip!",
    toastPromptCopied: "Arahan berjaya disalin!",
    generateStoryboard: "Jana Storyboard",
    regenerateFrame: "Jana Semula",
    
    moveLeft: "Gerak Kiri",
    moveRight: "Gerak Kanan",
    deleteScene: "Padam",
    
    sheetTypes: {
      turnaround: "Turnaround",
      expressions: "Expressions",
      poses: "Poses",
      outfit: "Outfit",
      referenceLock: "Reference-Lock",
      characterChoices: "Character Choices"
    },
    
    cameraOptions: {
      default: "Pilih kamera...",
      headshot: "Professional Headshot",
      portrait: "Social Media Portrait",
      fashion: "Fashion Editorial",
      hero: "Cinematic Hero Shot",
      documentary: "Documentary Style",
      showcase: "Product Showcase",
      group: "Group Photo",
      landscape: "Landscape Person"
    }
  },
  zh: {
    appTitle: "StoryDeck",
    appSubTitle: "一致的 AI 故事板生成器",
    tagline: "一个角色。一种风格。每个场景一致。",
    
    hidePanel: "隐藏",
    showPanel: "显示",
    
    paneTitle: "Ai.KONTENA 角色表",
    paneSubTitle: "选择类型 → 填写信息 → 生成参考",
    
    sheetType: "角色表类型",
    visualStyle: "视觉风格",
    sheetDimension: "尺寸",
    paneNote: "布局、标签、中立姿势、灯光和干净背景将自动排列 — 您只需专注于角色身份。年龄始终锁定为 20 岁以上（成人）。",
    
    characterInfo: "角色信息",
    characterName: "角色名称",
    characterNamePlaceholder: "e.g. Aiko",
    referencePhoto: "参考照片",
    referencePhotoOptional: "(可选)",
    referencePhotoHelp: "上传照片。生成的角色将与照片中的人相似。",
    uploadButton: "选择照片",
    noFileSelected: "未选择文件",
    
    physicalFeatures: "外貌特征",
    physicalFeaturesHelp: "(脸部、头发、皮肤、体型)",
    physicalFeaturesPlaceholder: "e.g. A young woman with short black bob hair, round glasses, freckles, wearing a green hoodie.",
    
    outfit: "服装",
    outfitPlaceholder: "e.g. Long-sleeve batik shirt, black trousers, leather shoes.",
    
    age: "年龄",
    ageHelp: "(20+)",
    agePlaceholder: "e.g. 35",
    
    visualGuideSettings: "视觉指南设置",
    artStyle: "艺术风格",
    artStylePlaceholder: "Cinematic photo, anime, watercolor...",
    
    mood: "氛围",
    moodPlaceholder: "Warm golden hour, melancholic dusk...",
    
    colorPalette: "色彩搭配",
    colorPalettePlaceholder: "Amber, cream, deep charcoal...",
    
    cameraLens: "镜头与焦距",
    cameraLensNote: "此处的编辑会自动合并到每个场景提示中。调整字段后，点击重新生成任意画面。",
    
    characterSheetPrompt: "角色表提示词",
    characterSheetPromptHelp: "粘贴至 Midjourney, ChatGPT, Gemini, Leonardo 等",
    copySheetPrompt: "复制 {name} 角色表提示词",
    
    deckTitle: "故事板",
    deckSubTitle: "个场景 · 每张卡片在所有渲染中保持角色一致。",
    addScene: "添加场景",
    targetPlatform: "目标平台",
    targetPlatformHelp: "场景提示词将根据您选择的平台进行格式化。",
    
    frame: "画面",
    sceneTitlePlaceholder: "场景标题",
    sceneDescPlaceholder: "描述这个场景中发生的事情…",
    scenePromptLabel: "您的场景提示词",
    copyPrompt: "复制提示词",
    
    platforms: {
      midjourney: "Midjourney",
      dalle: "DALL·E / ChatGPT",
      leonardo: "Leonardo",
      gemini: "Gemini",
      generic: "通用"
    },
    
    copied: "已复制到剪贴板！",
    toastPromptCopied: "提示词复制成功！",
    generateStoryboard: "生成故事板",
    regenerateFrame: "重新生成",
    
    moveLeft: "向左移",
    moveRight: "向右移",
    deleteScene: "删除",
    
    sheetTypes: {
      turnaround: "Turnaround",
      expressions: "Expressions",
      poses: "Poses",
      outfit: "Outfit",
      referenceLock: "Reference-Lock",
      characterChoices: "Character Choices"
    },
    
    cameraOptions: {
      default: "选择镜头...",
      headshot: "Professional Headshot",
      portrait: "Social Media Portrait",
      fashion: "Fashion Editorial",
      hero: "Cinematic Hero Shot",
      documentary: "Documentary Style",
      showcase: "Product Showcase",
      group: "Group Photo",
      landscape: "Landscape Person"
    }
  }
};
