import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormProps {
  onToggleForm: () => void;
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggleForm, onSuccess }) => {
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const success = await login(formData.email, formData.password);
    if (success) {
      onSuccess();
    } else {
      setErrors({ general: 'Invalid email or password' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back</h2>
        <p className="text-text-secondary">Sign in to continue your adventure</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {errors.general}
          </div>
        )}

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 text-text-primary placeholder-text-secondary ${
                errors.email ? 'border-red-300 focus:ring-red-500' : 'border-accent/20 focus:border-accent'
              }`}
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full pl-10 pr-12 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 text-text-primary placeholder-text-secondary ${
                errors.password ? 'border-red-300 focus:ring-red-500' : 'border-accent/20 focus:border-accent'
              }`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-300"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent hover:bg-accent-hover text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Sign In
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Toggle to Signup */}
      <div className="mt-6 text-center">
        <p className="text-text-secondary">
          Don't have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-accent hover:text-accent-hover font-semibold transition-colors duration-300"
            disabled={isLoading}
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;