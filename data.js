/* ==========================================
   PORTFOLIO CONTENT — EDIT HERE
   To add a project, duplicate an object below.
   Categories: "sports", "product", "research"
   Visuals: menu, baseball, march, oscar, cfp, autochef
   ========================================== */

window.PORTFOLIO = {
  name: "Ben Schweitzer",
  email: "bps78@icloud.com",
  projects: [
    {
      id: "menumeter", number: "01", category: "product", categoryLabel: "PRODUCT / AI", year: "2026", featured: true,
      title: "MenuMeter", subtitle: "Restaurant profitability analytics",
      summary: "AI-assisted menu costing, sales analysis, and profitability recommendations.",
      metric: "BUILT & DEPLOYED", visual: "menu", stack: ["Python", "Streamlit", "OpenAI API", "Supabase", "Stripe"],
      question: "What if independent restaurants could get useful margin and pricing insights without living in spreadsheets?",
      approach: "I built a workflow that brings together menus, recipes, ingredient costs, supplier information, and sales reports. The application analyzes per-item economics and surfaces opportunities in menu pricing and ingredient ordering.",
      outcome: "Developed and deployed a working SaaS product, including the interface, AI-assisted extraction, data workflows, and a framework for testing features and workflows. The next phase is learning directly from restaurant users.",
      links: [{label:"Explore MenuMeter",url:"https://menumeter.app/"}]
    },
    {
      id: "swing", number: "02", category: "sports", categoryLabel: "SPORTS / MODELING", year: "NOV 2026", featured: true,
      title: "Swing Decisions in Baseball", subtitle: "Pitch-level run value analysis",
      summary: "Swing-versus-take decision modeling using ~705K Statcast pitches.",
      metric: "~705K PITCHES", visual: "baseball", stack: ["R", "GAMs", "Statcast", "Run expectancy"],
      question: "Can we judge a hitter's decision quality separately from their ability to make contact?",
      approach: "Working with teammates, we modeled the run value of swinging and taking using 2025 Statcast data. We used pitch location, count, and batter context to estimate which choice had higher expected value, then developed an adjusted decision metric.",
      outcome: "Created a framework for comparing batter swing decisions rather than treating traditional outcomes like on-base percentage or strikeouts as decision-making measures. The analysis included reliability checks and model-based comparisons.",
      links: [{label:"View presentation",url:"https://docs.google.com/presentation/d/15f1zrJGgTkbEi2roelhTMt2aXDjqps9vDDbVhudgF9s/edit?usp=sharing"}]
    },
    {
      id: "madness", number: "03", category: "sports", categoryLabel: "SPORTS / PREDICTION", year: "MAR 2026", featured: true,
      title: "March Madness Predictor", subtitle: "NCAA Tournament predictions",
      summary: "XGBoost matchup modeling; first place in a 20-entry bracket group.",
      metric: "1ST / 20 BRACKETS", visual: "march", stack: ["Python", "XGBoost", "Random forests", "Calibration"],
      question: "Can a model consistently spot favorable matchups and tournament contenders in a chaotic bracket?",
      approach: "I assembled college basketball team statistics, trained XGBoost and random forest models, and calibrated game probabilities to generate a 2026 tournament bracket and competition submission.",
      outcome: "My model-generated bracket placed 1st of 20 in the UW Sports Analytics Club bracket group and 2nd of 23 by Brier score in its modeling competition. It correctly predicted Michigan as champion and three Final Four teams.",
      links: [{label:"Explore GitHub repo",url:"https://github.com/bps78/MarchMadness_2026"}]
    },
    {
      id: "oscar", number: "04", category: "research", categoryLabel: "RESEARCH / SUSTAINABILITY", year: "AUG 2025", featured: true,
      title: "Oscar Sort Research", subtitle: "Campus sustainability research",
      summary: "Waste-sorting accuracy and contamination analysis for UW–Madison.",
      metric: "CAMPUS-WIDE IMPACT", visual: "oscar", stack: ["Python", "Regression", "Association rules", "Visualization"],
      question: "Where are recycling systems working, and which items are most likely to contaminate the waste stream?",
      approach: "I analyzed computer vision-enabled waste sorting records, comparing disposal correctness across locations and item types. The work combined visual exploration, correlations, weighted regression, and association rule mining.",
      outcome: "Delivered a stakeholder report and actionable insights for UW–Madison's sustainability team. The university subsequently published an article discussing the analysis and its findings.",
      links: [{label:"Read university feature",url:"https://sustainability.wisc.edu/what-uw-madisons-ai-recycling-assistant-is-revealing-about-how-we-sort-waste/"},{label:"Explore research code",url:"https://github.com/bps78/Oscar-Research-Project"}]
    },
    {
      id: "cfp", number: "05", category: "sports", categoryLabel: "SPORTS / SIMULATION", year: "NOV 2026", featured: true,
      title: "College Football Playoff Expansion", subtitle: "Playoff format simulations",
      summary: "Historical simulations comparing four-, 12-, and 24-team formats.",
      metric: "4 → 12 → 24 TEAMS", visual: "cfp", stack: ["R", "Simulation", "Predictive modeling", "Probability"],
      question: "How often might the champion have changed if historical four-team playoffs had included more teams?",
      approach: "In a collaborative analysis, we simulated alternative playoff brackets across historical seasons, compared calibrated matchup probabilities with raw estimates, and examined how byes and seeds changed championship opportunities.",
      outcome: "The modeled results showed that expanded fields created meaningful opportunities for previously excluded teams, but also that outcomes were highly sensitive to matchup probability assumptions. We presented implications and limitations rather than claiming a single best format.",
      links: [{label:"View presentation",url:"https://docs.google.com/presentation/d/1XnrpRAapkYy6Llw8Uecl4BwHgG7xZZKFcR1fCz0dCJM/edit?usp=sharing"}]
    },
    {
      id: "autochef", number: "06", category: "product", categoryLabel: "PRODUCT / COMPUTER VISION", year: "AUG 2025", featured: true,
      title: "AutoChef", subtitle: "Computer vision recipe tool",
      summary: "YOLOv8 ingredient recognition and recipe matching from fridge photos.",
      metric: "CUSTOM YOLOv8 MODEL", visual: "autochef", stack: ["Python", "YOLOv8", "Streamlit", "Spoonacular API"],
      question: "Can computer vision help people make better use of what they already have in the fridge?",
      approach: "I trained a YOLOv8 ingredient detector and built a Streamlit application that accepts a fridge photo, identifies available ingredients, and matches them with recipes from the Spoonacular API.",
      outcome: "Built an end-to-end working prototype combining custom image recognition with practical recipe recommendations — an exercise in turning an ML model into an approachable consumer tool.",
      links: [{label:"Explore GitHub repo",url:"https://github.com/bps78/AutoChef"}]
    }
  ]
};

/* Small art-directed visualizations. These are illustrations of the projects,
   not screenshots or model outputs. Swap them for your own assets any time. */
window.projectVisuals = {
  menu: `<div class="art-illustration menu-illustration"><div class="menu-app"><div class="menu-sidebar"><div class="menu-icon">m<span>.</span></div><i></i><i></i><i></i><i></i><i></i></div><div class="menu-content"><div class="mock-top"><b>MenuMeter</b><span>PROFITABILITY OVERVIEW</span></div><div class="mock-stats"><div><small>MENU HEALTH</small><strong>Insights <span>↗</span></strong></div><div><small>OPPORTUNITY</small><strong>Optimize <span>●</span></strong></div></div><div class="mock-bars"><div class="bar-track" style="--h:46%"></div><div class="bar-track" style="--h:75%"></div><div class="bar-track" style="--h:58%"></div><div class="bar-track" style="--h:91%"></div><div class="bar-track" style="--h:68%"></div><div class="bar-track" style="--h:82%"></div><div class="bar-track" style="--h:62%"></div><div class="bar-track" style="--h:95%"></div><div class="bar-track" style="--h:71%"></div></div><div class="mock-bottom"><span>● ACTIONABLE INSIGHTS</span><span>LIVE DASHBOARD →</span></div></div></div><div class="art-label">FROM SPREADSHEETS TO SMARTER DECISIONS ↗</div></div>`,
  baseball: `<div class="art-illustration baseball-illustration"><div class="baseball-top"><span>SWING / TAKE</span><span>STATCAST · 2025</span></div><div class="strike-wrap"><div class="strike-zone"><span class="pitch-dot p1"></span><span class="pitch-dot p2"></span><span class="pitch-dot p3"></span><span class="pitch-dot p4"></span><span class="pitch-dot p5"></span><span class="pitch-dot p6"></span><span class="pitch-dot p7"></span><span class="pitch-dot p8"></span><span class="pitch-dot p9"></span><span class="pitch-dot p10"></span></div><span class="outer-pitch op1"></span><span class="outer-pitch op2"></span><span class="outer-pitch op3"></span><span class="outer-pitch op4"></span></div><div class="pitch-footer"><div><span class="legend-dot legend-lime"></span> SWING</div><div><span class="legend-dot legend-white"></span> TAKE</div><div class="footer-fine">DECISION SURFACE / ILLUSTRATIVE</div></div></div>`,
  march: `<div class="art-illustration march-illustration"><div class="march-top"><span>2026 NCAA TOURNAMENT</span><b>MODEL PICK ✓</b></div><div class="bracket-layout"><div class="bracket-col bracket-col-one"><span>16</span><span>8</span><span>4</span><span>2</span></div><div class="bracket-lines"><span></span><span></span><span></span></div><div class="bracket-highlight"><small>CHAMPION PREDICTION</small><strong>MICHIGAN</strong><b>✓</b></div></div><div class="march-bottom"><div><strong>01<span>/20</span></strong><small>BRACKET FINISH</small></div><div class="march-bottom-rule"></div><div><strong>03<span>/04</span></strong><small>FINAL FOUR PICKS</small></div></div></div>`,
  oscar: `<div class="art-illustration oscar-illustration"><div class="oscar-top"><span>OSCAR SORT · CAMPUS RESEARCH</span><span>RECYCLING ACCURACY</span></div><div class="oscar-graph"><div class="oscar-axis">100% <span>50%</span><span>0%</span></div><div class="oscar-bars"><div class="oscar-group"><div class="oscar-bar" style="--v:72%"><span></span></div><small>UNION S.</small></div><div class="oscar-group"><div class="oscar-bar" style="--v:72%"><span></span></div><small>GORDON</small></div><div class="oscar-group"><div class="oscar-bar" style="--v:63%"><span></span></div><small>DEJOPE</small></div><div class="oscar-group"><div class="oscar-bar" style="--v:56%"><span></span></div><small>MEMORIAL</small></div></div></div><div class="oscar-foot">CAMPUS WASTE DATA <span>→</span> REAL RECOMMENDATIONS <small>APPROX. VALUES</small></div></div>`,
  cfp: `<div class="art-illustration cfp-illustration"><div class="cfp-title">ONE QUESTION. THREE FORMATS.</div><div class="cfp-circles"><div class="cfp-circle cfp-four"><span>04</span><small>TEAMS</small></div><div class="cfp-arrow">→</div><div class="cfp-circle cfp-twelve"><span>12</span><small>TEAMS</small></div><div class="cfp-arrow">→</div><div class="cfp-circle cfp-twentyfour"><span>24</span><small>TEAMS</small></div></div><div class="cfp-foot"><div>ALTERNATE PLAYOFF FUTURES</div><span>SIMULATIONS / 2014–2023</span></div></div>`,
  autochef: `<div class="art-illustration autochef-illustration"><div class="autochef-top"><span>●</span> AUTO<span>CHEF</span> <small>VISION DETECTION / LIVE CONCEPT</small></div><div class="fridge-frame"><div class="fridge-shelf one"></div><div class="fridge-shelf two"></div><div class="food-shape food-tomato"></div><div class="food-shape food-egg a"></div><div class="food-shape food-egg b"></div><div class="food-shape food-leaf"></div><div class="detection-box box-tomato"><label>TOMATO</label></div><div class="detection-box box-eggs"><label>EGGS</label></div><div class="detection-box box-spinach"><label>GREENS</label></div></div><div class="autochef-bottom"><span>01 SCAN INGREDIENTS</span><span>02 FIND RECIPES ↗</span></div></div>`
};
