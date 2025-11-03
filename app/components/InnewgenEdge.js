"use client";

import { Shield, TrendingUp, Zap, ArrowUpRight } from "lucide-react";

const InnewgenEdge = () => {
  const edges = [
    {
      icon: Shield,
      title: "Engineered for Reliability",
      description:
        "Our commitment to code quality, rigorous security protocols, and long-term support ensures your systems operate flawlessly under any conditions.",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      icon: TrendingUp,
      title: "Built for Scalability",
      description:
        "We design future-proof architectures that seamlessly handle enterprise-level growth, adapting to your evolving business needs without compromise.",
      gradient: "from-purple-500 via-violet-600 to-indigo-500",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      icon: Zap,
      title: "Future-Forward Innovation",
      description:
        "We leverage cutting-edge technologies and innovative problem-solving approaches to keep you ahead of the competition.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "rgba(249, 115, 22, 0.3)",
    },
  ];

  return (
    <section className="relative min-h-screen from-slate-950 via-slate-900 to-slate-950 py-32 px-4 md:px-8 overflow-hidden">
      {/* Animated background grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}

      {/* Radial gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-blue-400 tracking-widest">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent leading-tight">
            The Innewgen Edge
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            What sets us apart in delivering exceptional digital solutions
          </p>
        </div>

        {/* Cards Grid with staggered layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {edges.map((edge, index) => {
            const Icon = edge.icon;
            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className="group relative animate-fadeInUp"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
                  style={{ background: edge.glowColor }}
                />

                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 overflow-hidden transition-all duration-500 hover:border-slate-600 hover:-translate-y-2">
                  {/* Top gradient line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${edge.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                  />

                  {/* Icon with animated gradient background */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${edge.gradient} opacity-20 rounded-2xl blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                    />
                    <div
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${edge.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                        <Icon
                          className="w-10 h-10 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {edge.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {edge.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${edge.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "2x", label: "Speed Meets Quality" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
            >
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="relative text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h4>
              </div>
              <p className="text-slate-500 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `,
        }}
      />
    </section>
  );
};

export default InnewgenEdge;
