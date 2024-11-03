import { ArrowRight, TrendingUp, Landmark, Bitcoin, DollarSign, BarChart2, Package } from 'lucide-react'
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

export default function Home() {
  const assetClasses = [
    {
      name: "Stocks",
      icon: TrendingUp,
      description: "Ownership in publicly traded companies",
      risk: "High",
      returns: "7% - 10% (historical average)",
      link: "/stocks"
    },
    {
      name: "Debt",
      icon: Landmark,
      description: "Fixed income instruments like bonds and deposits",
      risk: "Low",
      returns: "2% - 6% (varies by instrument)",
      link: "/debt-instruments"
    },
    {
      name: "Crypto",
      icon: Bitcoin,
      description: "Digital or virtual currencies",
      risk: "High",
      returns: "Highly volatile, potentially >100% or total loss",
      link: "/crypto"
    },
    {
      name: "Forex",
      icon: DollarSign,
      description: "Foreign currency exchange market",
      risk: "Medium",
      returns: "2% - 5% (average annual return)",
      link: "/forex"
    },
    {
      name: "Futures & Options",
      icon: BarChart2,
      description: "Derivative contracts for future transactions",
      risk: "High",
      returns: "Highly variable, potentially >100% or total loss",
      link: "/futures-options"
    },
    {
      name: "Commodities",
      icon: Package,
      description: "Raw materials or primary agricultural products",
      risk: "Medium",
      returns: "2% - 10% (varies by commodity)",
      link: "/commodities"
    },
    {
      name: "ETFs",
      icon: BarChart2,
      description: "Baskets of securities that track indexes, sectors, or commodities",
      risk: "Medium",
      returns: "7% - 10% (varies by fund type)",
      link: "/etfs"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <header className="bg-white bg-opacity-90 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Investment Explorer
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a></li>
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
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Asset Classes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of investment opportunities across various asset classes. Compare risk profiles and potential returns to make informed decisions.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {assetClasses.map((asset, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="px-6 py-6 flex-grow">
                <asset.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{asset.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{asset.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Potential Returns:</div>
                  <div className="text-lg font-semibold text-indigo-600">{asset.returns}</div>
                </div>
                <RiskMeter risk={asset.risk} />
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 mt-auto">
                <Link href={asset.link} className="text-white font-medium flex items-center justify-center hover:underline">
                  Explore {asset.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
