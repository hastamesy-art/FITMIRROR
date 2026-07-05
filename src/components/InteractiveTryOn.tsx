import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MODELS, GARMENTS } from '../data';
import { Model, Garment, LookbookItem } from '../types';
import { 
  Sparkles, 
  Upload, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle, 
  FolderHeart, 
  Image as ImageIcon,
  User,
  AlertCircle,
  Shirt
} from 'lucide-react';

interface InteractiveTryOnProps {
  onAddToLookbook: (item: LookbookItem) => void;
}

export default function InteractiveTryOn({ onAddToLookbook }: InteractiveTryOnProps) {
  // Models and garments
  const [selectedModel, setSelectedModel] = useState<Model>(MODELS[0]);
  const [selectedGarment, setSelectedGarment] = useState<Garment>(GARMENTS[MODELS[0].id][0]);
  
  // Custom uploads
  const [customModelUrl, setCustomModelUrl] = useState<string | null>(null);
  const [customGarmentUrl, setCustomGarmentUrl] = useState<string | null>(null);
  const [isUsingCustomModel, setIsUsingCustomModel] = useState(false);
  const [isUsingCustomGarment, setIsUsingCustomGarment] = useState(false);

  // Simulation states
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [renderStepText, setRenderStepText] = useState('');
  const [hasRendered, setHasRendered] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'custom'>('demo');

  // Input refs
  const modelInputRef = useRef<HTMLInputElement>(null);
  const garmentInputRef = useRef<HTMLInputElement>(null);

  // Switch model handler
  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
    setIsUsingCustomModel(false);
    // Auto-select first garment matching this model gender/id to avoid mismatched states
    const garments = GARMENTS[model.id];
    if (garments && garments.length > 0) {
      setSelectedGarment(garments[0]);
    }
    setHasRendered(false);
  };

  // Switch garment handler
  const handleGarmentSelect = (garment: Garment) => {
    setSelectedGarment(garment);
    setIsUsingCustomGarment(false);
    setHasRendered(false);
  };

  // Custom photo upload handlers
  const handleModelUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomModelUrl(event.target.result as string);
          setIsUsingCustomModel(true);
          setHasRendered(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGarmentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomGarmentUrl(event.target.result as string);
          setIsUsingCustomGarment(true);
          setHasRendered(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Rendering try-on simulation
  const handleRenderTryOn = () => {
    if (isRendering) return;
    setIsRendering(true);
    setRenderProgress(0);
    setHasRendered(false);

    const steps = [
      { progress: 10, text: '🔍 [Gemini] Scanning portrait pose and anatomical frame...' },
      { progress: 30, text: '🧥 [Gemini] Deconstructing clothing texture maps and collar cut...' },
      { progress: 50, text: '🧬 [SDXL] Aligning lighting vectors and perspective grids...' },
      { progress: 75, text: '✨ [SDXL] Compiling high-res fabric layers and folding details...' },
      { progress: 90, text: '💡 [FitAI] Casting micro-shadows and completing blending mask...' },
      { progress: 100, text: '✅ Fitting successfully synthesized!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setRenderProgress(steps[currentStep].progress);
        setRenderStepText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsRendering(false);
          setHasRendered(true);
        }, 500);
      }
    }, 850);
  };

  // Saving fit to local Lookbook state
  const handleSaveToLookbook = () => {
    const resultImg = isUsingCustomModel || isUsingCustomGarment
      ? (customGarmentUrl || selectedGarment.garmentUrl) // Fallback blending mockup for custom uploads
      : selectedGarment.resultUrl;

    const newItem: LookbookItem = {
      id: Math.random().toString(36).substring(7),
      modelName: isUsingCustomModel ? 'My Photo' : selectedModel.name,
      garmentName: isUsingCustomGarment ? 'Custom Garment' : selectedGarment.name,
      resultUrl: resultImg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    onAddToLookbook(newItem);
  };

  // Determining active URLs
  const modelImg = isUsingCustomModel && customModelUrl ? customModelUrl : selectedModel.avatarUrl;
  const garmentImg = isUsingCustomGarment && customGarmentUrl ? customGarmentUrl : selectedGarment.garmentUrl;
  
  // High fidelity results matching standard models or fallback mockup for custom uploads
  const resultImg = isUsingCustomModel || isUsingCustomGarment
    ? (isUsingCustomModel && isUsingCustomGarment 
        ? customGarmentUrl || '' // Simple display overlay of custom uploaded garment
        : (isUsingCustomModel ? selectedGarment.garmentUrl : customGarmentUrl))
    : selectedGarment.resultUrl;

  return (
    <div className="w-full bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 neon-glow-indigo">
      {/* Title & Workspace Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
        <div>
          <span className="font-mono text-xs text-brand-purple font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3 h-3 text-brand-purple" />
            FitAI Engine Workspace v2.4
          </span>
          <h3 className="font-display font-bold text-2xl text-white tracking-tight">
            Virtual Try-On Playground
          </h3>
        </div>
        
        {/* Toggle between pre-made demos and uploading custom files */}
        <div className="flex bg-slate-900 p-1.5 rounded-full border border-white/5 self-start">
          <button
            onClick={() => {
              setActiveTab('demo');
              setIsUsingCustomModel(false);
              setIsUsingCustomGarment(false);
              setHasRendered(false);
            }}
            className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-gradient-to-r from-brand-purple to-brand-indigo text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Pre-made Models
          </button>
          <button
            onClick={() => {
              setActiveTab('custom');
              setIsUsingCustomModel(true);
              setIsUsingCustomGarment(true);
              setHasRendered(false);
            }}
            className={`px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === 'custom'
                ? 'bg-gradient-to-r from-brand-purple to-brand-indigo text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Upload Custom
          </button>
        </div>
      </div>

      {/* Main Sandbox Interactive Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Model Selector & Upload (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <User className="w-4 h-4 text-brand-purple" />
                Step 1: The Model
              </label>
              {activeTab === 'custom' && (
                <button
                  onClick={() => modelInputRef.current?.click()}
                  className="font-sans text-xs font-medium text-brand-purple hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Upload className="w-3 h-3" /> Change Photo
                </button>
              )}
            </div>

            {/* Selection Grid for Demo Tab */}
            {activeTab === 'demo' ? (
              <div className="grid grid-cols-2 gap-3">
                {MODELS.map((m) => {
                  const isActive = selectedModel.id === m.id && !isUsingCustomModel;
                  return (
                    <button
                      key={m.id}
                      onClick={() => handleModelSelect(m)}
                      className={`relative overflow-hidden rounded-xl border text-left p-3 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'border-brand-purple/60 bg-brand-purple/5'
                          : 'border-white/5 bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={m.avatarUrl}
                          alt={m.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover border border-white/10"
                        />
                        <div>
                          <p className="font-display font-semibold text-xs text-white tracking-wide">{m.name}</p>
                          <p className="font-sans text-[10px] text-slate-400 capitalize">{m.gender}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Custom File Upload Drag and Drop */
              <div 
                onClick={() => modelInputRef.current?.click()}
                className="border-2 border-dashed border-white/10 hover:border-brand-purple/50 bg-slate-900/20 rounded-2xl p-6 text-center transition-colors duration-300 cursor-pointer relative group overflow-hidden flex flex-col items-center justify-center min-h-[140px]"
              >
                <input
                  type="file"
                  ref={modelInputRef}
                  onChange={handleModelUpload}
                  accept="image/*"
                  className="hidden"
                />
                {customModelUrl ? (
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={customModelUrl}
                      alt="Uploaded Model"
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="text-left overflow-hidden">
                      <p className="font-display font-semibold text-xs text-white truncate">My Custom Photo.jpg</p>
                      <p className="font-sans text-[10px] text-green-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Ready for Try-On
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="font-display font-medium text-xs text-slate-300">Drag or upload your portrait</p>
                    <p className="font-sans text-[10px] text-slate-500">Supports JPG, PNG up to 10MB</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Base model image preview */}
            <div className="relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border border-white/5">
              <img
                src={modelImg}
                alt="Model Base"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-darker/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[9px] text-slate-300 tracking-wider">
                  {isUsingCustomModel ? 'USER_SELFIE.PNG' : `MODEL_${selectedModel.name.toUpperCase()}.RAW`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Garment Selector & Upload (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Shirt className="w-4 h-4 text-brand-indigo" />
                Step 2: The Garment
              </label>
              {activeTab === 'custom' && (
                <button
                  onClick={() => garmentInputRef.current?.click()}
                  className="font-sans text-xs font-medium text-brand-indigo hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Upload className="w-3 h-3" /> Change Garment
                </button>
              )}
            </div>

            {/* Selection Grid for Demo Tab */}
            {activeTab === 'demo' ? (
              <div className="grid grid-cols-1 gap-2">
                {GARMENTS[selectedModel.id]?.map((g) => {
                  const isActive = selectedGarment.id === g.id && !isUsingCustomGarment;
                  return (
                    <button
                      key={g.id}
                      onClick={() => handleGarmentSelect(g)}
                      className={`relative overflow-hidden rounded-xl border text-left p-2.5 cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'border-brand-indigo/60 bg-brand-indigo/5'
                          : 'border-white/5 bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={g.garmentUrl}
                          alt={g.name}
                          referrerPolicy="no-referrer"
                          className="w-11 h-11 rounded-lg object-cover border border-white/10"
                        />
                        <div className="overflow-hidden">
                          <p className="font-display font-bold text-xs text-white truncate">{g.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="font-mono text-[9px] text-brand-indigo font-semibold">{g.brand}</span>
                            <span className="text-[10px] text-slate-500">•</span>
                            <span className="font-sans text-[10px] text-slate-400">{g.category}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Custom Garment Upload Drag and Drop */
              <div 
                onClick={() => garmentInputRef.current?.click()}
                className="border-2 border-dashed border-white/10 hover:border-brand-indigo/50 bg-slate-900/20 rounded-2xl p-6 text-center transition-colors duration-300 cursor-pointer relative group overflow-hidden flex flex-col items-center justify-center min-h-[140px]"
              >
                <input
                  type="file"
                  ref={garmentInputRef}
                  onChange={handleGarmentUpload}
                  accept="image/*"
                  className="hidden"
                />
                {customGarmentUrl ? (
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={customGarmentUrl}
                      alt="Uploaded Garment"
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="text-left overflow-hidden">
                      <p className="font-display font-semibold text-xs text-white truncate">My Custom Garment.jpg</p>
                      <p className="font-sans text-[10px] text-indigo-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Ready for Try-On
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                      <Upload className="w-5 h-5" />
                    </div>
                    <p className="font-display font-medium text-xs text-slate-300">Drag garment screenshot</p>
                    <p className="font-sans text-[10px] text-slate-500">Auto background removal applied</p>
                  </div>
                )}
              </div>
            )}

            {/* Garment Preview */}
            <div className="relative aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
              <img
                src={garmentImg}
                alt="Selected Garment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-brand-darker/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                <span className="font-mono text-[9px] text-slate-300 tracking-wider">
                  {isUsingCustomGarment ? 'USER_GARMENT.PNG' : `ITEM_${selectedGarment.name.replace(/ /g, '_').toUpperCase()}.RAW`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Generated Result Try-on Showcase (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4 h-full flex flex-col">
            <label className="font-display font-bold text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-purple" />
              Step 3: Flawless Result
            </label>

            {/* Display container */}
            <div className="relative flex-1 aspect-[3/4] lg:aspect-auto bg-slate-950 rounded-2xl overflow-hidden border border-brand-purple/20 flex flex-col items-center justify-center group min-h-[350px]">
              {/* Laser scanning beam overlay */}
              <AnimatePresence>
                {isRendering && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent z-10 neon-glow"
                  />
                )}
              </AnimatePresence>

              {/* Glowing overlay when rendering is active */}
              {isRendering && (
                <div className="absolute inset-0 bg-brand-purple/5 backdrop-blur-[1px] transition-all duration-300 z-5" />
              )}

              {/* Main Image States */}
              {isRendering ? (
                <div className="z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center animate-spin">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 max-w-xs">
                    <p className="font-display font-semibold text-sm text-white tracking-wide">Fitting Garment...</p>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-purple to-brand-indigo transition-all duration-300"
                        style={{ width: `${renderProgress}%` }}
                      />
                    </div>
                    <p className="font-mono text-[9px] text-slate-400 mt-1 h-8 leading-relaxed">
                      {renderStepText}
                    </p>
                  </div>
                </div>
              ) : hasRendered ? (
                /* Successful Fit render image */
                <div className="relative w-full h-full">
                  <img
                    src={resultImg}
                    alt="Try On Output"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  
                  {/* Glowing success badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-darker/80 backdrop-blur-md px-4 py-3 rounded-xl border border-brand-purple/30 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] text-brand-purple font-semibold tracking-wider uppercase">TRY-ON RESULT</p>
                      <p className="font-display font-bold text-xs text-white tracking-wide">
                        {isUsingCustomModel ? 'My Selfie' : selectedModel.name} × {isUsingCustomGarment ? 'Custom Garment' : selectedGarment.name}
                      </p>
                    </div>
                    
                    <button
                      onClick={handleSaveToLookbook}
                      className="px-3 py-1.5 bg-brand-purple hover:bg-brand-purple/90 text-white font-sans text-2xl font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-[11px]"
                    >
                      <FolderHeart className="w-3.5 h-3.5" /> Save Lookbook
                    </button>
                  </div>

                  {/* AI stamp */}
                  <div className="absolute top-3 right-3 bg-brand-purple/10 border border-brand-purple/30 text-brand-purple px-2 py-0.5 rounded-full font-mono text-[9px] font-semibold tracking-widest uppercase">
                    SDXL 12-PASS
                  </div>
                </div>
              ) : (
                /* Prompt state (No render yet) */
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-slate-900/80 text-slate-500 border border-white/5 flex items-center justify-center">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 max-w-xs">
                    <p className="font-display font-bold text-sm text-slate-300">Ready to visualize outfit</p>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed">
                      Click the synthesis button below to run the Gemini-guided SDXL Virtual Try-On mapping.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Custom simulation warning if cross-upload */}
            {(isUsingCustomModel || isUsingCustomGarment) && !hasRendered && !isRendering && (
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3 py-2 rounded-xl flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p className="font-sans text-[11px] leading-relaxed">
                  <strong>Notice:</strong> High-fidelity custom blending is running on sandbox settings. Synthesis may require up to 4 seconds to finalize.
                </p>
              </div>
            )}

            {/* Rendering Launch Button */}
            <button
              onClick={handleRenderTryOn}
              disabled={isRendering}
              className={`w-full py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 relative overflow-hidden ${
                isRendering
                  ? 'bg-slate-900 border border-white/5 text-slate-500'
                  : 'bg-gradient-to-r from-brand-purple to-brand-indigo neon-glow hover:brightness-110 active:scale-98'
              }`}
            >
              {isRendering ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Synthesizing Outfit...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Render Fit Visualization
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
