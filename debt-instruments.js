import { ArrowRight, Landmark, FileText, Receipt, TrendingUp, Users, Home, Layers, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const RiskMeter = ({ risk }) => {
  const riskLevels = ['Low', 'Medium', 'High']
  const riskColors = {
    Low: 'bg-green-500',
    Medium: 'bg-yellow-500',
    High: 'bg-red-500'
  }

  return (
    <div className="flex items-center space-x-1">
      {riskLevels.map((level) => (
        <div
          key={level}
          className={`h-2 w-6 rounded-full ${
            riskLevels.indexOf(level) <= riskLevels.indexOf(risk) ? riskColors[risk] : 'bg-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">{risk} Risk</span>
    </div>
  )
}

export default function DebtInstruments() {
  const debtInstruments = [
    {
      name: "National Pension Scheme",
      icon: Landmark,
      description: "Government-backed pension scheme for retirement planning",
      risk: "Low",
      returns: "8% - 12%",
      websites: [
        { name: "IndMoney", url: "https://indmoney.com" }
      ]
    },
    {
      name: "Fixed Deposits",
      icon: Landmark,
      description: "Time deposits with banks offering fixed interest rates",
      risk: "Low",
      returns: "5% - 7.5%",
      websites: [
        { name: "Stable Money", url: "https://stablemoney.com" },
        { name: "Direct Bank Deposits", url: "#" }
      ]
    },
    {
      name: "Bonds",
      icon: FileText,
      description: "Debt securities issued by governments or corporations",
      risk: "Low",
      returns: "4% - 8%",
      websites: [
        { name: "View Bond Investment Platforms", url: "/bond-investments" }
      ]
    },
    {
      name: "Invoice Discounting",
      icon: FileText,
      description: "Short-term financing based on unpaid invoices",
      risk: "Medium",
      returns: "10% - 14%",
      websites: [
        { name: "KredX", url: "https://kredx.com" },
        { name: "BetterInvest Club", url: "https://betterinvest.club" },
        { name: "TapInvest", url: "https://tapinvest.in" },
        { name: "FalconsGrup", url: "https://falconsgrup.com" },
        { name: "OroWealth", url: "https://orowealth.com" }
      ]
    },
    {
      name: "P2P Lending",
      icon: Users,
      description: "Direct lending between individuals or businesses",
      risk: "High",
      returns: "10% - 15%",
      websites: [
        { name: "RangDe", url: "https://rangde.in" }
      ]
    },
    {
      name: "Fractional Ownership",
      icon: Layers,
      description: "Partial ownership of high-value real estate properties",
      risk: "Medium",
      returns: "8% - 12%",
      websites: [
        { name: "StrataProp", url: "https://strataprop.com" },
        { name: "GHL India", url: "https://ghlindia.com" }
      ]
    },
    {
      name: "REITs",
      icon: Home,
      description: "Investment trusts that own and operate income-generating real estate",
      risk: "Medium",
      returns: "6% - 10%",
      websites: [
        { name: "PropertyShare", url: "https://propertyshare.in" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <header className="bg-white bg-opacity-90 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Debt Instruments Explorer
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Debt Instruments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of debt instruments and their potential returns. Compare risk profiles and find the right investment opportunity for you.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {debtInstruments.map((instrument, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="px-6 py-6 flex-grow">
                <instrument.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{instrument.name}</h3>
                <p className="text-gray-600 mb-4">{instrument.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Potential Returns:</div>
                  <div className="text-lg font-semibold text-indigo-600">{instrument.returns}</div>
                </div>
                <RiskMeter risk={instrument.risk} />
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Where to Invest:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instrument.websites.map((website, idx) => (
                      instrument.name === "Bonds" ? (
                        <Link
                          key={idx}
                          href={website.url}
                          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          {website.name}
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      ) : (
                        <a
                          key={idx}
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          {website.name}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 mt-auto">
                <button className="w-full text-white font-medium flex items-center justify-center hover:underline">
                  Invest Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
