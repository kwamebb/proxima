'use client'

import React from 'react'
import { LoginForm } from './components/login-form'
import { styles } from './styles'

export function LoginScreen() {
  return (
    <div className={styles.container}>
      {/* Background with gradient */}
      <div className={styles.background}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      
      {/* Login form container */}
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className={styles.logoSvg}
                />
              </div>
            </div>
            <h1 className={styles.title}>Transcend the Ordinary</h1>
            <p className={styles.subtitle}>Sign in to continue your journey</p>
          </div>
          
          <LoginForm />
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{' '}
              <button className={styles.linkButton}>Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 