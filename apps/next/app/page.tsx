'use client'

import { HomeScreen } from 'app/features/home/screen'
import Link from 'next/link'

export default function WebHomeScreen() {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, gap: 32, display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: 600, gap: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontWeight: 800, fontSize: 24, textAlign: 'center' }}>Welcome to Proxima</h1>
        
        <p style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </p>
        
        <div style={{ marginBottom: 16 }}>
          <Link 
            href="/corporate-site/marketing" 
            style={{ 
              display: 'inline-block',
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px'
            }}
          >
            🌐 View Marketing Site
          </Link>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/login"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'purple', textDecoration: 'none' }}
        >
          🔐 Beautiful Login Screen
        </Link>
        <Link
          href="/doctor-dashboard"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'green', textDecoration: 'none' }}
        >
          🏥 Doctor Dashboard
        </Link>
        <Link
          href="/users/fernando"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'blue', textDecoration: 'none' }}
        >
          Regular Link
        </Link>
      </div>
    </div>
  )
}
