'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../marketing/styles.css'
import './pricing.css'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'consumer' | 'enterprise'>('consumer')

  const consumerPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with 3D health insights',
      features: [
        '5 AI health assessments per week',
        'Basic 3D anatomy interactions',
        'Symptom location mapping',
        'AI-powered preliminary insights',
        'Community support',
        'Basic health tracking'
      ],
      limitations: [
        'Limited to 5 assessments/week',
        'Basic 3D models only',
        'No data persistence'
      ],
      cta: 'Get Started Free',
      ctaLink: '/login',
      popular: false
    },
    {
      name: 'Basic',
      price: '$1',
      period: '/month',
      description: 'Enhanced 3D interactions for regular health monitoring',
      features: [
        'Everything in Free, plus:',
        '100 AI health assessments per month',
        'Apple Health integration',
        'Health data persistence',
        'Basic health trends & graphs',
        'Email support',
        'Extended 3D model library'
      ],
      limitations: [
        'Limited to 100 assessments/month',
        'Basic trend analysis'
      ],
      cta: 'Start Basic Plan',
      ctaLink: '/login?plan=basic',
      popular: false
    },
    {
      name: 'Pro',
      price: '$5',
      period: '/month',
      description: 'Advanced health insights with condition-specific 3D models',
      features: [
        'Everything in Basic, plus:',
        '500 AI health assessments per month',
        'BioDigital condition-specific 3D models',
        'Advanced health analytics & insights',
        'Comprehensive health timeline',
        'Apple Health sync + export',
        'Priority email support',
        'Health pattern recognition'
      ],
      limitations: [
        'Limited to 500 assessments/month'
      ],
      cta: 'Upgrade to Pro',
      ctaLink: '/login?plan=pro',
      popular: true
    },
    {
      name: 'Pro+',
      price: '$20',
      period: '/month',
      description: 'Unlimited access with advanced health management features',
      features: [
        'Everything in Pro, plus:',
        'Unlimited AI health assessments',
        'Photo upload for symptom analysis',
        'Medicine reminders & tracking',
        'Advanced BioDigital model library',
        'Personalized health insights',
        'Family health management',
        'Priority chat support',
        'Health goal setting & tracking',
        'Export health reports',
        'Early access to new features'
      ],
      limitations: [],
      cta: 'Get Pro+',
      ctaLink: '/login?plan=pro-plus',
      popular: false
    }
  ]

  const enterprisePlans = [
    {
      name: 'Private Practice',
      price: 'Custom',
      period: 'pricing',
      description: 'Complete clinical solution for individual practices',
      features: [
        'All consumer features for staff',
        'EMR integration (Epic, Cerner, AllScripts)',
        'Clinical translation engine',
        'Custom form creation & management',
        'Patient pre-screening workflows',
        'Waiting room symptom assessment',
        'Lab results integration',
        'Patient education materials',
        'Basic analytics dashboard',
        'HIPAA-compliant infrastructure',
        'Email support with SLA',
        'Staff training & onboarding'
      ],
      limitations: [
        'Single location',
        'Up to 10 providers'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false
    },
    {
      name: 'Hospital System',
      price: 'Enterprise',
      period: 'pricing',
      description: 'Enterprise-grade platform for health systems & hospitals',
      features: [
        'Everything in Private Practice, plus:',
        'Multi-location deployment',
        'Advanced clinical analytics',
        'Population health insights',
        'Custom integration development',
        'Advanced security & compliance',
        'Dedicated account manager',
        'White-glove implementation',
        '24/7 priority support',
        'Custom training programs',
        'API access & webhooks',
        'Advanced reporting suite',
        'Multi-department workflows',
        'Unlimited providers',
        'Custom SLA agreements'
      ],
      limitations: [],
      cta: 'Schedule Demo',
      ctaLink: '/contact?type=enterprise',
      popular: true
    }
  ]

  return (
    <div className="pricing-page">
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
              <Link href="/corporate-site/pricing" className="nav-link active">Pricing</Link>
              <Link href="/corporate-site/marketing#about" className="nav-link">About</Link>
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
      <section className="pricing-hero">
        <div className="pricing-hero-container">
          <div className="pricing-hero-content">
            <h1 className="pricing-hero-title">
              Choose Your <span className="hero-title-accent">Health Intelligence</span> Plan
            </h1>
            <p className="pricing-hero-subtitle">
              From personal health insights to enterprise clinical solutions, 
              find the perfect plan to transform your healthcare communication.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="pricing-tabs-section">
        <div className="pricing-container">
          <div className="pricing-tabs">
            <button
              className={`pricing-tab ${activeTab === 'consumer' ? 'active' : ''}`}
              onClick={() => setActiveTab('consumer')}
            >
              <span className="tab-icon">👤</span>
              <span className="tab-text">Personal & Consumer</span>
            </button>
            <button
              className={`pricing-tab ${activeTab === 'enterprise' ? 'active' : ''}`}
              onClick={() => setActiveTab('enterprise')}
            >
              <span className="tab-icon">🏥</span>
              <span className="tab-text">Clinical & Enterprise</span>
            </button>
          </div>
        </div>
      </section>

      {/* Consumer Pricing */}
      {activeTab === 'consumer' && (
        <section className="pricing-plans-section">
          <div className="pricing-container">
            <div className="plans-header">
              <h2 className="plans-title">Personal Health Intelligence</h2>
              <p className="plans-subtitle">
                Interactive 3D anatomy models with AI-powered health insights for personal wellness
              </p>
            </div>
            
            <div className="pricing-grid consumer-grid">
              {consumerPlans.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  
                  <div className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                  
                  <div className="card-content">
                    <ul className="features-list">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="limitations">
                        <h4 className="limitations-title">Limitations:</h4>
                        <ul className="limitations-list">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="limitation-item">
                              <span className="limitation-bullet">•</span>
                              <span className="limitation-text">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-footer">
                    <Link href={plan.ctaLink} className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}>
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enterprise Pricing */}
      {activeTab === 'enterprise' && (
        <section className="pricing-plans-section">
          <div className="pricing-container">
            <div className="plans-header">
              <h2 className="plans-title">Clinical & Enterprise Solutions</h2>
              <p className="plans-subtitle">
                HIPAA-compliant clinical platforms with EMR integration and advanced analytics
              </p>
            </div>
            
            <div className="pricing-grid enterprise-grid">
              {enterprisePlans.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  
                  <div className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                    <p className="plan-description">{plan.description}</p>
                  </div>
                  
                  <div className="card-content">
                    <ul className="features-list">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="limitations">
                        <h4 className="limitations-title">Limitations:</h4>
                        <ul className="limitations-list">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="limitation-item">
                              <span className="limitation-bullet">•</span>
                              <span className="limitation-text">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-footer">
                    <Link href={plan.ctaLink} className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}>
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="enterprise-note">
              <div className="note-content">
                <h3 className="note-title">Enterprise Implementation</h3>
                <p className="note-text">
                  All enterprise plans include white-glove onboarding, EMR integration, 
                  staff training, and ongoing support. Implementation typically takes 30-90 days 
                  depending on your organization's requirements.
                </p>
                <div className="note-features">
                  <div className="note-feature">
                    <span className="note-icon">🔒</span>
                    <span className="note-label">HIPAA & SOC 2 Compliant</span>
                  </div>
                  <div className="note-feature">
                    <span className="note-icon">⚡</span>
                    <span className="note-label">99.9% Uptime SLA</span>
                  </div>
                  <div className="note-feature">
                    <span className="note-icon">🏥</span>
                    <span className="note-label">Epic, Cerner, AllScripts Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="pricing-faq-section">
        <div className="pricing-container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Everything you need to know about Proxima pricing and features</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-column">
              <div className="faq-item">
                <h3 className="faq-question">What exactly are "AI health assessments"?</h3>
                <p className="faq-answer">
                  Each assessment involves interacting with our 3D anatomy model, describing symptoms, 
                  and receiving AI-powered preliminary insights with clinical translations. Perfect for 
                  understanding your health concerns before seeing a provider.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">How do BioDigital condition models work?</h3>
                <p className="faq-answer">
                  When our AI identifies potential conditions (like appendicitis), Pro and Pro+ users can 
                  click to view detailed 3D models of that specific condition, helping visualize what 
                  might be happening in their body.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Is my health data secure?</h3>
                <p className="faq-answer">
                  Absolutely. We're HIPAA compliant with end-to-end encryption, SOC 2 Type II certified, 
                  and follow strict medical data protection standards. Your health information is always secure.
                </p>
              </div>
            </div>
            
            <div className="faq-column">
              <div className="faq-item">
                <h3 className="faq-question">What EMR systems do you integrate with?</h3>
                <p className="faq-answer">
                  We integrate with Epic, Cerner, AllScripts, and other major EMR systems through HL7 FHIR 
                  standards. Enterprise plans include custom integration support for your specific setup.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Can I upgrade or downgrade my plan?</h3>
                <p className="faq-answer">
                  Yes! You can change your plan anytime. Upgrades take effect immediately, while downgrades 
                  occur at your next billing cycle. Enterprise plans may require consultation for changes.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Do you offer free trials for enterprise?</h3>
                <p className="faq-answer">
                  Yes! We offer 30-day pilot programs for qualified healthcare organizations. 
                  Contact our enterprise team to discuss your specific needs and trial requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Health Experience?</h2>
            <p className="cta-text">
              Join thousands of users and healthcare providers already using Proxima to improve 
              health communication and outcomes.
            </p>
            <div className="cta-buttons">
              <Link href="/login" className="btn btn-primary btn-large">Start Free Trial</Link>
              <Link href="/contact" className="btn btn-outline-white btn-large">Talk to Sales</Link>
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
              <div className="footer-certifications">
                <span className="certification">HIPAA Compliant</span>
                <span className="certification">SOC 2 Type II Certified</span>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Product</h4>
              <Link href="/corporate-site/marketing#consumer" className="footer-link">Personal App</Link>
              <Link href="/corporate-site/marketing#enterprise" className="footer-link">Enterprise Platform</Link>
              <Link href="/corporate-site/pricing" className="footer-link">Pricing</Link>
              <Link href="/corporate-site/marketing#platform" className="footer-link">3D Platform</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Solutions</h4>
              <Link href="/corporate-site/marketing#ai" className="footer-link">AI Translation</Link>
              <Link href="/corporate-site/marketing#emr" className="footer-link">EMR Integration</Link>
              <Link href="/corporate-site/marketing#analytics" className="footer-link">Health Analytics</Link>
              <Link href="/corporate-site/marketing#security" className="footer-link">Security</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <Link href="/corporate-site/marketing#about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
              <Link href="/support" className="footer-link">Support</Link>
              <Link href="/privacy" className="footer-link">Privacy</Link>
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