
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveApiKey, getApiKey, clearApiKey } from '../lib/api';
import { Save, X } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeyChange: (apiKey: string | null) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeyChange }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);
  
  useEffect(() => {
    const savedKey = getApiKey();
    if (savedKey) {
      setApiKey(savedKey);
      setIsSaved(true);
      onApiKeyChange(savedKey);
    }
  }, [onApiKeyChange]);
  
  const handleSave = () => {
    saveApiKey(apiKey.trim());
    setIsSaved(true);
    onApiKeyChange(apiKey.trim());
  };
  
  const handleClear = () => {
    clearApiKey();
    setApiKey('');
    setIsSaved(false);
    onApiKeyChange(null);
  };
  
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-400">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6">
          <h2 className="text-xl font-medium mb-4">API Key</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="api-key" className="mb-2 block">
                Enter your LetzAI API Key
              </Label>
              <div className="flex gap-2">
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Your API key"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setIsSaved(false);
                  }}
                  className="flex-1 bg-background/80 backdrop-blur-sm focus:bg-background"
                />
                <Button
                  onClick={handleSave}
                  disabled={!apiKey.trim() || isSaved}
                  variant="outline"
                  className="min-w-20 gap-1"
                >
                  <Save size={16} />
                  Save
                </Button>
                <Button
                  onClick={handleClear}
                  disabled={!apiKey.trim()}
                  variant="outline"
                  className="min-w-20 gap-1"
                >
                  <X size={16} />
                  Clear
                </Button>
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground">
              Your API key is securely stored in your browser's local storage and never sent to our servers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyInput;
