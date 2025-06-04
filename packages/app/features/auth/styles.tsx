export const styles = {
  // Container and background
  container: 'login-container',
  background: 'login-background',
  shape1: 'login-shape login-shape-1 animate-blob',
  shape2: 'login-shape login-shape-2 animate-blob animation-delay-2000',

  // Login container and card
  loginContainer: 'login-wrapper',
  loginCard: 'login-card',

  // Header
  header: 'login-header',
  logoContainer: 'logo-container',
  logo: 'logo',
  logoSvg: 'logo-svg',
  title: 'login-title',
  subtitle: 'login-subtitle',

  // Form
  form: 'login-form',
  formGroup: 'form-group',
  label: 'form-label',
  input: 'form-input',

  // Form options
  formOptions: 'form-options',
  checkboxLabel: 'checkbox-label',
  checkbox: 'form-checkbox',
  checkboxText: 'checkbox-text',
  forgotPassword: 'forgot-password',

  // Submit button
  submitButton: 'submit-button',
  loading: 'loading',
  spinner: 'spinner',

  // Divider
  divider: 'divider',
  dividerText: 'divider-text',

  // Social button
  socialButton: 'social-button',
  socialIcon: 'social-icon',

  // Footer
  footer: 'login-footer',
  footerText: 'footer-text',
  linkButton: 'link-button'
}

// Add custom CSS for animations that can't be handled by Tailwind
export const customCSS = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
  
  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
` 