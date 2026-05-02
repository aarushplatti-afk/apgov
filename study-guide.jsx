import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Scale,
  ScrollText,
  Vote,
  Users,
  GraduationCap,
  ClipboardList,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Check,
  X,
  Clock,
  Flame,
  ArrowRight,
  Search,
  Award,
} from "lucide-react";

/* =========================================================================
   AP US GOVERNMENT & POLITICS — COMPREHENSIVE STUDY GUIDE
   Exam: Tuesday, May 5, 2026 · Fully digital in Bluebook
   55 MCQ (80 min · 50%) + 4 FRQs (100 min · 50%)
   ========================================================================= */

const EXAM_DATE = new Date("2026-05-05T12:00:00");

const UNITS = [
  {
    id: "u1",
    num: "I",
    title: "Foundations of American Democracy",
    weight: "15–22%",
    color: "crimson",
    bigIdea:
      "The Constitution emerged from compromise between competing visions of representation, power, and liberty. Federalism distributes power between national and state governments through a system of checks and balances.",
    sections: [
      {
        heading: "Enlightenment Ideas Behind the Constitution",
        body: [
          "**Natural Rights** (Locke): life, liberty, property — rights the government cannot take away.",
          "**Social Contract** (Locke, Hobbes, Rousseau): people give up some rights in exchange for protection; if government violates the contract, people may revolt.",
          "**Popular Sovereignty**: power resides in the people; the government is accountable to them.",
          "**Republicanism**: representative government in which elected officials act on behalf of citizens.",
          "**Limited Government**: government power is restricted by a written constitution.",
        ],
      },
      {
        heading: "Models of Representative Democracy",
        body: [
          "**Participatory** — broad mass participation in politics (town halls, referenda, initiatives). Tied to civic engagement.",
          "**Pluralist** — multiple competing groups (interest groups, factions) influence policy. Tied to *Federalist 10*.",
          "**Elite** — small number of educated, wealthy elites make decisions for the masses. Tied to *Brutus 1*'s warning AND to the Senate's original design.",
        ],
      },
      {
        heading: "Articles of Confederation (1781–1789)",
        body: [
          "First U.S. constitution. Created an intentionally weak national government because of fear of monarchy.",
          "**Weaknesses**: no power to tax, no power to regulate interstate commerce, no executive, no national court system, 9/13 needed to pass laws, 13/13 to amend, each state had its own currency and militia.",
          "**Shays' Rebellion (1786)** — armed farmer uprising in MA — exposed the government's inability to maintain order and pushed leaders toward the Constitutional Convention.",
        ],
      },
      {
        heading: "Constitutional Compromises",
        body: [
          "**Great (Connecticut) Compromise** — bicameral legislature: House by population (Virginia Plan favored large states), Senate equal (NJ Plan favored small states).",
          "**Three-Fifths Compromise** — enslaved people counted as 3/5 of a person for representation and taxation.",
          "**Importation of Slaves Compromise** — Congress could not ban the slave trade until 1808.",
          "**Electoral College** — compromise between popular election and election by Congress.",
        ],
      },
      {
        heading: "Federalists vs. Anti-Federalists",
        body: [
          "**Federalists** (Madison, Hamilton, Jay) — wanted ratification; argued strong national government was needed and that Constitution had built-in checks.",
          "**Anti-Federalists** (e.g., Brutus) — feared centralized power, demanded a Bill of Rights, doubted that a large republic could represent the people.",
          "Bill of Rights (first 10 amendments) was added in 1791 to win Anti-Federalist support.",
        ],
      },
      {
        heading: "Federalism: Constitutional Basis",
        body: [
          "**Enumerated/Expressed powers** — listed in Article I §8 (tax, regulate commerce, declare war, coin money).",
          "**Implied powers** — not written but inferred via the **Necessary and Proper (Elastic) Clause**.",
          "**Reserved powers** — left to states by the **10th Amendment** (e.g., education, marriage, intrastate commerce).",
          "**Concurrent powers** — shared by federal and state (taxing, building roads, courts).",
          "**Supremacy Clause** (Article VI) — federal law trumps state law when in conflict.",
          "**Full Faith & Credit Clause** — states must honor records and rulings of other states.",
          "**Privileges & Immunities** — states cannot discriminate against out-of-state citizens.",
          "**Extradition** — fugitives must be returned to the state where the crime occurred.",
        ],
      },
      {
        heading: "Types of Federalism Over Time",
        body: [
          "**Dual ('layer cake') federalism** (1789–1932) — strict separation of state and federal duties.",
          "**Cooperative ('marble cake') federalism** (1933–1962) — New Deal era; levels work together on shared goals.",
          "**New Federalism / Devolution** (1963–present) — power shifts back toward the states; rise of block grants.",
        ],
      },
      {
        heading: "Fiscal Federalism",
        body: [
          "**Categorical grants** — federal money for a *specific* purpose, with strings attached (more federal control).",
          "**Block grants** — federal money for a *broad* purpose; states have flexibility (less federal control).",
          "**Mandates** — federal requirements imposed on states. **Unfunded mandates** are mandates without funding (the 1995 Unfunded Mandates Reform Act tried to limit them).",
          "**Revenue sharing** — federal funds returned to state/local governments with no strings attached.",
        ],
      },
      {
        heading: "Amending the Constitution",
        body: [
          "**Proposal**: 2/3 of both houses of Congress OR a national convention called by 2/3 of state legislatures.",
          "**Ratification**: 3/4 of state legislatures OR 3/4 of state ratifying conventions.",
          "Intentionally hard — only 27 amendments in over 230 years.",
        ],
      },
    ],
    cases: ["McCulloch v. Maryland", "United States v. Lopez"],
    docs: [
      "Declaration of Independence",
      "Articles of Confederation",
      "U.S. Constitution",
      "Federalist No. 10",
      "Brutus No. 1",
      "Federalist No. 51",
    ],
  },
  {
    id: "u2",
    num: "II",
    title: "Interactions Among Branches of Government",
    weight: "25–36%",
    color: "navy",
    bigIdea:
      "The three branches operate in a system of separation of powers and checks and balances. Each branch has formal and informal powers, interacts with the bureaucracy, and shapes policy through interlocking processes — this is the LARGEST UNIT on the exam.",
    sections: [
      {
        heading: "Article I: The Legislative Branch (Congress)",
        body: [
          "Bicameral: **Senate** (100 members, 6-yr terms, 1/3 up for reelection at a time) and **House** (435, 2-yr terms, all up at once).",
          "**Senate-only powers**: confirm presidential appointments, ratify treaties (2/3), try impeachments.",
          "**House-only powers**: originate revenue/appropriations bills, choose President if Electoral College deadlocks, formal impeachment.",
          "**Enumerated powers** (Art I §8): lay taxes, regulate commerce, declare war, coin money, raise armies, establish post offices.",
          "**Necessary and Proper / Elastic Clause** lets Congress stretch enumerated powers to do what is needed.",
        ],
      },
      {
        heading: "How a Bill Becomes a Law",
        body: [
          "Introduction → Committee → Floor → Other chamber → Conference Committee (if versions differ) → President.",
          "**Discharge petition** (House) — pulls a bill out of a committee that's stalling it (218 signatures).",
          "**Rules Committee** (House) — sets the terms of debate; gatekeeper for what reaches the floor.",
          "**Committee of the Whole** (House) — relaxed rules of debate to speed work.",
          "**Filibuster** (Senate) — extended debate to block a bill. Ended by **cloture** (60 votes).",
          "**Unanimous consent** — any senator can object; agreements set rules of debate.",
          "**Veto** — President rejects a bill; **2/3 override** in both chambers can defeat the veto. **Pocket veto** = president holds bill for 10 days while Congress is adjourned.",
        ],
      },
      {
        heading: "Committee Types",
        body: [
          "**Standing** — permanent (Ways & Means, Judiciary, Foreign Relations).",
          "**Joint** — members from both chambers; usually for housekeeping or studies.",
          "**Conference** — temporary; reconciles House/Senate versions of a bill.",
          "**Select** — temporary; for a specific investigation (e.g., Watergate, Jan 6).",
        ],
      },
      {
        heading: "Congressional Behavior & Dynamics",
        body: [
          "**Trustee model** — vote based on conscience/judgment.",
          "**Delegate model** — vote based on what constituents want.",
          "**Politico model** — hybrid; switch depending on the issue.",
          "**Pork barrel** — securing federal money for one's district.",
          "**Logrolling** — 'I'll vote for yours if you vote for mine.'",
          "**Gerrymandering** — drawing district lines to favor a party (partisan) or dilute minority votes (racial — unconstitutional per *Shaw v. Reno*).",
          "**Reapportionment** — redistribution of House seats after each 10-year census.",
          "**Redistricting** — redrawing district lines (states usually do this).",
          "**Divided government** — different parties control White House and Congress → gridlock.",
          "**Ideological polarization** has increased dramatically and reduces legislation passed.",
        ],
      },
      {
        heading: "Federal Budget & Spending",
        body: [
          "**Discretionary spending** — annually appropriated (defense, education, transportation).",
          "**Mandatory spending** — entitlements set by law (Social Security, Medicare, Medicaid, interest on debt). Growing share of the budget.",
          "**Power of the purse** — Congress's check on the President and bureaucracy.",
          "**Deficit** — annual gap between spending and revenue. **Debt** — cumulative deficits.",
        ],
      },
      {
        heading: "Article II: The Executive Branch",
        body: [
          "**Formal powers**: commander-in-chief, veto, treaties (Senate ratifies), appoint judges/ambassadors, pardons, State of the Union, convene Congress, executive orders to direct bureaucracy.",
          "**Informal powers**: bargaining and persuasion, executive agreements (don't need Senate), signing statements, going public, **bully pulpit** (using office to shape opinion).",
          "**Executive privilege** — right to keep communications confidential (limited by *U.S. v. Nixon*).",
          "**Roles**: Chief Executive, Chief Diplomat, Commander-in-Chief, Chief Legislator, Chief of State, Chief of Party, Chief Economic Planner.",
        ],
      },
      {
        heading: "Checks on the President",
        body: [
          "**War Powers Resolution (1973)** — President must notify Congress within 48 hours of deploying troops; requires withdrawal after 60 days without Congressional approval. Often disregarded but legally binding.",
          "Senate confirmation of appointments (judges, ambassadors, cabinet).",
          "Senate ratification of treaties.",
          "Congressional override of vetoes.",
          "Impeachment by House, conviction by Senate (2/3).",
          "Power of the purse — Congress can defund executive priorities.",
        ],
      },
      {
        heading: "The Bureaucracy",
        body: [
          "Four types: **Cabinet departments** (15: State, Defense, Treasury, etc.), **Independent executive agencies** (NASA, CIA, EPA), **Independent regulatory commissions** (FCC, SEC, Fed Reserve), and **Government corporations** (USPS, Amtrak).",
          "**Civil service** — staffed by merit (competitive exams) since the **Pendleton Act (1883)**, replacing the **patronage/spoils system**.",
          "**Iron triangle** — Congressional committees ↔ bureaucratic agencies ↔ interest groups, mutually reinforcing each other in a policy area.",
          "**Issue networks** — looser, more fluid coalitions; multiple stakeholders compete on a policy area.",
          "**Discretionary authority** — bureaucracy fills in details when Congress writes vague laws.",
          "**Rule-making authority** — agencies issue regulations with the force of law.",
          "**Congressional oversight tools**: hearings, power of the purse, GAO investigations, Senate confirmation of agency heads.",
          "**Presidential tools over the bureaucracy**: appointments, executive orders, OMB budget requests.",
        ],
      },
      {
        heading: "Article III: The Judicial Branch",
        body: [
          "Three-tier system: **District Courts** (94, original jurisdiction, ~700 judges) → **Courts of Appeals** (13 circuits, appellate jurisdiction, ~160 judges) → **Supreme Court** (1, both kinds of jurisdiction, 9 justices, sets national precedent).",
          "**Judicial review** — power to declare laws/actions unconstitutional. Established in *Marbury v. Madison (1803)*. Not in Constitution explicitly!",
          "**Stare decisis** — 'let the decision stand'; courts follow precedent.",
          "**Writ of certiorari** — order to a lower court to send up a case.",
          "**Rule of Four** — 4 of 9 justices must agree to hear a case.",
          "**Opinions**: Majority (binding), Concurring (agree with outcome, different reasoning), Dissenting (disagree).",
          "**Judicial activism** — willingness to overturn precedent, strike down laws, expand rights.",
          "**Judicial restraint** — defer to elected branches and existing precedent.",
        ],
      },
      {
        heading: "Checks on the Judiciary",
        body: [
          "Congress can pass new legislation, propose constitutional amendments, change the Court's size, control its appellate jurisdiction.",
          "President nominates justices (life tenure during good behavior).",
          "Senate confirms or rejects nominees.",
          "Court has 'neither force nor will, only judgment' (*Federalist 78*) — relies on other branches to enforce.",
        ],
      },
    ],
    cases: ["Baker v. Carr", "Shaw v. Reno", "Marbury v. Madison"],
    docs: ["U.S. Constitution", "Federalist No. 70", "Federalist No. 78"],
  },
  {
    id: "u3",
    num: "III",
    title: "Civil Liberties & Civil Rights",
    weight: "13–18%",
    color: "forest",
    bigIdea:
      "The Bill of Rights protects individual liberties from government interference. The 14th Amendment's Due Process and Equal Protection clauses extend these protections to actions by state governments and prevent discrimination — most often through selective incorporation.",
    sections: [
      {
        heading: "Civil Liberties vs. Civil Rights",
        body: [
          "**Civil Liberties** = limits on government action; protections *from* the state (free speech, due process). Found mostly in the Bill of Rights.",
          "**Civil Rights** = protections from discrimination by government or others; guarantees of *equal* citizenship (voting, equal protection). Rooted in the 14th Amendment.",
        ],
      },
      {
        heading: "First Amendment — Religion",
        body: [
          "**Establishment Clause** — government cannot establish a religion or favor one religion over another. Tested with *Engel v. Vitale* (1962, school prayer struck down) and the *Lemon* test.",
          "**Free Exercise Clause** — government cannot prohibit religious practice. Tested in *Wisconsin v. Yoder* (Amish exempt from compulsory education past 8th grade).",
          "Free exercise is **not absolute** — illegal practices (e.g., human sacrifice, polygamy) are not protected.",
        ],
      },
      {
        heading: "First Amendment — Speech, Press, Assembly",
        body: [
          "**Speech limits**: incitement to imminent lawless action (Brandenburg test), true threats, obscenity, fighting words, defamation, time/place/manner restrictions.",
          "**Schenck v. U.S. (1919)** — 'clear and present danger' test; speech that creates such danger isn't protected.",
          "**Tinker v. Des Moines (1969)** — students keep their First Amendment rights at school; symbolic speech (black armbands protesting Vietnam) is protected.",
          "**Press**: **NYT v. U.S. (1971)** struck down prior restraint on the Pentagon Papers. **Libel** (written) and **slander** (spoken) defamation are NOT protected.",
          "**Assembly & Petition** — protect protest, petitioning the government for grievances.",
        ],
      },
      {
        heading: "Second Amendment — Right to Bear Arms",
        body: [
          "**D.C. v. Heller (2008)** — established individual right to bear arms (not required for AP).",
          "**McDonald v. Chicago (2010)** — incorporated the 2nd Amendment to the states through the 14th Amendment Due Process Clause. **REQUIRED CASE.**",
        ],
      },
      {
        heading: "Rights of the Accused",
        body: [
          "**4th Amendment** — protection against unreasonable searches and seizures; warrants must be specific.",
          "**5th Amendment** — Grand jury indictment for major crimes, protection against double jeopardy and self-incrimination ('plead the fifth'), due process, takings clause (eminent domain with just compensation).",
          "**6th Amendment** — speedy/public trial, impartial jury, right to confront witnesses, **right to counsel** (*Gideon v. Wainwright, 1963* incorporated this to the states).",
          "**8th Amendment** — no excessive bail, no cruel and unusual punishment.",
          "***Miranda v. Arizona*** (not required) — right to be informed of rights upon arrest.",
        ],
      },
      {
        heading: "Selective Incorporation",
        body: [
          "Originally the Bill of Rights only applied to the federal government (*Barron v. Baltimore*).",
          "Through the **14th Amendment's Due Process Clause**, the Supreme Court has incorporated most rights to the states one case at a time.",
          "**Required incorporation cases**: *Gideon v. Wainwright* (right to counsel) and *McDonald v. Chicago* (right to bear arms).",
          "Other examples: free speech (*Gitlow*), free press (*Near*), establishment clause (*Everson*).",
        ],
      },
      {
        heading: "Right to Privacy",
        body: [
          "Not in Constitution explicitly — derived from 'penumbras' of multiple amendments (1, 3, 4, 5, 9, 14).",
          "**Roe v. Wade (1973)** — established a right to privacy that included abortion in the first trimester; struck down many state abortion bans. **REQUIRED CASE.** Note: overturned in *Dobbs v. Jackson* (2022), but Roe is still the required case on the AP.",
          "**Griswold v. Connecticut** (not required) — earlier privacy case (contraception).",
        ],
      },
      {
        heading: "Civil Rights & Equal Protection",
        body: [
          "**14th Amendment Equal Protection Clause** — government cannot deny equal protection of the laws.",
          "**Brown v. Board of Education (1954)** — overturned *Plessy v. Ferguson*'s 'separate but equal'; segregated schools are inherently unequal. Sparked the Civil Rights Movement. **REQUIRED CASE.**",
          "**Civil Rights Act of 1964** — banned discrimination in public accommodations, employment, federally funded programs based on race, color, religion, sex, national origin.",
          "**Voting Rights Act of 1965** — banned literacy tests, allowed federal monitoring of elections.",
          "**Title IX (1972)** — banned sex discrimination in federally funded education.",
          "**Americans with Disabilities Act (1990)** — barred discrimination based on disability.",
        ],
      },
      {
        heading: "Social Movements & Government Response",
        body: [
          "**Letter from Birmingham Jail** (MLK, 1963) — defends nonviolent direct action and the moral duty to disobey unjust laws. **REQUIRED DOCUMENT.**",
          "Movements (civil rights, women's, LGBTQ+, disability rights) → legislation, court rulings, constitutional amendments.",
          "**Affirmative action** — policies to remedy past discrimination. Legal status contested across cases.",
        ],
      },
    ],
    cases: [
      "Engel v. Vitale",
      "Wisconsin v. Yoder",
      "Schenck v. United States",
      "Tinker v. Des Moines",
      "New York Times v. United States",
      "Gideon v. Wainwright",
      "McDonald v. Chicago",
      "Roe v. Wade",
      "Brown v. Board of Education",
    ],
    docs: ["Letter from Birmingham Jail", "U.S. Constitution"],
  },
  {
    id: "u4",
    num: "IV",
    title: "American Political Ideologies & Beliefs",
    weight: "10–15%",
    color: "gold",
    bigIdea:
      "Citizens form political beliefs through socialization. These beliefs cluster into ideologies that translate into policy preferences across economic, social, and foreign-policy domains. Public opinion is measured imperfectly through polling.",
    sections: [
      {
        heading: "Core American Political Values",
        body: [
          "**Individualism** — personal responsibility, individual rights over group identity.",
          "**Equality of opportunity** — fair starting line, not equal outcomes.",
          "**Free enterprise** — capitalism, limited government interference in markets.",
          "**Rule of law** — laws apply equally; no one is above the law.",
          "**Limited government** — government power is constrained by the Constitution.",
        ],
      },
      {
        heading: "Political Socialization",
        body: [
          "**Definition**: process by which people acquire political beliefs and values.",
          "**Agents of socialization**: family (most influential), schools, peer groups, religion, media, major life events, political/civic institutions.",
          "**Generational effects** — events that shape a generation (Great Depression, Vietnam, 9/11, COVID-19).",
          "**Life-cycle effects** — predictable changes as people age (e.g., people often grow more conservative on economic issues with age).",
        ],
      },
      {
        heading: "Measuring Public Opinion",
        body: [
          "**Random sampling** — every member of the population has an equal chance of being chosen. Essential for accuracy.",
          "**Sample size** — typically 1,000–1,500 respondents for ±3% margin of error.",
          "**Representative sample** — demographically reflects the population.",
          "**Question wording** — biased or 'loaded' wording skews results.",
          "**Sampling error / margin of error** — built-in uncertainty.",
          "**Types of polls**: tracking polls (over time), entrance/exit polls (Election Day), benchmark/baseline (campaign start), **push polls** (designed to manipulate opinion, not measure it).",
        ],
      },
      {
        heading: "Liberal vs. Conservative Ideology",
        body: [
          "**Liberals (Democrats)**: government regulation of economy, social safety net, civil rights protection, less regulation of personal/social conduct (pro-choice, marriage equality).",
          "**Conservatives (Republicans)**: free-market economy, lower taxes, traditional social values, strong national defense, more regulation of personal/social conduct.",
          "**Libertarians** — less government in BOTH economy and social life.",
          "**Populists/Communitarians** — more government in BOTH economy and social life.",
        ],
      },
      {
        heading: "Economic Ideology",
        body: [
          "**Keynesian economics** (often associated with liberals) — government spending and demand-side intervention to stimulate growth, especially in downturns.",
          "**Supply-side economics / 'trickle-down'** (often associated with conservatives) — tax cuts, deregulation, and incentives for producers boost economic growth.",
          "**Monetary policy** — Federal Reserve controls money supply (interest rates, reserve requirements, open market operations). Independent of politics.",
          "**Fiscal policy** — Congress and President control taxing and spending.",
        ],
      },
      {
        heading: "Social Policy Ideology",
        body: [
          "Conservatives generally favor traditional values, oppose abortion access, oppose stricter gun regulations, often skeptical of federal involvement in education.",
          "Liberals generally favor expanded civil rights protections, abortion access, gun-control regulations, and broader federal role in education and healthcare.",
          "Both sides invoke liberty — but to mean different things.",
        ],
      },
    ],
    cases: [],
    docs: [],
  },
  {
    id: "u5",
    num: "V",
    title: "Political Participation",
    weight: "20–27%",
    color: "burgundy",
    bigIdea:
      "Citizens participate through voting, parties, interest groups, and the media. Election laws, the Electoral College, campaign finance, and modern media shape who wins and how policy gets made.",
    sections: [
      {
        heading: "Expansion of Suffrage",
        body: [
          "**15th Amendment (1870)** — voting rights regardless of race (Black men).",
          "**17th Amendment (1913)** — direct election of U.S. Senators.",
          "**19th Amendment (1920)** — women's suffrage.",
          "**23rd Amendment (1961)** — D.C. residents can vote in presidential elections.",
          "**24th Amendment (1964)** — banned poll taxes in federal elections.",
          "**Voting Rights Act of 1965** — banned literacy tests, federal oversight of voting.",
          "**26th Amendment (1971)** — voting age lowered to 18.",
          "**Motor Voter Act / NVRA (1993)** — voter registration when getting a driver's license.",
          "**Help America Vote Act (2002)** — modernized voting equipment and registration.",
        ],
      },
      {
        heading: "Models of Voting Behavior",
        body: [
          "**Rational-choice voting** — voting in your own perceived self-interest.",
          "**Retrospective voting** — voting based on a politician's past performance.",
          "**Prospective voting** — voting based on what a politician promises to do.",
          "**Party-line voting** — voting only for candidates of one party.",
          "Influences on turnout: education (largest predictor), age (older = higher), income, civic engagement, race, type of election, state laws.",
        ],
      },
      {
        heading: "Linkage Institutions",
        body: [
          "Connect citizens to government: **political parties, interest groups, elections, media**.",
          "Each shapes policy formation, framing of issues, and accountability.",
        ],
      },
      {
        heading: "Political Parties",
        body: [
          "**Functions**: recruit/nominate candidates, run campaigns, mobilize voters, organize government, link people to government.",
          "**Two-party system** is reinforced by **single-member districts** + **winner-take-all** elections (Duverger's law).",
          "**Realignment** — durable shift in party coalitions (1932 New Deal, 1968 Southern realignment).",
          "**Dealignment** — voters loosen their attachments to parties; rise of independents.",
          "**Critical elections** — landmark elections that signal realignment.",
          "**Candidate-centered campaigns** — modern campaigns revolve around individuals more than party platforms; primaries (vs. party bosses) and modern campaign finance fueled this.",
          "**Third parties** persist on ideology, single issues, or splinter from major parties; pull major parties to address new issues but rarely win.",
        ],
      },
      {
        heading: "Interest Groups & Iron Triangles",
        body: [
          "**Lobbying** — direct contact with legislators or staff to influence policy.",
          "**PACs** — Political Action Committees raise money to support candidates within FEC limits.",
          "**Super PACs** — unlimited fundraising and spending, *cannot coordinate* with campaigns. Created by *Citizens United* (2010) and *SpeechNow* (2010).",
          "**Iron Triangle** — Congressional committee + bureaucratic agency + interest group; stable, mutually beneficial.",
          "**Issue networks** — looser, broader, fluctuating coalitions on policy.",
          "**Free-rider problem** — people benefit from group action without joining.",
          "Pluralist theory says groups balance one another; elite theory says wealthy groups dominate.",
        ],
      },
      {
        heading: "Elections — Presidential",
        body: [
          "**Step 1: Primaries & Caucuses** — voters select delegates pledged to candidates.",
          "**Open primary** — any voter can vote in any party's primary.",
          "**Closed primary** — only registered party members vote in that party's primary.",
          "**Step 2: National Convention** — delegates formally nominate candidate; party platform set.",
          "**Step 3: General Election Campaign** — debates, ads, ground game, fundraising.",
          "**Step 4: General Election Day** — first Tuesday after first Monday in November.",
          "**Step 5: Electoral College** — 538 electors; 270 to win. Each state's electors = senators (2) + representatives. Most states are winner-take-all (except ME and NE, which split by district).",
          "Eligibility: 35+, natural-born citizen, 14-year resident.",
        ],
      },
      {
        heading: "Congressional Elections & Incumbency",
        body: [
          "House: 2-year terms, ~95% incumbency reelection rate.",
          "Senate: 6-year terms, ~85% incumbency reelection rate.",
          "**Incumbency advantages**: name recognition, franking privilege (free mail), staff, fundraising, casework, gerrymandering.",
          "**Midterm elections** — congressional elections in non-presidential years. President's party usually loses seats.",
        ],
      },
      {
        heading: "Campaign Finance",
        body: [
          "**FECA (1974)** — created the **FEC**, set contribution limits, required disclosure.",
          "**Buckley v. Valeo (1976)** — struck down spending limits on candidates' own money as a free-speech violation.",
          "**Bipartisan Campaign Reform Act / BCRA (2002)** — banned soft money to parties, regulated electioneering communications.",
          "**Citizens United v. FEC (2010)** — corporations and unions have free-speech rights to spend unlimited money on 'independent expenditures' for/against candidates. Birthed Super PACs. **REQUIRED CASE.**",
          "**Hard money** — direct contributions to candidates; FEC-limited.",
          "**Soft money** — unlimited contributions to parties for 'party-building'; restricted by BCRA.",
          "**Dark money** — undisclosed spending through 501(c)(4) nonprofits.",
        ],
      },
      {
        heading: "The Media",
        body: [
          "**Linkage institution** between citizens and government.",
          "**Roles**: gatekeeper, scorekeeper, watchdog, agenda setter.",
          "**Horse-race journalism** — focusing on who's winning rather than policy.",
          "Print = lightly regulated. Broadcast (radio/TV) = regulated by **FCC** because airwaves are public.",
          "**Equal Time Rule** — broadcasters must give equal opportunity to opposing candidates.",
          "**FOIA (1966)** — Freedom of Information Act lets citizens request government records.",
          "**Modern shifts**: rise of partisan/cable news, decline of newspapers, social media as primary source for under-30s. Filter bubbles, echo chambers, viral misinformation.",
          "**Investigative journalism** has historically driven major reforms (Watergate, Pentagon Papers).",
        ],
      },
    ],
    cases: ["Citizens United v. FEC"],
    docs: [],
  },
];

const SCOTUS_CASES = [
  {
    name: "Marbury v. Madison",
    year: 1803,
    unit: "Unit 2",
    clause: "Article III; Judiciary Act of 1789",
    facts:
      "Outgoing Federalist president John Adams made last-minute judicial appointments ('midnight judges'). Jefferson's Secretary of State, Madison, refused to deliver Marbury's commission. Marbury sued under the Judiciary Act of 1789 for a writ of mandamus.",
    holding:
      "The Supreme Court ruled it could not issue the writ because the section of the Judiciary Act giving it that power was unconstitutional — Congress cannot expand the Court's original jurisdiction beyond what Article III specifies.",
    significance:
      "Established the principle of JUDICIAL REVIEW — the Supreme Court's power to declare federal laws unconstitutional. Foundation of judicial power in American government.",
    keyTerms: ["Judicial review", "Original jurisdiction", "Article III"],
  },
  {
    name: "McCulloch v. Maryland",
    year: 1819,
    unit: "Unit 1",
    clause: "Necessary and Proper Clause; Supremacy Clause",
    facts:
      "Maryland tried to tax the Second Bank of the United States. McCulloch, the bank's cashier, refused to pay. Maryland sued.",
    holding:
      "Unanimous: Congress had IMPLIED power under the Necessary and Proper Clause to charter a national bank, even though banking is not enumerated. AND Maryland could not tax a federal institution because of the Supremacy Clause ('the power to tax is the power to destroy').",
    significance:
      "Established the doctrine of IMPLIED POWERS, expanded the reach of the federal government, and reaffirmed the Supremacy Clause.",
    keyTerms: ["Implied powers", "Necessary and Proper Clause", "Supremacy Clause", "Federalism"],
  },
  {
    name: "Schenck v. United States",
    year: 1919,
    unit: "Unit 3",
    clause: "1st Amendment (Speech)",
    facts:
      "Charles Schenck, a Socialist, mailed leaflets urging men to resist the WWI draft. He was arrested under the Espionage Act of 1917.",
    holding:
      "Unanimous: The 1st Amendment does not protect speech that creates a 'CLEAR AND PRESENT DANGER' of substantive evil that Congress may prevent. Speech that would be allowed in peacetime can be limited in wartime.",
    significance:
      "Established that 1st Amendment rights are NOT absolute; created the 'clear and present danger' test (later replaced by the Brandenburg test in 1969).",
    keyTerms: ["Clear and present danger", "Espionage Act", "Limits on speech"],
  },
  {
    name: "Brown v. Board of Education",
    year: 1954,
    unit: "Unit 3",
    clause: "14th Amendment Equal Protection",
    facts:
      "Linda Brown, a Black student, was denied admission to a white school in Topeka, Kansas. The NAACP (Thurgood Marshall) challenged segregation laws.",
    holding:
      "Unanimous: 'Separate educational facilities are inherently unequal.' Overturned *Plessy v. Ferguson* (1896) 'separate but equal.' Segregation in public schools violates the 14th Amendment Equal Protection Clause.",
    significance:
      "Sparked the modern Civil Rights Movement; led to *Civil Rights Act of 1964*; major precedent for ending state-sanctioned segregation.",
    keyTerms: ["Equal Protection", "Desegregation", "Plessy v. Ferguson overturned", "Separate but equal"],
  },
  {
    name: "Baker v. Carr",
    year: 1961,
    unit: "Unit 2",
    clause: "14th Amendment Equal Protection",
    facts:
      "Tennessee had not redrawn legislative districts since 1901 despite huge population shifts. Urban voters had vastly less voting power than rural voters. Baker sued.",
    holding:
      "6–2: Federal courts CAN hear cases challenging legislative apportionment under the Equal Protection Clause; reapportionment cases are not 'political questions' beyond judicial review.",
    significance:
      "Opened door to 'ONE PERSON, ONE VOTE' principle (developed in *Reynolds v. Sims*); transformed congressional and state legislative districts.",
    keyTerms: ["One person, one vote", "Reapportionment", "Justiciability", "Equal Protection"],
  },
  {
    name: "Engel v. Vitale",
    year: 1962,
    unit: "Unit 3",
    clause: "1st Amendment Establishment Clause",
    facts:
      "New York's Board of Regents wrote a 'voluntary' nondenominational prayer for public schools. Parents sued, arguing it violated the Establishment Clause.",
    holding:
      "6–1: It is unconstitutional for state officials to compose an official school prayer and encourage its recitation in public schools, even if the prayer is denominationally neutral and students may opt out.",
    significance:
      "Major application of the Establishment Clause to state-sponsored religious activity in public schools.",
    keyTerms: ["Establishment Clause", "School prayer", "Separation of church and state"],
  },
  {
    name: "Gideon v. Wainwright",
    year: 1963,
    unit: "Unit 3",
    clause: "6th Amendment via 14th Amendment Due Process",
    facts:
      "Clarence Earl Gideon was charged with felony breaking-and-entering in Florida. He could not afford a lawyer; the state refused to appoint one. He represented himself, lost, and appealed from prison on a handwritten petition.",
    holding:
      "Unanimous: The 6th Amendment's right to counsel applies to STATE criminal proceedings through the 14th Amendment Due Process Clause. States must provide counsel to indigent defendants in felony cases.",
    significance:
      "Major SELECTIVE INCORPORATION case — extended a Bill of Rights protection to state actions through the 14th Amendment.",
    keyTerms: ["Selective Incorporation", "Right to counsel", "14th Amendment Due Process"],
  },
  {
    name: "Tinker v. Des Moines",
    year: 1969,
    unit: "Unit 3",
    clause: "1st Amendment Speech",
    facts:
      "Iowa students wore black armbands to school to protest the Vietnam War. The school suspended them.",
    holding:
      "7–2: Students do not 'shed their constitutional rights at the schoolhouse gate.' Symbolic speech is protected unless it causes 'substantial disruption' to the educational process.",
    significance:
      "Established student free-speech protections; a foundational case for symbolic speech.",
    keyTerms: ["Symbolic speech", "Student rights", "Substantial disruption test"],
  },
  {
    name: "New York Times v. United States",
    year: 1971,
    unit: "Unit 3",
    clause: "1st Amendment Press",
    facts:
      "The Nixon administration tried to stop the NYT and Washington Post from publishing the leaked 'Pentagon Papers' (a classified study of U.S. involvement in Vietnam).",
    holding:
      "6–3: Government bears a 'heavy presumption against' prior restraint. Without proof of inevitable, direct, immediate harm to national security, the press cannot be censored.",
    significance:
      "Reinforced press freedom and the strict standard for PRIOR RESTRAINT.",
    keyTerms: ["Prior restraint", "Freedom of the press", "Pentagon Papers"],
  },
  {
    name: "Wisconsin v. Yoder",
    year: 1972,
    unit: "Unit 3",
    clause: "1st Amendment Free Exercise",
    facts:
      "Wisconsin required school attendance until age 16. Amish parents refused to send their children past 8th grade, citing their religious convictions.",
    holding:
      "Unanimous: The state's interest in compulsory education was not enough to override the Amish parents' Free Exercise rights.",
    significance:
      "Strong protection of FREE EXERCISE; established that genuine religious practice can override otherwise valid state laws.",
    keyTerms: ["Free Exercise Clause", "Compulsory education", "Religious accommodation"],
  },
  {
    name: "Roe v. Wade",
    year: 1973,
    unit: "Unit 3",
    clause: "14th Amendment Due Process / Right to Privacy",
    facts:
      "A pregnant woman ('Jane Roe') challenged a Texas law banning most abortions.",
    holding:
      "7–2: The right to privacy under the 14th Amendment Due Process Clause includes a woman's right to choose abortion, with state interest growing as pregnancy progresses (trimester framework).",
    significance:
      "Major right-to-privacy case. Note: overturned by *Dobbs v. Jackson Women's Health* (2022), but Roe is still on the AP required list.",
    keyTerms: ["Right to privacy", "Substantive due process", "Trimester framework"],
  },
  {
    name: "Shaw v. Reno",
    year: 1993,
    unit: "Unit 2",
    clause: "14th Amendment Equal Protection",
    facts:
      "North Carolina drew a strangely shaped majority-Black congressional district to comply with the Voting Rights Act. White voters challenged it.",
    holding:
      "5–4: Race cannot be the PREDOMINANT factor in drawing district lines unless narrowly tailored to a compelling state interest. Bizarrely shaped majority-minority districts may violate the Equal Protection Clause.",
    significance:
      "Limits on RACIAL GERRYMANDERING; sets standard for strict scrutiny of race-conscious districting.",
    keyTerms: ["Racial gerrymandering", "Majority-minority districts", "Equal Protection"],
  },
  {
    name: "United States v. Lopez",
    year: 1995,
    unit: "Unit 1",
    clause: "Commerce Clause",
    facts:
      "Lopez brought a gun to school, charged under the Gun-Free School Zones Act of 1990. He argued Congress had no power to pass that law.",
    holding:
      "5–4: Possessing a gun in a school zone is not 'commercial activity' and does not substantially affect interstate commerce. Congress exceeded its Commerce Clause authority.",
    significance:
      "FIRST TIME since the New Deal the Court LIMITED the Commerce Clause; signaled a shift toward state authority and limits on federal power.",
    keyTerms: ["Commerce Clause", "Federalism", "Limits on federal power"],
  },
  {
    name: "McDonald v. Chicago",
    year: 2010,
    unit: "Unit 3",
    clause: "2nd Amendment via 14th Amendment Due Process",
    facts:
      "Chicago had effectively banned handgun ownership. McDonald challenged the law, citing the 2nd Amendment.",
    holding:
      "5–4: The 2nd Amendment right to keep and bear arms (recognized as an individual right in *D.C. v. Heller*) is INCORPORATED to the states through the 14th Amendment Due Process Clause.",
    significance:
      "Major SELECTIVE INCORPORATION case for the 2nd Amendment; major federalism case limiting state gun-control laws.",
    keyTerms: ["Selective Incorporation", "2nd Amendment", "Individual right to bear arms"],
  },
  {
    name: "Citizens United v. FEC",
    year: 2010,
    unit: "Unit 5",
    clause: "1st Amendment Speech",
    facts:
      "Citizens United, a nonprofit, wanted to air a film critical of Hillary Clinton during the 2008 primary. BCRA (2002) banned corporate-funded electioneering communications close to elections.",
    holding:
      "5–4: Corporations and unions have 1st Amendment free-speech rights; the government cannot ban independent political expenditures by corporations and unions.",
    significance:
      "Created **Super PACs**, dramatically expanded the role of money in elections, and intensified debate over campaign finance.",
    keyTerms: ["Campaign finance", "Super PACs", "Free speech for corporations", "Independent expenditures"],
  },
];

const FOUNDATIONAL_DOCS = [
  {
    title: "Declaration of Independence",
    year: 1776,
    author: "Thomas Jefferson (et al.)",
    bigIdea:
      "Lists grievances against King George III and declares the colonies' independence on the basis of natural rights, popular sovereignty, and the right to revolution.",
    keyConcepts: [
      "Natural rights — life, liberty, pursuit of happiness",
      "Social contract — government derives power from consent of the governed",
      "Right to revolt against tyrannical government",
      "Influence of John Locke and Enlightenment thought",
    ],
    examUse:
      "Cite when discussing natural rights, popular sovereignty, the foundation of American political ideals, or the moral basis for self-government. Common in argument essays.",
  },
  {
    title: "Articles of Confederation",
    year: 1781,
    author: "John Dickinson (primary drafter)",
    bigIdea:
      "First U.S. constitution. Created an intentionally weak national government — a 'firm league of friendship' — out of fear of tyranny. Quickly proved inadequate.",
    keyConcepts: [
      "States retained sovereignty",
      "No power to tax or regulate commerce",
      "No executive branch, no national courts",
      "9/13 to pass laws, 13/13 to amend",
      "Shays' Rebellion exposed weaknesses → Constitutional Convention",
    ],
    examUse:
      "Use to contrast with the Constitution; explain WHY the Constitution was needed; discuss federalism's evolution. Strong evidence for arguments about balance of power.",
  },
  {
    title: "U.S. Constitution",
    year: 1787,
    author: "Convention delegates (esp. Madison)",
    bigIdea:
      "Frames the federal government with separation of powers, checks and balances, federalism, popular sovereignty, and limited government — adopting Enlightenment ideas in a workable structure.",
    keyConcepts: [
      "Article I — Legislative (Congress)",
      "Article II — Executive (President)",
      "Article III — Judicial (Courts)",
      "Article IV — Federalism (Full Faith & Credit, Privileges & Immunities, Extradition)",
      "Article V — Amendment process",
      "Article VI — Supremacy Clause",
      "Article VII — Ratification (9/13)",
      "Bill of Rights — first 10 amendments",
    ],
    examUse:
      "The single most cited document on the AP exam. Reference specific articles, clauses, and amendments — not just 'the Constitution.'",
  },
  {
    title: "Federalist No. 10",
    year: 1787,
    author: "James Madison (Publius)",
    bigIdea:
      "FACTIONS are inevitable but their effects can be controlled. A LARGE REPUBLIC is the best safeguard — diverse interests dilute majority tyranny, and representation filters mob passion.",
    keyConcepts: [
      "Factions — groups with interests adverse to others or the public good",
      "Two ways to control factions: remove causes (impossible without tyranny) or control effects",
      "Large republic > small democracy for managing factions",
      "Pluralism in action — many competing interests",
      "Rejects pure (direct) democracy as unstable",
    ],
    examUse:
      "Strong evidence in arguments about pluralist democracy, federalism, the size of government, and how the system manages disagreement. Pair with *Brutus 1* for contrasting views.",
  },
  {
    title: "Brutus No. 1",
    year: 1787,
    author: "Anti-Federalist (anonymous)",
    bigIdea:
      "Argues AGAINST ratification: a large republic CANNOT genuinely represent the people; the Necessary and Proper Clause and Supremacy Clause will swallow state power; centralized government will become tyrannical.",
    keyConcepts: [
      "A republic must be SMALL to be representative",
      "Fear of standing army and elite rule",
      "Necessary and Proper Clause is dangerous",
      "Supremacy Clause makes state governments useless",
      "Need a Bill of Rights to constrain national power",
    ],
    examUse:
      "Use as the Anti-Federalist counterweight to *Federalist 10* and *51*. Strong evidence in arguments about excessive federal power, devolution, and the limits of representation.",
  },
  {
    title: "Federalist No. 51",
    year: 1788,
    author: "James Madison (Publius)",
    bigIdea:
      "Defends SEPARATION OF POWERS and CHECKS AND BALANCES. 'Ambition must be made to counteract ambition.' Each branch must have the means and motives to resist encroachment by the others.",
    keyConcepts: [
      "Each branch has its own selection process and powers",
      "'If men were angels, no government would be necessary'",
      "Bicameralism strengthens the legislature against itself",
      "Federalism doubles the protection — power divided between national and state, and divided AGAIN within each",
      "Self-interest used as a check on self-interest",
    ],
    examUse:
      "Best evidence for arguments about checks and balances, separation of powers, and protection of liberty through structure. Powerful in any argument essay about how the Constitution prevents tyranny.",
  },
  {
    title: "Federalist No. 70",
    year: 1788,
    author: "Alexander Hamilton (Publius)",
    bigIdea:
      "Defends a SINGLE, ENERGETIC EXECUTIVE. 'Energy in the executive is a leading character in the definition of good government.' Better than a council because it ensures speed, accountability, and strength.",
    keyConcepts: [
      "Unity in the executive",
      "Energy = ability to act decisively",
      "Accountability — one person can be held responsible",
      "Duration (longer term than annual) builds stability",
      "Adequate provision for support (salary)",
    ],
    examUse:
      "Cite in any argument about presidential power, the strength of the executive, or comparisons of presidents. Strong evidence for arguments favoring executive action.",
  },
  {
    title: "Federalist No. 78",
    year: 1788,
    author: "Alexander Hamilton (Publius)",
    bigIdea:
      "Defends an INDEPENDENT JUDICIARY with LIFE TENURE. The judiciary is the 'least dangerous branch' — has 'neither force nor will, only judgment.' Argues for JUDICIAL REVIEW.",
    keyConcepts: [
      "Lifetime appointments ensure independence",
      "Judicial review — courts must invalidate laws contrary to the Constitution",
      "Court has no force (army) or will (purse) — only judgment",
      "Independent judiciary protects rights from popular passions",
    ],
    examUse:
      "Foundation for any argument about judicial power, independence of the courts, or how the judiciary checks the other branches. Pair with *Marbury v. Madison*.",
  },
  {
    title: "Letter from Birmingham Jail",
    year: 1963,
    author: "Martin Luther King Jr.",
    bigIdea:
      "Defends nonviolent direct action against segregation. Argues there is a moral duty to disobey unjust laws. 'Injustice anywhere is a threat to justice everywhere.'",
    keyConcepts: [
      "Just vs. unjust laws — unjust laws degrade human personality",
      "Civil disobedience — willing to accept punishment for breaking unjust law",
      "Four steps of nonviolent campaign: fact-collection, negotiation, self-purification, direct action",
      "Critique of 'white moderate' who prefers order to justice",
      "Political movements as engines of change",
    ],
    examUse:
      "Essential for arguments about civil rights, social movements, the role of citizens vs. the state, and the relationship between law and justice. Strong evidence in argument essays about citizen participation.",
  },
];

const FLASHCARDS = [
  // Unit 1
  { term: "Federalism", def: "System of shared powers between national, state, and local governments.", unit: "U1" },
  { term: "Separation of Powers", def: "Division of governmental authority into three branches: legislative, executive, judicial.", unit: "U1" },
  { term: "Checks and Balances", def: "System where each branch has powers that limit the others.", unit: "U1" },
  { term: "Necessary and Proper Clause", def: "Article I §8 — Congress can make all laws necessary and proper to execute its powers (Elastic Clause). Basis for implied powers.", unit: "U1" },
  { term: "Supremacy Clause", def: "Article VI — Constitution and federal law are supreme over state law.", unit: "U1" },
  { term: "10th Amendment", def: "Reserves to the states all powers not delegated to the federal government.", unit: "U1" },
  { term: "14th Amendment", def: "Equal Protection, Due Process, and Citizenship; vehicle for selective incorporation.", unit: "U1" },
  { term: "Categorical Grant", def: "Federal money for a specific purpose with strict guidelines.", unit: "U1" },
  { term: "Block Grant", def: "Federal money for a broad purpose with state flexibility.", unit: "U1" },
  { term: "Unfunded Mandate", def: "Federal requirement on states without funding to implement it.", unit: "U1" },
  { term: "Faction", def: "Per Madison in Fed. 10 — group of citizens united by a common interest adverse to the rights of others or the public good.", unit: "U1" },
  // Unit 2
  { term: "Filibuster", def: "Senate tactic of unlimited debate to block a bill.", unit: "U2" },
  { term: "Cloture", def: "60-vote Senate procedure to end a filibuster.", unit: "U2" },
  { term: "Discharge Petition", def: "House procedure (218 sigs) to force a bill out of committee.", unit: "U2" },
  { term: "Rules Committee", def: "House gatekeeper that sets terms of debate for legislation.", unit: "U2" },
  { term: "Pork Barrel", def: "Securing federal money for projects in one's home district.", unit: "U2" },
  { term: "Logrolling", def: "Vote-trading: 'I'll support yours if you support mine.'", unit: "U2" },
  { term: "Gerrymandering", def: "Drawing district lines to favor a party (partisan) or dilute minority votes (racial).", unit: "U2" },
  { term: "Reapportionment", def: "Redistribution of House seats among states after the 10-year census.", unit: "U2" },
  { term: "Trustee Model", def: "Representatives vote based on conscience/judgment.", unit: "U2" },
  { term: "Delegate Model", def: "Representatives vote as constituents instruct.", unit: "U2" },
  { term: "Politico Model", def: "Hybrid — switch between trustee and delegate by issue.", unit: "U2" },
  { term: "Bully Pulpit", def: "President's use of office to shape public opinion.", unit: "U2" },
  { term: "Executive Order", def: "Presidential directive with the force of law that doesn't require Congress.", unit: "U2" },
  { term: "Executive Agreement", def: "Presidential pact with foreign leader that doesn't need Senate ratification.", unit: "U2" },
  { term: "Pocket Veto", def: "President holds bill 10 days while Congress is adjourned, killing it.", unit: "U2" },
  { term: "Iron Triangle", def: "Stable alliance: congressional committee + bureaucracy + interest group.", unit: "U2" },
  { term: "Issue Network", def: "Looser, fluid coalition of stakeholders around a policy area.", unit: "U2" },
  { term: "Pendleton Act (1883)", def: "Created merit-based civil service, ending the spoils system.", unit: "U2" },
  { term: "Discretionary Authority", def: "Bureaucracy's power to decide details when Congress writes vague laws.", unit: "U2" },
  { term: "Judicial Review", def: "Power of courts to declare laws unconstitutional. Established in Marbury v. Madison.", unit: "U2" },
  { term: "Stare Decisis", def: "'Let the decision stand' — principle of following precedent.", unit: "U2" },
  { term: "Writ of Certiorari", def: "Order from SCOTUS to a lower court to send up a case.", unit: "U2" },
  { term: "Rule of Four", def: "4 of 9 justices must agree to hear a case.", unit: "U2" },
  { term: "Judicial Activism", def: "Willingness to overturn precedent and strike down laws.", unit: "U2" },
  { term: "Judicial Restraint", def: "Deference to elected branches and existing precedent.", unit: "U2" },
  // Unit 3
  { term: "Civil Liberties", def: "Limits on government — protections from the state (free speech, due process).", unit: "U3" },
  { term: "Civil Rights", def: "Protections against discrimination; guarantees of equal citizenship.", unit: "U3" },
  { term: "Selective Incorporation", def: "Process by which Bill of Rights protections are applied to states via 14th Amendment Due Process.", unit: "U3" },
  { term: "Establishment Clause", def: "1st Amendment — government cannot establish or favor a religion.", unit: "U3" },
  { term: "Free Exercise Clause", def: "1st Amendment — government cannot prohibit religious practice.", unit: "U3" },
  { term: "Symbolic Speech", def: "Nonverbal expression protected by 1st Amendment (Tinker armbands, flag burning).", unit: "U3" },
  { term: "Prior Restraint", def: "Government censorship before publication. Strongly disfavored (NYT v. U.S.).", unit: "U3" },
  { term: "Clear and Present Danger", def: "Schenck test — speech can be limited if it creates such a danger.", unit: "U3" },
  { term: "Equal Protection Clause", def: "14th Amendment — government cannot deny equal protection of the laws.", unit: "U3" },
  { term: "Due Process Clause", def: "5th and 14th Amendments — government cannot deprive life, liberty, or property without fair procedures.", unit: "U3" },
  { term: "Affirmative Action", def: "Policies designed to remedy past discrimination by giving preference to underrepresented groups.", unit: "U3" },
  // Unit 4
  { term: "Political Socialization", def: "Process by which people acquire political beliefs and values.", unit: "U4" },
  { term: "Political Ideology", def: "Set of beliefs about politics and the proper role of government.", unit: "U4" },
  { term: "Liberal Ideology", def: "Generally favors govt regulation of economy, social safety net, expanded rights, less regulation of personal life.", unit: "U4" },
  { term: "Conservative Ideology", def: "Generally favors free markets, lower taxes, traditional values, strong national defense.", unit: "U4" },
  { term: "Libertarian", def: "Less government in BOTH economy and social life.", unit: "U4" },
  { term: "Random Sampling", def: "Polling method giving every population member an equal chance of selection.", unit: "U4" },
  { term: "Margin of Error", def: "Statistical measure of poll accuracy (typically ±3% for n=1,000).", unit: "U4" },
  { term: "Push Poll", def: "Fake poll designed to influence opinion through biased questions.", unit: "U4" },
  { term: "Tracking Poll", def: "Repeated polls over time to detect changes in opinion.", unit: "U4" },
  { term: "Keynesian Economics", def: "Government spending stimulates demand and growth, especially in downturns.", unit: "U4" },
  { term: "Supply-Side Economics", def: "Tax cuts and deregulation incentivize producers to grow the economy.", unit: "U4" },
  { term: "Monetary Policy", def: "Federal Reserve's control of money supply through interest rates and reserves.", unit: "U4" },
  { term: "Fiscal Policy", def: "Congress and President's control of taxing and spending.", unit: "U4" },
  // Unit 5
  { term: "Linkage Institutions", def: "Channels connecting people to government: parties, interest groups, elections, media.", unit: "U5" },
  { term: "Rational-Choice Voting", def: "Voting based on perceived self-interest.", unit: "U5" },
  { term: "Retrospective Voting", def: "Voting based on past performance of incumbents.", unit: "U5" },
  { term: "Prospective Voting", def: "Voting based on future promises.", unit: "U5" },
  { term: "Party-Line Voting", def: "Voting consistently for one party's candidates.", unit: "U5" },
  { term: "Closed Primary", def: "Only registered party members vote in that party's primary.", unit: "U5" },
  { term: "Open Primary", def: "Any registered voter can vote in any party's primary.", unit: "U5" },
  { term: "Caucus", def: "Local meetings where party members select delegates.", unit: "U5" },
  { term: "Electoral College", def: "538 electors; 270 needed to win the presidency. Each state gets electors = senators + reps.", unit: "U5" },
  { term: "Incumbency Advantage", def: "Built-in advantages of sitting officeholders: name recognition, franking, staff, fundraising.", unit: "U5" },
  { term: "Critical Election", def: "Landmark election that signals a realignment of party coalitions.", unit: "U5" },
  { term: "Realignment", def: "Durable shift in party coalitions (e.g., 1932 New Deal).", unit: "U5" },
  { term: "Dealignment", def: "Voters loosening ties to parties; rise of independents.", unit: "U5" },
  { term: "PAC", def: "Political Action Committee — limited fundraising and direct contributions to candidates.", unit: "U5" },
  { term: "Super PAC", def: "Unlimited fundraising and spending; cannot coordinate with candidates. Created by Citizens United (2010).", unit: "U5" },
  { term: "Hard Money", def: "Direct, FEC-limited contributions to candidates.", unit: "U5" },
  { term: "Soft Money", def: "Unregulated contributions to parties for 'party-building'; restricted by BCRA.", unit: "U5" },
  { term: "Dark Money", def: "Undisclosed political spending through 501(c)(4) nonprofits.", unit: "U5" },
  { term: "FECA (1974)", def: "Created the FEC; set contribution limits and disclosure rules.", unit: "U5" },
  { term: "BCRA (2002)", def: "Bipartisan Campaign Reform Act — banned soft money to parties.", unit: "U5" },
  { term: "Horse-Race Journalism", def: "Coverage focused on who's winning rather than substantive policy.", unit: "U5" },
  { term: "Gatekeeping Function", def: "Media decides what becomes news.", unit: "U5" },
  { term: "Watchdog Function", def: "Media holds officials accountable through scrutiny.", unit: "U5" },
  { term: "Agenda Setting", def: "Media's power to shape what issues the public sees as important.", unit: "U5" },
  { term: "FOIA", def: "Freedom of Information Act (1966) — citizens can request government records.", unit: "U5" },
];

const PRACTICE_MCQS = [
  {
    q: "Which of the following best describes the principle of federalism as established in the U.S. Constitution?",
    options: [
      "All political power is concentrated in the national government.",
      "Power is divided between national and state governments, with each having distinct authorities.",
      "The states retain complete sovereignty and may nullify federal laws.",
      "Local governments have the same constitutional standing as state governments.",
    ],
    answer: 1,
    explanation:
      "Federalism divides power between national and state governments. National powers are enumerated and implied; state powers are reserved by the 10th Amendment. Concurrent powers are shared.",
    unit: "Unit 1",
  },
  {
    q: "In *McCulloch v. Maryland* (1819), the Supreme Court relied primarily on which two constitutional clauses?",
    options: [
      "The Commerce Clause and the Establishment Clause",
      "The Necessary and Proper Clause and the Supremacy Clause",
      "The Equal Protection Clause and the Due Process Clause",
      "The Privileges and Immunities Clause and the 10th Amendment",
    ],
    answer: 1,
    explanation:
      "The Court used the Necessary and Proper Clause to justify Congress's implied power to charter a national bank, and the Supremacy Clause to prevent Maryland from taxing it.",
    unit: "Unit 1",
  },
  {
    q: "Which best explains why the Articles of Confederation were ultimately replaced?",
    options: [
      "The national government had too much power over the states.",
      "The Articles created an executive branch that abused its authority.",
      "The national government lacked the power to tax, regulate commerce, or maintain order.",
      "The Articles required unanimous consent for everyday legislation.",
    ],
    answer: 2,
    explanation:
      "Congress under the Articles couldn't tax, regulate interstate commerce, or maintain a standing army. Shays' Rebellion exposed the inability to maintain order, leading to the Constitutional Convention.",
    unit: "Unit 1",
  },
  {
    q: "*Federalist No. 10* argues that the danger of factions is best mitigated by:",
    options: [
      "Banning political parties through constitutional amendment.",
      "A small, homogeneous direct democracy.",
      "A large republic with diverse interests and a representative system.",
      "Granting the executive power to override majority faction decisions.",
    ],
    answer: 2,
    explanation:
      "Madison argued that a large republic with many competing factions and elected representatives would dilute majority tyranny — a foundational pluralist argument.",
    unit: "Unit 1",
  },
  {
    q: "The most significant difference between Federalist No. 10 and Brutus No. 1 concerns their views on:",
    options: [
      "Whether judges should serve life terms.",
      "Whether the Bill of Rights should be added to the Constitution.",
      "Whether a large or small republic better protects liberty.",
      "Whether the executive should be unitary.",
    ],
    answer: 2,
    explanation:
      "Brutus argued only a small republic could truly represent the people and prevent tyranny; Madison in Fed. 10 argued the opposite — a large republic best controls factions.",
    unit: "Unit 1",
  },
  {
    q: "Which of the following is a power held exclusively by the U.S. Senate?",
    options: [
      "Originating revenue bills",
      "Impeaching federal officials",
      "Confirming presidential appointments",
      "Choosing the President if no candidate gets a majority of electoral votes",
    ],
    answer: 2,
    explanation:
      "The Senate confirms presidential nominations and ratifies treaties. The House originates revenue bills, conducts impeachments, and chooses the president if the Electoral College deadlocks.",
    unit: "Unit 2",
  },
  {
    q: "A senator engages in a filibuster. The most likely procedural response would be a motion for:",
    options: [
      "A discharge petition",
      "Cloture",
      "A unanimous consent agreement",
      "Reconciliation",
    ],
    answer: 1,
    explanation:
      "Cloture (60 votes) is the Senate procedure to end debate, including a filibuster. Discharge petitions are a House tool. Reconciliation is a budget process exempt from filibusters.",
    unit: "Unit 2",
  },
  {
    q: "Which of the following best describes an iron triangle?",
    options: [
      "A formal coalition between the three branches of government.",
      "A mutually beneficial relationship among congressional committees, bureaucratic agencies, and interest groups.",
      "The Constitution's three founding ideals: liberty, equality, and democracy.",
      "A formal alliance between the President, Vice President, and Speaker of the House.",
    ],
    answer: 1,
    explanation:
      "Iron triangles describe stable, three-way alliances in a policy area: the relevant congressional committee, executive agency, and interest groups all benefit from cooperating.",
    unit: "Unit 2",
  },
  {
    q: "*Baker v. Carr* (1961) is best known for establishing which principle?",
    options: [
      "Symbolic speech is protected in public schools.",
      "The right to counsel applies to states.",
      "Federal courts can hear cases involving the apportionment of legislative districts.",
      "Schools cannot mandate prayer.",
    ],
    answer: 2,
    explanation:
      "Baker v. Carr opened the door for federal courts to intervene in malapportionment cases, leading to the 'one person, one vote' principle.",
    unit: "Unit 2",
  },
  {
    q: "An executive order issued by the President is best understood as an example of:",
    options: [
      "A formal power explicitly listed in Article II.",
      "An informal power flowing from the President's role as Chief Executive.",
      "A power requiring approval from the Senate.",
      "A power explicitly granted by the 22nd Amendment.",
    ],
    answer: 1,
    explanation:
      "Executive orders are an informal/implied power. They derive from the President's duty to 'take care that the laws be faithfully executed' but are not specifically listed in Article II.",
    unit: "Unit 2",
  },
  {
    q: "The principle of judicial review was established in:",
    options: [
      "Marbury v. Madison (1803)",
      "McCulloch v. Maryland (1819)",
      "Brown v. Board of Education (1954)",
      "Federalist No. 78",
    ],
    answer: 0,
    explanation:
      "Marbury established judicial review. Federalist No. 78 ARGUED for judicial review beforehand, but the case is what established it as practice.",
    unit: "Unit 2",
  },
  {
    q: "Which of the following is a clear example of selective incorporation?",
    options: [
      "Congress passing the Civil Rights Act of 1964.",
      "Gideon v. Wainwright applying the right to counsel to state criminal proceedings.",
      "The Senate ratifying a treaty.",
      "The President issuing an executive order.",
    ],
    answer: 1,
    explanation:
      "Selective incorporation applies Bill of Rights protections to the states through the 14th Amendment Due Process Clause. Gideon did exactly this with the 6th Amendment right to counsel.",
    unit: "Unit 3",
  },
  {
    q: "In *Tinker v. Des Moines* (1969), the Supreme Court held that:",
    options: [
      "Schools may suspend students for any speech that is offensive.",
      "Symbolic speech in public schools is protected unless it causes substantial disruption.",
      "Schools may prohibit symbolic speech entirely.",
      "Only verbal speech is protected by the First Amendment.",
    ],
    answer: 1,
    explanation:
      "Students don't 'shed their constitutional rights at the schoolhouse gate.' Symbolic speech is protected unless it causes substantial disruption to education.",
    unit: "Unit 3",
  },
  {
    q: "Which of the following pairs of cases both involve the First Amendment?",
    options: [
      "Schenck v. U.S. and McCulloch v. Maryland",
      "Engel v. Vitale and Tinker v. Des Moines",
      "Brown v. Board and Baker v. Carr",
      "United States v. Lopez and McDonald v. Chicago",
    ],
    answer: 1,
    explanation:
      "Engel involves the Establishment Clause (school prayer); Tinker involves free speech (symbolic speech). Both are First Amendment cases.",
    unit: "Unit 3",
  },
  {
    q: "The clear and present danger test was first articulated in:",
    options: [
      "Tinker v. Des Moines",
      "Schenck v. United States",
      "New York Times v. United States",
      "Brandenburg v. Ohio",
    ],
    answer: 1,
    explanation:
      "Justice Holmes articulated 'clear and present danger' in Schenck (1919). It was later replaced by the more speech-protective Brandenburg test (1969).",
    unit: "Unit 3",
  },
  {
    q: "Which best describes political socialization?",
    options: [
      "The process by which a political party recruits new candidates.",
      "The process by which individuals acquire political beliefs and values.",
      "The process by which interest groups gain access to legislators.",
      "The process by which the government shapes voter turnout.",
    ],
    answer: 1,
    explanation:
      "Political socialization describes how individuals form political beliefs through family, schools, peers, religion, media, and major events.",
    unit: "Unit 4",
  },
  {
    q: "A poll with a margin of error of ±3% finds Candidate A leading Candidate B by 4 points. The most accurate interpretation is:",
    options: [
      "Candidate A will definitely win.",
      "The race is statistically tied.",
      "Candidate A's lead is outside the margin of error, but the race is still competitive.",
      "The poll is unreliable.",
    ],
    answer: 2,
    explanation:
      "A 4-point lead with ±3% margin means A's true support could be 1 point higher than B's at the low end — a real but narrow lead, NOT a tie. C is the most precise reading.",
    unit: "Unit 4",
  },
  {
    q: "Which best describes a libertarian ideology?",
    options: [
      "More government in both economic and social affairs.",
      "More government in economic affairs, less in social affairs.",
      "Less government in economic affairs, more in social affairs.",
      "Less government in both economic and social affairs.",
    ],
    answer: 3,
    explanation:
      "Libertarians want minimal government across the board — both free markets AND personal freedom on social issues.",
    unit: "Unit 4",
  },
  {
    q: "Which best explains why third parties rarely win elections in the United States?",
    options: [
      "They are not allowed on most state ballots.",
      "Single-member districts and winner-take-all rules favor a two-party system.",
      "Major parties refuse to debate them.",
      "Federal law caps third-party fundraising.",
    ],
    answer: 1,
    explanation:
      "Duverger's Law: single-member districts with winner-take-all rules systematically favor two parties because votes for losing third-party candidates are 'wasted.'",
    unit: "Unit 5",
  },
  {
    q: "Which of the following resulted from *Citizens United v. FEC* (2010)?",
    options: [
      "A complete ban on corporate political spending.",
      "Limits on individual contributions to campaigns were eliminated.",
      "Corporations and unions could spend unlimited money on independent political expenditures, leading to Super PACs.",
      "Public financing of presidential campaigns was made mandatory.",
    ],
    answer: 2,
    explanation:
      "The Court held that corporations and unions have free-speech rights to make unlimited independent expenditures. This birthed Super PACs. Direct candidate contribution limits remained in place.",
    unit: "Unit 5",
  },
  {
    q: "An iron triangle differs from an issue network primarily in that:",
    options: [
      "Iron triangles include the President; issue networks do not.",
      "Iron triangles are stable and small; issue networks are fluid and broad.",
      "Iron triangles operate at the state level; issue networks at the federal.",
      "Iron triangles are temporary; issue networks are permanent.",
    ],
    answer: 1,
    explanation:
      "Iron triangles are tight, stable three-way alliances. Issue networks are looser, larger, more fluid coalitions of stakeholders that change over time.",
    unit: "Unit 5",
  },
  {
    q: "An incumbent member of the House of Representatives is most likely to win reelection because of all the following EXCEPT:",
    options: [
      "Name recognition.",
      "The franking privilege (free mail).",
      "Established staff and casework.",
      "Mandatory campaign finance limits favoring incumbents.",
    ],
    answer: 3,
    explanation:
      "There is no campaign finance rule that explicitly favors incumbents. The other three are real incumbency advantages — incumbents reliably out-fundraise challengers but it isn't because of a rule.",
    unit: "Unit 5",
  },
  {
    q: "When the media decides which stories receive coverage, it is performing the role of:",
    options: [
      "Watchdog",
      "Gatekeeper",
      "Scorekeeper",
      "Profit-seeker",
    ],
    answer: 1,
    explanation:
      "Gatekeeping = deciding what becomes news. Watchdog = holding officials accountable. Scorekeeper = tracking who's winning.",
    unit: "Unit 5",
  },
  {
    q: "Which of the following constitutional provisions provides the textual basis for selective incorporation?",
    options: [
      "Article I, Section 8 (Necessary and Proper Clause)",
      "Article VI (Supremacy Clause)",
      "10th Amendment",
      "14th Amendment Due Process Clause",
    ],
    answer: 3,
    explanation:
      "The 14th Amendment Due Process Clause is the textual hook the Supreme Court has used to apply Bill of Rights protections to states one case at a time.",
    unit: "Unit 3",
  },
  {
    q: "Compared to the U.S. Constitution, the Articles of Confederation gave the national government LESS power in all of the following areas EXCEPT:",
    options: [
      "Power to tax citizens directly",
      "Power to regulate interstate commerce",
      "Power to declare war",
      "Power to maintain a peacetime standing army",
    ],
    answer: 2,
    explanation:
      "The Articles allowed Congress to declare war (one of its few real powers). It could NOT tax directly, regulate commerce, or maintain a peacetime army — those required the Constitution.",
    unit: "Unit 1",
  },
];

/* =========================================================================
   ROOT COMPONENT
   ========================================================================= */

export default function StudyGuide() {
  const [tab, setTab] = useState("overview");
  const [searchQ, setSearchQ] = useState("");

  const tabs = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "u1", label: "Unit 1", icon: ScrollText },
    { id: "u2", label: "Unit 2", icon: Scale },
    { id: "u3", label: "Unit 3", icon: Sparkles },
    { id: "u4", label: "Unit 4", icon: Users },
    { id: "u5", label: "Unit 5", icon: Vote },
    { id: "docs", label: "Documents", icon: ScrollText },
    { id: "cases", label: "SCOTUS", icon: Scale },
    { id: "frq", label: "FRQ Guide", icon: ClipboardList },
    { id: "flashcards", label: "Flashcards", icon: GraduationCap },
    { id: "quiz", label: "Practice", icon: Award },
  ];

  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse at top left, #f5ecd9 0%, #efe4cc 40%, #e8dcc0 100%)",
        minHeight: "100vh",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#1a1f2e",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .display-font { font-family: 'Fraunces', Georgia, serif; font-variation-settings: 'SOFT' 50; }
        .mono-font { font-family: 'JetBrains Mono', monospace; }
        .ink { color: #1a1f2e; }
        .crimson { color: #8b1e1e; }
        .navy { color: #14213d; }
        .forest { color: #3f5641; }
        .gold { color: #b68f40; }
        .burgundy { color: #6b1d3d; }
        .paper-card {
          background: linear-gradient(180deg, #fdf8eb 0%, #faf2dd 100%);
          border: 1px solid rgba(26,31,46,0.12);
          box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 14px rgba(60,40,20,0.06);
        }
        .pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 999px;
          display: inline-block;
        }
        .scrollbar-thin::-webkit-scrollbar { height: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(26,31,46,0.2); border-radius: 999px; }
        .tab-btn { transition: all 0.2s ease; }
        .tab-btn:hover { background: rgba(139,30,30,0.08); }
        .tab-btn.active { background: #1a1f2e; color: #f5ecd9; }
        .reveal { animation: reveal 0.4s ease-out both; }
        @keyframes reveal { from { opacity: 0; transform: translateY(8px);} to {opacity:1; transform: none;} }
        .grain {
          background-image: radial-gradient(rgba(60,40,20,0.06) 1px, transparent 1px);
          background-size: 4px 4px;
        }
        .underline-link { background-image: linear-gradient(transparent 60%, rgba(244, 211, 94, 0.4) 60%); }
        details > summary { list-style: none; cursor: pointer; }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {/* Tab navigation */}
        <nav className="sticky top-0 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 backdrop-blur-md"
             style={{ background: "rgba(245, 236, 217, 0.85)", borderBottom: "1px solid rgba(26,31,46,0.1)" }}>
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`tab-btn flex items-center gap-1.5 px-3 py-2 rounded-md whitespace-nowrap text-sm font-medium ${
                    isActive ? "active" : ""
                  }`}
                  style={{ color: isActive ? "#f5ecd9" : "#1a1f2e" }}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </nav>

        <main className="mt-8 reveal" key={tab}>
          {tab === "overview" && <Overview onNavigate={setTab} />}
          {tab === "u1" && <UnitView unit={UNITS[0]} />}
          {tab === "u2" && <UnitView unit={UNITS[1]} />}
          {tab === "u3" && <UnitView unit={UNITS[2]} />}
          {tab === "u4" && <UnitView unit={UNITS[3]} />}
          {tab === "u5" && <UnitView unit={UNITS[4]} />}
          {tab === "docs" && <DocumentsView />}
          {tab === "cases" && <CasesView />}
          {tab === "frq" && <FRQGuide />}
          {tab === "flashcards" && <FlashcardsView />}
          {tab === "quiz" && <QuizView />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

/* =========================================================================
   HEADER + COUNTDOWN
   ========================================================================= */

function Header() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = EXAM_DATE - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const mins = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));

  return (
    <header className="border-b" style={{ borderColor: "rgba(26,31,46,0.12)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="pill mb-3" style={{ background: "#1a1f2e", color: "#f5ecd9" }}>
              AP Exam · May 5, 2026 · 12 PM Local
            </div>
            <h1 className="display-font" style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-0.02em" }}>
              <span className="crimson">AP</span> US Government<br />
              <em style={{ fontWeight: 400 }}>& Politics</em>
            </h1>
            <p className="mt-3 max-w-xl" style={{ color: "rgba(26,31,46,0.7)", fontSize: "1rem" }}>
              Everything you need for a 5 — units, foundational documents, all 15 required SCOTUS cases, FRQ strategy, flashcards, and AP-style practice questions.
            </p>
          </div>

          <div className="paper-card rounded-xl p-5 min-w-[260px]">
            <div className="flex items-center gap-2 mb-3" style={{ color: "rgba(26,31,46,0.6)" }}>
              <Flame size={14} />
              <span className="mono-font text-xs uppercase tracking-wider">Countdown</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: days, l: "days" },
                { v: hours, l: "hrs" },
                { v: mins, l: "min" },
              ].map((x) => (
                <div key={x.l} className="text-center">
                  <div className="display-font crimson" style={{ fontSize: "2.25rem", lineHeight: 1, fontWeight: 700 }}>
                    {String(x.v).padStart(2, "0")}
                  </div>
                  <div className="mono-font text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(26,31,46,0.5)" }}>
                    {x.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================================================================
   OVERVIEW
   ========================================================================= */

function Overview({ onNavigate }) {
  return (
    <div className="space-y-10">
      {/* Exam format */}
      <section>
        <SectionHeader number="01" title="Exam Format" subtitle="55 MCQ + 4 FRQ · 50/50 weight · digital in Bluebook" />
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="paper-card rounded-xl p-6">
            <div className="pill mb-3" style={{ background: "#14213d", color: "#f5ecd9" }}>Section I</div>
            <h3 className="display-font text-xl font-semibold mb-2">Multiple Choice</h3>
            <p className="text-sm mb-4" style={{ color: "rgba(26,31,46,0.7)" }}>
              55 questions · 80 minutes · 50% of score
            </p>
            <ul className="text-sm space-y-1.5">
              <li>• Individual questions (one stem, four options)</li>
              <li>• Set-based questions (text, data, visuals)</li>
              <li>• ~1 min 27 sec per question</li>
              <li>• No penalty for wrong answers — guess everything</li>
            </ul>
          </div>
          <div className="paper-card rounded-xl p-6">
            <div className="pill mb-3" style={{ background: "#8b1e1e", color: "#f5ecd9" }}>Section II</div>
            <h3 className="display-font text-xl font-semibold mb-2">Free Response</h3>
            <p className="text-sm mb-4" style={{ color: "rgba(26,31,46,0.7)" }}>
              4 questions · 100 minutes · 50% of score · 17 raw points
            </p>
            <ul className="text-sm space-y-1.5">
              <li>• <strong>FRQ 1:</strong> Concept Application (3 pts) · ~20 min</li>
              <li>• <strong>FRQ 2:</strong> Quantitative Analysis (4 pts) · ~20 min</li>
              <li>• <strong>FRQ 3:</strong> SCOTUS Comparison (4 pts) · ~20 min</li>
              <li>• <strong>FRQ 4:</strong> Argument Essay (6 pts) · ~40 min</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unit weights */}
      <section>
        <SectionHeader number="02" title="Unit Weighting" subtitle="Where to focus your last days" />
        <div className="paper-card rounded-xl p-6 mt-6">
          <div className="space-y-4">
            {UNITS.map((u, i) => {
              const [low, high] = u.weight.replace("%", "").split("–").map(Number);
              const mid = (low + high) / 2;
              return (
                <div key={u.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <button
                      onClick={() => onNavigate(u.id)}
                      className="text-left hover:underline"
                    >
                      <span className="mono-font text-xs mr-2" style={{ color: "rgba(26,31,46,0.5)" }}>
                        {u.num}
                      </span>
                      <span className="font-medium">{u.title}</span>
                    </button>
                    <span className="mono-font text-sm" style={{ color: u.color === "navy" ? "#14213d" : u.color === "crimson" ? "#8b1e1e" : u.color === "forest" ? "#3f5641" : u.color === "gold" ? "#b68f40" : "#6b1d3d" }}>
                      {u.weight}
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(26,31,46,0.08)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${mid * 3}%`,
                        background: u.color === "navy" ? "#14213d" : u.color === "crimson" ? "#8b1e1e" : u.color === "forest" ? "#3f5641" : u.color === "gold" ? "#b68f40" : "#6b1d3d",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-4 rounded-lg" style={{ background: "rgba(244, 211, 94, 0.18)", borderLeft: "3px solid #b68f40" }}>
            <p className="text-sm">
              <strong>Strategy:</strong> Units 2 (25–36%) and 5 (20–27%) together = up to <strong>63%</strong> of the exam. If you have only hours left, prioritize them. Then drill SCOTUS cases — they appear on FRQ 3 every year and frequently in MCQs.
            </p>
          </div>
        </div>
      </section>

      {/* 3-day plan */}
      <section>
        <SectionHeader number="03" title="3-Day Sprint" subtitle="With 72 hours left, here's what to do" />
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            {
              day: "T-3",
              title: "Lock down the cases & docs",
              tasks: [
                "Review all 15 SCOTUS cases — name, year, clause, holding",
                "Read or skim all 9 foundational documents — focus on Fed 10, 51, 70, 78, Brutus 1",
                "Take Practice Quiz once (cold)",
              ],
            },
            {
              day: "T-2",
              title: "Drill Units 2 & 5",
              tasks: [
                "Re-read Unit 2 (branches) and Unit 5 (participation) — biggest weights",
                "Write one FRQ 3 (SCOTUS comparison) timed",
                "Write one FRQ 4 (argument) timed — pick a foundational doc to use",
              ],
            },
            {
              day: "T-1",
              title: "Polish & rest",
              tasks: [
                "Flashcards: spend 30 min on unfamiliar terms",
                "Review FRQ rubric structure — internalize what scorers reward",
                "Light review only — no new material. Sleep 8+ hours.",
              ],
            },
          ].map((d) => (
            <div key={d.day} className="paper-card rounded-xl p-5">
              <div className="display-font crimson font-bold mb-1" style={{ fontSize: "2rem", lineHeight: 1 }}>
                {d.day}
              </div>
              <h4 className="font-semibold mb-3">{d.title}</h4>
              <ul className="text-sm space-y-2" style={{ color: "rgba(26,31,46,0.8)" }}>
                {d.tasks.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="crimson">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key facts */}
      <section>
        <SectionHeader number="04" title="Quick Reference" subtitle="The non-negotiables" />
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="paper-card rounded-xl p-5">
            <h4 className="display-font text-lg font-semibold mb-3 navy">9 Foundational Documents</h4>
            <ol className="text-sm space-y-1.5 mono-font">
              <li>1. Declaration of Independence</li>
              <li>2. Articles of Confederation</li>
              <li>3. U.S. Constitution</li>
              <li>4. Federalist No. 10</li>
              <li>5. Brutus No. 1</li>
              <li>6. Federalist No. 51</li>
              <li>7. Federalist No. 70</li>
              <li>8. Federalist No. 78</li>
              <li>9. Letter from Birmingham Jail</li>
            </ol>
          </div>
          <div className="paper-card rounded-xl p-5">
            <h4 className="display-font text-lg font-semibold mb-3 crimson">15 Required SCOTUS Cases</h4>
            <ol className="text-sm space-y-1 mono-font">
              {SCOTUS_CASES.map((c, i) => (
                <li key={c.name}>
                  {i + 1}. {c.name} ({c.year})
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================================
   UNIT VIEW
   ========================================================================= */

function UnitView({ unit }) {
  const colorMap = {
    crimson: "#8b1e1e",
    navy: "#14213d",
    forest: "#3f5641",
    gold: "#b68f40",
    burgundy: "#6b1d3d",
  };
  const c = colorMap[unit.color];

  return (
    <article className="space-y-8">
      <header>
        <div className="flex items-center gap-3 mb-3">
          <span className="display-font font-bold" style={{ fontSize: "5rem", lineHeight: 0.85, color: c }}>
            {unit.num}
          </span>
          <div>
            <div className="pill mb-1" style={{ background: c, color: "#f5ecd9" }}>
              Unit {unit.num} · {unit.weight}
            </div>
            <h2 className="display-font text-3xl md:text-4xl font-semibold" style={{ letterSpacing: "-0.01em" }}>
              {unit.title}
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-3xl" style={{ color: "rgba(26,31,46,0.75)" }}>
          {unit.bigIdea}
        </p>
      </header>

      <div className="space-y-5">
        {unit.sections.map((s, i) => (
          <details key={s.heading} open className="paper-card rounded-xl p-5">
            <summary className="flex items-center justify-between">
              <h3 className="display-font text-xl font-semibold" style={{ color: c }}>
                {s.heading}
              </h3>
              <ChevronRight size={18} style={{ color: c, transform: "rotate(90deg)" }} />
            </summary>
            <ul className="mt-4 space-y-2.5">
              {s.body.map((b, j) => (
                <li key={j} className="text-sm leading-relaxed flex gap-3" style={{ color: "rgba(26,31,46,0.85)" }}>
                  <span style={{ color: c, marginTop: "0.4em" }}>◆</span>
                  <span dangerouslySetInnerHTML={{ __html: formatInline(b) }} />
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {(unit.cases.length > 0 || unit.docs.length > 0) && (
        <div className="grid md:grid-cols-2 gap-4">
          {unit.cases.length > 0 && (
            <div className="paper-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Scale size={16} style={{ color: c }} />
                <h4 className="display-font text-lg font-semibold">Connected Cases</h4>
              </div>
              <ul className="text-sm space-y-1.5">
                {unit.cases.map((cs) => (
                  <li key={cs} className="mono-font">{cs}</li>
                ))}
              </ul>
            </div>
          )}
          {unit.docs.length > 0 && (
            <div className="paper-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <ScrollText size={16} style={{ color: c }} />
                <h4 className="display-font text-lg font-semibold">Connected Documents</h4>
              </div>
              <ul className="text-sm space-y-1.5">
                {unit.docs.map((d) => (
                  <li key={d} className="mono-font">{d}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function formatInline(s) {
  // Convert **bold** and *italic* to HTML
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1a1f2e">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/* =========================================================================
   DOCUMENTS
   ========================================================================= */

function DocumentsView() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-6">
      <SectionHeader number="" title="Foundational Documents" subtitle="9 required · all answered in your own words on the FRQ" />

      <div className="space-y-3">
        {FOUNDATIONAL_DOCS.map((doc, i) => {
          const isOpen = open === i;
          return (
            <div key={doc.title} className="paper-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="mono-font text-xs" style={{ color: "rgba(26,31,46,0.5)" }}>
                      {String(i + 1).padStart(2, "0")} · {doc.year}
                    </span>
                  </div>
                  <h3 className="display-font text-xl font-semibold">{doc.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(26,31,46,0.6)" }}>
                    {doc.author}
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  style={{
                    transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                    color: "rgba(26,31,46,0.5)",
                  }}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 reveal">
                  <div className="border-t pt-4 space-y-4" style={{ borderColor: "rgba(26,31,46,0.1)" }}>
                    <div>
                      <h4 className="mono-font text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(26,31,46,0.5)" }}>
                        Big Idea
                      </h4>
                      <p className="text-sm">{doc.bigIdea}</p>
                    </div>
                    <div>
                      <h4 className="mono-font text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(26,31,46,0.5)" }}>
                        Key Concepts
                      </h4>
                      <ul className="text-sm space-y-1.5">
                        {doc.keyConcepts.map((k, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="crimson">◆</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg" style={{ background: "rgba(244, 211, 94, 0.18)", borderLeft: "3px solid #b68f40" }}>
                      <h4 className="mono-font text-xs uppercase tracking-widest mb-2 gold">How to Use on the Exam</h4>
                      <p className="text-sm">{doc.examUse}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   SCOTUS CASES
   ========================================================================= */

function CasesView() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(-1);

  const units = ["all", "Unit 1", "Unit 2", "Unit 3", "Unit 5"];

  const filtered = SCOTUS_CASES.filter((c) => {
    const matchesUnit = filter === "all" || c.unit === filter;
    const matchesSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.clause.toLowerCase().includes(search.toLowerCase()) ||
      c.keyTerms.some((k) => k.toLowerCase().includes(search.toLowerCase()));
    return matchesUnit && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <SectionHeader number="" title="Required SCOTUS Cases" subtitle="All 15 — name, year, clause, holding, significance" />

      <div className="paper-card rounded-xl p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(26,31,46,0.4)" }} />
          <input
            type="text"
            placeholder="Search cases, clauses, terms…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-md text-sm bg-transparent border focus:outline-none"
            style={{ borderColor: "rgba(26,31,46,0.15)" }}
          />
        </div>
        <div className="flex gap-1 overflow-x-auto scrollbar-thin">
          {units.map((u) => (
            <button
              key={u}
              onClick={() => setFilter(u)}
              className="px-3 py-2 rounded-md text-xs mono-font uppercase tracking-wide whitespace-nowrap"
              style={{
                background: filter === u ? "#1a1f2e" : "transparent",
                color: filter === u ? "#f5ecd9" : "#1a1f2e",
                border: "1px solid rgba(26,31,46,0.15)",
              }}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((c, i) => {
          const idx = SCOTUS_CASES.indexOf(c);
          const isOpen = open === idx;
          return (
            <div key={c.name} className="paper-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="w-full p-5 flex items-center justify-between text-left"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <h3 className="display-font text-xl font-semibold crimson">{c.name}</h3>
                    <span className="mono-font text-sm" style={{ color: "rgba(26,31,46,0.6)" }}>
                      {c.year}
                    </span>
                    <span className="pill" style={{ background: "rgba(20,33,61,0.1)", color: "#14213d" }}>
                      {c.unit}
                    </span>
                  </div>
                  <p className="text-sm mono-font" style={{ color: "rgba(26,31,46,0.6)" }}>
                    {c.clause}
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  style={{
                    transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                    color: "rgba(26,31,46,0.5)",
                    flexShrink: 0,
                  }}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 reveal">
                  <div className="border-t pt-4 space-y-3" style={{ borderColor: "rgba(26,31,46,0.1)" }}>
                    <CaseField label="Facts" body={c.facts} />
                    <CaseField label="Holding" body={c.holding} highlight />
                    <CaseField label="Significance" body={c.significance} />
                    <div>
                      <h4 className="mono-font text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(26,31,46,0.5)" }}>
                        Key Terms
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {c.keyTerms.map((k) => (
                          <span key={k} className="pill" style={{ background: "rgba(139,30,30,0.1)", color: "#8b1e1e" }}>
                            {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CaseField({ label, body, highlight }) {
  return (
    <div>
      <h4 className="mono-font text-xs uppercase tracking-widest mb-1.5" style={{ color: "rgba(26,31,46,0.5)" }}>
        {label}
      </h4>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "rgba(26,31,46,0.85)",
          background: highlight ? "rgba(244, 211, 94, 0.18)" : "transparent",
          padding: highlight ? "10px 12px" : 0,
          borderRadius: highlight ? "6px" : 0,
          borderLeft: highlight ? "3px solid #b68f40" : "none",
        }}
      >
        {body}
      </p>
    </div>
  );
}

/* =========================================================================
   FRQ GUIDE
   ========================================================================= */

function FRQGuide() {
  const frqs = [
    {
      n: 1,
      title: "Concept Application",
      points: 3,
      time: "~20 min",
      what: "A short scenario (a real-world or hypothetical political event) is presented. You must apply 1–3 course concepts to it.",
      structure: [
        "**Part A** (1 pt): Describe a course concept based on the scenario.",
        "**Part B** (1 pt): Explain how a political institution/process/behavior described in the scenario relates to a different course concept.",
        "**Part C** (1 pt): Explain how the scenario connects to a broader concept, principle, or process.",
      ],
      tips: [
        "Do NOT just restate the scenario — APPLY a concept. Use the precise course term.",
        "Each part is a complete sentence or two. Don't write essays here.",
        "Use the words 'because' or 'thus' to make causal connections explicit.",
      ],
      example:
        "If the prompt is about a President issuing an executive order during gridlock, Part A might be 'unilateral executive action / executive order,' Part B might explain Congress's check (power of the purse, override veto, etc.), Part C might explain how this reflects increasing presidential power as Congress has become more polarized.",
    },
    {
      n: 2,
      title: "Quantitative Analysis",
      points: 4,
      time: "~20 min",
      what: "A graph, table, infographic, or map is presented with quantitative political data. You analyze trends and connect to course concepts.",
      structure: [
        "**Part A** (1 pt): Identify a specific piece of information in the data (a number, a category, a comparison).",
        "**Part B** (1 pt): Describe a pattern or trend in the data.",
        "**Part C** (1 pt): Draw a conclusion from the data using a political-science concept.",
        "**Part D** (1 pt): Explain how the data relates to a broader political process, behavior, or institution.",
      ],
      tips: [
        "For Part A: USE THE NUMBERS from the chart. Cite specific values.",
        "For Part B: Trends are about CHANGE OVER TIME or COMPARISON between groups.",
        "Part D is where students lose points — make sure to connect to a NAMED course concept (e.g., political socialization, generational effect, polarization).",
        "Don't just describe the chart — interpret it.",
      ],
      example:
        "If the chart shows declining trust in government 1958–2020: A might be 'In 1964, ~77% of Americans trusted government always/most of the time.' B might be 'Public trust has steadily declined since the 1960s.' C: 'Declining trust correlates with major events like Vietnam, Watergate, and 2008 financial crisis.' D: 'This decline contributes to lower voter turnout and weaker political efficacy.'",
    },
    {
      n: 3,
      title: "SCOTUS Comparison",
      points: 4,
      time: "~20 min",
      what: "You're given a NEW non-required case and asked to compare it to one of the 15 REQUIRED cases. You must explain the constitutional similarity or difference.",
      structure: [
        "**Part A** (1 pt): Identify the constitutional clause or provision relevant to BOTH cases.",
        "**Part B** (2 pts): Explain how the FACTS and the HOLDING of the required case lead to a similar/different outcome in the non-required case.",
        "**Part C** (1 pt): Explain how the decision in the non-required case affects political institutions, processes, or behaviors.",
      ],
      tips: [
        "MEMORIZE the holding and clause for each of the 15 cases. Without that, you cannot earn Part B.",
        "Don't summarize the new case at length — focus on the comparison.",
        "In Part C, name a specific institution or behavior (e.g., 'increases interest-group activity,' 'limits state authority,' 'expands judicial review').",
        "If you're unsure which required case applies, scan: speech (Schenck/Tinker/NYT), religion (Engel/Yoder), federalism (McCulloch/Lopez), incorporation (Gideon/McDonald), equal protection (Brown/Baker/Shaw), privacy (Roe), campaign finance (Citizens United).",
      ],
      example:
        "If the new case involves a state law restricting protest signs at funerals, you'd compare to *Tinker* — same clause (1st Amend speech), same principle (symbolic speech is protected unless substantial disruption). Discuss similarities/differences in facts and how SCOTUS would likely rule.",
    },
    {
      n: 4,
      title: "Argument Essay",
      points: 6,
      time: "~40 min",
      what: "Take a position on a political-science question and defend it with evidence — including AT LEAST ONE foundational document.",
      structure: [
        "**Part A — THESIS (1 pt):** A defensible, specific claim. NOT 'there are pros and cons.' Take a side.",
        "**Part B — EVIDENCE 1 (1 pt):** Use one of the 9 required foundational documents.",
        "**Part C — EVIDENCE 2 (1 pt):** Use a SECOND piece of evidence. Can be a different required doc, OR a SCOTUS case, OR another course concept.",
        "**Part D — REASONING (2 pts):** Explain how BOTH pieces of evidence support your thesis. This is where most students lose points.",
        "**Part E — RESPOND TO COUNTERCLAIM (1 pt):** Explicitly acknowledge an opposing view AND refute or qualify it.",
      ],
      tips: [
        "WRITE THE THESIS FIRST. A good thesis = position + reasoning preview. Example: 'The federal government's role has expanded beyond what the Framers envisioned because the Necessary and Proper Clause has allowed Congress to regulate areas the Framers reserved to the states.'",
        "Don't just NAME the evidence — EXPLAIN it. 'Federalist 10 argues factions are inevitable, which means…' not just 'Federalist 10 talks about factions.'",
        "For the counterclaim: 'Some argue X, but this view fails to account for Y because Z.' Don't just acknowledge — REFUTE.",
        "Foundational documents that work for many prompts: Federalist 10 (factions/pluralism), Federalist 51 (checks/balances), Brutus 1 (centralization concerns), Letter from Birmingham Jail (civic engagement).",
      ],
      example:
        "Prompt: 'Develop an argument that explains whether expanding direct democracy would strengthen or weaken American government.'\n\nWeak thesis: 'Direct democracy has both strengths and weaknesses.'\n\nStrong thesis: 'Expanding direct democracy would weaken American government because, as Madison warned in *Federalist 10*, direct popular control allows factions to oppress minorities — a danger that representation and a large republic specifically guard against.'",
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader number="" title="FRQ Strategy" subtitle="What graders reward · 100 minutes · 17 raw points" />

      <div className="paper-card rounded-xl p-5" style={{ background: "rgba(20,33,61,0.04)" }}>
        <h3 className="display-font text-lg font-semibold mb-2 navy">Time Budget</h3>
        <p className="text-sm mb-3" style={{ color: "rgba(26,31,46,0.8)" }}>
          The College Board recommends:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            { f: "FRQ 1", t: "20 min", p: "3 pts" },
            { f: "FRQ 2", t: "20 min", p: "4 pts" },
            { f: "FRQ 3", t: "20 min", p: "4 pts" },
            { f: "FRQ 4", t: "40 min", p: "6 pts" },
          ].map((x) => (
            <div key={x.f} className="paper-card rounded-lg p-3">
              <div className="display-font text-lg font-semibold navy">{x.f}</div>
              <div className="mono-font text-xs mt-1" style={{ color: "rgba(26,31,46,0.6)" }}>
                {x.t} · {x.p}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {frqs.map((f) => (
          <div key={f.n} className="paper-card rounded-xl p-6">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <span className="display-font crimson font-bold" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                {f.n}
              </span>
              <h3 className="display-font text-2xl font-semibold">{f.title}</h3>
              <span className="pill" style={{ background: "#1a1f2e", color: "#f5ecd9" }}>
                {f.points} pts · {f.time}
              </span>
            </div>

            <p className="text-sm mb-5" style={{ color: "rgba(26,31,46,0.8)" }}>{f.what}</p>

            <div className="space-y-4">
              <div>
                <h4 className="mono-font text-xs uppercase tracking-widest mb-2 navy">Rubric Structure</h4>
                <ul className="text-sm space-y-2">
                  {f.structure.map((s, i) => (
                    <li
                      key={i}
                      className="pl-3"
                      style={{ borderLeft: "2px solid rgba(20,33,61,0.3)" }}
                      dangerouslySetInnerHTML={{ __html: formatInline(s) }}
                    />
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mono-font text-xs uppercase tracking-widest mb-2 crimson">Pro Tips</h4>
                <ul className="text-sm space-y-1.5">
                  {f.tips.map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="crimson">→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "rgba(244, 211, 94, 0.18)", borderLeft: "3px solid #b68f40" }}>
                <h4 className="mono-font text-xs uppercase tracking-widest mb-2 gold">Worked Example</h4>
                <p className="text-sm whitespace-pre-line">{f.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="paper-card rounded-xl p-5">
        <h3 className="display-font text-lg font-semibold mb-3 crimson">FRQ Common Mistakes (avoid these)</h3>
        <ul className="text-sm space-y-2">
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>Restating the prompt</strong> — readers want APPLICATION not summary.</span></li>
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>Vague evidence</strong> — 'Federalist 10' is not enough; explain the argument.</span></li>
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>'Some say… others say…'</strong> as a thesis — take a position.</span></li>
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>Skipping the counterclaim</strong> on FRQ 4 — easy point lost.</span></li>
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>Generic SCOTUS comparisons</strong> — name the specific clause and the holding.</span></li>
          <li className="flex gap-2"><X size={14} className="crimson mt-1 flex-shrink-0" /><span><strong>Running out of time on FRQ 4</strong> — protect the 40 minutes for the argument essay; it's worth the most points.</span></li>
        </ul>
      </div>
    </div>
  );
}

/* =========================================================================
   FLASHCARDS
   ========================================================================= */

function FlashcardsView() {
  const [unit, setUnit] = useState("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());

  const filtered = useMemo(
    () => (unit === "all" ? FLASHCARDS : FLASHCARDS.filter((c) => c.unit === unit)),
    [unit]
  );

  const card = filtered[idx % filtered.length];

  const next = () => {
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i + 1) % filtered.length), 150);
  };
  const prev = () => {
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i - 1 + filtered.length) % filtered.length), 150);
  };

  const markKnown = () => {
    setKnown((k) => new Set([...k, card.term]));
    next();
  };

  const reset = () => {
    setKnown(new Set());
    setIdx(0);
    setFlipped(false);
  };

  useEffect(() => {
    setIdx(0);
    setFlipped(false);
  }, [unit]);

  const units = [
    { id: "all", label: `All (${FLASHCARDS.length})` },
    { id: "U1", label: `Unit 1 (${FLASHCARDS.filter((f) => f.unit === "U1").length})` },
    { id: "U2", label: `Unit 2 (${FLASHCARDS.filter((f) => f.unit === "U2").length})` },
    { id: "U3", label: `Unit 3 (${FLASHCARDS.filter((f) => f.unit === "U3").length})` },
    { id: "U4", label: `Unit 4 (${FLASHCARDS.filter((f) => f.unit === "U4").length})` },
    { id: "U5", label: `Unit 5 (${FLASHCARDS.filter((f) => f.unit === "U5").length})` },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader number="" title="Flashcards" subtitle={`${filtered.length} cards · ${known.size} marked known · click to flip`} />

      <div className="paper-card rounded-xl p-3 flex flex-wrap gap-1">
        {units.map((u) => (
          <button
            key={u.id}
            onClick={() => setUnit(u.id)}
            className="px-3 py-1.5 rounded-md text-xs mono-font uppercase tracking-wider"
            style={{
              background: unit === u.id ? "#1a1f2e" : "transparent",
              color: unit === u.id ? "#f5ecd9" : "#1a1f2e",
            }}
          >
            {u.label}
          </button>
        ))}
        <button
          onClick={reset}
          className="ml-auto px-3 py-1.5 rounded-md text-xs mono-font uppercase tracking-wider flex items-center gap-1"
          style={{ color: "rgba(26,31,46,0.6)" }}
        >
          <RotateCcw size={11} /> Reset
        </button>
      </div>

      <div
        className="paper-card rounded-2xl cursor-pointer relative overflow-hidden"
        style={{ minHeight: "320px" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center" style={{ minHeight: "320px" }}>
          <div className="absolute top-4 left-4 mono-font text-xs" style={{ color: "rgba(26,31,46,0.4)" }}>
            {idx + 1} / {filtered.length}
          </div>
          <div className="absolute top-4 right-4 pill" style={{ background: "rgba(139,30,30,0.1)", color: "#8b1e1e" }}>
            {card.unit}
          </div>

          {!flipped ? (
            <div className="reveal" key={`f-${idx}`}>
              <div className="mono-font text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(26,31,46,0.5)" }}>
                Term
              </div>
              <h3 className="display-font font-semibold" style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", letterSpacing: "-0.01em" }}>
                {card.term}
              </h3>
              <div className="mt-6 mono-font text-xs" style={{ color: "rgba(26,31,46,0.4)" }}>
                Click to reveal definition
              </div>
            </div>
          ) : (
            <div className="reveal max-w-2xl" key={`b-${idx}`}>
              <div className="mono-font text-xs uppercase tracking-widest mb-3 crimson">
                Definition
              </div>
              <p className="text-base sm:text-lg leading-relaxed">{card.def}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prev}
          className="paper-card rounded-lg px-4 py-2 flex items-center gap-2 text-sm"
        >
          <ChevronLeft size={16} /> Prev
        </button>
        <button
          onClick={markKnown}
          className="rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium"
          style={{ background: "#3f5641", color: "#f5ecd9" }}
        >
          <Check size={14} /> Got it
        </button>
        <button
          onClick={next}
          className="paper-card rounded-lg px-4 py-2 flex items-center gap-2 text-sm"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   PRACTICE QUIZ
   ========================================================================= */

function QuizView() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const choose = (qIdx, oIdx) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qIdx]: oIdx }));
  };

  const submit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const correct = Object.keys(answers).filter((k) => answers[k] === PRACTICE_MCQS[k].answer).length;
  const total = PRACTICE_MCQS.length;
  const pct = Math.round((correct / total) * 100);

  // AP scaling estimate: 55-q exam scaled. 25-q practice: rough mapping
  const apScore =
    pct >= 80 ? 5 : pct >= 65 ? 4 : pct >= 50 ? 3 : pct >= 35 ? 2 : 1;

  return (
    <div className="space-y-6">
      <SectionHeader number="" title="AP-Style Practice MCQs" subtitle={`${total} questions · scored on submit`} />

      {submitted && (
        <div className="paper-card rounded-xl p-6 reveal" style={{ background: "rgba(20,33,61,0.04)" }}>
          <div className="flex items-baseline gap-3 mb-3 flex-wrap">
            <span className="display-font font-bold navy" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
              {correct}/{total}
            </span>
            <div>
              <div className="mono-font text-sm uppercase tracking-wider" style={{ color: "rgba(26,31,46,0.6)" }}>
                {pct}% correct
              </div>
              <div className="text-sm mt-1">
                Estimated AP score on this practice set: <strong className="crimson">{apScore}</strong>
              </div>
            </div>
            <button
              onClick={reset}
              className="ml-auto rounded-lg px-4 py-2 text-sm flex items-center gap-2"
              style={{ background: "#1a1f2e", color: "#f5ecd9" }}
            >
              <RotateCcw size={14} /> Retake
            </button>
          </div>
          <p className="text-xs" style={{ color: "rgba(26,31,46,0.5)" }}>
            Note: real AP scoring weights MCQ at 50% with 4 FRQs at 50%. This estimate is for the MCQ portion only.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {PRACTICE_MCQS.map((q, i) => {
          const userAns = answers[i];
          const isCorrect = userAns === q.answer;
          return (
            <div key={i} className="paper-card rounded-xl p-5">
              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <span className="mono-font text-xs" style={{ color: "rgba(26,31,46,0.5)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pill" style={{ background: "rgba(20,33,61,0.1)", color: "#14213d" }}>
                  {q.unit}
                </span>
                {submitted && (
                  <span className="pill" style={{
                    background: isCorrect ? "rgba(63,86,65,0.15)" : "rgba(139,30,30,0.15)",
                    color: isCorrect ? "#3f5641" : "#8b1e1e",
                  }}>
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium mb-4 leading-relaxed">{q.q}</p>
              <div className="space-y-2">
                {q.options.map((o, j) => {
                  const isSelected = userAns === j;
                  const isAnswer = q.answer === j;
                  let style = { borderColor: "rgba(26,31,46,0.15)", background: "transparent" };
                  if (submitted) {
                    if (isAnswer) style = { borderColor: "#3f5641", background: "rgba(63,86,65,0.08)" };
                    else if (isSelected && !isCorrect) style = { borderColor: "#8b1e1e", background: "rgba(139,30,30,0.08)" };
                  } else if (isSelected) {
                    style = { borderColor: "#1a1f2e", background: "rgba(26,31,46,0.05)" };
                  }
                  return (
                    <button
                      key={j}
                      onClick={() => choose(i, j)}
                      disabled={submitted}
                      className="w-full text-left p-3 rounded-md border text-sm flex items-start gap-3 transition-all"
                      style={style}
                    >
                      <span className="mono-font text-xs flex-shrink-0 mt-0.5" style={{ color: "rgba(26,31,46,0.5)" }}>
                        {String.fromCharCode(65 + j)}.
                      </span>
                      <span className="flex-1">{o}</span>
                      {submitted && isAnswer && <Check size={14} className="forest flex-shrink-0 mt-0.5" />}
                      {submitted && isSelected && !isCorrect && <X size={14} className="crimson flex-shrink-0 mt-0.5" />}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-3 p-3 rounded-md text-sm" style={{ background: "rgba(244, 211, 94, 0.18)", borderLeft: "3px solid #b68f40" }}>
                  <strong className="gold mono-font text-xs uppercase tracking-wider">Explanation:</strong>
                  <p className="mt-1">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="sticky bottom-4 flex justify-center">
          <button
            onClick={submit}
            disabled={Object.keys(answers).length < total}
            className="rounded-full px-6 py-3 font-medium flex items-center gap-2 shadow-lg"
            style={{
              background: Object.keys(answers).length < total ? "rgba(26,31,46,0.3)" : "#1a1f2e",
              color: "#f5ecd9",
              cursor: Object.keys(answers).length < total ? "not-allowed" : "pointer",
            }}
          >
            Submit ({Object.keys(answers).length}/{total} answered)
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   REUSABLE BITS
   ========================================================================= */

function SectionHeader({ number, title, subtitle }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-1">
        {number && (
          <span className="mono-font text-xs" style={{ color: "rgba(26,31,46,0.5)" }}>
            {number}
          </span>
        )}
        <h2 className="display-font font-semibold" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.01em" }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm" style={{ color: "rgba(26,31,46,0.6)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t text-center" style={{ borderColor: "rgba(26,31,46,0.1)" }}>
      <p className="mono-font text-xs uppercase tracking-widest" style={{ color: "rgba(26,31,46,0.4)" }}>
        Built for the May 5, 2026 exam · Good luck.
      </p>
      <p className="display-font crimson mt-3" style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
        You've got this.
      </p>
    </footer>
  );
}
