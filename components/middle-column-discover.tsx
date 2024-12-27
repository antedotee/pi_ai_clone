import Image from 'next/image'

export function MiddleColumnDiscover() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-4xl font-serif text-[#0e4435]">Good evening</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f5ebe8] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#0e4435]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 9l8 8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 9l-8 8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-[#0e4435]">Download your Pi conversation history</h3>
              <p className="text-sm text-[#6b635b]">Manage history</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
          <Image 
            src="/placeholder.svg" 
            alt="Get to inbox zero" 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-[#0e4435]">Get to inbox zero</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
          <Image 
            src="/placeholder.svg" 
            alt="The latest trends in tech" 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-[#0e4435]">The latest trends in tech</h3>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
          <Image 
            src="/placeholder.svg" 
            alt="New hobbies" 
            width={400} 
            height={200} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-[#0e4435]">New hobbies to fill your time with</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

