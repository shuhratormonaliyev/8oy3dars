import React, { useState } from 'react'
import JobListing from './components/JobListing'

interface FormData {
  logoUrl: string;
  companyName: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  time: string;
  jobType: string;
  location: string;
  skills: {
    fullstack: boolean;
    midweight: boolean;
    python: boolean;
    react: boolean;
  };
}

export default function VacancyForm() {
  const [formData, setFormData] = useState<FormData>({
    logoUrl: '',
    companyName: '',
    isNew: false,
    isFeatured: false,
    position: '',
    time: '',
    jobType: '',
    location: '',
    skills: {
      fullstack: false,
      midweight: false,
      python: false,
      react: false,
    },
  })

  const [submittedData, setSubmittedData] = useState<FormData[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({
      ...prev,
      skills: { ...prev.skills, [name]: checked },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedData(prev => [...prev, formData])
    console.log('Form data:', formData)
    localStorage.setItem('submittedData', JSON.stringify([...submittedData, formData]))

    setFormData({
      logoUrl: '',
      companyName: '',
      isNew: false,
      isFeatured: false,
      position: '',
      time: '',
      jobType: '',
      location: '',
      skills: {
        fullstack: false,
        midweight: false,
        python: false,
        react: false,
      },
    })
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg mt-10 w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Vakansiya ma'lumotlarini kiriting</h2>
      <form onSubmit={handleSubmit} className="mb-10 border p-10 rounded-md space-y-4">
        <div className="mb-4">
          <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Logotip URL
          </label>
          <input
            type="text"
            id="logoUrl"
            name="logoUrl"
            value={formData.logoUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Logotip URL manzilini kiriting"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Kompaniya nomi
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Manage"
          />
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isNew"
              checked={formData.isNew}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Yangi</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Featured</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Lavozim
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Fullstack Developer"
          />
        </div>

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Vaqt
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tanlang</option>
              <option value="full-time">To'liq stavka</option>
              <option value="part-time">Yarim stavka</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
              Ish turi
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tanlang</option>
              <option value="office">Ofis</option>
              <option value="remote">Masofaviy</option>
              <option value="hybrid">Gibrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Joylashuv
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Tanlang</option>
              <option value="tashkent">Toshkent</option>
              <option value="samarkand">Samarqand</option>
              <option value="bukhara">Buxoro</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-700 mb-2">Ko'nikmalar</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(formData.skills).map(([skill, checked]) => (
              <label key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  name={skill}
                  checked={checked}
                  onChange={handleSkillChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700 capitalize">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          Saqlash
        </button>
      </form>

      <div className="mt-10 w-full">
        <h3 className="text-lg font-bold mb-4">Yuborilgan malumotlar:</h3>
        {submittedData.length > 0 ? (
          submittedData.map((data, index) => (
            <JobListing
              key={index}
              company={data.companyName}
              position={data.position}
              postedAt={data.time}
              contractType={data.jobType}
              location={data.location}
              isNew={data.isNew}
              isFeatured={data.isFeatured}
              skills={Object.entries(data.skills).filter(([_, checked]) => checked).map(([skill]) => skill)}
            />
          ))
        ) : (
          <p className="text-gray-500">Malumotlar mavjud emas .</p>
        )}
      </div>
    </div>
  )
}