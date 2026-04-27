import React from 'react';

// Devopstrio AVD Landing Zone
// Foundation Operations & Governance Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Global Foundation Header */}
            <header className="border-b border-white/5 bg-black/40 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(79,70,229,0.4)] border border-white/10 group">
                            LZ
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none">LANDING ZONE</h1>
                            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mt-2">Enterprise AVD Foundation</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-indigo-400 border-b-2 border-indigo-500 pb-10 pt-10">Governance Map</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Resource Fleet</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Network Hub</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Security Center</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">FinOps</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Platform Vital Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Governance Score', value: '98%', status: 'Healthy', color: 'indigo' },
                        { label: 'Active Regions', value: '4', status: 'Global Spread', color: 'sky' },
                        { label: 'Monthly Consumption', value: '$14.2k', status: '-4% optimized', color: 'emerald' },
                        { label: 'Workspace Density', value: '4.2', status: 'Optimal VDI Ratio', color: 'violet' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regional Infrastructure Intelligence */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Multi-Region Deployment Map Placeholder */}
                    <div className="xl:col-span-2 bg-slate-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Regional Foundation Distribution</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-md">Global visibility of Hub-Spoke network connectivity and regional AVD resource utilization.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
                                    Expand Region
                                </button>
                                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-900/30">
                                    New Blueprint
                                </button>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {[
                                { name: 'UK South Cluster', vnet: '10.40.0.0/16', pool: 22, health: 'Optimized', load: 68 },
                                { name: 'East US Cluster', vnet: '10.50.0.0/16', pool: 14, health: 'Optimized', load: 42 },
                                { name: 'West Europe Cluster', vnet: '10.60.0.0/16', pool: 8, health: 'Scaling', load: 88 },
                                { name: 'Japan East (Standby)', vnet: '10.70.0.0/16', pool: 4, health: 'Hibernate', load: 0 }
                            ].map((region, idx) => (
                                <div key={idx} className="bg-black/40 p-8 rounded-[2rem] border border-white/5 flex items-center justify-between group hover:bg-slate-800/20 transition-all border-l-4 border-l-indigo-600/50">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="text-xl font-black text-white tracking-tight">{region.name}</div>
                                            <div className="text-[10px] font-black bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full uppercase border border-indigo-500/20">{region.health}</div>
                                        </div>
                                        <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Address: <span className="text-slate-300 font-mono italic">{region.vnet}</span></div>
                                    </div>
                                    <div className="flex items-center gap-16">
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Utilization</div>
                                            <div className="text-lg font-black text-white flex items-baseline gap-2">
                                                {region.load}%
                                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                    <div className="bg-indigo-500 h-full" style={{ width: `${region.load}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Host Pools</div>
                                            <div className="text-lg font-black text-indigo-400 font-mono">{region.pool}</div>
                                        </div>
                                        <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-all">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Governance & Policy Spotlight */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1">
                            <h3 className="text-lg font-black text-white uppercase tracking-widest mb-10 border-b border-indigo-500/20 pb-6 flex items-center justify-between">
                                Governance Guardrails
                                <span className="text-[9px] text-emerald-400">98% Secure</span>
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Naming Standards', status: 'Compliant' },
                                    { label: 'Region Restrictions', status: 'Compliant' },
                                    { label: 'Disk Encryption Pillar', status: 'Compliant' },
                                    { label: 'Tags Audit', status: 'In-Review' },
                                    { label: 'Public IP Gate', status: 'Blocked' }
                                ].map((gov, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2">
                                        <span className="text-xs font-bold text-slate-300 tracking-tight">{gov.label}</span>
                                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${gov.status === 'Compliant' || gov.status === 'Blocked' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400 animate-pulse'}`}>{gov.status}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-indigo-600/10 p-6 rounded-2xl border border-indigo-500/20">
                                <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-2 leading-none">Smart Advice</div>
                                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                                    "Your UK South VNET peering is nearing 85% of its address space allocation. Consider provisioning a secondary spoke soon."
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl">
                            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 block">Foundation Security Alert Hub</h4>
                            <div className="p-6 bg-black/40 rounded-2xl border border-rose-500/20 flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                </div>
                                <div>
                                    <div className="text-sm font-black text-white tracking-tight">Conditional Access Policy Drift</div>
                                    <div className="text-[10px] text-rose-400 font-bold uppercase tracking-widest mt-1 italic">Manual Override Detected - Ring 0</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sub-Infrastructure Analytics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-xl relative overflow-hidden">
                        <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">FSLogix Storage Efficiency</h5>
                        <div className="flex items-end gap-1 px-4 h-48">
                            {[42, 65, 88, 55, 32, 94, 62, 78, 50, 45, 82, 70].map((val, idx) => (
                                <div key={idx} className="flex-1 bg-indigo-500/20 rounded-t-lg group relative cursor-pointer hover:bg-indigo-500 transition-all" style={{ height: `${val}%` }}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                                        {val}TB
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-6 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] px-4">
                            <span>Jan 26</span>
                            <span>Apr 26 (Current)</span>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-xl flex flex-col justify-between group">
                        <div>
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 leading-none">Regional Latency Index</h5>
                            <div className="text-[42px] font-black text-white tracking-tighter mb-4 font-mono group-hover:text-indigo-400 transition-colors">12.4ms</div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">Average Round-Trip-Time (RTT) across the global cluster, optimized for engineering workloads.</p>
                        </div>
                        <div className="flex justify-between pt-8 border-t border-white/5 mt-8">
                            <div className="text-center">
                                <div className="text-lg font-black text-emerald-400 font-mono">1ms</div>
                                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">UK South Peak</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-black text-amber-400 font-mono">142ms</div>
                                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">Japan Sluggish</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-black text-indigo-400 font-mono">24ms</div>
                                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">US Global Core</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
