import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from "../api/axiosInstance";

const ROLES = [
  { id: 1, name: 'Customer', code: 'customer' },
  { id: 2, name: 'Admin', code: 'admin' },
  { id: 3, name: 'Store', code: 'store' }
];

export default function SignUpPage() {
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      role_id: 1
    }
  });

  const password = watch("password");
  const selectedRoleId = watch("role_id");

  const selectedRole = ROLES.find(r => r.id == selectedRoleId);
  const isStore = selectedRole && selectedRole.code === 'store';

  const onSubmit = async (data) => {
    setApiError("");

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: { id: parseInt(data.role_id) }
    };

    if (isStore) {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.store_tax_no,
        bank_account: data.store_bank_account,
      };
    }

    try {
      await API.post('/auth/register', payload);
      
      toast.success("Registration successful! You can now log in.");
      navigate('/login'); 
      
    } catch (error) {
      setApiError(error.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-10 pb-16 flex flex-col sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#252B42]">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-sm text-[#737373]">
          Sign up to get started
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {apiError && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
              {apiError}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            <div>
              <label className="block text-sm font-medium text-[#252B42]">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  {...register("name", { 
                    required: "Name is required", 
                    minLength: { value: 3, message: "Name must be at least 3 characters long" } 
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#252B42]">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#252B42]">Password</label>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("password", { 
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-]).{8,}$/,
                      message: "Password must be at least 8 chars, include numbers, upper/lowercase and special chars."
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#252B42]">Confirm Password</label>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => value === password || "Passwords do not match"
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#252B42]">Role</label>
              <div className="mt-1">
                <select
                  {...register("role_id", { required: "Role is required" })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm bg-white"
                >
                  {ROLES.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {isStore && (
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-md space-y-4 animate-fadeIn">
                <h3 className="text-sm font-bold text-[#23A6F0] uppercase tracking-wider">Store Information</h3>
                
                <div>
                  <label className="block text-xs font-medium text-[#252B42]">Store Name</label>
                  <input
                    type="text"
                    {...register("store_name", { 
                      required: "Store name is required", 
                      minLength: { value: 3, message: "Store name must be at least 3 characters" } 
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_name && <p className="mt-1 text-xs text-red-600">{errors.store_name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252B42]">Store Phone (TR)</label>
                  <input
                    type="text"
                    placeholder="05XXXXXXXXX"
                    {...register("store_phone", { 
                      required: "Store phone is required",
                      pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Valid TR phone number required (e.g., 05xxxxxxxxx)" }
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_phone && <p className="mt-1 text-xs text-red-600">{errors.store_phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252B42]">Store Tax ID</label>
                  <input
                    type="text"
                    placeholder="TXXXXVXXXXXX"
                    {...register("store_tax_no", { 
                      required: "Tax ID is required",
                      pattern: { value: /^T\d{4}V\d{6}$/, message: "Must match pattern TXXXXVXXXXXX (X=number)" }
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_tax_no && <p className="mt-1 text-xs text-red-600">{errors.store_tax_no.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#252B42]">Store Bank Account (IBAN)</label>
                  <input
                    type="text"
                    placeholder="TR..."
                    {...register("store_bank_account", { 
                      required: "IBAN is required",
                      pattern: { value: /^TR\d{24}$/, message: "Valid TR IBAN required (TR + 24 digits)" }
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_bank_account && <p className="mt-1 text-xs text-red-600">{errors.store_bank_account.message}</p>}
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}