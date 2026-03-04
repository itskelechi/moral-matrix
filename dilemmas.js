const dilemmas = {
        'Healthcare': { bonus: 50, text: "Your hospital's data is hit by Ransomware. Paying supports criminals; refusing risks lives. What's the call?", 
            choices: [{t: "Pay the Ransom", i: -30, m: "Lives saved, but you funded a cartel."}, {t: "Restore from Backups (Slowly)", i: 40, m: "Ethical win, but a tense 48 hours."}] 
        },
        'Corporation': { bonus: 10, text: "The CEO wants 'Emotional Tracking' via webcams for remote workers to 'improve morale.' Do you build it?", 
            choices: [{t: "Build it (with a backdoor)", i: -10, m: "You kept your job, but employees are paranoid."}, {t: "Resign in Protest", i: 60, m: "You're a legend on LinkedIn! +60 Goodwill."}] 
        },
        'Government': { bonus: 60, text: "A 'Smart City' algorithm is flagging low-income residents for extra tax audits. It's 'efficient,' but biased.", 
            choices: [{t: "Keep the Algorithm", i: -50, m: "Budget balanced, but equity is ruined."}, {t: "Blow the Whistle", i: 40, m: "Transparency wins! +40 Goodwill."}] 
        },
        'Startup': { bonus: 25, text: "You can reach profitability in 3 months if you use 'Dark Patterns' to trick seniors into recurring subscriptions.", 
            choices: [{t: "Growth at all costs!", i: -60, m: "Investors are happy; grandparents are broke."}, {t: "Honest UX only", i: 40, m: "Slow growth, clean conscience. +40 Goodwill."}] 
        }
};