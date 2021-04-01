import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import TOC from '../components/TOC'
import Img from '../components/Img'
import CustomH2 from '../components/CustomH2'

const components = { h2: CustomH2, Img }

export default function TestPage({ source, headings }) {

  const content = hydrate(source, { components })

  return <div className="wrapper">
    <TOC headings={headings} />
    {content}
  </div>
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `## Header

## Header2

## Header3 

President Biden introduced what he called a transformational plan to overhaul and upgrade America’s physical infrastructure on Wednesday afternoon, promising it would create the “most resilient, innovative economy in the world.”

“It is not a plan that tinkers around the edges,” Mr. Biden said. “It is a once-in-a-generation investment in America. Unlike anything we have seen or done, since we built the interstate highway system and the space race decades ago. In fact, the largest American jobs investment since World War II.”

Mr. Biden appeared at a carpenters training center outside Pittsburgh to unveil his $2 trillion infrastructure plan, a far-reaching proposal that he will seek to pay for with a substantial increase in corporate taxes.

The scale of the infrastructure program he is rolling out — one of the most ambitious attempts in generations to shore up the nation’s aging roads, bridges, rail lines and utilities — is so big that it will require 15 years of higher taxes on corporations to fully offset eight years of spending.

The measure, called the American Jobs Plan, is the first step in a two-part agenda to overhaul American capitalism, fight climate change and try to improve the productivity of the economy. He said the second step, the American Family Plan, would come in a matter of weeks.

Despite his ambitious programs, Mr. Biden had pledged that his long-term economic agenda would not add further to the growing national debt. But the fact that his proposed tax increases would not cover his spending over the same period shows the challenge he has in balancing his big goals and the deficit.

Mr. Biden pitched the first phase of his plan in a variety of terms, including global competitiveness, racial justice and the fight against climate change. But he also appealed to Americans’ daily routines, promising higher wages, less expensive internet service and new transit lines that would reduce commuting times.

“These are investments we have to make,” he said.

Mr. Biden’s proposals include raising the corporate tax rate to 28 percent from 21 percent and efforts to force multinational corporations to pay significantly more in tax to the United States on profits they earn and book overseas. The corporate tax rate had been cut under President Donald J. Trump to 21 percent from 35 percent. Mr. Biden said on Wednesday that his proposed tax changes on global income alone would raise $1 trillion over the span of 15 years.

Republicans and business groups criticized those tax proposals, calling them non-starters for bipartisan negotiations. Mr. Biden acknowledged the criticism, even as he defended asking companies to pay more in taxes. And he said he would continue to work on winning Republican support for his proposal. He had already spoken with Senator Mitch McConnell of Kentucky, the Republican leader, about the bill and planned to invite other Republicans to the White House.

Mr. Biden challenged critics to offer their own proposals to pay for the plan. “I’m open to other ideas,” he said, “so long as they do not impose any tax increase on people making less than $400,000.”

The new plans come on top of the $1.9 trillion stimulus plan Mr. Biden signed into law this month, which was financed entirely by borrowing and was passed with no Republican support. The programs reflect Mr. Biden’s campaign promises and a leftward shift in his party in recent years.

If his full set of proposals become law, they would mark a new era of ambitious federal spending to address longstanding social and economic problems. Their odds of passing Congress have risen in the midst of a pandemic in which lawmakers have approved record amounts of government spending to rescue the economy from recession.

The spending in the first phase of Mr. Biden’s two-part agenda includes a wide range of investments in physical infrastructure, including highways, mass transit and electric vehicle charging systems and upgrades to water pipes, the electric grid and veterans’ hospitals. It also includes a big increase in federal research and development spending and efforts to provide home-based care to older and disabled Americans.

The second step will feature spending and tax credits meant to invest in what liberal economists call human infrastructure. It will include aid to the poor, paid leave for workers and measures meant to reduce the cost of child care and help women work and earn more.

Together, those two proposals could cost as much as $4 trillion between spending increases and tax incentives. The second phase of the proposals is expected to include tax increases on high-earning individuals.

  `
  const headings = source
  .split('\n')
  .filter(line=> line.match(/^###*\s/))
  .map(line=> line.replace(/^###*\s/, ''))

  const mdxSource = await renderToString(source, { components })
  return { props: { source: mdxSource, headings } }
}