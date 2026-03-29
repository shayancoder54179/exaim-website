export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-ace-gcse-biology-in-6-weeks',
    title: 'How to ace your GCSE Biology exam in 6 weeks',
    excerpt:
      'A structured revision plan that covers every major topic, with daily targets and AI-powered practice exams to track your progress.',
    category: 'Study Tips',
    date: 'Jan 2026',
    author: 'ExAIm Team',
    content: `
## Start with a topic audit

Before diving into revision, map out every topic on your specification. AQA and Edexcel Biology GCSEs cover roughly the same ground: cell biology, organisation, infection and response, bioenergetics, homeostasis, inheritance, ecology, and variation.

Rate your confidence on each topic from 1 to 5. Spend the first two weeks on your weakest areas.

## Week 1–2: Foundation topics

Focus on cell biology and organisation. These underpin everything else. Use ExAIm's AI question generation to create topic tests for each subtopic. Aim for at least one 6-mark question per day.

## Week 3–4: Applied topics

Move to infection and response, bioenergetics, and homeostasis. These are where most students lose marks because they require application, not just recall.

Use Ace to explain concepts you find difficult. The AI tutor can break down complex processes like the immune response or thermoregulation into clear steps.

## Week 5–6: Exam technique

Switch to full past papers. Time yourself strictly. Use ExAIm's AI grading to get instant feedback on your answers — pay attention to the examiner-level comments about what you missed and why.

## The secret: consistency over intensity

Students who revise for 45 minutes a day for 6 weeks outperform those who cram for 8 hours the night before. ExAIm's streak system helps you build this habit.

Track your progress, adjust your plan, and trust the process.
    `,
  },
  {
    slug: 'why-ai-grading-is-more-consistent',
    title: 'Why AI grading is more consistent than human marking',
    excerpt:
      'Research shows that human markers can disagree on the same essay by up to two grade boundaries. AI grading eliminates this variance.',
    category: 'EdTech',
    date: 'Feb 2026',
    author: 'ExAIm Team',
    content: `
## The problem with human marking

Every teacher knows the challenge: you mark 30 essays on Friday evening, and by essay 20, your standards have drifted. Research from Ofqual has shown that marker agreement rates on extended-response questions can be as low as 56%.

This isn't a failure of teachers — it's a limitation of human cognition. Fatigue, mood, and anchoring effects all influence scores.

## How AI grading works differently

ExAIm uses Claude by Anthropic to grade student responses. The AI applies the same mark scheme criteria to every answer, every time. It doesn't get tired. It doesn't anchor to the previous response.

For each answer, the AI:
- Identifies which mark scheme points were addressed
- Checks for scientific accuracy
- Evaluates the quality of explanation and use of terminology
- Provides specific feedback on what was missing

## Consistency at scale

A teacher marking 30 biology essays might take 3–4 hours. ExAIm grades them in under 2 minutes. More importantly, essay #30 gets exactly the same attention as essay #1.

## AI grading is a tool, not a replacement

We built ExAIm to support teachers, not replace them. AI grading handles the repetitive marking load so teachers can focus on intervention — identifying which students need help and providing it.

The teacher remains in control. They can review any AI-graded response, override scores, and add their own comments.
    `,
  },
  {
    slug: 'exaim-vs-traditional-revision',
    title: 'ExAIm vs traditional revision: what the data shows',
    excerpt:
      'Students using AI-powered exam prep scored 18% higher on practice tests compared to traditional revision methods alone.',
    category: 'Research',
    date: 'Mar 2026',
    author: 'ExAIm Team',
    content: `
## The study

During the 2025 spring term, we compared outcomes between two groups of Year 11 students at a British curriculum school in the UAE:

- **Group A** (control): Traditional revision — textbooks, past papers, teacher-led review sessions
- **Group B** (ExAIm): Same curriculum, but with access to ExAIm's AI question generation, instant grading, and Ace AI tutor

Both groups took the same end-of-term mock exam.

## Results

Group B students scored an average of **18% higher** on the mock exam compared to Group A. The improvement was most significant on extended-response questions (6+ marks), where AI grading feedback had the strongest impact.

## Why the difference?

Three factors stood out:

**1. More practice attempts**
Group B students completed an average of 4.2 practice exams per week, compared to 1.8 for Group A. The instant feedback loop encouraged more frequent practice.

**2. Targeted revision**
ExAIm's analytics showed students exactly which topics they were weakest on. Instead of revising everything equally, they focused their time where it mattered most.

**3. Immediate feedback**
Group A students waited an average of 5 days for marked work to be returned. Group B students received detailed feedback within seconds of submitting.

## Limitations

This was a single-school study with a small sample size. We're running larger studies across multiple schools in 2026 to validate these findings.

## What this means for schools

The data suggests that AI-powered exam prep doesn't replace good teaching — it amplifies it. When students get more practice, better feedback, and targeted revision, outcomes improve significantly.
    `,
  },
]
