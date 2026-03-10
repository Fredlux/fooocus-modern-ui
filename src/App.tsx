import React, { useState } from 'react'
import { Settings, History, Sparkles, Image as ImageIcon, Download, RefreshCw } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Textarea } from './components/ui/textarea'
import { Slider } from './components/ui/slider'
import { Label } from './components/ui/label'
import { Switch } from './components/ui/switch'

function App() {
  const [prompt, setPrompt] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  const [style, setStyle] = useState('default')
  const [aspectRatio, setAspectRatio] = useState('1:1')
  const [seed, setSeed] = useState(-1)
  const [steps, setSteps] = useState(30)
  const [cfgScale, setCgfScale] = useState(5)
  const [isGenerating, setIsGenerating] = useState(false)
  const [resultImage, setResultImage] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!prompt) return
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setResultImage('https://placehold.co/512x512/1a1a2e/16213e?text=Fooocus+Result')
      setIsGenerating(false)
    }, 2000)
  }

  const handleClear = () => {
    setPrompt('')
    setNegativePrompt('')
    setResultImage(null)
  }

  const handleDownload = () => {
    // Download logic here
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <div className="w-16 border-r border-border flex flex-col items-center py-4 gap-4">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <Sparkles size={24} />
        </div>
        <div className="p-2 rounded-lg hover:bg-secondary/50 text-foreground/60 transition-colors">
          <History size={24} />
        </div>
        <div className="p-2 rounded-lg hover:bg-secondary/50 text-foreground/60 transition-colors">
          <Settings size={24} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 p-6">
        {/* Left Panel - Controls */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* Prompt Input */}
          <Card className="glass-panel p-6">
            <Label className="mb-2 text-sm font-medium">Prompt</Label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream image..."
              className="glass-input min-h-[120px] resize-none font-medium"
            />
            <div className="mt-4 flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={handleClear}>
                Clear
              </Button>
              <div className="text-xs text-muted-foreground">
                {prompt.length} chars
              </div>
            </div>
          </Card>

          {/* Negative Prompt */}
          <Card className="glass-panel p-6">
            <Label className="mb-2 text-sm font-medium">Negative Prompt</Label>
            <Textarea
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
              placeholder="What to avoid..."
              className="glass-input min-h-[60px] resize-none text-sm"
            />
          </Card>

          {/* Styles */}
          <Card className="glass-panel p-6">
            <Label className="mb-3 text-sm font-medium">Style Preset</Label>
            <div className="grid grid-cols-3 gap-2">
              {['default', 'realistic', 'anime'].map((s) => (
                <Button
                  key={s}
                  variant={style === s ? 'default' : 'outline'}
                  onClick={() => setStyle(s)}
                  className="capitalize"
                >
                  {s}
                </Button>
              ))}
            </div>
          </Card>

          {/* Aspect Ratio */}
          <Card className="glass-panel p-6">
            <Label className="mb-3 text-sm font-medium">Aspect Ratio</Label>
            <div className="grid grid-cols-4 gap-2">
              {['1:1', '16:9', '9:16', '4:3'].map((ratio) => (
                <Button
                  key={ratio}
                  variant={aspectRatio === ratio ? 'default' : 'outline'}
                  onClick={() => setAspectRatio(ratio)}
                  className="text-xs"
                >
                  {ratio}
                </Button>
              ))}
            </div>
          </Card>

          {/* Advanced Settings */}
          <Card className="glass-panel p-6">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-sm font-medium">Advanced Settings</Label>
              <Settings size={16} className="text-primary" />
            </div>
            
            <div className="space-y-4">
              {/* Steps */}
              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs">Steps</Label>
                  <span className="text-xs text-primary">{steps}</span>
                </div>
                <Slider
                  value={[steps]}
                  onValueChange={(v) => setSteps(v[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="py-2"
                />
              </div>

              {/* CFG Scale */}
              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs">CFG Scale</Label>
                  <span className="text-xs text-primary">{cfgScale}</span>
                </div>
                <Slider
                  value={[cfgScale]}
                  onValueChange={(v) => setCgfScale(v[0])}
                  min={1}
                  max={20}
                  step={0.5}
                  className="py-2"
                />
              </div>

              {/* Seed */}
              <div>
                <div className="flex justify-between mb-1">
                  <Label className="text-xs">Seed</Label>
                  <span className="text-xs text-primary">{seed === -1 ? 'Random' : seed}</span>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={seed === -1 ? '' : seed}
                    onChange={(e) => setSeed(Number(e.target.value) || -1)}
                    className="glass-input text-xs"
                    placeholder="Random"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSeed(Math.floor(Math.random() * 1000000))}
                  >
                    <RefreshCw size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="animate-spin" size={20} />
                Generating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Generate
              </span>
            )}
          </Button>
        </div>

        {/* Right Panel - Preview */}
        <div className="flex-1 flex flex-col gap-4">
          <Card className="glass-panel p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <Label className="text-sm font-medium">Preview</Label>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  disabled={!resultImage}
                >
                  <Download size={16} />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex-1 bg-black/30 rounded-lg flex items-center justify-center overflow-hidden relative">
              {resultImage ? (
                <img
                  src={resultImage}
                  alt="Generated result"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ImageIcon size={48} className="text-foreground/30" />
                  </div>
                  <p className="text-muted-foreground">Your image will appear here</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Enter a prompt and click Generate
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 p-4 bg-secondary/20 rounded-lg text-sm">
              <div className="flex justify-between mb-2">
                <span>Style:</span>
                <span className="font-medium capitalize">{style}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Ratio:</span>
                <span className="font-medium">{aspectRatio}</span>
              </div>
              <div className="flex justify-between">
                <span>Steps:</span>
                <span className="font-medium">{steps}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
