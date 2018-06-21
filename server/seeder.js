Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Kaining',
        email: 'e0201623@u.nus.edu',
        password: 'lalala',

        profile: {
        	likeScore: 5,
          dislikeScore: 2,
          year: '1',
          school:'School of Computing',
        }
      });

      var user0Id = Meteor.users.findOne({username: 'Kaining'})._id;

      Reviews.insert({
        reviewName: "CS1020: Data Structures and Algorithms",
        reviewPost: "Lectures are so hard to understand. tutorials are even harder. DONT EVEN BOTHER TRYING",
        semester: "AY1718 S2",
        diff: "high",
        recommendation: "2",
        workload: "low",
        steepness: "high",
        author: "Kaining",
        year: '1',
        school:'School of Computing',
        date: date,
        createdAt: new Date(),
        likeScore: 0,
        dislikeScore: 0,
        voted: ["Kaining"],
        userId: user0Id,
      });

Modules.insert({
  reviewName: "CS1020: Data Structures and Algorithms"
});
Modules.insert({
  reviewName: "ACC1002: Financial Accounting"
});
Modules.insert({
reviewName: "ACC1002X: Financial Accounting"
});
Modules.insert({
reviewName: "ACC1006: Accounting Information Systems"
});
Modules.insert({
reviewName: "ACC1701: Accounting for Decision Makers"
});
Modules.insert({
reviewName: "ACC1701X: Accounting for Decision Makers"
});
Modules.insert({
reviewName: "ACC2706: Managerial Accounting"
});
Modules.insert({
reviewName: "ACC2707: Corporate Accounting & Reporting I"
});
Modules.insert({
reviewName: "ACC3601: Corporate Accounting & Reporting"
});
Modules.insert({
reviewName: "ACC3602: Managerial Planning and Control"
});
Modules.insert({
reviewName: "ACC3603: Assurance and Attestation"
});
Modules.insert({
reviewName: "ACC3604: Corporate and Securities Law"
});
Modules.insert({
reviewName: "ACC3605: Taxation"
});
Modules.insert({
reviewName: "ACC3606: Advanced Corporate Accounting and Reporting"
});
Modules.insert({
reviewName: "ACC3611: Corporate Governance and Ethics"
});
Modules.insert({
reviewName: "ACC3612: Risk Management and Internal Control"
});
Modules.insert({
reviewName: "ACC3613: Advanced Assurance and Attestation"
});
Modules.insert({
reviewName: "ACC3614: Valuation"
});
Modules.insert({
reviewName: "ACC3615: Accounting Theory"
});
Modules.insert({
reviewName: "ACC3616: Corporate Governance and Risk Management"
});
Modules.insert({
reviewName: "ACC3619: Integrated Perspective in Accounting and Business"
})
;Modules.insert({
reviewName: "ACC4611: Advanced Taxation"
});
Modules.insert({
reviewName: "ACC4612A: SIA: Internal Auditing"
});
Modules.insert({
reviewName: "ACC4613: Forensic Accounting"
});
Modules.insert({
reviewName: "ACC4614: Financial Institution Audit & Compliance"
});
Modules.insert({
reviewName: "ACC4615: Advanced Assurance and Attestation"
});
Modules.insert({
reviewName: "ACC4616: Accounting Theory"
});
Modules.insert({
reviewName: "ACC4619: Advanced Independent Study in Accounting"
});
Modules.insert({
reviewName: "ACC4629: Advanced Independent Study in Accounting"
});
Modules.insert({
reviewName: "ACC5001: Business Analysis and Valuation"
});
Modules.insert({
reviewName: "AH2101: Introduction to Art History"
});
Modules.insert({
reviewName: "AH2201: Chinese Painting: Styles and Masters"
});
Modules.insert({
reviewName: "AH2202: Modern Art: A Critical Introduction"
});
Modules.insert({
reviewName: "AH3201: A History of Contemporary Art"
});
Modules.insert({
reviewName: "AH3202: Time Traveller: The Curatorial in Southeast Asia"
});
Modules.insert({
reviewName: "AH3203: Collecting Art in Europe and Asia (1500 CE – 2000 CE)"
});
Modules.insert({
reviewName: "AH3204: Methods and Approaches to Art History"
});
Modules.insert({
reviewName: "ALS1010: Learning to Learn Better"
});
Modules.insert({
reviewName: "AR1101: Design I"
});
Modules.insert({
reviewName:  "AR1102: Design 2"
});
Modules.insert({
reviewName: "AR1327: Structural Principles"
});
Modules.insert({
reviewName: "AR1328: The Tropical Envelope"
});
Modules.insert({
reviewName: "AR2101: Design 3"
});
Modules.insert({
reviewName: "AR2102: Design 4"
});
Modules.insert({
reviewName: "AR2221: History and Theory of Southeast Asia Architecture"
});
Modules.insert({
reviewName: "AR2222: History & Theory Of Western Architecture"
});
Modules.insert({
reviewName: "AR2224: Ideas and Approaches in Design"
});
Modules.insert({
reviewName: "AR2225: Reading Visual Images"
});
Modules.insert({
reviewName: "AR2327: Architectural Tectonics"
});
Modules.insert({
reviewName: "AR2524: Spatial Computational Thinking"
});
Modules.insert({
reviewName: "AR2723: Strategies for Sustainable Architecture"
});
Modules.insert({
reviewName: "AR3101: Design 5"
});
Modules.insert({
reviewName: "AR3101A: Design 5 (Landscape Architecture Emphasis)"
});
Modules.insert({
reviewName: "AR3102: Design 6"
});
Modules.insert({
reviewName: "AR3102A: Design 6 (Landscape Architecture Emphasis)"
});
Modules.insert({
reviewName: "AR3151: Design - ISM"
});
Modules.insert({
reviewName: "AR3152: Technology Integration II"
});
Modules.insert({
reviewName: "AR3223: Introduction to Urbanism"
});
Modules.insert({
reviewName: "AR3421: Introduction to Architectural Practice"
});
Modules.insert({
reviewName: "AR3721: Environmental Systems and Construction"
});
Modules.insert({
reviewName: "AR4001: Advanced Architectural Study 1"
});
Modules.insert({
reviewName: "AR4002: Advanced Architectural Study 2"
});
Modules.insert({
reviewName: "AR4101: Design 7"
});
Modules.insert({
reviewName: "AR4102: Design 8"
});
Modules.insert({
reviewName: "AR4103: Architectural & Technology Design 1"
});
Modules.insert({
reviewName: "AR4104: Architectural & Technology Design 2"
});
Modules.insert({
reviewName: "AR4221: Urban Design Theory and Praxis"
});
Modules.insert({
reviewName: "AR4322: Design Simulation & Analysis"
});
Modules.insert({
reviewName: "AR5011: Research Methodology"
});
Modules.insert({
reviewName: "AR5103: Architectural Design Thesis"
});
Modules.insert({
reviewName: "AR5104: Final Design Project"
});
Modules.insert({
reviewName: "AR5105: Architectural Design Research Report"
});
Modules.insert({
reviewName: "AR5121: Special Topics In Technology"
});
Modules.insert({
reviewName: "AR5141: Dissertation"
});
Modules.insert({
reviewName: "AR5142: Technical Dissertation"
});
Modules.insert({
reviewName: "AR5221: Contemporary Theories"
});
Modules.insert({
reviewName: "AR5312: Typo-Morphology In Architecture"
});
Modules.insert({
reviewName: "AR5321: Innovation in Architecture"
});
Modules.insert({
reviewName: "AR5322: Renewable Resources and Architecture"
});
Modules.insert({
reviewName: "AR5421: Architectural Practice 1"
});
Modules.insert({
reviewName: "AR5422: Architectural Practice 2"
});
Modules.insert({
reviewName: "AR5770: Graduate Seminar"
});
Modules.insert({
reviewName: "AR5951A: Topics in History and Theory of Architecture 1"
});
Modules.insert({
reviewName: "AR5951B: Topics in History and Theory of Architecture 2"
});
Modules.insert({
reviewName: "AR5951C: Topics in History and Theory of Architecture 3"
});
Modules.insert({
reviewName: "AR5951K: Vast And Continuous Interiors: The Asian Experience"
});
Modules.insert({
reviewName: "AR5951Z: Topics in History and Theory of Architecture Elective"
});
Modules.insert({
reviewName: "AR5952A: Topics in Urban Studies 1"
});
Modules.insert({
reviewName: "AR5952B: Topics in Urban Studies 2"
});
Modules.insert({
reviewName: "AR5952C: Special Topics in Urban Studies 3"
});
Modules.insert({
reviewName: "AR5952J: Human Ecology And Built Environment - Space And Health"
});
Modules.insert({
reviewName: "AR5952K: Topics In Urban Studies: Design Thinking and Implementation"
});
Modules.insert({
reviewName: "AR5952N: Topics In Urban Studies - Shaping Liveable Places"
});
Modules.insert({
reviewName: "AR5952Q: Topics In Urban Studies - Community Participatory Planning And Design"
});
Modules.insert({
reviewName: "AR5952Z: Topics in Urban Studies 2 Elective"
});
Modules.insert({
reviewName: "AR5953A: Topics in Design Technology 1"
});
Modules.insert({
reviewName: "AR5953B: Topics in Design Technology 2"
});
Modules.insert({
reviewName: "AR5953C: Topics in Design Technology 3"
});
Modules.insert({
reviewName: "AR5953D: Topics in Design Technology 4"
});
Modules.insert({
reviewName: "AR5953L: Topics in Design Technology - Design Space Exploration"
});
Modules.insert({
reviewName: "AR5954A: Topics in Landscape Architecture 1"
});
Modules.insert({
reviewName: "AR5954B: Topics in Landscape Architecture"
});
Modules.insert({
reviewName: "AR5954C: Topics in Landscape Architecture"
});
Modules.insert({
reviewName: "AR5954H: Topics in Landscape Architecture 8: Methods & Concepts"
});
Modules.insert({
reviewName: "AR6770: Phd Seminar"
});
Modules.insert({
reviewName: "AS4232: Topics in American Literature"
});
Modules.insert({
reviewName: "ASP1201: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201CH: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201EC: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201EN: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201GE: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201HY: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "ASP1201MS: H3 Humanities & Soc Sci Research Prog"
});
Modules.insert({
reviewName: "AUD5101: Acoustics"
});
Modules.insert({
reviewName: "AUD5102: Anatomy & Physiology"
});
Modules.insert({
reviewName: "AUD5103: Pathologies of the Auditory System"
});
Modules.insert({
reviewName: "AUD5104: Perception of Sound & Speech"
});
Modules.insert({
reviewName: "AUD5105: Hearing Devices and Rehabilitation A - Part 1"
});
Modules.insert({
reviewName: "AUD5106: Clinical Audiology A - Part 1"
});
Modules.insert({
reviewName: "AUD5107: Paediatric Audiology A - Part 1"
});
Modules.insert({
reviewName: "AUD5108: Electrophysiological Assessment A"
});
Modules.insert({
reviewName: "AUD5109: Professional Practice Issues & Community Audiology"
});
Modules.insert({
reviewName: "AUD5110: Vestibular Assessment and Management A"
});
Modules.insert({
reviewName: "AUD5111: Hearing Devices & Rehabilitation A - Part 2"
});
Modules.insert({
reviewName: "AUD5112: Clinical Audiology A - Part 2"
});
Modules.insert({
reviewName: "AUD5113: Paediatric Audiology A - Part 2"
});
Modules.insert({
reviewName: "AUD5115: Experimental Design & Statistics"
});
Modules.insert({
reviewName: "AY1111: Anatomy"
});
Modules.insert({
reviewName: "AY1130: Human Anatomy and Physiology I"
});
Modules.insert({
reviewName: "BAA6001: Accounting Research Seminars I"
});
Modules.insert({
reviewName: "BAA6002: Accounting Research Seminars II"
});
Modules.insert({
reviewName: "BBP5000: Global Strategic Management"
});
Modules.insert({
reviewName: "BBP6781: Theory of Strategic Management"
});
Modules.insert({
reviewName: "BBP6791: Seminar In International Business"
});
Modules.insert({
reviewName: "BDC5101: Deterministic Operations Research Models"
});
Modules.insert({
reviewName: "BDC6112: Stochastic Processes I"
});
Modules.insert({
reviewName: "BDC6113: Foundations of Inventory Management"
});
Modules.insert({
reviewName: "BDC6114: Logistics and Supply Chain"
});
Modules.insert({
reviewName: "BDC6307: Introduction to Data Analytics"
});
Modules.insert({
reviewName: "BFS1001: Personal Development & Career Management"
});
Modules.insert({
reviewName: "BHD4001: Honours Dissertation"
});
Modules.insert({
reviewName: "BI3001: Business Internship I"
});
Modules.insert({
reviewName: "BI3001A: Business Internship I"
});
Modules.insert({
reviewName: "BI3001B: Business Internship I"
});
Modules.insert({
reviewName: "BI3001C: Business Internship I"
});
Modules.insert({
reviewName: "BI3001D: Business Internship I"
});
Modules.insert({
reviewName: "BI3001E: Business Internship I"
});
Modules.insert({
reviewName: "BI3001F: Business Internship I"
});
Modules.insert({
reviewName: "BI3001G: Business Internship I"
});
Modules.insert({
reviewName: "BI3002: Business Internship II"
});
Modules.insert({
reviewName: "BI3002A: Business Internship II"
});
Modules.insert({
reviewName: "BI3002B: Business Internship II"
});
Modules.insert({
reviewName: "BI3002C: Business Internship II"
});
Modules.insert({
reviewName: "BI3002D: Business Internship II"
});
Modules.insert({
reviewName: "BI3003: Work Experience Internship"
});
Modules.insert({
reviewName: "BI3003A: Work Experience Internship"
});
Modules.insert({
reviewName: "BI3003B: Work Experience Internship"
});
Modules.insert({
reviewName: "BI3003C: Work Experience Internship"
});
Modules.insert({
reviewName: "BI3003D: Work Experience Internship"
});
Modules.insert({
reviewName: "BIS3001: Independent Study Module in Business"
});
Modules.insert({
reviewName: "BIS3001A: Independent Study Module in Business"
});
Modules.insert({
reviewName: "BL5102: Environmental Science"
});
Modules.insert({
reviewName: "BL5198: Graduate Seminar Module In Biological Sciences"
});
Modules.insert({
reviewName: "BL5201: Structural Biology And Proteomics"
});
Modules.insert({
reviewName: "BL5202A: Biophysical Methods In Life Sciences"
});
Modules.insert({
reviewName: "BL5203: Molecular Recognition And Interactions"
});
Modules.insert({
reviewName: "BL5204: Current Trends In Biotechnology"
});
Modules.insert({
reviewName: "BL5207A: Topics In Developmental Biology"
});
Modules.insert({
reviewName: "BL5210: Biogeography"
});
Modules.insert({
reviewName: "BL5213: Protein Design & Engineering"
});
Modules.insert({
reviewName: "BL5216: Advanced Genetics And Genome Sciences"
});
Modules.insert({
reviewName: "BL5217: Population Genomics and Phylogenomics"
});
Modules.insert({
reviewName: "BL5218: Directed Studies in Behavioural Ecology"
});
Modules.insert({
reviewName: "BL5220: Advanced Animal Development"
});
Modules.insert({
reviewName: "BL5221: Plant And Microbial Development"
});
Modules.insert({
reviewName: "BL5222: Cellular Mechanisms"
});
Modules.insert({
reviewName: "BL5223: Advanced Molecular Genetics"
});
Modules.insert({
reviewName: "BL5224: Special topics in Biological Sciences"
});
Modules.insert({
reviewName: "BL5227A: Introduction to Evolution of Development"
});
Modules.insert({
reviewName: "BL5228: Advances in Cell and Molecular Biology"
});
Modules.insert({
reviewName: "BL5229: Fundamentals in Biophysical Sciences"
});
Modules.insert({
reviewName: "BL5230: Invasion Biology"
});
Modules.insert({
reviewName: "BL5232: Introduction to Bioimaging"
});
Modules.insert({
reviewName: "BL5232B: Practical Bioimaging B: Light Microscopy"
});
Modules.insert({
reviewName: "BL5232C: Practical Bioimaging C: Hands-on Microscopy"
});
Modules.insert({
reviewName: "BL5233: Biological data analysis with R"
});
Modules.insert({
reviewName: "BL5234: Theoretical Biology"
});
Modules.insert({
reviewName: "BL5235: Advanced Optics for Microscopy"
});
Modules.insert({
reviewName: "BL5236: Introduction to Electron Microscopy for Life Sciences"
});
Modules.insert({
reviewName: "BL5237: Computational Biology: Sequences, Structures, Functions"
});
Modules.insert({
reviewName: "BLD3001: Business Leadership Case Analysis"
});
Modules.insert({
reviewName: "BLD3002: CEOs as Leaders"
});
Modules.insert({
reviewName: "BLD3003: Personal Leadership Development"
});
Modules.insert({
reviewName: "BLD3004: Topics in Leadership Development"
});
Modules.insert({
reviewName: "BMA5001: Managerial Economics"
});
Modules.insert({
reviewName: "BMA5002: Analytics For Managers"
});
Modules.insert({
reviewName: "BMA5003: Financial Accounting"
});
Modules.insert({
reviewName: "BMA5004A: Management & Organization"
});
Modules.insert({
reviewName: "BMA5005: Management Accounting"
});
Modules.insert({
reviewName: "BMA5008: Financial Management"
});
Modules.insert({
reviewName: "BMA5009: Marketing Management"
});
Modules.insert({
reviewName: "BMA5010A: Managing Operations"
});
Modules.insert({
reviewName: "BMA5011: Macroeconomics in the Global Economy"
});
Modules.insert({
reviewName: "BMA5013: Corporate Strategy"
});
Modules.insert({
reviewName: "BMA5016A: Leadership In Organizations"
});
Modules.insert({
reviewName: "BMA5102: Legal Issues In Business"
});
Modules.insert({
reviewName: "BMA5108: Technopreneurship"
});
Modules.insert({
reviewName: "BMA5112: Asian Business Environments"
});
Modules.insert({
reviewName: "BMA5112A: Special Topics in Asia Pacific Business"
});
Modules.insert({
reviewName: "BMA5119: Family Business"
});
Modules.insert({
reviewName: "BMA5122: Macroeconomics and Finance: Perspectives from Asia"
});
Modules.insert({
reviewName: "BMA5126: Strategy and Big Data"
});
Modules.insert({
reviewName: "BMA5127: Consultng: Process, Industry and Innovation"
});
Modules.insert({
reviewName: "BMA5128: Venture Capital"
});
Modules.insert({
reviewName: "BMA5128A: Special Topics in Venture Capital"
});
Modules.insert({
reviewName: "BMA5235: Transformational Service Innovations"
});
Modules.insert({
reviewName: "BMA5236: Global Operations Strategy"
});
Modules.insert({
reviewName: "BMA5271: Operations Leadership: Supply Chain and Service Management"
});
Modules.insert({
reviewName: "BMA5302: Investment Analysis And Management"
});
Modules.insert({
reviewName: "BMA5309: Fund Management"
});
Modules.insert({
reviewName: "BMA5313: Private Equity"
});
Modules.insert({
reviewName: "BMA5313A: Valuation and Mergers & Acquisitions"
});
Modules.insert({
reviewName: "BMA5313C: Topics in Valuation and Mergers & Acquisitions"
});
Modules.insert({
reviewName: "BMA5314: Entrepreneurial Finance"
});
Modules.insert({
reviewName: "BMA5323: Applied Portfolio Management"
});
Modules.insert({
reviewName: "BMA5324: Value Investing In Asia"
});
Modules.insert({
reviewName: "BMA5330: Topics in Finance: Trading and Investing in Commodities"
});
Modules.insert({
reviewName: "BMA5404: Entrepreneurship & Innovation"
});
Modules.insert({
reviewName: "BMA5405: Managing Change"
});
Modules.insert({
reviewName: "BMA5405A: Topics in Managing Change"
});
Modules.insert({
reviewName: "BMA5406: Negotiations and Conflict Management"
});
Modules.insert({
reviewName: "BMA5407: Managing Human Capital"
});
Modules.insert({
reviewName: "BMA5420: Leadership in Asia"
});
Modules.insert({
reviewName: "BMA5422: How to Successfully Lead Your Groups and Teams"
});
Modules.insert({
reviewName: "BMA5424: Corporate Entrepreneurship and Business Model Evaluation"
});
Modules.insert({
reviewName: "BMA5506: Product & Brand Management"
});
Modules.insert({
reviewName: "BMA5524: Marketing Analytics"
});
Modules.insert({
reviewName: "BMA5530: Design Thinking & Product Innovations"
});
Modules.insert({
reviewName: "BMA5531: Sales Management"
});
Modules.insert({
reviewName: "BMA5532: Big Picture Marketing"
});
Modules.insert({
reviewName: "BMA5533: Marketing in the Digital Age"
});
Modules.insert({
reviewName: "BMA5801: Management Communication"
});
Modules.insert({
reviewName: "BMA5901: Management Practicum"
});
Modules.insert({
reviewName: "BMA5902: Entrepreneurship Practicum"
});
Modules.insert({
reviewName: "BMA5903: MBA Internship"
});
Modules.insert({
reviewName: "BMA5904A: ENTREPRENEURSHIP STUDY MISSION – Silicon Valley, USA"
});
Modules.insert({
reviewName: "BMC5001A: Leadership"
});
Modules.insert({
reviewName: "BMC5001B: Managerial Skills"
});
Modules.insert({
reviewName: "BMC5002A: Corporate Strategy"
});
Modules.insert({
reviewName: "BMC5002B: Contemporary Issues in Strategy"
});
Modules.insert({
reviewName: "BMC5003A: Decision Making"
});
Modules.insert({
reviewName: "BMC5003B: Information Management"
});
Modules.insert({
reviewName: "BMC5004A: Managerial Economics"
});
Modules.insert({
reviewName: "BMC5004B: Asian Markets and Industries"
});
Modules.insert({
reviewName: "BMC5005: International Business And Law"
});
Modules.insert({
reviewName: "BMC5005A: International Business"
});
Modules.insert({
reviewName: "BMC5005B: International Business Law"
});
Modules.insert({
reviewName: "BMC5006A: Marketing Management"
});
Modules.insert({
reviewName: "BMC5006B: Contemporary Issues in Marketing"
});
Modules.insert({
reviewName: "BMC5007A: Accounting"
});
Modules.insert({
reviewName: "BMC5007B: Financial Management"
});
Modules.insert({
reviewName: "BMC5008A: Organizational Behavior and Human Resource Management"
});
Modules.insert({
reviewName: "BMC5008B: Contemporary Issues in Human Resouce Managment and Organuzational Behavior"
});
Modules.insert({
reviewName: "BMC5009A: Systems & Operations Management"
});
Modules.insert({
reviewName: "BMC5009B: Supply Chain Management"
});
Modules.insert({
reviewName: "BMC5010A: Corporate Finance"
});
Modules.insert({
reviewName: "BMC5010B: Corporate Governance"
});
Modules.insert({
reviewName: "BMC5011A: Contemporary Issues in Business 1"
});
Modules.insert({
reviewName: "BMC5011B: Contemporary Issues in Business 2"
});
Modules.insert({
reviewName: "BMC5012: Advanced Study Project"
});
Modules.insert({
reviewName: "BME5001: Leadership"
});
Modules.insert({
reviewName: "BME5002: Corporate Strategy"
});
Modules.insert({
reviewName: "BME5003: Business Analytics for Decision Makers"
});
Modules.insert({
reviewName: "BME5004: Managerial Economics"
});
Modules.insert({
reviewName: "BME5006: Strategic Marketing and Brand Management"
});
Modules.insert({
reviewName: "BME5007: Accounting"
});
Modules.insert({
reviewName: "BME5008: Power, Politics, and Influence"
});
Modules.insert({
reviewName: "BME5009: Strategic Operations Management"
});
Modules.insert({
reviewName: "BME5010: Management of Technology and Innovation"
});
Modules.insert({
reviewName: "BME5011: Services Management"
});
Modules.insert({
reviewName: "BME5012: Scenario Planning"
});
Modules.insert({
reviewName: "BME5014: Legal Issues in Business"
});
Modules.insert({
reviewName: "BME5015: Macroeconomics and International Finance"
});
Modules.insert({
reviewName: "BME5018: Managing Business For Sustainability"
});
Modules.insert({
reviewName: "BME5019: Corporate Finance"
});
Modules.insert({
reviewName: "BME5020: Entrepreneurship"
});
Modules.insert({
reviewName: "BME5021: Corporate Governance"
});
Modules.insert({
reviewName: "BME5022: Business Strategy Simulation"
});
Modules.insert({
reviewName: "BME5033: Leadership: Exploration, Assessment & Development"
});
Modules.insert({
reviewName: "BMF5001: Financial Management of Family Business"
});
Modules.insert({
reviewName: "BMF5003: Behavioral Economics"
});
Modules.insert({
reviewName: "BMF5004: Design Thinking & Business Innovations"
});
Modules.insert({
reviewName: "BMK6101: Marketing Seminar: Perspectives in Consumer Behavior"
});
Modules.insert({
reviewName: "BMK6104: Marketing Seminar: Marketing Theory & Research"
});
Modules.insert({
reviewName: "BMK6107: Empirical Modelling in Marketing (II)"
});
Modules.insert({
reviewName: "BMK6110I: Field Experiments and Behavioral Economics Modeling"
});
Modules.insert({
reviewName: "BMK6111N: Seminar in Marketing Strategy and Industrial Organization II"
});
Modules.insert({
reviewName: "BMM5001: Leadership and Management"
});
Modules.insert({
reviewName: "BMM5002: Asia-Pacific Economic and Business Environment"
});
Modules.insert({
reviewName: "BMM5003: Business Finance & Growth Economics for Policy Makers"
});
Modules.insert({
reviewName: "BMM5101: Judgment and Decision-Making for Modern Policy Makers"
});
Modules.insert({
reviewName: "BMM5105: Real Estate Fundamentals and City Planning"
});
Modules.insert({
reviewName: "BMO5000: Block Seminar"
});
Modules.insert({
reviewName: "BMO5002: Business Project"
});
Modules.insert({
reviewName: "BMO5003: Workplace and Corporate Deviance"
});
Modules.insert({
reviewName: "BMO5004: Special Topics in Organizational Behavior"
});
Modules.insert({
reviewName: "BMO6012A: Organizational Behavior Seminar: Interpersonal Relations"
});
Modules.insert({
reviewName: "BMO6013A: Organizational Behavior Seminar: Motivation and Work Behavior"
});
Modules.insert({
reviewName: "BMO6014A: Organizational Behavior Seminar: Social Capital Theory & Methods"
});
Modules.insert({
reviewName: "BMO6017A: Human Resource Management Seminar: Challenges"
});
Modules.insert({
reviewName: "BMP5001: Venture Capital"
});
Modules.insert({
reviewName: "BMP5002: Asian Business Environment"
});
Modules.insert({
reviewName: "BMS5107: Ethical Leadership and Corporate Strategy"
});
Modules.insert({
reviewName: "BMS5108: Macroeconomics and Finance: Perspectives from Asia"
});
Modules.insert({
reviewName: "BMS5109: Strategy: Bridging the Planning – Implementation Divide"
});
Modules.insert({
reviewName: "BMS5202: Global Supply Chain Management"
});
Modules.insert({
reviewName: "BMS5203: The Knowledge & Innovation Economy 4.0"
});
Modules.insert({
reviewName: "BMS5303: Valuation and Mergers & Acquisitions"
});
Modules.insert({
reviewName: "BMS5304: Selected Topics in Finance: Private Equity"
});
Modules.insert({
reviewName: "BMS5305: Entrepreneurial Finance"
});
Modules.insert({
reviewName: "BMS5403: Global Management Practice"
});
Modules.insert({
reviewName: "BMS5404: Becoming Future Prepared Global Leaders"
});
Modules.insert({
reviewName: "BMS5405: New Venture Creation Practicum: Lean Startup Method"
});
Modules.insert({
reviewName: "BMS5406: Asian Leadership"
});
Modules.insert({
reviewName: "BMS5502: Marketing Practice & Impact"
});
Modules.insert({
reviewName: "BMS5503: Pricing"
});
Modules.insert({
reviewName: "BMS5504: Marketing Analysis and Decision Making"
});
Modules.insert({
reviewName: "BMS5505: Marketing in the Digital Age"
});
Modules.insert({
reviewName: "BMU5001: Leadership & Managerial Skills"
});
Modules.insert({
reviewName: "BMU5003: Economic Analysis For Managers"
});
Modules.insert({
reviewName: "BMU5006: Marketing Strategy"
});
Modules.insert({
reviewName: "BMU5007: Corporate Finance"
});
Modules.insert({
reviewName: "BMU5008: Corporate Governance, Business Law & Ethics"
});
Modules.insert({
reviewName: "BMU5014: Contemporary Issues In Business"
});
Modules.insert({
reviewName: "BMU5015: Competitive Strategy & Business Policy"
});
Modules.insert({
reviewName: "BMU5017: Management Practicum"
});
Modules.insert({
reviewName: "BN1101: Engineering Principles and Practice I"
});
Modules.insert({
reviewName: "BN1102: Engineering Principles and Practice II"
});



      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@example.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '4',
          school:'School of Engineering',
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Reviews.insert({
        reviewName: "MA1312: Calculus with applications",
        reviewPost: "Prof makes the lectures very interesting",
        semester: "AY1718 S2",
        diff: "moderate",
        recommendation: "5",
        workload: "low",
        steepness: "high",
        author: "User1",
        year: '4',
        school:'School of Engineering',
        date: date,
        createdAt: new Date(),
        likeScore: 0,

        dislikeScore: 0,
        voted: ["User1"],
        userId: user1Id,
      });

Modules.insert({
  reviewName:"MA1312: Calculus with applications"
});
      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@example.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '2',
          school:'Faculty of Arts and Social Science',
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Reviews.insert({
        reviewName: "GER1000: Quantitative reasoning",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User2",
        year: '2',
        school:'Faculty of Arts and Social Science',
        date: date,
        createdAt: new Date(),
        likeScore: 0,

        dislikeScore: 0,
        voted: ["User2"],
        userId: user2Id,
      });

      Accounts.createUser({
        username: 'kaikai',
        email: 'e0201624@u.nus.edu',
        password: 'kaikai',

        profile: {
        	likeScore: 5,
          dislikeScore: 2,
          year: '2',
          school:'School of Computing',
        }
      });

      var user10Id = Meteor.users.findOne({username: 'kaikai'})._id;

      Reviews.insert({
        reviewName: "CS1020: Data Structures and Algorithms",
        reviewPost: "Lectures are so hard to understand. tutorials are even harder. DONT EVEN BOTHER TRYING",
        semester: "AY1718 S2",
        diff: "high",
        recommendation: "2",
        workload: "low",
        steepness: "high",
        author: "Kaikai",
        year: '2',
        school:'School of Computing',
        date: date,
        createdAt: new Date(),
        likeScore: 0,
        dislikeScore: 0,
        voted: ["kaikai"],
        userId: user10Id,
      });


      // User 3
      Accounts.createUser({
        username: 'pampam',
        email: 'berrycool@hotmail.com',
        password: 'pampam',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '2',
          school:'School of Computing',
        }
      });

      var user3Id = Meteor.users.findOne({username: 'pampam'})._id;

      Reviews.insert({
        reviewName: "CS1231: Discrete Structures",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "pampam",
        year: '2',
        school:'School of Computing',
        date: date,
        createdAt: new Date(),
        likeScore: 0,
        dislikeScore: 0,
        voted: ["pampam"],
        userId: user3Id,
      });

      // User 4
      Accounts.createUser({
        username: 'User4',
        email: 'user4@example.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '1',
          school:'Faculty of Science',
        }
      });

      var user4Id = Meteor.users.findOne({username: 'User4'})._id;
      var modsCount = Modules.find().count();
             // if we already have entries in the db, don't insert again.
             if (modsCount > 0)
               return;
          Assets.getText('moduleList.txt', function(err, data) {
            var content = EJSON.parse(data);

            for(modules in content){
              console.log('inserting', modules);
              Modules.insert({modules: modules, reviewName: content[modules]});
            }
          });

      Reviews.insert({
        reviewName: "IS1103: Business Communications",
        reviewPost: "You can do your project during lecture time",
        semester: "AY1718 S1",
        diff: "Moderate",
        recommendation: "4",
        workload: "low",
        steepness: "high",
        author: "User4",
        year: '1',
        school:'Faculty of Science',
        date: date,
        createdAt: new Date(),
        likeScore: 0,
        dislikeScore: 0,
        voted: ["User4"],
        userId: user4Id,
      });


      // User 5
      Accounts.createUser({
        username: 'User5',
        email: 'user5@example.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '3',
          school:'School of Design and Environment',
        }
      });

      var user5Id = Meteor.users.findOne({username: 'User5'})._id;

      Reviews.insert({
       reviewName: "CFG1010",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY1718 S1",
        diff: "high",
        recommendation: "3",
        workload: "low",
        steepness: "high",
        author: "User5",
        year: '3',
        school:'School of Design and Environment',
        date: date,
        createdAt: new Date(),
        likeScore: 0,
        dislikeScore: 0,
        voted: ["User5"],
        userId: user5Id,
      });

      // Admin
            Accounts.createUser({
              username: 'Admin',
              email: 'admin@example.com',
              password: 'kainingandpam',
              isDefault: 'true',

            /*  profile: {
                likeScore: 0,
                dislikeScore: 0,
                year: '1',
                school:'Faculty of Science',
              } */
            });

            var adminId = Meteor.users.findOne({username: 'Admin'})._id;
            Meteor.users.update(adminId, {$set:{role:'admin'}});


      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Reviews Database Seeded! Isn't that nice?! :P");

  }

});
