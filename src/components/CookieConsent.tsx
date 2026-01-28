import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="glass-card rounded-2xl p-6 max-w-4xl mx-auto">
              {!showPreferences ? (
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">We value your privacy</h3>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to enhance your browsing experience, serve personalized
                      content, and analyze our traffic. By clicking "Accept All", you consent
                      to our use of cookies.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPreferences(true)}
                    >
                      <Settings className="w-4 h-4 mr-1" />
                      Customize
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleRejectAll}>
                      Reject All
                    </Button>
                    <Button variant="hero" size="sm" onClick={handleAcceptAll}>
                      Accept All
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Cookie Preferences</h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="p-1 rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <span className="font-medium">Necessary Cookies</span>
                        <p className="text-xs text-muted-foreground">
                          Required for the website to function properly.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="w-5 h-5 rounded accent-primary"
                      />
                    </label>
                    
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
                      <div>
                        <span className="font-medium">Analytics Cookies</span>
                        <p className="text-xs text-muted-foreground">
                          Help us understand how visitors interact with the website.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="w-5 h-5 rounded accent-primary"
                      />
                    </label>
                    
                    <label className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
                      <div>
                        <span className="font-medium">Marketing Cookies</span>
                        <p className="text-xs text-muted-foreground">
                          Used to deliver personalized advertisements.
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="w-5 h-5 rounded accent-primary"
                      />
                    </label>
                  </div>
                  
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" size="sm" onClick={handleRejectAll}>
                      Reject All
                    </Button>
                    <Button variant="hero" size="sm" onClick={handleSavePreferences}>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
