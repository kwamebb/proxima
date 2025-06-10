'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../marketing/styles.css'
import './enterprise.css'

export default function EnterprisePage() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'analytics' | 'integration'>('workflow')
  const [selectedMetric, setSelectedMetric] = useState<'cost' | 'time' | 'accuracy' | 'satisfaction'>('cost')

  const roiMetrics = {
    cost: {
      title: "Annual Cost Savings",
      value: "$2.4M",
      description: "Average annual savings from improved efficiency and reduced diagnostic errors",
      breakdown: [
        { label: "Reduced appointment time", value: "$1.2M", percentage: 50 },
        { label: "Improved diagnostic accuracy", value: "$800K", percentage: 33 },
        { label: "Increased patient throughput", value: "$400K", percentage: 17 }
      ]
    },
    time: {
      title: "Time Reduction",
      value: "12.5 min",
      description: "Average time saved per patient assessment with AI-powered symptom analysis",
      breakdown: [
        { label: "Symptom clarification", value: "8 min", percentage: 64 },
        { label: "Clinical documentation", value: "3 min", percentage: 24 },
        { label: "Follow-up questions", value: "1.5 min", percentage: 12 }
      ]
    },
    accuracy: {
      title: "Diagnostic Accuracy",
      value: "94.7%",
      description: "First-pass diagnostic accuracy with Proxima's AI-assisted symptom analysis",
      breakdown: [
        { label: "Emergency detection", value: "98.2%", percentage: 35 },
        { label: "Routine assessments", value: "93.8%", percentage: 45 },
        { label: "Complex conditions", value: "91.5%", percentage: 20 }
      ]
    },
    satisfaction: {
      title: "Patient Satisfaction",
      value: "4.8/5.0",
      description: "Average patient satisfaction score with Proxima-enhanced appointments",
      breakdown: [
        { label: "Communication clarity", value: "4.9/5", percentage: 40 },
        { label: "Wait time reduction", value: "4.7/5", percentage: 35 },
        { label: "Understanding of condition", value: "4.8/5", percentage: 25 }
      ]
    }
  }

  return (
    <div className="enterprise-page">
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
              <Link href="/corporate-site/enterprise" className="nav-link active">Enterprise</Link>
              <Link href="/corporate-site/marketing#platform" className="nav-link">Platform</Link>
              <Link href="/corporate-site/pricing" className="nav-link">Pricing</Link>
              <Link href="/corporate-site/marketing#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/login" className="nav-link-secondary">Sign In</Link>
            <Link href="/contact?type=demo" className="btn btn-primary">Schedule Executive Demo</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="enterprise-hero">
        <div className="enterprise-hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">Trusted by 500+ Healthcare Organizations</span>
              </div>
              <h1 className="hero-title">
                Transform Clinical Workflows at{' '}
                <span className="hero-title-accent">Enterprise Scale</span>
              </h1>
              <p className="hero-subtitle">
                Deploy AI-powered symptom analysis across your entire health system. 
                Reduce diagnostic errors by 87%, cut assessment time by 65%, and increase 
                patient satisfaction—all while maintaining the highest security standards.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">$2.4M</div>
                  <div className="stat-label">Avg. Annual Savings</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">87%</div>
                  <div className="stat-label">Error Reduction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">90 Days</div>
                  <div className="stat-label">Full Deployment</div>
                </div>
              </div>
              <div className="hero-buttons">
                <Link href="/contact?type=enterprise" className="btn btn-primary btn-large">Schedule Executive Demo</Link>
                <Link href="#case-studies" className="btn btn-white btn-large">View Case Studies</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                  <div className="video-overlay">
                    <h3>See Proxima in Action</h3>
                    <p>3-minute executive overview</p>
                  </div>
                </div>
                <video 
                  width={600}
                  height={400}
                  className="hero-video"
                  poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  controls
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-section">
        <div className="trust-container">
          <h2 className="trust-title">Deployed Across Leading Healthcare Systems</h2>
          <div className="trust-logos">
            <div className="trust-logo-item">
              <Image 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="McLeod Health"
                width={200}
                height={60}
                className="trust-logo-image"
              />
              <div className="logo-placeholder">McLeod Health</div>
              <span className="logo-details">12 Locations • 2,400 Staff</span>
            </div>
            <div className="trust-logo-item">
              <Image 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Johns Hopkins"
                width={200}
                height={60}
                className="trust-logo-image"
              />
              <div className="logo-placeholder">Johns Hopkins</div>
              <span className="logo-details">Pilot Program • 850 Providers</span>
            </div>
            <div className="trust-logo-item">
              <Image 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Mayo Clinic"
                width={200}
                height={60}
                className="trust-logo-image"
              />
              <div className="logo-placeholder">Mayo Clinic</div>
              <span className="logo-details">Enterprise Trial • 3 Campuses</span>
            </div>
            <div className="trust-logo-item">
              <Image 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Kaiser Permanente"
                width={200}
                height={60}
                className="trust-logo-image"
              />
              <div className="logo-placeholder">Kaiser Permanente</div>
              <span className="logo-details">Regional Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Dashboard */}
      <section className="roi-section">
        <div className="roi-container">
          <div className="roi-header">
            <h2 className="roi-title">Quantified Impact on Your Organization</h2>
            <p className="roi-subtitle">
              Real metrics from healthcare organizations that have deployed Proxima at scale
            </p>
          </div>
          
          <div className="roi-dashboard">
            <div className="metric-selector">
              <button 
                className={`metric-tab ${selectedMetric === 'cost' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('cost')}
              >
                <span className="metric-icon">$</span>
                <span className="metric-name">Cost Savings</span>
              </button>
              <button 
                className={`metric-tab ${selectedMetric === 'time' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('time')}
              >
                <span className="metric-icon">⏱</span>
                <span className="metric-name">Time Efficiency</span>
              </button>
              <button 
                className={`metric-tab ${selectedMetric === 'accuracy' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('accuracy')}
              >
                <span className="metric-icon">%</span>
                <span className="metric-name">Accuracy</span>
              </button>
              <button 
                className={`metric-tab ${selectedMetric === 'satisfaction' ? 'active' : ''}`}
                onClick={() => setSelectedMetric('satisfaction')}
              >
                <span className="metric-icon">★</span>
                <span className="metric-name">Satisfaction</span>
              </button>
            </div>
            
            <div className="metric-display">
              <div className="metric-main">
                <div className="metric-value">{roiMetrics[selectedMetric].value}</div>
                <div className="metric-title">{roiMetrics[selectedMetric].title}</div>
                <div className="metric-description">{roiMetrics[selectedMetric].description}</div>
              </div>
              
              <div className="metric-breakdown">
                <h4 className="breakdown-title">Impact Breakdown</h4>
                <div className="breakdown-items">
                  {roiMetrics[selectedMetric].breakdown.map((item, index) => (
                    <div key={index} className="breakdown-item">
                      <div className="breakdown-info">
                        <span className="breakdown-label">{item.label}</span>
                        <span className="breakdown-value">{item.value}</span>
                      </div>
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Workflow Transformation */}
      <section className="workflow-section">
        <div className="workflow-container">
          <div className="workflow-header">
            <h2 className="workflow-title">Transform Every Patient Interaction</h2>
            <p className="workflow-subtitle">
              See how Proxima revolutionizes clinical workflows from intake to diagnosis
            </p>
          </div>
          
          <div className="workflow-tabs">
            <button 
              className={`workflow-tab ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Patient Workflow
            </button>
            <button 
              className={`workflow-tab ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Real-time Analytics
            </button>
            <button 
              className={`workflow-tab ${activeTab === 'integration' ? 'active' : ''}`}
              onClick={() => setActiveTab('integration')}
            >
              EMR Integration
            </button>
          </div>
          
          {activeTab === 'workflow' && (
            <div className="workflow-content">
              <div className="workflow-comparison">
                <div className="workflow-column before">
                  <h3 className="workflow-column-title">Traditional Workflow</h3>
                  <div className="workflow-steps">
                    <div className="workflow-step problem">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Vague Symptom Description</h4>
                        <p>"My stomach hurts sometimes when I eat"</p>
                        <span className="step-time">⏱️ 8-12 min clarification</span>
                      </div>
                    </div>
                    <div className="workflow-step problem">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Manual Documentation</h4>
                        <p>Provider types notes, asks follow-ups</p>
                        <span className="step-time">⏱️ 5-8 min documentation</span>
                      </div>
                    </div>
                    <div className="workflow-step problem">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Diagnostic Uncertainty</h4>
                        <p>Multiple possibilities, requires additional tests</p>
                        <span className="step-time">⏱️ 15+ min assessment</span>
                      </div>
                    </div>
                  </div>
                  <div className="workflow-total">
                    <strong>Total Time: 28+ minutes</strong>
                    <span className="accuracy-rate">Accuracy: 72%</span>
                  </div>
                </div>
                
                <div className="workflow-arrow">
                  <div className="arrow-content">
                    <span className="arrow-label">Proxima Transformation</span>
                    <div className="arrow-graphic">→</div>
                  </div>
                </div>
                
                <div className="workflow-column after">
                  <h3 className="workflow-column-title">Proxima-Enhanced Workflow</h3>
                  <div className="workflow-steps">
                    <div className="workflow-step solution">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>3D Anatomical Selection</h4>
                        <p>Patient clicks abdomen, targeted forms appear</p>
                        <span className="step-time">⏱️ 2-3 min precise input</span>
                      </div>
                    </div>
                    <div className="workflow-step solution">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>AI Clinical Translation</h4>
                        <p>"Postprandial epigastric pain, possible PUD"</p>
                        <span className="step-time">⏱️ 0.3 sec translation</span>
                      </div>
                    </div>
                    <div className="workflow-step solution">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Evidence-Based Recommendations</h4>
                        <p>Suggested diagnostics, treatment protocols</p>
                        <span className="step-time">⏱️ 3-5 min focused care</span>
                      </div>
                    </div>
                  </div>
                  <div className="workflow-total">
                    <strong>Total Time: 8 minutes</strong>
                    <span className="accuracy-rate">Accuracy: 94.7%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="analytics-content">
              <div className="dashboard-preview">
                <div className="dashboard-frame">
                  <div className="dashboard-chrome">
                    <div className="chrome-header">
                      <div className="chrome-controls">
                        <div className="chrome-button red"></div>
                        <div className="chrome-button yellow"></div>
                        <div className="chrome-button green"></div>
                      </div>
                      <div className="chrome-title">Proxima Enterprise Analytics</div>
                      <div className="chrome-actions">
                        <div className="chrome-icon">⚙️</div>
                        <div className="chrome-icon">👤</div>
                      </div>
                    </div>
                    
                    <div className="dashboard-content">
                      <div className="dashboard-header">
                        <h3 className="dashboard-title">System Performance Overview</h3>
                        <div className="time-selector">
                          <button className="time-btn">24H</button>
                          <button className="time-btn active">7D</button>
                          <button className="time-btn">30D</button>
                        </div>
                      </div>
                      
                      <div className="metrics-grid">
                        <div className="metric-card primary">
                          <div className="metric-header">
                            <h4>Active Assessments</h4>
                            <span className="metric-trend positive">+23%</span>
                          </div>
                          <div className="metric-value">2,847</div>
                          <div className="metric-chart">
                            <div className="chart-bar" style={{ height: '30%' }}></div>
                            <div className="chart-bar" style={{ height: '55%' }}></div>
                            <div className="chart-bar" style={{ height: '40%' }}></div>
                            <div className="chart-bar" style={{ height: '75%' }}></div>
                            <div className="chart-bar" style={{ height: '90%' }}></div>
                          </div>
                        </div>
                        
                        <div className="metric-card">
                          <div className="metric-header">
                            <h4>Avg. Assessment Time</h4>
                            <span className="metric-trend positive">-35%</span>
                          </div>
                          <div className="metric-value">7.2 min</div>
                          <div className="metric-progress">
                            <div className="progress-track">
                              <div className="progress-fill" style={{ width: '72%' }}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="metric-card">
                          <div className="metric-header">
                            <h4>Diagnostic Accuracy</h4>
                            <span className="metric-trend positive">+18%</span>
                          </div>
                          <div className="metric-value">94.7%</div>
                          <div className="accuracy-indicator excellent"></div>
                        </div>
                        
                        <div className="metric-card">
                          <div className="metric-header">
                            <h4>Patient Satisfaction</h4>
                            <span className="metric-trend positive">+12%</span>
                          </div>
                          <div className="metric-value">4.8/5.0</div>
                          <div className="satisfaction-stars">★★★★★</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'integration' && (
            <div className="integration-content">
              <div className="integration-showcase">
                <div className="integration-header">
                  <h3>Seamless EMR Integration</h3>
                  <p>Deploy Proxima without disrupting existing workflows</p>
                </div>
                
                <div className="integration-flow">
                  <div className="integration-step">
                    <div className="step-icon">H</div>
                    <h4>Your EMR System</h4>
                    <p>Epic • Cerner • AllScripts</p>
                  </div>
                  
                  <div className="integration-connector">
                    <div className="connector-line"></div>
                    <div className="connector-label">HL7 FHIR</div>
                  </div>
                  
                  <div className="integration-step">
                    <div className="step-icon">P</div>
                    <h4>Proxima Platform</h4>
                    <p>Real-time data sync</p>
                  </div>
                  
                  <div className="integration-connector">
                    <div className="connector-line"></div>
                    <div className="connector-label">API Gateway</div>
                  </div>
                  
                  <div className="integration-step">
                    <div className="step-icon">R</div>
                    <h4>Enhanced Records</h4>
                    <p>Structured clinical data</p>
                  </div>
                </div>
                
                <div className="integration-features">
                  <div className="feature-card">
                    <h4>Automated Documentation</h4>
                    <p>Clinical translations automatically populate EMR fields</p>
                  </div>
                  <div className="feature-card">
                    <h4>Security Compliant</h4>
                    <p>HIPAA, SOC 2, with full audit trails</p>
                  </div>
                  <div className="feature-card">
                    <h4>Real-time Sync</h4>
                    <p>Instant updates across all connected systems</p>
                  </div>
                </div>
              </div>
              
              <div className="architecture-overview">
                <div className="architecture-header">
                  <h3>Enterprise Architecture Overview</h3>
                  <p>Scalable, secure, and compliant healthcare technology infrastructure</p>
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
            </div>
          )}
        </div>
      </section>

      {/* AI Translation Technology */}
      <section className="ai-translation-section">
        <div className="ai-translation-container">
          <div className="ai-header">
            <h2 className="ai-title">Intelligent Clinical Translation Engine</h2>
            <p className="ai-subtitle">
              Advanced AI that instantly converts patient descriptions into precise clinical terminology, 
              enabling faster, more accurate diagnoses while reducing provider cognitive load.
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
                <span className="arrow-label">AI Clinical Translation</span>
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
          
          <div className="translation-metrics">
            <div className="translation-metric">
              <div className="metric-number">95%</div>
              <div className="metric-label">Clinical Accuracy</div>
            </div>
            <div className="translation-metric">
              <div className="metric-number">0.3s</div>
              <div className="metric-label">Processing Time</div>
            </div>
            <div className="translation-metric">
              <div className="metric-number">3.2x</div>
              <div className="metric-label">Faster Assessment</div>
            </div>
            <div className="translation-metric">
              <div className="metric-number">12</div>
              <div className="metric-label">Medical Languages</div>
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
                <span className="example-text">Postprandial epigastric pain, suggesting peptic ulcer disease</span>
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
        </div>
      </section>

      {/* Clinical Operations Excellence */}
      <section className="clinical-operations-section">
        <div className="clinical-operations-container">
          <div className="operations-header">
            <h2 className="operations-title">Complete Clinical Operations Platform</h2>
            <p className="operations-subtitle">
              Streamline every aspect of patient care from pre-arrival to billing with 
              intelligent automation and clinical decision support.
            </p>
          </div>
          
          <div className="operations-grid">
            <div className="operation-card featured">
              <div className="card-icon">
                <Image 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Form Aggregation"
                  width={60}
                  height={60}
                  className="card-icon-image"
                />
              </div>
              <h3 className="card-title">Intelligent Form Aggregation</h3>
              <p className="card-description">
                Automatically aggregate and structure patient-submitted forms into comprehensive 
                clinical summaries, reducing documentation time by 75% while improving accuracy.
              </p>
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Auto-populate EMR fields from patient responses</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Generate billing-ready clinical codes (ICD-10, CPT)</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Create structured SOAP notes from unstructured data</span>
                </div>
              </div>
            </div>
            
            <div className="operation-card">
              <div className="card-icon">
                <Image 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Lab Pre-screening"
                  width={60}
                  height={60}
                  className="card-icon-image"
                />
              </div>
              <h3 className="card-title">Automated Lab Pre-screening</h3>
              <p className="card-description">
                AI-powered clinical protocols automatically suggest appropriate lab orders 
                based on patient symptoms and medical history before the appointment.
              </p>
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Evidence-based lab recommendations</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Pre-appointment lab scheduling</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Reduce follow-up appointments by 40%</span>
                </div>
              </div>
            </div>
            
            <div className="operation-card">
              <div className="card-icon">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Billing Efficiency"
                  width={60}
                  height={60}
                  className="card-icon-image"
                />
              </div>
              <h3 className="card-title">Revenue Cycle Optimization</h3>
              <p className="card-description">
                Streamline billing processes with automated coding suggestions, 
                documentation compliance checks, and improved charge capture accuracy.
              </p>
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Automated ICD-10 and CPT code suggestions</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Compliance validation and documentation checks</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Increase charge capture by average 23%</span>
                </div>
              </div>
            </div>
            
            <div className="operation-card">
              <div className="card-icon">
                <Image 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Patient Preparation"
                  width={60}
                  height={60}
                  className="card-icon-image"
                />
              </div>
              <h3 className="card-title">Enhanced Patient Preparation</h3>
              <p className="card-description">
                Patients arrive informed and prepared with personalized condition summaries, 
                relevant follow-up questions, and clear next-step recommendations.
              </p>
              <div className="card-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Personalized health synopsis before visit</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Intelligent follow-up question generation</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span className="benefit-text">Patient satisfaction scores improve 35%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="workflow-demonstration">
            <h3 className="demonstration-title">Complete Patient Journey Integration</h3>
            <div className="journey-flow">
              <div className="journey-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Pre-Visit Form Completion</h4>
                  <p>Patient completes comprehensive health assessment using 3D anatomy interface</p>
                  <div className="step-outcome">Forms auto-aggregated into clinical summary</div>
                </div>
              </div>
              
              <div className="journey-connector"></div>
              
              <div className="journey-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>AI Clinical Analysis</h4>
                  <p>System generates clinical translation, suggests lab orders, prepares billing codes</p>
                  <div className="step-outcome">Provider receives comprehensive pre-visit summary</div>
                </div>
              </div>
              
              <div className="journey-connector"></div>
              
              <div className="journey-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Patient Synopsis Delivery</h4>
                  <p>Patient receives personalized health synopsis with follow-up questions</p>
                  <div className="step-outcome">Patients arrive 85% more informed and prepared</div>
                </div>
              </div>
              
              <div className="journey-connector"></div>
              
              <div className="journey-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Optimized Clinical Encounter</h4>
                  <p>Provider focuses on diagnosis and treatment with all documentation pre-structured</p>
                  <div className="step-outcome">Appointment time reduced by average 12 minutes</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="satisfaction-metrics">
            <div className="metrics-header">
              <h3>Measurable Patient & Provider Satisfaction Improvements</h3>
            </div>
            <div className="metrics-grid">
              <div className="satisfaction-card">
                <div className="satisfaction-icon">
                  <Image 
                    src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Patient Satisfaction"
                    width={50}
                    height={50}
                    className="satisfaction-image"
                  />
                </div>
                <div className="satisfaction-metric">4.9/5.0</div>
                <div className="satisfaction-label">Patient Satisfaction</div>
                <div className="satisfaction-improvement">+35% improvement</div>
                <div className="satisfaction-detail">Patients feel more heard and understood</div>
              </div>
              
              <div className="satisfaction-card">
                <div className="satisfaction-icon">
                  <Image 
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Provider Efficiency"
                    width={50}
                    height={50}
                    className="satisfaction-image"
                  />
                </div>
                <div className="satisfaction-metric">94%</div>
                <div className="satisfaction-label">Provider Adoption</div>
                <div className="satisfaction-improvement">+67% efficiency gain</div>
                <div className="satisfaction-detail">Providers prefer Proxima-enhanced appointments</div>
              </div>
              
              <div className="satisfaction-card">
                <div className="satisfaction-icon">
                  <Image 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Billing Accuracy"
                    width={50}
                    height={50}
                    className="satisfaction-image"
                  />
                </div>
                <div className="satisfaction-metric">97.3%</div>
                <div className="satisfaction-label">Billing Accuracy</div>
                <div className="satisfaction-improvement">+23% charge capture</div>
                <div className="satisfaction-detail">Automated coding reduces errors and denials</div>
              </div>
              
              <div className="satisfaction-card">
                <div className="satisfaction-icon">
                  <Image 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Clinical Outcomes"
                    width={50}
                    height={50}
                    className="satisfaction-image"
                  />
                </div>
                <div className="satisfaction-metric">89%</div>
                <div className="satisfaction-label">First-Visit Resolution</div>
                <div className="satisfaction-improvement">+42% improvement</div>
                <div className="satisfaction-detail">Better preparation leads to definitive care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section" id="case-studies">
        <div className="case-studies-container">
          <div className="case-studies-header">
            <h2 className="case-studies-title">Proven Results Across Healthcare Organizations</h2>
            <p className="case-studies-subtitle">
              Real implementations, measurable outcomes, transformative results
            </p>
          </div>
          
          <div className="case-studies-grid">
            <div className="case-study-card featured">
              <div className="case-study-header">
                <div className="case-study-logo">McLeod Health</div>
                <div className="case-study-details">
                  <span className="case-study-type">Regional Health System</span>
                  <span className="case-study-size">12 Locations • 2,400 Staff</span>
                </div>
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">87% Reduction in Diagnostic Errors</h3>
                <p className="case-study-description">
                  McLeod Health deployed Proxima across their 12-location health system, 
                  achieving remarkable improvements in patient care efficiency and diagnostic accuracy.
                </p>
                
                <div className="case-study-metrics">
                  <div className="case-metric">
                    <div className="metric-number">$2.3M</div>
                    <div className="metric-label">Annual Savings</div>
                  </div>
                  <div className="case-metric">
                    <div className="metric-number">65%</div>
                    <div className="metric-label">Faster Assessments</div>
                  </div>
                  <div className="case-metric">
                    <div className="metric-number">96%</div>
                    <div className="metric-label">Provider Satisfaction</div>
                  </div>
                </div>
                
                <div className="case-study-quote">
                  <blockquote>
                    "Proxima transformed our patient intake process. We're seeing patients faster, 
                    with better outcomes, and our providers are more confident in their diagnoses."
                  </blockquote>
                  <cite>Dr. Sarah Williams, Chief Medical Officer</cite>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-logo">Johns Hopkins</div>
                <div className="case-study-details">
                  <span className="case-study-type">Academic Medical Center</span>
                  <span className="case-study-size">Pilot Program • 850 Providers</span>
                </div>
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">45% Increase in Patient Throughput</h3>
                <p className="case-study-description">
                  Johns Hopkins piloted Proxima in their emergency department, 
                  resulting in faster triage and improved patient flow.
                </p>
                
                <div className="case-study-metrics">
                  <div className="case-metric">
                    <div className="metric-number">45%</div>
                    <div className="metric-label">Higher Throughput</div>
                  </div>
                  <div className="case-metric">
                    <div className="metric-number">8.3 min</div>
                    <div className="metric-label">Avg. Assessment</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-logo">Regional Medical</div>
                <div className="case-study-details">
                  <span className="case-study-type">Private Practice Group</span>
                  <span className="case-study-size">8 Clinics • 120 Providers</span>
                </div>
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">ROI Achieved in 6 Months</h3>
                <p className="case-study-description">
                  Regional Medical Group saw immediate returns through improved 
                  efficiency and reduced overhead costs.
                </p>
                
                <div className="case-study-metrics">
                  <div className="case-metric">
                    <div className="metric-number">250%</div>
                    <div className="metric-label">ROI in Year 1</div>
                  </div>
                  <div className="case-metric">
                    <div className="metric-number">4.9/5</div>
                    <div className="metric-label">Patient Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="implementation-section">
        <div className="implementation-container">
          <div className="implementation-header">
            <h2 className="implementation-title">White-Glove Enterprise Deployment</h2>
            <p className="implementation-subtitle">
              From contract to full deployment in 90 days with dedicated support every step of the way
            </p>
          </div>
          
          <div className="implementation-timeline">
            <div className="timeline-phase">
              <div className="phase-number">1</div>
              <div className="phase-content">
                <h3 className="phase-title">Discovery & Planning</h3>
                <div className="phase-duration">Weeks 1-2</div>
                <ul className="phase-activities">
                  <li>System architecture assessment</li>
                  <li>EMR integration planning</li>
                  <li>Security compliance review</li>
                  <li>Training curriculum development</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-phase">
              <div className="phase-number">2</div>
              <div className="phase-content">
                <h3 className="phase-title">Pilot Deployment</h3>
                <div className="phase-duration">Weeks 3-6</div>
                <ul className="phase-activities">
                  <li>Single department rollout</li>
                  <li>Staff training and certification</li>
                  <li>Performance monitoring</li>
                  <li>Workflow optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-phase">
              <div className="phase-number">3</div>
              <div className="phase-content">
                <h3 className="phase-title">Scaled Rollout</h3>
                <div className="phase-duration">Weeks 7-10</div>
                <ul className="phase-activities">
                  <li>Department-by-department expansion</li>
                  <li>Advanced feature enablement</li>
                  <li>Analytics dashboard setup</li>
                  <li>Integration testing</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-phase">
              <div className="phase-number">4</div>
              <div className="phase-content">
                <h3 className="phase-title">Full Production</h3>
                <div className="phase-duration">Weeks 11-12</div>
                <ul className="phase-activities">
                  <li>System-wide deployment</li>
                  <li>Performance optimization</li>
                  <li>Success metrics review</li>
                  <li>Ongoing support transition</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="implementation-support">
            <div className="support-features">
              <div className="support-feature">
                <div className="feature-icon">T</div>
                <h4>Dedicated Team</h4>
                <p>Project manager, technical architect, clinical specialist</p>
              </div>
              <div className="support-feature">
                <div className="feature-icon">S</div>
                <h4>24/7 Support</h4>
                <p>Priority technical support during deployment</p>
              </div>
              <div className="support-feature">
                <div className="feature-icon">E</div>
                <h4>Comprehensive Training</h4>
                <p>Role-based training programs for all staff levels</p>
              </div>
              <div className="support-feature">
                <div className="feature-icon">M</div>
                <h4>Success Monitoring</h4>
                <p>Real-time metrics and performance tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="security-section">
        <div className="security-container">
          <div className="security-header">
            <h2 className="security-title">Enterprise-Grade Security & Compliance</h2>
            <p className="security-subtitle">
              Built from the ground up to meet the most stringent healthcare security requirements
            </p>
          </div>
          
          <div className="security-grid">
            <div className="security-card">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="HIPAA Compliance"
                width={60}
                height={60}
                className="security-icon-image"
              />
              <h3>HIPAA Compliant</h3>
              <p>Full Business Associate Agreement with comprehensive safeguards for PHI</p>
              <div className="security-features">
                <span>End-to-end encryption</span>
                <span>Access controls</span>
                <span>Audit logging</span>
              </div>
            </div>
            
            <div className="security-card">
              <Image 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="SOC 2 Type II"
                width={60}
                height={60}
                className="security-icon-image"
              />
              <h3>SOC 2 Type II</h3>
              <p>Independently audited security controls and operational effectiveness</p>
              <div className="security-features">
                <span>Security monitoring</span>
                <span>Availability controls</span>
                <span>Processing integrity</span>
              </div>
            </div>
            
            <div className="security-card">
              <Image 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Enterprise SSO"
                width={60}
                height={60}
                className="security-icon-image"
              />
              <h3>Enterprise SSO</h3>
              <p>Seamless integration with your existing identity management systems</p>
              <div className="security-features">
                <span>Active Directory</span>
                <span>SAML 2.0</span>
                <span>Multi-factor auth</span>
              </div>
            </div>
            
            <div className="security-card">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Comprehensive Auditing"
                width={60}
                height={60}
                className="security-icon-image"
              />
              <h3>Comprehensive Auditing</h3>
              <p>Detailed audit trails for all system activities and data access</p>
              <div className="security-features">
                <span>User activity logs</span>
                <span>Data access tracking</span>
                <span>Compliance reports</span>
              </div>
            </div>
          </div>
          
          <div className="compliance-certifications">
            <h3 className="certifications-title">Certifications & Standards</h3>
            <div className="certifications-grid">
              <div className="certification-badge">
                <div className="cert-logo">HIPAA</div>
                <div className="cert-status">Compliant</div>
              </div>
              <div className="certification-badge">
                <div className="cert-logo">SOC 2</div>
                <div className="cert-status">Type II</div>
              </div>
              <div className="certification-badge">
                <div className="cert-logo">HITECH</div>
                <div className="cert-status">Compliant</div>
              </div>
              <div className="certification-badge">
                <div className="cert-logo">HL7 FHIR</div>
                <div className="cert-status">R4 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="enterprise-cta-section">
        <div className="enterprise-cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Healthcare Organization?</h2>
            <p className="cta-text">
              Join the 500+ healthcare organizations already using Proxima to improve patient outcomes, 
              reduce costs, and enhance provider satisfaction.
            </p>
            
            <div className="cta-options">
              <div className="cta-option">
                <h3>Schedule Executive Demo</h3>
                <p>See Proxima in action with a personalized demo for your organization</p>
                <Link href="/contact?type=enterprise" className="btn btn-primary btn-large">Schedule Demo</Link>
              </div>
              
              <div className="cta-option">
                <h3>Request Custom Pricing</h3>
                <p>Get a tailored proposal based on your organization's specific needs</p>
                <Link href="/contact?type=pricing" className="btn btn-outline btn-large">Get Pricing</Link>
              </div>
            </div>
            
            <div className="cta-contact">
              <p>Have questions? Call our enterprise team at <strong>(555) 123-4567</strong></p>
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
                Revolutionizing healthcare communication through interactive 3D technology 
                and enterprise-grade AI solutions.
              </p>
              <div className="footer-certifications">
                <span className="certification">HIPAA Compliant</span>
                <span className="certification">SOC 2 Type II Certified</span>
                <span className="certification">HL7 FHIR R4</span>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Enterprise Solutions</h4>
              <Link href="/corporate-site/enterprise#workflow" className="footer-link">Clinical Workflows</Link>
              <Link href="/corporate-site/enterprise#analytics" className="footer-link">Analytics Platform</Link>
              <Link href="/corporate-site/enterprise#integration" className="footer-link">EMR Integration</Link>
              <Link href="/corporate-site/enterprise#security" className="footer-link">Security & Compliance</Link>
              <Link href="/corporate-site/pricing" className="footer-link">Enterprise Pricing</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <Link href="/corporate-site/enterprise#case-studies" className="footer-link">Case Studies</Link>
              <Link href="/resources/whitepapers" className="footer-link">Whitepapers</Link>
              <Link href="/resources/implementation" className="footer-link">Implementation Guide</Link>
              <Link href="/resources/api-docs" className="footer-link">API Documentation</Link>
              <Link href="/support" className="footer-link">Support Center</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <Link href="/contact?type=enterprise" className="footer-link">Schedule Demo</Link>
              <Link href="/contact?type=sales" className="footer-link">Sales Inquiries</Link>
              <Link href="/contact?type=support" className="footer-link">Technical Support</Link>
              <div className="footer-contact-info">
                <p><strong>Enterprise Sales</strong></p>
                <p>(555) 123-4567</p>
                <p>enterprise@proxima.health</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-bottom-text">© 2024 Proxima Health Technologies. All rights reserved.</p>
            <div className="footer-compliance">
              <span className="compliance-badge">HIPAA</span>
              <span className="compliance-badge">SOC 2</span>
              <span className="compliance-badge">HITECH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}