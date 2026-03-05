import React, { useEffect, useRef, useState } from "react";
import "../styles/soundtrackToggle.css";

const SOUNDTRACK_STORAGE_KEY = "soundtrack_enabled";
const LEGACY_STORAGE_KEY = "halo_sound_enabled";
const SOUNDTRACK_SOURCE = "/audio/halo-theme.mp3";
const SOUNDTRACK_VOLUME = 0.08;

const getInitialEnabledState = () => {
  if (typeof window === "undefined") {
    return true;
  }

  const savedValue = window.localStorage.getItem(SOUNDTRACK_STORAGE_KEY);

  if (savedValue !== null) {
    return savedValue === "true";
  }

  const legacyValue = window.localStorage.getItem(LEGACY_STORAGE_KEY);

  if (legacyValue !== null) {
    return legacyValue === "true";
  }

  return true;
};

const SoundtrackToggle = ({ language = "es" }) => {
  const audioRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(getInitialEnabledState);
  const [hasAudioError, setHasAudioError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.loop = true;
    audio.volume = SOUNDTRACK_VOLUME;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(SOUNDTRACK_STORAGE_KEY, String(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || hasAudioError) {
      return;
    }

    if (isEnabled) {
      audio.play().catch(() => {
        // Autoplay can be blocked until user interaction.
      });
      return;
    }

    audio.pause();
  }, [isEnabled, hasAudioError]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!isEnabled || hasAudioError) {
      return;
    }

    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleUserInteraction = () => {
      if (!audio.paused) {
        return;
      }

      audio.play().catch(() => {
        // Keep silent if browser still blocks playback.
      });
    };

    window.addEventListener("pointerdown", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isEnabled, hasAudioError]);

  const buttonLabel = hasAudioError
    ? language === "en"
      ? "Music unavailable. Audio file is missing."
      : "Musica no disponible. Falta el archivo de audio."
    : isEnabled
    ? language === "en"
      ? "Pause background music"
      : "Pausar musica de fondo"
    : language === "en"
    ? "Play background music"
    : "Reproducir musica de fondo";

  return (
    <>
      <audio
        ref={audioRef}
        src={SOUNDTRACK_SOURCE}
        preload="auto"
        onError={() => setHasAudioError(true)}
      />
      <button
        type="button"
        className={`soundtrack-toggle ${
          isEnabled && !hasAudioError ? "is-on" : "is-off"
        }`}
        onClick={() => setIsEnabled((previous) => !previous)}
        aria-pressed={isEnabled}
        aria-label={buttonLabel}
        title={buttonLabel}
      >
        {hasAudioError ? (
          <svg
            className="soundtrack-toggle__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 3L1 21h22L12 3zm0 6.6c.55 0 1 .45 1 1v4.8a1 1 0 11-2 0v-4.8c0-.55.45-1 1-1zm0 9a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"
              fill="currentColor"
            />
          </svg>
        ) : isEnabled ? (
          <svg
            className="soundtrack-toggle__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M7 4h4v16H7V4zm6 0h4v16h-4V4z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="soundtrack-toggle__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
        )}
      </button>
    </>
  );
};

export default SoundtrackToggle;
