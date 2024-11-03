import { ArrowLeft, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BondInvestments() {
  const bondWebsites = [
    { name: "IndiaBonds", url: "https://indiabonds.com", description: "Comprehensive bond trading platform" },
    { name: "Altifi.AI", url: "https://altifi.ai", description: "AI-powered bond investment solutions" },
    { name: "Aspero", url: "https://aspero.in", description: "Simplified bond investing for retail investors" },
    { name: "TheFixedIncome", url: "https://thefixedincome.com", description: "Curated fixed income investment opportunities" },
    { name: "Bondskart", url: "https://bondskart.com", description: "One-stop shop for all types of bonds" },
    { name: "INRBONDS", url: "https://inrbonds.com", description: "Specializing in Indian Rupee denominated bonds" },
    { name: "BONDSINDIA", url: "https://bondsindia.com", description: "Diverse bond offerings for Indian investors" },
    { name: "STOCKIFY", url: "https://stockify.net", description: "Integrated platform for stocks and bonds" },
    { name: "SMEST", url: "https://smest.in", description: "Smart investment solutions including bonds" },
    { name: "GRIPINVEST", url: "https://gripinvest.in", description: "Alternative investment platform featuring bonds" },
    { name: "VESTEDFINANCE", url: "https://vestedfinance.com", description: "Global investment opportunities including bonds" },
    { name: "MATALIA", url: "https://matalia.co.in", description: "Boutique bond investment services" },
    { name: "INCREDMONEY", url: "https://incredmoney.com", description: "Innovative bond and fixed income solutions" },
    { name: "INDMONEY", url: "https://indmoney.com", description: "All-in-one investment app with bond offerings" },
    { name: "JIRAAF", url: "https://jiraaf.com", description: "Alternative fixed-income investment platform" },
    { name: "GOLDENPI", url: "https://goldenpi.com", description: "Focused on high-yield bond opportunities" },
    { name: "WINTWEALTH", url: "https://wintwealth.com", description: "Curated high-yield fixed income investments" },
    { name: "ALTGRAAF", url: "https://altgraaf.com", description: "Algorithmic bond trading and investments" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <header className="bg-white bg-opacity-90 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Bond Investment Platforms
          </h1>
          <Link href="/debt-instruments" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Debt Instruments
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Bond Investment Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of platforms offering bond investments. Compare options and find the right platform for your investment needs.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bondWebsites.map((website, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{website.name}</h3>
                <p className="text-gray-600 mb-4">{website.description}</p>
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    
    </div>
  )
}
