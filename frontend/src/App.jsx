import { useState } from 'react'
import API_BASE_URL from './apiConfig'

const currencies = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'EUR', label: 'EUR - Euro' },
  { value: 'GBP', label: 'GBP - British Pound' },
  { value: 'JPY', label: 'JPY - Japanese Yen' },
  { value: 'AUD', label: 'AUD - Australian Dollar' },
  { value: 'CAD', label: 'CAD - Canadian Dollar' },
  { value: 'CHF', label: 'CHF - Swiss Franc' },
  { value: 'CNY', label: 'CNY - Chinese Yuan' },
  { value: 'INR', label: 'INR - Indian Rupee' },
  { value: 'MXN', label: 'MXN - Mexican Peso' },
  { value: 'BRL', label: 'BRL - Brazilian Real' },
  { value: 'ZAR', label: 'ZAR - South African Rand' },
  { value: 'SGD', label: 'SGD - Singapore Dollar' },
  { value: 'HKD', label: 'HKD - Hong Kong Dollar' },
  { value: 'NZD', label: 'NZD - New Zealand Dollar' },
  { value: 'SEK', label: 'SEK - Swedish Krona' },
  { value: 'NOK', label: 'NOK - Norwegian Krone' },
  { value: 'KRW', label: 'KRW - South Korean Won' },
  { value: 'TRY', label: 'TRY - Turkish Lira' },
  { value: 'RUB', label: 'RUB - Russian Ruble' },
]

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [amount, setAmount] = useState('100')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const convertCurrency = async () => {
    if (!from || !to || !amount) {
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/convert?from=${from}&to=${to}&amount=${amount}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'currency-converter-api-key-12345'
          }
        }
      )

      if (!response.ok) {
        throw new Error("Request blocked: " + response.status)
      }

      const data = await response.json()

      let formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: to,
        maximumFractionDigits: 2
      }).format(data.convertedAmount)

      if (formattedAmount === 'NaN' || !formattedAmount) {
        formattedAmount = data.convertedAmount
      }

      setResult(formattedAmount)
    } catch (error) {
      console.error(error)
      alert("Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  const swapCurrencies = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      convertCurrency()
    }
  }

  return (
    <div className="app-container">
      <div className="ambient-shape shape-1"></div>
      <div className="ambient-shape shape-2"></div>

      <div className="converter-card">
        <header>
          <h2>Currency Exchange</h2>
          <p className="subtitle">Real-time conversion at your fingertips</p>
        </header>

        <div className="currency-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="from">From</label>
            <div className="input-wrapper">
              <select
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className="swap-icon"
            onClick={swapCurrencies}
            title="Swap Currencies"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="to">To</label>
            <div className="input-wrapper">
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <div className="input-wrapper">
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        <button
          className={`cta-btn ${loading ? 'loading' : ''}`}
          onClick={convertCurrency}
          disabled={loading}
        >
          <span>{loading ? 'Converting...' : 'Convert Now'}</span>
          <div className="spinner"></div>
        </button>

        <div id="result" className={result ? 'visible' : ''}>
          <div className="result-label">Total Converted Amount</div>
          <div className="result-value" id="result-text">{result}</div>
        </div>
      </div>
    </div>
  )
}

export default App
