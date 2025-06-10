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
                width={420} 
                height={120}
                className="logo"
              />
            </Link>
            <div className="nav-links">
              <Link href="#solutions" className="nav-link">Solutions</Link>
              <Link href="/corporate-site/enterprise" className="nav-link">Enterprise</Link>
              <Link href="/corporate-site/ai" className="nav-link">AI</Link>
              <Link href="#platform" className="nav-link">Platform</Link>
              <Link href="/corporate-site/pricing" className="nav-link">Pricing</Link>
              <Link href="#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/login" className="nav-link-secondary">Sign In</Link>
            <Link href="/contact?type=demo" className="btn btn-primary">Request Demo</Link>
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

      {/* Enterprise Analytics Dashboard */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-header">
            <h2 className="enterprise-title">Healthcare Intelligence Platform</h2>
            <p className="enterprise-subtitle">
              Enterprise-grade analytics and performance monitoring for health systems and medical organizations.
            </p>
          </div>
          
          <div className="dashboard-frame">
            <div className="dashboard-chrome">
              <div className="chrome-header">
                <div className="chrome-controls">
                  <div className="chrome-button red"></div>
                  <div className="chrome-button yellow"></div>
                  <div className="chrome-button green"></div>
                </div>
                <div className="chrome-title">Proxima Enterprise Dashboard</div>
                <div className="chrome-actions">
                  <div className="chrome-icon">⚙️</div>
                  <div className="chrome-icon">👤</div>
                </div>
              </div>
              
              <div className="dashboard-content">
                <div className="dashboard-sidebar">
                  <div className="org-selector">
                    <div className="org-logo">🏥</div>
                    <div className="org-info">
                      <div className="org-name">McLeod Health</div>
                      <div className="org-details">12 Locations</div>
                    </div>
                    <div className="org-dropdown">⌄</div>
                  </div>
                  
                  <nav className="dashboard-nav">
                    <div className="nav-item active">
                      <span className="nav-icon">📊</span>
                      <span className="nav-label">Overview</span>
                    </div>
                    <div className="nav-item">
                      <span className="nav-icon">🏥</span>
                      <span className="nav-label">Locations</span>
                    </div>
                    <div className="nav-item">
                      <span className="nav-icon">👨‍⚕️</span>
                      <span className="nav-label">Providers</span>
                    </div>
                    <div className="nav-item">
                      <span className="nav-icon">🧠</span>
                      <span className="nav-label">AI Performance</span>
                    </div>
                    <div className="nav-item">
                      <span className="nav-icon">💰</span>
                      <span className="nav-label">Revenue</span>
                    </div>
                  </nav>
                </div>
                
                <div className="dashboard-main">
                  <div className="dashboard-topbar">
                    <div className="topbar-left">
                      <h3 className="page-title">System Overview</h3>
                      <div className="last-updated">Last updated: 2 minutes ago</div>
                    </div>
                    <div className="topbar-right">
                      <div className="time-range-selector">
                        <button className="time-btn">24H</button>
                        <button className="time-btn active">7D</button>
                        <button className="time-btn">30D</button>
                        <button className="time-btn">90D</button>
                      </div>
                      <button className="export-btn">Export Data</button>
                    </div>
                  </div>
                  
                  <div className="metrics-overview">
                    <div className="metric-card primary">
                      <div className="metric-header">
                        <div className="metric-title">Active Providers</div>
                        <div className="metric-trend positive">+12%</div>
                      </div>
                      <div className="metric-value">847</div>
                      <div className="metric-subtitle">Across 12 locations</div>
                      <div className="metric-chart">
                        <div className="chart-bar" style={{ height: '20px' }}></div>
                        <div className="chart-bar" style={{ height: '35px' }}></div>
                        <div className="chart-bar" style={{ height: '28px' }}></div>
                        <div className="chart-bar" style={{ height: '45px' }}></div>
                        <div className="chart-bar" style={{ height: '52px' }}></div>
                        <div className="chart-bar" style={{ height: '48px' }}></div>
                        <div className="chart-bar" style={{ height: '60px' }}></div>
                      </div>
                    </div>
                    
                    <div className="metric-card">
                      <div className="metric-header">
                        <div className="metric-title">Assessment Time</div>
                        <div className="metric-trend positive">-32%</div>
                      </div>
                      <div className="metric-value">8.2<span className="metric-unit">min</span></div>
                      <div className="metric-subtitle">Avg. patient assessment</div>
                      <div className="metric-progress">
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: '68%' }}></div>
                        </div>
                        <div className="progress-label">Target: 7.5min</div>
                      </div>
                    </div>
                    
                    <div className="metric-card">
                      <div className="metric-header">
                        <div className="metric-title">Diagnostic Accuracy</div>
                        <div className="metric-trend positive">+15%</div>
                      </div>
                      <div className="metric-value">94.7<span className="metric-unit">%</span></div>
                      <div className="metric-subtitle">First-pass diagnosis</div>
                      <div className="accuracy-indicator">
                        <div className="indicator-dot high"></div>
                        <span className="indicator-text">Exceeds Target</span>
                      </div>
                    </div>
                    
                    <div className="metric-card">
                      <div className="metric-header">
                        <div className="metric-title">Revenue Impact</div>
                        <div className="metric-trend positive">+18%</div>
                      </div>
                      <div className="metric-value">$2.3<span className="metric-unit">M</span></div>
                      <div className="metric-subtitle">Annual efficiency gains</div>
                      <div className="revenue-breakdown">
                        <div className="breakdown-item">
                          <span className="breakdown-dot throughput"></span>
                          <span className="breakdown-text">Throughput: 67%</span>
                        </div>
                        <div className="breakdown-item">
                          <span className="breakdown-dot accuracy"></span>
                          <span className="breakdown-text">Accuracy: 33%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="department-analytics">
                    <div className="analytics-header">
                      <h4 className="analytics-title">Department Performance</h4>
                      <div className="view-toggle">
                        <button className="toggle-btn active">Cards</button>
                        <button className="toggle-btn">Table</button>
                        <button className="toggle-btn">Chart</button>
                      </div>
                    </div>
                    
                    <div className="department-cards">
                      <div className="dept-card emergency">
                        <div className="dept-header">
                          <div className="dept-icon">🚨</div>
                          <div className="dept-info">
                            <div className="dept-name">Emergency Medicine</div>
                            <div className="dept-providers">24 providers</div>
                          </div>
                          <div className="dept-status high">High Impact</div>
                        </div>
                        <div className="dept-metrics">
                          <div className="dept-metric">
                            <span className="metric-label">Triage Speed</span>
                            <span className="metric-value">3.2x faster</span>
                          </div>
                          <div className="dept-metric">
                            <span className="metric-label">Patient Volume</span>
                            <span className="metric-value">+45%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="dept-card cardiology">
                        <div className="dept-header">
                          <div className="dept-icon">❤️</div>
                          <div className="dept-info">
                            <div className="dept-name">Cardiology</div>
                            <div className="dept-providers">18 providers</div>
                          </div>
                          <div className="dept-status medium">Active</div>
                        </div>
                        <div className="dept-metrics">
                          <div className="dept-metric">
                            <span className="metric-label">AI Accuracy</span>
                            <span className="metric-value">89%</span>
                          </div>
                          <div className="dept-metric">
                            <span className="metric-label">Protocol Usage</span>
                            <span className="metric-value">92%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="dept-card orthopedics">
                        <div className="dept-header">
                          <div className="dept-icon">🦴</div>
                          <div className="dept-info">
                            <div className="dept-name">Orthopedics</div>
                            <div className="dept-providers">15 providers</div>
                          </div>
                          <div className="dept-status high">ROI Positive</div>
                        </div>
                        <div className="dept-metrics">
                          <div className="dept-metric">
                            <span className="metric-label">Time Reduction</span>
                            <span className="metric-value">12 min avg</span>
                          </div>
                          <div className="dept-metric">
                            <span className="metric-label">Satisfaction</span>
                            <span className="metric-value">4.8/5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="enterprise-proof">
            <div className="proof-content">
              <div className="proof-text">
                <h3 className="proof-title">Proven Enterprise Implementation</h3>
                <p className="proof-description">
                  From pilot to system-wide deployment in 90 days. McLeod Health achieved 
                  measurable improvements across all key performance indicators with zero downtime.
                </p>
                <div className="proof-stats">
                  <div className="proof-stat">
                    <span className="stat-number">90</span>
                    <span className="stat-label">Days to Full Deployment</span>
                  </div>
                  <div className="proof-stat">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">System Uptime</span>
                  </div>
                  <div className="proof-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">EMR Integration Success</span>
                  </div>
                </div>
              </div>
              <div className="proof-visual">
                <div className="implementation-timeline">
                  <div className="timeline-phase pilot">
                    <div className="phase-marker"></div>
                    <div className="phase-content">
                      <div className="phase-title">Pilot</div>
                      <div className="phase-duration">Weeks 1-2</div>
                    </div>
                  </div>
                  <div className="timeline-phase rollout">
                    <div className="phase-marker"></div>
                    <div className="phase-content">
                      <div className="phase-title">Department Rollout</div>
                      <div className="phase-duration">Weeks 3-8</div>
                    </div>
                  </div>
                  <div className="timeline-phase enterprise">
                    <div className="phase-marker"></div>
                    <div className="phase-content">
                      <div className="phase-title">System-Wide</div>
                      <div className="phase-duration">Weeks 9-12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Healthcare Solutions */}
      <section className="enterprise-solutions-section">
        <div className="enterprise-solutions-container">
          <div className="solutions-header">
            <div className="header-content">
              <div className="header-badge">
                <span className="badge-text">Enterprise Solutions</span>
              </div>
              <h2 className="solutions-title">Healthcare Intelligence Platform for Enterprise Organizations</h2>
              <p className="solutions-subtitle">
                Purpose-built for health systems, hospital networks, and large medical groups requiring 
                enterprise-grade scalability, security, and integration capabilities.
              </p>
            </div>
            <div className="header-visual">
              <div className="enterprise-logos">
                <div className="logo-item">
                  <div className="logo-placeholder epic">Epic</div>
                  <span className="logo-label">EMR Integration</span>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder cerner">Cerner</div>
                  <span className="logo-label">Data Exchange</span>
                </div>
                <div className="logo-item">
                  <div className="logo-placeholder allscripts">AllScripts</div>
                  <span className="logo-label">Workflow Sync</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="solutions-architecture">
            <div className="architecture-header">
              <h3 className="architecture-title">Enterprise Architecture Overview</h3>
              <p className="architecture-subtitle">Scalable, secure, and compliant healthcare technology infrastructure</p>
            </div>
            
            <div className="architecture-diagram">
              <div className="architecture-layer user-layer">
                <div className="layer-header">
                  <span className="layer-title">User Experience Layer</span>
                  <span className="layer-badge">Multi-Platform</span>
                </div>
                <div className="layer-components">
                  <div className="component">Web Portal</div>
                  <div className="component">Mobile Apps</div>
                  <div className="component">Tablet Interface</div>
                  <div className="component">Voice API</div>
                </div>
              </div>
              
              <div className="architecture-layer intelligence-layer">
                <div className="layer-header">
                  <span className="layer-title">AI Intelligence Layer</span>
                  <span className="layer-badge">HIPAA Compliant</span>
                </div>
                <div className="layer-components">
                  <div className="component">NLP Engine</div>
                  <div className="component">Clinical Translation</div>
                  <div className="component">Protocol Engine</div>
                  <div className="component">Analytics Core</div>
                </div>
              </div>
              
              <div className="architecture-layer integration-layer">
                <div className="layer-header">
                  <span className="layer-title">Integration Layer</span>
                  <span className="layer-badge">Enterprise Grade</span>
                </div>
                <div className="layer-components">
                  <div className="component">EMR Connectors</div>
                  <div className="component">HL7 FHIR</div>
                  <div className="component">API Gateway</div>
                  <div className="component">Data Pipeline</div>
                </div>
              </div>
              
              <div className="architecture-layer security-layer">
                <div className="layer-header">
                  <span className="layer-title">Security & Compliance</span>
                  <span className="layer-badge">SOC 2 Type II</span>
                </div>
                <div className="layer-components">
                  <div className="component">Identity Management</div>
                  <div className="component">Encryption</div>
                  <div className="component">Audit Logging</div>
                  <div className="component">Access Controls</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="enterprise-capabilities">
            <div className="capabilities-grid">
              <div className="capability-section">
                <div className="capability-header">
                  <h4 className="capability-title">Platform Integration</h4>
                  <div className="capability-status">Available Now</div>
                </div>
                <div className="capability-list">
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Epic MyChart Integration</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Cerner PowerChart Integration</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">AllScripts Professional EHR</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">HL7 FHIR R4 Compliance</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Real-time Data Synchronization</span>
                  </div>
                </div>
              </div>
              
              <div className="capability-section">
                <div className="capability-header">
                  <h4 className="capability-title">Enterprise Management</h4>
                  <div className="capability-status">Available Now</div>
                </div>
                <div className="capability-list">
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Multi-Location Dashboard</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Centralized User Management</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Protocol Distribution Network</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Performance Analytics Suite</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Revenue Cycle Integration</span>
                  </div>
                </div>
              </div>
              
              <div className="capability-section">
                <div className="capability-header">
                  <h4 className="capability-title">Security & Compliance</h4>
                  <div className="capability-status certified">Certified</div>
                </div>
                <div className="capability-list">
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">HIPAA Business Associate Agreement</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">SOC 2 Type II Certification</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">End-to-End Encryption (AES-256)</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Role-Based Access Controls</span>
                  </div>
                  <div className="capability-item">
                    <span className="capability-check">✓</span>
                    <span className="capability-text">Comprehensive Audit Trails</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="implementation-support">
            <div className="support-content">
              <div className="support-text">
                <h3 className="support-title">White-Glove Implementation & Support</h3>
                <p className="support-description">
                  Our enterprise implementation team ensures seamless deployment across your organization 
                  with dedicated project management, technical integration support, and ongoing optimization.
                </p>
                <div className="support-features">
                  <div className="support-feature">
                    <span className="feature-icon">👥</span>
                    <div className="feature-content">
                      <span className="feature-title">Dedicated Implementation Team</span>
                      <span className="feature-description">Project manager, technical architect, and clinical specialist</span>
                    </div>
                  </div>
                  <div className="support-feature">
                    <span className="feature-icon">⏱️</span>
                    <div className="feature-content">
                      <span className="feature-title">90-Day Deployment Timeline</span>
                      <span className="feature-description">From pilot to system-wide rollout with proven methodology</span>
                    </div>
                  </div>
                  <div className="support-feature">
                    <span className="feature-icon">📞</span>
                    <div className="feature-content">
                      <span className="feature-title">24/7 Enterprise Support</span>
                      <span className="feature-description">Priority technical support with guaranteed response times</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="support-stats">
                <div className="stat-card">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">System Uptime</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">&lt; 4hrs</span>
                  <span className="stat-label">Critical Issue Response</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Deployment Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Translation Technology */}
      <section className="ai-translation-section">
        <div className="ai-translation-container">
          <div className="ai-header">
            <h2 className="ai-title">Intelligent Patient Communication Translation</h2>
            <p className="ai-subtitle">
              Our advanced AI instantly converts patient descriptions into precise clinical terminology, 
              bridging the communication gap between patients and providers.
            </p>
          </div>
          
          <div className="translation-demo">
            <div className="demo-card patient-input-card">
              <div className="card-header">
                <h3 className="card-label">Patient Input</h3>
              </div>
              <div className="card-content">
                <p className="demo-text patient-text">"My back really hurts when I bend over to pick things up"</p>
              </div>
            </div>
            
            <div className="translation-arrow">
              <div className="arrow-container">
                <span className="arrow-label">AI Translation</span>
                <div className="arrow-graphic">→</div>
              </div>
            </div>
            
            <div className="demo-card clinical-output-card">
              <div className="card-header">
                <h3 className="card-label">Clinical Translation</h3>
              </div>
              <div className="card-content">
                <p className="demo-text clinical-text">Acute lumbar pain exacerbated by forward flexion, consistent with mechanical low back pain or possible disc herniation</p>
              </div>
            </div>
          </div>
          
          <div className="secondary-examples">
            <div className="example-row">
              <div className="example-input">
                <span className="example-label">Patient:</span>
                <span className="example-text">"My stomach really hurts when I eat"</span>
              </div>
              <div className="example-arrow">→</div>
              <div className="example-output">
                <span className="example-label">Clinical:</span>
                <span className="example-text">Epigastric pain associated with food intake, suggesting peptic ulcer disease</span>
              </div>
            </div>
            
            <div className="example-row">
              <div className="example-input">
                <span className="example-label">Patient:</span>
                <span className="example-text">"I can't breathe when I walk upstairs"</span>
              </div>
              <div className="example-arrow">→</div>
              <div className="example-output">
                <span className="example-label">Clinical:</span>
                <span className="example-text">Exertional dyspnea with stair climbing, possible cardiovascular etiology</span>
              </div>
            </div>
          </div>
          
          <div className="ai-metrics">
            <div className="metric-item">
              <span className="metric-value">95%</span>
              <span className="metric-label">Clinical Accuracy</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">0.3s</span>
              <span className="metric-label">Processing Time</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">3.2x</span>
              <span className="metric-label">Faster Assessment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & AI Translation Section */}
      <section className="solution-section solution-alt">
        <div className="solution-container">
          <div className="solution-grid">
            <div className="solution-content">
              <h2 className="solution-title">Intelligent Forms: Your Bridge to Better Care</h2>
              <p className="solution-text">
                Not every situation requires 3D interaction. Our intelligent forms provide a familiar 
                interface enhanced by powerful AI that transforms patient responses into precise clinical language. 
                Perfect for routine check-ins, follow-ups, or organizations beginning their digital transformation.
              </p>
              <p className="solution-text">
                Watch as "my stomach really hurts when I eat" becomes "epigastric pain associated with food 
                intake, suggesting possible peptic ulcer disease or gastritis." Our AI doesn't just collect 
                data—it translates human experience into medical intelligence.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">AI-powered translation from patient language to clinical terminology</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Familiar form interface with intelligent question routing</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Seamless integration with existing clinical workflows</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Perfect stepping stone to full 3D implementation</span>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <div className="forms-demo">
                <div className="form-card">
                  <div className="form-header">
                    <h4 className="form-title">Patient Input</h4>
                  </div>
                  <div className="form-content">
                    <p className="patient-text">"My back hurts really bad when I bend over to pick things up"</p>
                  </div>
                </div>
                <div className="ai-arrow">
                  <span className="arrow-text">AI Translation</span>
                  <div className="arrow">→</div>
                </div>
                <div className="form-card clinical-card">
                  <div className="form-header clinical-header">
                    <h4 className="form-title">Clinical Translation</h4>
                  </div>
                  <div className="form-content">
                    <p className="clinical-text">Acute lumbar pain exacerbated by forward flexion, consistent with mechanical low back pain or possible disc herniation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="problem-header">
            <h2 className="problem-title">Seamless Integration, Immediate Impact</h2>
            <p className="problem-subtitle">
              Deploy Proxima across your entire healthcare ecosystem. From individual practices to 
              large health systems, our platform adapts to your existing workflows while transforming 
              patient communication overnight.
            </p>
          </div>
          
          <div className="integration-grid">
            <div className="integration-card">
              <div className="integration-icon">
                <span className="medical-icon">🏥</span>
              </div>
              <h3 className="card-title">EMR Integration</h3>
              <p className="card-text">
                Direct integration with Epic, Cerner, and other major EMR systems. Patient data flows 
                seamlessly into existing clinical workflows without disrupting established processes.
              </p>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">
                <span className="medical-icon">📱</span>
              </div>
              <h3 className="card-title">Multi-Platform Deployment</h3>
              <p className="card-text">
                Deploy on tablets, desktops, or mobile devices. Same intelligent interface, 
                optimized for each platform. Patients can even complete assessments from home.
              </p>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">
                <span className="medical-icon">⚡</span>
              </div>
              <h3 className="card-title">Real-Time Analytics</h3>
              <p className="card-text">
                Track communication effectiveness, diagnostic accuracy improvements, and patient 
                satisfaction metrics. Data-driven insights to optimize clinical outcomes.
              </p>
            </div>
            
            <div className="integration-card">
              <div className="integration-icon">
                <span className="medical-icon">🔒</span>
              </div>
              <h3 className="card-title">Enterprise Security</h3>
              <p className="card-text">
                HIPAA-compliant infrastructure with end-to-end encryption. SOC 2 certified with 
                enterprise-grade security controls and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="deployment-section">
        <div className="deployment-container">
          <div className="deployment-split">
            <div className="deployment-content">
              <h2 className="deployment-title">Choose Your Implementation Path</h2>
              <p className="deployment-text">
                Start where you're comfortable. Scale when you're ready. Our platform grows with your practice.
              </p>
              
              <div className="deployment-options">
                <div className="deployment-option">
                  <div className="option-number">01</div>
                  <div className="option-content">
                    <h3 className="option-title">Smart Forms First</h3>
                    <p className="option-text">Begin with familiar forms enhanced by AI translation. Perfect for testing the waters.</p>
                  </div>
                </div>
                
                <div className="deployment-option">
                  <div className="option-number">02</div>
                  <div className="option-content">
                    <h3 className="option-title">Add 3D Interface</h3>
                    <p className="option-text">Introduce interactive anatomy when your team is ready for the full experience.</p>
                  </div>
                </div>
                
                <div className="deployment-option">
                  <div className="option-number">03</div>
                  <div className="option-content">
                    <h3 className="option-title">Scale Enterprise-Wide</h3>
                    <p className="option-text">Deploy across multiple locations with centralized analytics and protocol sharing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="deployment-visual">
              <div className="platform-showcase">
                <div className="platform-item tablet-view">
                  <div className="device tablet">
                    <div className="screen">
                      <div className="interface-preview">
                        <div className="interface-header">3D Interface</div>
                        <div className="interface-body">
                          <div className="anatomy-preview"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="device-label">Tablet - Clinic</span>
                </div>
                
                <div className="platform-item desktop-view">
                  <div className="device desktop">
                    <div className="screen">
                      <div className="interface-preview">
                        <div className="interface-header">Forms + Analytics</div>
                        <div className="interface-body">
                          <div className="form-preview"></div>
                          <div className="analytics-preview"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="device-label">Desktop - Provider Dashboard</span>
                </div>
                
                <div className="platform-item mobile-view">
                  <div className="device mobile">
                    <div className="screen">
                      <div className="interface-preview">
                        <div className="interface-header">Patient App</div>
                        <div className="interface-body">
                          <div className="mobile-preview"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="device-label">Mobile - Patient Portal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="integration-footer">
            <div className="integration-badges">
              <div className="integration-badge">
                <span className="badge-icon">🏥</span>
                <span className="badge-text">Epic • Cerner • AllScripts</span>
              </div>
              <div className="integration-badge">
                <span className="badge-icon">🔒</span>
                <span className="badge-text">HIPAA • SOC 2 • Enterprise Security</span>
              </div>
              <div className="integration-badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Real-time Analytics & Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-grid">
            <div className="solution-content">
              <h2 className="solution-title">Smart Forms That Actually Work</h2>
              <p className="solution-text">
                Traditional medical forms are broken. Patients struggle with medical terminology, 
                skip important details, and provide vague descriptions that slow down care.
              </p>
              <p className="solution-text">
                Our intelligent forms adapt to patient responses, ask the right follow-up questions, 
                and translate everyday language into clinical precision – all while feeling natural 
                and conversational.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Dynamic questioning based on patient responses</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Natural language processing for symptom interpretation</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Clinical decision support integration</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Seamless EMR integration and data export</span>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <div className="translation-examples">
                <div className="translation-item">
                  <div className="patient-speech">
                    <div className="speech-bubble patient-bubble">
                      <p>"My stomach really hurts when I eat anything"</p>
                    </div>
                    <div className="speaker-label">Patient</div>
                  </div>
                  
                  <div className="ai-processing">
                    <div className="ai-brain">
                      <div className="pulse-rings">
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                      </div>
                      <span className="ai-text">AI</span>
                    </div>
                  </div>
                  
                  <div className="clinical-translation">
                    <div className="speech-bubble clinical-bubble">
                      <p>Postprandial epigastric pain, suggests possible peptic ulcer disease</p>
                    </div>
                    <div className="speaker-label">Clinical Translation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="solution-section solution-alt">
        <div className="solution-container">
          <div className="solution-grid solution-grid-reverse">
            <div className="solution-visual">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Enterprise Healthcare Dashboard"
                width={500}
                height={400}
                className="solution-image"
              />
            </div>
            <div className="solution-content">
              <h2 className="solution-title">Enterprise-Grade Healthcare Solutions</h2>
              <p className="solution-text">
                Built for health systems that demand reliability, security, and scale. Our enterprise 
                platform integrates seamlessly with existing workflows while providing powerful 
                analytics and insights across your entire organization.
              </p>
              <p className="solution-text">
                From single clinics to multi-location health systems, we provide the infrastructure 
                and support you need to transform patient communication at any scale.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">HIPAA-compliant infrastructure with SOC 2 certification</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Epic, Cerner, and AllScripts EMR integrations</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">Multi-location management and analytics dashboard</span>
                </li>
                <li className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">24/7 enterprise support and dedicated account management</span>
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