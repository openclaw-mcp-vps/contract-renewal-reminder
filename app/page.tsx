export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Legal &amp; Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Contract<br />
          <span className="text-[#58a6ff]">Renewal Deadline</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your contracts and let AI extract renewal dates automatically.
          Get email and SMS alerts days before auto-renewals lock you in.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-semibold text-white mb-1">AI Document Parsing</h3>
            <p className="text-sm text-[#8b949e]">Upload PDFs or Word docs. AI extracts renewal dates, notice periods, and key terms instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Smart Alerts</h3>
            <p className="text-sm text-[#8b949e]">Receive email and SMS reminders 90, 30, and 7 days before each deadline — fully customizable.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Contract Dashboard</h3>
            <p className="text-sm text-[#8b949e]">See all contracts, upcoming renewals, and status at a glance. Never lose track again.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited contract uploads</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-powered date extraction</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS reminders</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom reminder schedules</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Contract dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-sm text-[#8b949e]">We support PDF, DOCX, and DOC files. Simply upload your contract and our AI will parse the renewal dates and key terms within seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How far in advance will I be notified?</h3>
            <p className="text-sm text-[#8b949e]">By default you receive alerts 90, 30, and 7 days before each renewal date. You can customize these intervals for each contract from your dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my contract data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. All documents are encrypted at rest and in transit. We never share your data with third parties, and you can delete your contracts at any time.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Contract Renewal Reminder. All rights reserved.
      </footer>
    </main>
  );
}
