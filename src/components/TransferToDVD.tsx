import { Phone, Award, CheckCircle2 } from 'lucide-react';

export function TransferToDVD() {
  const formats = ['VHS', 'VHS-C', 'Video8', 'Hi8', 'Digital8', 'MiniDV', 'Mini DVD (Disc Based)'];
  const steps = [
    'Send us your tapes',
    'We transfer to DVD',
    'We invoice via PayPal',
    'We return via Royal Mail Tracked'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6TTAgMTZjMC00LjQxOCAzLjU4Mi04IDgtOHM4IDMuNTgyIDggOC0zLjU4MiA4LTggOC04LTMuNTgyLTgtOHptMTggMGMwLTQuNDE4IDMuNTgyLTggOC04czggMy41ODIgOCA4LTMuNTgyIDgtOCA4LTgtMy41ODItOC04eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-yellow-300" />
              <span className="text-sm font-semibold uppercase text-yellow-300">30+ Years Experience</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Transfer to DVD Services
            </h2>
            
            <p className="text-blue-100 mb-8 leading-relaxed">
              With over 30 years' experience, we specialise in transferring older media formats to DVD. Simply send us your tapes — once complete, we'll invoice via PayPal and return your order securely.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-bold text-yellow-300">£6.00</span>
                <span className="text-blue-100">per tape</span>
              </div>
              <p className="text-sm text-blue-200">Affordable media transfer services</p>
            </div>

            <a
              href="tel:02085678550"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call: 0208 567 8550
            </a>
          </div>

          {/* Right cards */}
          <div className="space-y-6">
            {/* Supported Formats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-2 text-yellow-300 mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-bold text-white">Supported Formats</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {formats.map((format, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded text-sm border border-white/20"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Audio Cassette to CD (up to 90 min old)
              </p>
            </div>

            {/* How It Works */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-2 text-yellow-300 mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-bold text-white">How It Works</h3>
              </div>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <span className="flex-shrink-0 w-6 h-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
