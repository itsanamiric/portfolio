"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = name.trim()
      ? `Hello from ${name.trim()}`
      : "Hello from the site";
    const body = message.trim();
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-md space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="font-mono text-[11px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="h-10 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="font-mono text-[11px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-28 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          variant="outline"
          className="h-10 rounded-none border-foreground/30 px-4 font-mono text-[11px] tracking-[0.16em] uppercase"
        >
          Open in your email app
        </Button>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This opens your email app with the note filled in. Nothing is stored
          on this site.
        </p>
      </div>
    </form>
  );
}
