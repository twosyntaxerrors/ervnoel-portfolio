"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface MediaLightboxProps {
  video?: string;
  image?: string;
  title: string;
  children: React.ReactNode;
}

export function MediaLightbox({ video, image, title, children }: MediaLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Auto-play lightbox video when opened
    videoRef.current?.play();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  const overlay = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        animation: "lightbox-fade-in 150ms ease-out",
      }}
      onClick={handleClose}
    >
      <style>{`@keyframes lightbox-fade-in { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <button
        type="button"
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: 300,
          background: "none",
          border: "none",
          cursor: "pointer",
          lineHeight: 1,
        }}
        aria-label="Close"
      >
        &times;
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        {video && (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              borderRadius: "0.5rem",
            }}
          />
        )}
        {image && !video && (
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            priority
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              borderRadius: "0.5rem",
              objectFit: "contain",
            }}
          />
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block cursor-pointer text-left w-full"
      >
        {children}
      </button>

      {open && mounted && createPortal(overlay, document.body)}
    </>
  );
}
