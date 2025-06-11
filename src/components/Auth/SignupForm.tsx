import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SignupFormProps {
  onToggleForm: () => void;
  onSuccess: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onToggleForm, onSuccess }) => {
  const { signup, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const success = await signup(formData.email, formData.password, formData.name);
    if (success) {
      onSuccess();
    } else {
      setErrors({ general: 'Registration failed. Please try again.' });
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
        <h2 className="text-3xl font-bold text-text-primary mb-2">Join Wanderlust</h2>
        <p className="text-text-secondary">Create your account and start exploring</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {errors.general}
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 text-text-primary placeholder-text-secondary ${
                errors.name ? 'border-red-300 focus:ring-red-500' : 'border-accent/20 focus:border-accent'
              }`}
              placeholder="Enter your full name"
              disabled={isLoading}
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

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
              placeholder="Create a password"
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

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full pl-10 pr-12 py-3 bg-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300 text-text-primary placeholder-text-secondary ${
                errors.confirmPassword ? 'border-red-300 focus:ring-red-500' : 'border-accent/20 focus:border-accent'
              }`}
              placeholder="Confirm your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors duration-300"
              disabled={isLoading}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
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
              Create Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {/* Toggle to Login */}
      <div className="mt-6 text-center">
        <p className="text-text-secondary">
          Already have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-accent hover:text-accent-hover font-semibold transition-colors duration-300"
            disabled={isLoading}
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;