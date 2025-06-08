'use client'

import Image from 'next/image'
import Link from 'next/link'
import './styles.css'

export default function MarketingPage() {
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
                width={140} 
                height={40}
                className="logo"
              />
            </Link>
            <div className="nav-links">
              <Link href="#solutions" className="nav-link">Solutions</Link>
              <Link href="#enterprise" className="nav-link">Enterprise</Link>
              <Link href="#platform" className="nav-link">Platform</Link>
              <Link href="#pricing" className="nav-link">Pricing</Link>
              <Link href="#about" className="nav-link">About</Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/login" className="nav-link-secondary">Sign In</Link>
            <Link href="#demo" className="btn btn-primary">Request Demo</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Revolutionizing Health Communication Through{' '}
                <span className="hero-title-accent">Interactive 3D</span>
              </h1>
              <p className="hero-subtitle">
                Transform patient-provider communication with intelligent 3D anatomy interfaces. 
                Bridge the gap between patient experience and clinical precision through 
                intuitive point-and-click symptom reporting.
              </p>
              <div className="hero-buttons">
                <Link href="/login" className="btn btn-primary">Start Free Trial</Link>
                <Link href="#demo" className="btn btn-white">Watch Demo</Link>
              </div>
            </div>
            <div className="hero-visual">
              <Image 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="3D Medical Interface"
                width={500}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-container">
          <h2 className="trust-title">Trusted by Leading Healthcare Organizations</h2>
          <div className="trust-logos">
            <span className="trust-logo">McLeod Health</span>
            <span className="trust-logo">Carolina Radiology</span>
            <span className="trust-logo">Grand Strand Health</span>
            <span className="trust-logo">City of Myrtle Beach</span>
            <span className="trust-logo">Johns Hopkins</span>
            <span className="trust-logo">Mayo Clinic</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">87%</div>
              <div className="stat-label">Reduction in Diagnostic Errors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3.2x</div>
              <div className="stat-label">Faster Symptom Assessment</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Patient Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Healthcare Providers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-header">
            <h2 className="problem-title">The Crisis in Healthcare Communication</h2>
            <p className="problem-subtitle">
              Patients struggle to describe symptoms accurately while doctors spend valuable time 
              deciphering vague descriptions. This communication breakdown leads to misdiagnosis, 
              delayed treatment, and compromised patient outcomes.
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="card">
              <div className="card-icon card-icon-warning">
                <span className="medical-icon">!</span>
              </div>
              <h3 className="card-title">Imprecise Symptom Reporting</h3>
              <p className="card-text">
                "My stomach hurts" could indicate anything from heartburn to appendicitis. 
                Patients lack anatomical vocabulary to describe their exact symptoms and locations.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">70% of patients cannot accurately locate pain</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">Vague descriptions delay proper diagnosis</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon card-icon-time">
                <span className="medical-icon">⏰</span>
              </div>
              <h3 className="card-title">Inefficient Clinical Workflows</h3>
              <p className="card-text">
                Healthcare providers spend excessive time interpreting patient descriptions, 
                leading to longer appointments, rushed care, and decreased patient throughput.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">Average 12 minutes spent on symptom clarification</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">23% increase in appointment duration</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon card-icon-data">
                <span className="medical-icon">📊</span>
              </div>
              <h3 className="card-title">Diagnostic Accuracy Issues</h3>
              <p className="card-text">
                Communication barriers directly impact diagnostic precision. Studies indicate that 
                40% of diagnostic errors stem from inadequate patient-provider communication.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">15% misdiagnosis rate due to poor communication</span>
                </li>
                <li className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span className="feature-text">Delayed treatment in 28% of cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Solution */}
      <section className="solution-section solution-alt">
        <div className="solution-container">
          <div className="solution-grid">
            <div className="solution-content">
              <h2 className="solution-title">The Consumer Experience: Making Health Intuitive</h2>
              <p className="solution-text">
                Imagine waking up with sharp abdominal pain. Instead of frantically Googling symptoms, 
                you open Proxima to see a stunning, interactive 3D human body. Click on your abdomen – 
                the model smoothly zooms to reveal detailed anatomical layers.
              </p>
              <p className="solution-text">
                The interface understands exactly where you're hurting. A targeted form appears asking 
                specific questions about that anatomical region – no endless dropdowns about your entire 
                medical history.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Interactive 3D anatomy with precise location tracking</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">AI-powered symptom analysis with clinical context</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Personalized health tracking and pattern recognition</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Emergency detection with automated 911 guidance</span>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <Image 
                src="/3d-interface-demo.png"
                alt="3D Medical Interface Demo - Multiple devices showing interactive anatomy"
                width={500}
                height={400}
                className="solution-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-grid solution-grid-reverse">
            <div className="solution-visual">
              <Image 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Doctor using Proxima dashboard"
                width={500}
                height={400}
                className="solution-image"
              />
            </div>
            <div className="solution-content">
              <h2 className="solution-title">Enterprise Revolution: Transforming Clinical Workflows</h2>
              <p className="solution-text">
                Replace traditional clipboards with tablets featuring Proxima's 3D interface. Patients 
                literally show what's wrong instead of struggling to describe symptoms. A child points 
                to their "tummy hurt," an elderly patient clicks on their knee joint.
              </p>
              <p className="solution-text">
                Our physician marketplace revolutionizes medical collaboration. A cardiologist in Boston 
                creates a chest pain assessment protocol – within hours, cardiac specialists worldwide 
                can deploy that same evidence-based tool in their practices.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Physician marketplace for sharing clinical protocols</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">AI translation from patient language to clinical terminology</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Real-time emergency detection and provider alerts</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Comprehensive patient intelligence dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="solution-section solution-alt">
        <div className="solution-container">
          <div className="problem-header">
            <h2 className="problem-title">The Innovation That Changes Everything</h2>
            <p className="problem-subtitle">
              The breakthrough isn't just better technology – it's the fundamental realization that 
              human health communication has been broken. We've been forcing people to translate 
              their physical experiences into medical jargon, when what they really need is to 
              simply point and say "here."
            </p>
          </div>
          
          <div className="problem-grid">
            <div className="card">
              <div className="card-icon card-icon-precision">
                <span className="medical-icon">⚕</span>
              </div>
              <h3 className="card-title">Anatomical-Level Emergency Detection</h3>
              <p className="card-text">
                Click on your chest and describe crushing pain? The system immediately recognizes 
                this isn't a WebMD situation – it's 911 time. Location-aware emergency protocols 
                provide immediate guidance and can alert providers in real-time.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon card-icon-collaboration">
                <span className="medical-icon">+</span>
              </div>
              <h3 className="card-title">Collaborative Medical Intelligence</h3>
              <p className="card-text">
                Every interaction creates rich, actionable health data while building a collaborative 
                ecosystem where medical knowledge flows freely between providers. Transform isolated 
                clinical expertise into shared intelligence.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon card-icon-intelligence">
                <span className="medical-icon">AI</span>
              </div>
              <h3 className="card-title">Human-Centered Health Technology</h3>
              <p className="card-text">
                Finally, health technology that feels human – intuitive for patients, powerful for 
                providers, collaborative for the medical community, and smart enough to distinguish 
                between panic and genuine medical emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Healthcare Communication?</h2>
          <p className="cta-text">
            Join the revolution in patient-provider communication. Experience the future of 
            healthcare with intelligent 3D interfaces and collaborative medical intelligence.
          </p>
          <div className="cta-buttons">
            <Link href="/login" className="btn btn-white">Start Free Trial</Link>
            <Link href="#demo" className="btn btn-outline-white">Schedule Demo</Link>
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
                Bridging the gap between patient experience and clinical precision.
              </p>
              <div className="footer-certifications">
                <span className="certification">HIPAA Compliant</span>
                <span className="certification">FDA Cleared Technology</span>
                <span className="certification">SOC 2 Type II Certified</span>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Solutions</h4>
              <Link href="#consumer" className="footer-link">Consumer App</Link>
              <Link href="#enterprise" className="footer-link">Enterprise Platform</Link>
              <Link href="#api" className="footer-link">API Integration</Link>
              <Link href="#emergency" className="footer-link">Emergency Detection</Link>
              <Link href="#marketplace" className="footer-link">Physician Marketplace</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Platform</h4>
              <Link href="#3d-interface" className="footer-link">3D Anatomy Interface</Link>
              <Link href="#ai-translation" className="footer-link">AI Translation</Link>
              <Link href="#clinical-dashboard" className="footer-link">Clinical Dashboard</Link>
              <Link href="#emr-integration" className="footer-link">EMR Integration</Link>
              <Link href="#analytics" className="footer-link">Health Analytics</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <Link href="#about" className="footer-link">About Us</Link>
              <Link href="#careers" className="footer-link">Careers</Link>
              <Link href="#press" className="footer-link">Press</Link>
              <Link href="#investors" className="footer-link">Investors</Link>
              <Link href="#contact" className="footer-link">Contact</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <Link href="#documentation" className="footer-link">Documentation</Link>
              <Link href="#help-center" className="footer-link">Help Center</Link>
              <Link href="#clinical-evidence" className="footer-link">Clinical Evidence</Link>
              <Link href="#security" className="footer-link">Security</Link>
              <Link href="#compliance" className="footer-link">Compliance</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-bottom-text">© 2024 Proxima Health Technologies. All rights reserved.</p>
            <div className="footer-compliance">
              <span className="compliance-badge">HIPAA</span>
              <span className="compliance-badge">SOC 2</span>
              <span className="compliance-badge">FDA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}