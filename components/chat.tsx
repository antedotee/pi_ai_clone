'use client'

import { useChat } from "ai/react"
import { ArrowUp } from 'lucide-react'
import { useEffect, useRef } from "react"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 max-w-[80%] ${
              message.role === "assistant" ? "mr-auto" : "ml-auto"
            }`}
          >
            <div
              className={`inline-block rounded-lg px-4 py-2 ${
                message.role === "assistant"
                  ? "bg-[#f5ebe8] text-[#0e4435]"
                  : "bg-[#e6e2e0]"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-[#fdf7f5]">
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Talk with Pi"
            className="w-full p-4 rounded-full bg-white border border-[#e6e2e0] focus:outline-none focus:border-[#0e4435] font-serif text-lg text-[#b4a99f] placeholder:text-[#b4a99f]"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <ArrowUp className="w-5 h-5 text-[#0e4435] rotate-45" />
          </button>
        </div>
        <p className="text-center text-[#6b635b] mt-2 text-sm">
          Pi may make mistakes, please don't rely on its information.
        </p>
      </form>
    </div>
  )
}

