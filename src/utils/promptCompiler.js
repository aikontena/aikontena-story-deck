// Map dimension button values to aspect ratios or dimensions
export const getAspectRatio = (dimension) => {
  if (!dimension) return "16:9";
  const dim = dimension.toLowerCase();
  if (dim.includes("16:9") || dim.includes("wide") || dim.includes("youtube")) return "16:9";
  if (dim.includes("1:1") || dim.includes("square")) return "1:1";
  if (dim.includes("instagram post") || dim.includes("facebook")) return "4:5";
  if (dim.includes("story") || dim.includes("tiktok") || dim.includes("reels")) return "9:16";
  if (dim.includes("pinterest")) return "2:3";
  return "16:9";
};

// Generate the primary character sheet prompt
export const compileCharacterSheetPrompt = (charInfo) => {
  const {
    name = "Character",
    physicalFeatures = "",
    outfit = "",
    age = "20+",
    sheetType = "turnaround",
    visualStyle = "Realistic",
    sheetDimension = "Wide (16:9)"
  } = charInfo;

  const ageStr = age ? `${age} years old` : "adult";
  const featuresStr = physicalFeatures ? `, ${physicalFeatures}` : "";
  const outfitStr = outfit ? `, wearing ${outfit}` : "";
  const styleStr = visualStyle ? `${visualStyle} style` : "";
  const arStr = `--ar ${getAspectRatio(sheetDimension)}`;

  const namePart = name ? name : "A character";

  switch (sheetType.toLowerCase()) {
    case "turnaround":
      return `Character sheet turnaround, multiple views showing front, side, back and 3/4 profiles of ${namePart}, ${ageStr}${featuresStr}${outfitStr}. ${styleStr}, clean solid background, neutral studio lighting, flat colors, model sheet layout, character reference design ${arStr}`;
    
    case "expressions":
      return `Character expressions sheet, multiple facial mimics showing diverse emotions and expressions of ${namePart}, same identity, ${ageStr}${featuresStr}${outfitStr}. ${styleStr}, clean background, consistent character design reference ${arStr}`;
    
    case "poses":
      return `Character pose sheet, multiple action poses and gestures of ${namePart}, same identity, ${ageStr}${featuresStr}${outfitStr}. ${styleStr}, neutral clean background, consistent character model sheet ${arStr}`;
    
    case "outfit":
      return `Character outfit concept sheet, showing clothes details, accessories and front/back views of ${namePart}, ${ageStr}${featuresStr}. Outfit description: ${outfit}. ${styleStr}, clean background, detailed costume design reference ${arStr}`;
    
    case "reference-lock":
      return `Model sheet reference portrait of ${namePart}, ${ageStr}${featuresStr}${outfitStr}. Detailed facial reference, front profile, lock features, consistent character design, neutral lighting, studio background, ${styleStr} ${arStr}`;
    
    case "character choices":
    default:
      return `Character concept sheet of ${namePart}, ${ageStr}${featuresStr}. Showcase of character choices, outfit combinations, multiple poses, consistent identity. ${styleStr}, clean minimal background, highly detailed model sheet ${arStr}`;
  }
};

// Compile prompt for a single scene card, formatted based on selected platform
export const compileScenePrompt = (charInfo, scene, platform = "midjourney") => {
  const {
    name = "Character",
    physicalFeatures = "",
    outfit = "",
    age = "20+",
    visualStyle = "Realistic",
    sheetDimension = "Wide (16:9)",
    artStyle = "",
    mood = "",
    colorPalette = "",
    cameraLens = ""
  } = charInfo;

  const {
    description = ""
  } = scene;

  // Fallbacks
  const namePart = name ? name : "A character";
  const ageStr = age ? `${age} years old` : "";
  const stylePart = artStyle || visualStyle || "Cinematic photo";
  const arVal = getAspectRatio(sheetDimension);

  const featuresPart = physicalFeatures ? `, ${physicalFeatures}` : "";
  const outfitPart = outfit ? `, wearing ${outfit}` : "";
  const cameraPart = cameraLens && cameraLens !== "Select camera..." ? `, ${cameraLens}` : "";
  const moodPart = mood ? `, ${mood} atmosphere` : "";
  const colorPart = colorPalette ? `, ${colorPalette} color palette` : "";

  switch (platform.toLowerCase()) {
    case "midjourney":
      return `${stylePart} of ${namePart}${ageStr ? `, ${ageStr}` : ""}${featuresPart}. ${description}${outfitPart}${moodPart}${colorPart}${cameraPart}, consistent character design, hyper-detailed --ar ${arVal}`;
    
    case "dalle":
    case "dall-e / chatgpt":
      return `A ${stylePart} style image depicting ${namePart}${ageStr ? `, a ${ageStr} individual` : ""}${featuresPart}. ${description}. The character is wearing ${outfit}. The scene is illuminated by ${mood || "natural"} lighting with a ${colorPalette || "balanced"} color scheme, captured in a ${cameraLens || "cinematic"} shot.`;
    
    case "leonardo":
      return `${stylePart}, ${cameraLens || "cinematic shot"} of ${namePart}${ageStr ? `, ${ageStr}` : ""}${featuresPart}, ${description}, wearing ${outfit}, ${mood || "detailed mood"}, ${colorPalette || "harmonious"} color grading, highly detailed`;
    
    case "gemini":
      return `Create a ${stylePart} illustration. Character: ${namePart}${ageStr ? `, ${ageStr}` : ""}${featuresPart}, wearing ${outfit}. Scene action: ${description}. Visual enhancements: ${cameraLens || "cinematic perspective"}${mood ? `, ${mood} lighting` : ""}${colorPalette ? `, color palette: ${colorPalette}` : ""}.`;
    
    case "generic":
    default:
      return `${namePart}${ageStr ? `, ${ageStr}` : ""}${featuresPart}, wearing ${outfit}. ${description}. ${stylePart}${moodPart}${colorPart}${cameraPart}`;
  }
};
