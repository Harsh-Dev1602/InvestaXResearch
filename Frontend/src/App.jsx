import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'
import Home from './Components/Home'
import About from './Components/About'
import InvestorCharter from './Components/InvestorCharter'
import ComplaintBoard from './Components/ComplaintBoard'
import Services from './Components/Services'
import MITC from './Components/MITC'
import Pricing from './Components/Pricing'
import Payment from './Components/Payment'
import GrievanceRedressal from './Components/GrievanceRedressal'
import TermsConditions from './Components/TermsConditions'
import PrivacyPolicy from './Components/PrivacyPolicy'
import RefundPolicy from './Components/RefundPolicy'
import DisclaimerDisclosures from './Components/DisclaimerDisclosures'
import ServiceAgreement from './Components/ServiceAgreement'
import Commodities from './Components/Commodities'
import Login from './Admin/Login'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Dashboard from './Admin/Dashboard'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function App() {

  const [authUser, setAuthUser] = useAuth();
  const location = useLocation()
  return (
    <ThemeProvider>
      <CustomCursor />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        <div className={`${authUser?.user?.role === "@dmin" ? " hidden" : "block"}`}>
          <Header />
        </div>
        <main style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={authUser?.user?.role === "@dmin" ? <Navigate to="/dashboard" /> : <PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/investor-charter" element={<PageWrapper><InvestorCharter /></PageWrapper>} />
              <Route path="/complaint-board" element={<PageWrapper><ComplaintBoard /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/mitc" element={<PageWrapper><MITC /></PageWrapper>} />
              <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
              <Route path="/payment" element={<PageWrapper><Payment /></PageWrapper>} />
              <Route path="/grievance-redressal" element={<PageWrapper><GrievanceRedressal /></PageWrapper>} />
              <Route path="/terms-conditions" element={<PageWrapper><TermsConditions /></PageWrapper>} />
              <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
              <Route path="/refund-policy" element={<PageWrapper><RefundPolicy /></PageWrapper>} />
              <Route path="/disclaimer-disclosures" element={<PageWrapper><DisclaimerDisclosures /></PageWrapper>} />
              <Route path="/service-agreement" element={<PageWrapper><ServiceAgreement /></PageWrapper>} />
              <Route path="/commodities" element={<PageWrapper><Commodities /></PageWrapper>} />
              <Route path='/dashboard' element={authUser?.user?.role === "@dmin" ? <Dashboard /> : <Navigate to="/" />} />
              <Route path='/login' element={authUser?.user?.role === "@dmin" ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <div className={`${authUser?.user?.role === "@dmin" ? "hidden" : "block"}`}>
          <Footer />
        </div>
      </div>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '20px',
            fontWeight: "700",
            borderRadius: "12px",
            color: "black",
            backgroundColor: "white"
          },
          iconTheme: {
            secondary: 'white',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App