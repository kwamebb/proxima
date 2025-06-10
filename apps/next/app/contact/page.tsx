'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../corporate-site/marketing/styles.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="marketing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Proxima" 
                width={420} 
                height={120}
                className="logo"
              />
            </Link>
            <div className="nav-links">
              <Link href="/corporate-site/marketing#solutions" className="nav-link">Solutions</Link>
              <Link href="/corporate-site/marketing#enterprise" className="nav-link">Enterprise</Link>
              <Link href="/corporate-site/marketing#platform" className="nav-link">Platform</Link>
              <Link href="/corporate-site/pricing" className="nav-link">Pricing</Link>
              <Link href="/corporate-site/marketing#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link active">Contact</Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/login" className="nav-link-secondary">Sign In</Link>
            <Link href="/contact?type=demo" className="btn btn-primary">Request Demo</Link>
          </div>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to transform healthcare communication? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div className="contact-info">
              <h2 className="solution-title">Let's Start a Conversation</h2>
              <p className="solution-text">
                Whether you're interested in our consumer app, enterprise solutions, or have questions about implementation, our team is here to help.
              </p>
              
              <div className="contact-methods" style={{ marginTop: '2rem' }}>
                <div className="contact-method" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#0891b2', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sales & Demos</h3>
                  <p style={{ color: '#64748b', margin: '0' }}>Ready to see Proxima in action? Schedule a personalized demo.</p>
                </div>
                
                <div className="contact-method" style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#0891b2', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enterprise Solutions</h3>
                  <p style={{ color: '#64748b', margin: '0' }}>Discuss custom deployment and integration requirements.</p>
                </div>
                
                <div className="contact-method">
                  <h3 style={{ color: '#0891b2', fontSize: '1.1rem', marginBottom: '0.5rem' }}>General Inquiries</h3>
                  <p style={{ color: '#64748b', margin: '0' }}>Questions about our platform, pricing, or partnerships.</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form" style={{
                background: '#f8fafc',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="type" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      background: 'white'
                    }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image 
                src="/logo.png" 
                alt="Proxima" 
                width={140} 
                height={40}
                className="footer-logo"
              />
              <p className="footer-description">
                Revolutionizing healthcare communication through interactive 3D technology.
              </p>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <Link href="/corporate-site/marketing#consumer" className="footer-link">Personal App</Link>
              <Link href="/corporate-site/marketing#enterprise" className="footer-link">Enterprise Platform</Link>
              <Link href="/corporate-site/pricing" className="footer-link">Pricing</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <Link href="/corporate-site/marketing#about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/support" className="footer-link">Support</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <Link href="/privacy" className="footer-link">Privacy</Link>
              <Link href="/terms" className="footer-link">Terms</Link>
              <Link href="/security" className="footer-link">Security</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-bottom-text">© 2024 Proxima Health Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}